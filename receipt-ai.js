const GEMINI_MODELS = [
  process.env.GEMINI_MODEL,
  "gemini-2.5-flash",
  "gemini-2.5-flash-lite",
  "gemini-2.0-flash",
  "gemini-1.5-flash",
].filter(Boolean);

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
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
      if (raw.length > 6_000_000) {
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

function parseModelJson(value) {
  const raw = String(value || "").trim();
  const cleaned = raw
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .trim();
  try {
    return JSON.parse(cleaned);
  } catch {
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");
    if (start >= 0 && end > start) {
      return JSON.parse(cleaned.slice(start, end + 1));
    }
    throw new Error("AI did not return readable bill data.");
  }
}

function safeNumber(value) {
  const cleaned = String(value ?? "").replace(/[^\d.-]/g, "");
  const number = Number(cleaned);
  return Number.isFinite(number) ? number : 0;
}

async function callGemini(model, apiKey, image, today) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const prompt = `
Read this company expense bill/receipt image for Ahmad Times Building Maintenance.
The receipt may be in English, Arabic, Urdu, or Pashto.
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
  const data = parseModelJson(text);
  const answer = data?.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("").trim();
  if (!answer) throw new Error(`${model}: empty response`);
  return parseModelJson(answer);
}

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") {
    sendJson(res, 200, { ok: true });
    return;
  }

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
        const amount = safeNumber(result.amount);
        const paidAmount = safeNumber(result.paidAmount) || amount;
        sendJson(res, 200, {
          ok: true,
          model,
          fields: {
            date: String(result.date || ""),
            merchant: String(result.merchant || "").slice(0, 100),
            category: String(result.category || "").slice(0, 80),
            amount,
            paidAmount,
            location: String(result.location || "").slice(0, 120),
            description: String(result.description || "").slice(0, 240),
            confidence: safeNumber(result.confidence),
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
