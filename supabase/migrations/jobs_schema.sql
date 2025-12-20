-- Jobs Table
create table if not exists public.jobs (
  id uuid not null default uuid_generate_v4(),
  title text not null,
  slug text not null unique,
  location text,
  type text, -- Full-time, Part-time, Contract, etc.
  department text, -- Engineering, Design, Marketing, etc.
  description jsonb, -- Block-based content for details
  salary_range text,
  is_active boolean default true,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  primary key (id)
);

-- Enable Row Level Security (RLS)
alter table public.jobs enable row level security;

-- Create Policies
-- Public read access
create policy "Public jobs are viewable by everyone."
  on public.jobs for select
  using ( true );

-- Admin write access
create policy "Authenticated users can insert jobs."
  on public.jobs for insert
  with check ( public.is_admin() );

create policy "Authenticated users can update jobs."
  on public.jobs for update
  using ( public.is_admin() );

create policy "Authenticated users can delete jobs."
  on public.jobs for delete
  using ( public.is_admin() );
