function safeJsonParse(value) {
  try {
    return JSON.parse(value);
  } catch {
    const match = String(value || "").match(/\{[\s\S]*\}/);
    if (!match) return null;
    try {
      return JSON.parse(match[0]);
    } catch {
      return null;
    }
  }
}

function compactCompanyData(appData) {
  return {
    company: appData?.company || "Ahmad Times For Building Maintenance L.L.C",
    today: appData?.today,
    currentMonth: appData?.currentMonth,
    dashboard: appData?.dashboard,
    workers: Array.isArray(appData?.workers) ? appData.workers : [],
    attendance: appData?.attendance || {},
    payments: appData?.payments || {},
  };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ reply: "Use POST.", actions: [] });
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    res.status(500).json({
      reply: "OpenAI API key is missing. Add OPENAI_API_KEY in Vercel Environment Variables.",
      actions: [],
    });
    return;
  }

  const { message = "", language = "en", appData = {} } = req.body || {};
  const companyData = compactCompanyData(appData);

  const system = `
You are the private AI assistant for Ahmad Times For Building Maintenance L.L.C.
You only answer about this company's labour, attendance, wages, payments, reports, and app usage.
Never invent company records. Use only the provided JSON company data.
If the user asks to change data, return safe proposed actions. Do not claim the change is saved.
Use ${language === "ps" ? "Pashto" : "English"} unless the user asks otherwise.

Return ONLY valid JSON:
{
  "reply": "short helpful answer",
  "actions": []
}

Allowed actions:
1. add_worker:
{"type":"add_worker","worker":{"name":"","role":"","city":"","nationality":"","phone":"","emiratesId":"","dailyWage":0,"joinDate":"YYYY-MM-DD","status":"active","notes":""}}
2. update_worker:
{"type":"update_worker","workerName":"","updates":{"role":"","city":"","nationality":"","phone":"","emiratesId":"","dailyWage":0,"wageEffectiveDate":"YYYY-MM-DD","status":"active","notes":""}}
3. set_attendance:
{"type":"set_attendance","workerName":"","date":"YYYY-MM-DD","status":"present|halfday|absent|off","inTime":"HH:MM","outTime":"HH:MM","overtimeHours":0,"foodDeduction":0,"paidAmount":0}
4. add_payment:
{"type":"add_payment","workerName":"","start":"YYYY-MM-DD","end":"YYYY-MM-DD","paidAmount":0,"paymentDate":"YYYY-MM-DD","method":"cash|bank|exchange|other","note":""}

Use actions only when the user clearly asks to add/update/save/mark/pay.
For unclear requests, ask a short question in reply and return no actions.
`;

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        temperature: 0.2,
        input: [
          { role: "system", content: system },
          {
            role: "user",
            content: JSON.stringify({
              userMessage: message,
              companyData,
            }),
          },
        ],
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      res.status(response.status).json({ reply: text || "OpenAI request failed.", actions: [] });
      return;
    }

    const data = await response.json();
    const outputText = data.output_text
      || data.output?.flatMap((item) => item.content || []).map((item) => item.text || "").join("\n")
      || "";
    const parsed = safeJsonParse(outputText);
    if (!parsed) {
      res.status(200).json({ reply: outputText || "I could not prepare a response.", actions: [] });
      return;
    }

    res.status(200).json({
      reply: String(parsed.reply || ""),
      actions: Array.isArray(parsed.actions) ? parsed.actions : [],
    });
  } catch (error) {
    res.status(500).json({ reply: error.message || "AI request failed.", actions: [] });
  }
}
