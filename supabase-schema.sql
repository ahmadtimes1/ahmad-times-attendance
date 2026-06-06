create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  role text not null default 'manager' check (role in ('admin', 'manager', 'viewer')),
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.workers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,
  phone text,
  emirates_id text,
  daily_wage numeric(12, 2) not null default 0,
  join_date date,
  status text not null default 'active' check (status in ('active', 'inactive')),
  notes text,
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.attendance (
  id uuid primary key default gen_random_uuid(),
  worker_id uuid not null references public.workers(id) on delete cascade,
  work_date date not null,
  status text not null check (status in ('present', 'absent', 'off')),
  marked_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(worker_id, work_date)
);

create table if not exists public.app_data (
  id text primary key default 'main',
  data jsonb not null default '{"workers":[],"attendance":{},"lastSaved":null}'::jsonb,
  updated_by uuid references auth.users(id),
  updated_at timestamptz not null default now(),
  constraint app_data_single_row check (id = 'main')
);

create or replace function public.current_user_role()
returns text
language sql
security definer
set search_path = public
stable
as $$
  select role from public.profiles
  where id = auth.uid() and active = true
  limit 1
$$;

create or replace function public.is_staff()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select public.current_user_role() in ('admin', 'manager', 'viewer')
$$;

create or replace function public.can_manage()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select public.current_user_role() in ('admin', 'manager')
$$;

create or replace function public.can_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select public.current_user_role() = 'admin'
$$;

alter table public.profiles enable row level security;
alter table public.workers enable row level security;
alter table public.attendance enable row level security;
alter table public.app_data enable row level security;

drop policy if exists "profiles select own or admin" on public.profiles;
create policy "profiles select own or admin"
on public.profiles for select
to authenticated
using (id = auth.uid() or public.can_admin());

drop policy if exists "profiles admin insert" on public.profiles;
create policy "profiles admin insert"
on public.profiles for insert
to authenticated
with check (public.can_admin());

drop policy if exists "profiles admin update" on public.profiles;
create policy "profiles admin update"
on public.profiles for update
to authenticated
using (public.can_admin())
with check (public.can_admin());

drop policy if exists "workers staff select" on public.workers;
create policy "workers staff select"
on public.workers for select
to authenticated
using (public.is_staff());

drop policy if exists "workers managers insert" on public.workers;
create policy "workers managers insert"
on public.workers for insert
to authenticated
with check (public.can_manage());

drop policy if exists "workers managers update" on public.workers;
create policy "workers managers update"
on public.workers for update
to authenticated
using (public.can_manage())
with check (public.can_manage());

drop policy if exists "workers admin delete" on public.workers;
create policy "workers admin delete"
on public.workers for delete
to authenticated
using (public.can_admin());

drop policy if exists "attendance staff select" on public.attendance;
create policy "attendance staff select"
on public.attendance for select
to authenticated
using (public.is_staff());

drop policy if exists "attendance managers insert" on public.attendance;
create policy "attendance managers insert"
on public.attendance for insert
to authenticated
with check (public.can_manage());

drop policy if exists "attendance managers update" on public.attendance;
create policy "attendance managers update"
on public.attendance for update
to authenticated
using (public.can_manage())
with check (public.can_manage());

drop policy if exists "attendance managers delete" on public.attendance;
create policy "attendance managers delete"
on public.attendance for delete
to authenticated
using (public.can_manage());

drop policy if exists "app data staff select" on public.app_data;
create policy "app data staff select"
on public.app_data for select
to authenticated
using (public.is_staff());

drop policy if exists "app data managers insert" on public.app_data;
create policy "app data managers insert"
on public.app_data for insert
to authenticated
with check (public.can_manage());

drop policy if exists "app data managers update" on public.app_data;
create policy "app data managers update"
on public.app_data for update
to authenticated
using (public.can_manage())
with check (public.can_manage());

-- Simple username login mode used by this app.
-- The app keeps access limited with the three fixed usernames/passwords in app.js.
-- Run this if you want those simple logins to read and save the shared online data.
drop policy if exists "app data anon select simple login" on public.app_data;
create policy "app data anon select simple login"
on public.app_data for select
to anon
using (id = 'main');

drop policy if exists "app data anon insert simple login" on public.app_data;
create policy "app data anon insert simple login"
on public.app_data for insert
to anon
with check (id = 'main');

drop policy if exists "app data anon update simple login" on public.app_data;
create policy "app data anon update simple login"
on public.app_data for update
to anon
using (id = 'main')
with check (id = 'main');

insert into public.app_data (id, data)
values ('main', '{"workers":[],"attendance":{},"lastSaved":null}'::jsonb)
on conflict (id) do nothing;

create index if not exists workers_status_idx on public.workers(status);
create index if not exists attendance_work_date_idx on public.attendance(work_date);
create index if not exists attendance_worker_date_idx on public.attendance(worker_id, work_date);

-- After creating your first auth user, run this once with that user's email.
-- Replace the email before running:
--
-- insert into public.profiles (id, email, role, active)
-- select id, email, 'admin', true
-- from auth.users
-- where email = 'your-email@example.com'
-- on conflict (id) do update set role = 'admin', active = true;
