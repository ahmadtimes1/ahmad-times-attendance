const GEMINI_MODELS = [
  process.env.GEMINI_MODEL,
  "gemini-2.0-flash",
  "gemini-1.5-flash",
].filter(Boolean);

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    if (req.body) {
      resolve(req.body);
      return;
    }
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 1_800_000) {
        reject(new Error("Request too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(raw));
    req.on("error", reject);
  });
}

function normalizeImage(dataUrl = "") {
  const match = String(dataUrl).match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/);
  if (!match) return null;
  return { mimeType: match[1], data: match[2] };
}

async function callGemini(model, apiKey, image, today) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const prompt = `
Read this company expense bill/receipt image for Ahmad Times Building Maintenance.
Extract only what is visible. Do not invent missing values.
Today is ${today}.

Return JSON only:
{
  "date": "YYYY-MM-DD or empty",
  "merchant": "shop / market / fuel pump name or empty",
  "category": "Food / Fuel / Car oil / Tools / Material / Rent / Transport / Other",
  "amount": 0,
  "paidAmount": 0,
  "location": "area, branch, city, pump location, or empty",
  "description": "short useful note",
  "confidence": 0.0
}

Rules:
- Use AED amount. If total and paid are visible, use total as amount and paidAmount as paid.
- If only total is visible, set amount to total and paidAmount to total.
- If date is unclear, use empty string.
- Keep category simple.
`.trim();
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{
        role: "user",
        parts: [
          { text: prompt },
          { inline_data: { mime_type: image.mimeType, data: image.data } },
        ],
      }],
      generationConfig: {
        temperature: 0.05,
        maxOutputTokens: 700,
        responseMimeType: "application/json",
      },
    }),
  });
  const text = await response.text();
  if (!response.ok) throw new Error(`${model}: ${response.status} ${text.slice(0, 180)}`);
  const data = JSON.parse(text);
  const answer = data?.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("").trim();
  if (!answer) throw new Error(`${model}: empty response`);
  return JSON.parse(answer);
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    sendJson(res, 200, { ok: false, reason: "Gemini API key is not configured." });
    return;
  }

  try {
    const rawBody = await readRequestBody(req);
    const body = typeof rawBody === "string" ? JSON.parse(rawBody || "{}") : (rawBody || {});
    const image = normalizeImage(body.image || "");
    if (!image) {
      sendJson(res, 200, { ok: false, reason: "No readable bill image was sent." });
      return;
    }

    let lastError = "";
    for (const model of GEMINI_MODELS) {
      try {
        const result = await callGemini(model, apiKey, image, body.today || "");
        sendJson(res, 200, {
          ok: true,
          model,
          fields: {
            date: String(result.date || ""),
            merchant: String(result.merchant || "").slice(0, 100),
            category: String(result.category || "").slice(0, 80),
            amount: Number(result.amount || 0),
            paidAmount: Number(result.paidAmount || 0),
            location: String(result.location || "").slice(0, 120),
            description: String(result.description || "").slice(0, 240),
            confidence: Number(result.confidence || 0),
          },
        });
        return;
      } catch (error) {
        lastError = error.message;
      }
    }
    sendJson(res, 200, { ok: false, reason: lastError || "Bill scan failed." });
  } catch (error) {
    sendJson(res, 200, { ok: false, reason: error.message || "Bill scan failed." });
  }
};
