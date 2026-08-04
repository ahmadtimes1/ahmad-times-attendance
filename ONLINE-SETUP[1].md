# Ahmad Times Online Setup

This is the cheapest practical production setup:

- Hosting: Vercel free plan
- Database and login: Supabase free plan
- Domain: buy one short domain later

## 1. Create Supabase

1. Go to Supabase and create a free project.
2. Open SQL Editor.
3. Paste and run `supabase-schema.sql`.
4. Go to Authentication -> Users.
5. Add your admin email and password.
6. Go back to SQL Editor and run the admin insert statement at the bottom of `supabase-schema.sql`, replacing the email.

## 2. Add Supabase Keys

Open `supabase-config.js` and fill:

```js
window.AHMAD_TIMES_SUPABASE = {
  url: "https://YOUR-PROJECT.supabase.co",
  anonKey: "YOUR-ANON-KEY",
};
```

Use the anon/public key, not the service role key.

## 3. Deploy On Vercel

1. Put the `outputs` folder files into a GitHub repo.
2. Import the repo in Vercel.
3. Deploy as a static site.
4. Vercel will give a free link first, like `your-app.vercel.app`.

## 4. Add Domain Later

Buy a short domain only after the app is working online.

Good cheap-style examples:

- `attimes.site`
- `atwages.site`
- `ahmadtimes.site`

Check renewal price before buying.

## 5. Manager Access

When you have manager emails:

1. Add each manager in Supabase Authentication -> Users.
2. Insert them into `profiles`:

```sql
insert into public.profiles (id, email, role, active)
select id, email, 'manager', true
from auth.users
where email = 'manager@example.com'
on conflict (id) do update set role = 'manager', active = true;
```

Roles:

- `admin`: full access
- `manager`: workers, attendance, reports
- `viewer`: read-only reports

## 6. Easy Future Changes

For future changes, edit the files in GitHub or let Codex edit them here, then redeploy. Vercel can automatically update the live app after each GitHub change.
