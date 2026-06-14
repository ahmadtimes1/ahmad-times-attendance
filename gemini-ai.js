const GEMINI_MODELS = [
  process.env.GEMINI_MODEL,
  "gemini-3.1-flash-lite",
  "gemini-3.5-flash",
  "gemini-2.0-flash",
].filter(Boolean);

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

function safeText(value, limit = 2000) {
  return String(value || "").slice(0, limit);
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
      if (raw.length > 80_000) {
        reject(new Error("Request too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(raw));
    req.on("error", reject);
  });
}

async function callGemini(model, apiKey, prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.05,
        maxOutputTokens: 240,
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
    const question = safeText(body.question, 1200);
    const today = safeText(body.today, 20);
    const language = safeText(body.language, 20);
    const workers = Array.isArray(body.workers) ? body.workers.slice(0, 120).map((worker) => ({
      name: safeText(worker.name, 90),
      pashtoName: safeText(worker.pashtoName, 90),
      phone: safeText(worker.phone, 40),
      status: safeText(worker.status, 20),
    })) : [];

    const prompt = `
You are a command normalizer for Ahmad Times Building Maintenance attendance and wage system.
Your job is NOT to calculate wages and NOT to invent data.
Use the worker list only to identify names and rewrite the user's message into one safe app command.

Today: ${today}
Language: ${language}
Workers JSON: ${JSON.stringify(workers)}

Allowed rewritten command examples:
- mark Worker Name present 2026-06-14 in 08:00 out 18:00
- mark Worker Name absent 2026-06-14
- mark Worker Name halfday 2026-06-14 in 08:00 out 12:00
- pay Worker Name 200
- report Worker Name from 2026-06-03 to 2026-06-07
- unpaid this month
- paid this month
- today summary
- attendance mistakes
- night shift workers

Rules:
- If user asks a report from day 3 to day 7 and no month/year is given, use today's month and year.
- If no date is given for attendance/payment, use today.
- For payment commands, do not add today's date unless the user clearly says the wage period is one date or a date range. The app will save the payment date automatically.
- Use exact worker name from Workers JSON when possible.
- If uncertain, do not make an action command; return a helpful question in "assistantReply".
- Return only JSON with keys:
  {"rewrittenQuestion":"...", "assistantReply":"", "confidence":0.0}

User message: ${question}
`.trim();

    let lastError = "";
    for (const model of GEMINI_MODELS) {
      try {
        const result = await callGemini(model, apiKey, prompt);
        sendJson(res, 200, {
          ok: true,
          model,
          rewrittenQuestion: safeText(result.rewrittenQuestion, 500),
          assistantReply: safeText(result.assistantReply, 500),
          confidence: Number(result.confidence || 0),
        });
        return;
      } catch (error) {
        lastError = error.message;
      }
    }
    sendJson(res, 200, { ok: false, reason: lastError || "Gemini did not respond." });
  } catch (error) {
    sendJson(res, 200, { ok: false, reason: error.message || "Gemini request failed." });
  }
};
