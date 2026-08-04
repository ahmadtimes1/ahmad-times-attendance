# Deploy To Vercel

## Option A: Easiest Manual Deploy

Use this if Git is not installed.

1. Go to https://vercel.com
2. Sign up or login.
3. Choose Continue with GitHub if you have GitHub, or email login.
4. Create a new project.
5. Upload/import these app files from the `outputs` folder.
6. Vercel will give a live link like:

```text
https://your-project-name.vercel.app
```

## Option B: Best For Easy Future Changes

Use this when GitHub is ready.

1. Create a GitHub account.
2. Create a new GitHub repository.
3. Upload all files from this `outputs` folder.
4. Go to Vercel.
5. Import the GitHub repository.
6. Deploy.

After this, future app changes are easy: update GitHub, and Vercel redeploys automatically.

## Important

The Supabase key currently in `supabase-config.js` is a publishable browser key. Do not put any Supabase secret/service key in this app.
