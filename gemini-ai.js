const GEMINI_MODELS = [
  process.env.GEMINI_MODEL,
  "gemini-3.1-flash-lite",
  "gemini-3.5-flash",
  "gemini-2.0-flash",
].filter(Boolean);

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
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
    const question = safeText(body.question, 1200);
    const today = safeText(body.today, 20);
    const language = safeText(body.language, 20);
    const workers = Array.isArray(body.workers) ? body.workers.slice(0, 120).map((worker) => ({
      name: safeText(worker.name, 90),
      pashtoName: safeText(worker.pashtoName, 90),
      phone: safeText(worker.phone, 40),
      status: safeText(worker.status, 20),
    })) : [];
    const companyContext = body.companyContext && typeof body.companyContext === "object"
      ? JSON.stringify(body.companyContext).slice(0, 18000)
      : "{}";

    const prompt = `
You are Ahmad Times Company AI Assistant for a building maintenance attendance and wage system.
You should feel like a simple ChatGPT-style assistant, but you are responsible ONLY for this company system.
Your job has two modes:
1. If the user asks for a data-changing action, rewrite it into one safe app command.
2. If the user asks a question, answer conversationally using ONLY Company Context.

Never invent workers, wages, attendance, dates, payments, or expenses.
Never calculate final wages yourself. Use Company Context values when provided.
If data is missing, say what is missing.

Today: ${today}
Language: ${language}
Workers JSON: ${JSON.stringify(workers)}
Company Context JSON: ${companyContext}

Allowed rewritten command examples:
- mark Worker Name present 2026-06-14 in 08:00 out 18:00
- mark Worker Name absent 2026-06-14
- mark Worker Name halfday 2026-06-14 in 08:00 out 12:00
- pay Worker Name 200
- pay Worker One, Worker Two, Worker Three 3000 on 2026-06-13
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
- If the user says paid to multiple workers with one amount, keep all worker names in rewrittenQuestion. The app will split the total amount unless the user says each/per worker.
- Use exact worker name from Workers JSON when possible.
- For reports and data-changing actions, fill rewrittenQuestion and leave assistantReply empty.
- For normal conversation/questions, leave rewrittenQuestion empty and put a concise helpful answer in assistantReply.
- If uncertain about an action, leave rewrittenQuestion empty and ask one short clarification in assistantReply.
- Keep answers practical and business-like. Use AED for money.
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
          assistantReply: safeText(result.assistantReply, 1800),
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
