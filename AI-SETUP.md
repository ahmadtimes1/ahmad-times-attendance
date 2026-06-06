# Ahmad Times AI Assistant Setup

The AI Assistant uses a secure Vercel API route:

`/api/company-ai`

## Required Vercel Environment Variable

In Vercel:

1. Open your project.
2. Go to **Settings**.
3. Go to **Environment Variables**.
4. Add:

`OPENAI_API_KEY`

Value:

Your OpenAI API key.

5. Save.
6. Redeploy the project.

Optional:

`OPENAI_MODEL`

Default:

`gpt-4o-mini`

## How It Works

- The AI reads the company data already loaded in the app.
- It can answer questions about workers, attendance, wages, payments, and reports.
- If it prepares changes, the manager must click **Apply AI actions** before data is saved.
- Only logged-in admin/manager users can use the AI chat in the app.
