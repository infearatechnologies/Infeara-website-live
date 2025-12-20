-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Blog Posts Table
create table if not exists public.posts (
  id uuid not null default uuid_generate_v4(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content jsonb, -- Stores the block-based content
  featured_image text,
  category text,
  author text,
  tags text[],
  published_at timestamp with time zone default now(),
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  primary key (id)
);

-- 2. Case Studies Table
create table if not exists public.case_studies (
  id uuid not null default uuid_generate_v4(),
  title text not null,
  slug text not null unique,
  client text,
  industry text,
  category text, -- Added category
  challenge text,
  solution text,
  results jsonb, -- Array of { label, value }
  content jsonb, -- Block-based content for details
  featured_image text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  primary key (id)
);

-- 3. Downloads Table
create table if not exists public.downloads (
  id uuid not null default uuid_generate_v4(),
  title text not null,
  slug text not null unique,
  description text,
  content jsonb, -- Added content builder support
  category text, -- Added category
  file_url text,
  cover_image text,
  gated boolean default true,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  primary key (id)
);

-- 4. Contacts Table
create table if not exists public.contacts (
  id uuid not null default uuid_generate_v4(),
  name text not null,
  email text not null,
  subject text,
  message text,
  created_at timestamp with time zone default now(),
  primary key (id)
);

-- 5. Admin Users Table (For RBAC)
create table if not exists public.admin_users (
  id uuid not null references auth.users(id) on delete cascade,
  created_at timestamp with time zone default now(),
  primary key (id)
);

-- Function to check if user is admin
create or replace function public.is_admin()
returns boolean as $$
begin
  return exists (
    select 1 from public.admin_users
    where id = auth.uid()
  );
end;
$$ language plpgsql security definer;

-- Enable Row Level Security (RLS)
alter table public.posts enable row level security;
alter table public.case_studies enable row level security;
alter table public.downloads enable row level security;
alter table public.contacts enable row level security;
alter table public.admin_users enable row level security;

-- Create Policies (Allow Public Read, Admin Write)
-- Note: For simplicity in this setup, we are allowing public read. 
-- You should configure Auth policies for write access in a real production env.

-- Posts
create policy "Public posts are viewable by everyone."
  on public.posts for select
  using ( true );

create policy "Authenticated users can insert posts."
  on public.posts for insert
  with check ( public.is_admin() );

create policy "Authenticated users can update posts."
  on public.posts for update
  using ( public.is_admin() );

create policy "Authenticated users can delete posts."
  on public.posts for delete
  using ( public.is_admin() );

-- Case Studies
create policy "Public case studies are viewable by everyone."
  on public.case_studies for select
  using ( true );

create policy "Authenticated users can insert case studies."
  on public.case_studies for insert
  with check ( public.is_admin() );

create policy "Authenticated users can update case studies."
  on public.case_studies for update
  using ( public.is_admin() );

create policy "Authenticated users can delete case studies."
  on public.case_studies for delete
  using ( public.is_admin() );

-- Downloads
create policy "Public downloads are viewable by everyone."
  on public.downloads for select
  using ( true );

create policy "Authenticated users can insert downloads."
  on public.downloads for insert
  with check ( public.is_admin() );

create policy "Authenticated users can update downloads."
  on public.downloads for update
  using ( public.is_admin() );

create policy "Authenticated users can delete downloads."
  on public.downloads for delete
  using ( public.is_admin() );

-- Contacts
-- Contacts
create policy "Admins can view contacts."
  on public.contacts for select
  using ( public.is_admin() );

create policy "Public can insert contacts."
  on public.contacts for insert
  with check ( true );

-- Admin Users Policies
create policy "Admins can view admin users."
  on public.admin_users for select
  using ( public.is_admin() );

insert into public.admin_users (id)
select id from auth.users
where email = 'info@infeara.com';

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


-- Add new columns to the contacts table
ALTER TABLE contacts
ADD COLUMN IF NOT EXISTS last_name TEXT,
ADD COLUMN IF NOT EXISTS phone TEXT,
ADD COLUMN IF NOT EXISTS whatsapp TEXT,
ADD COLUMN IF NOT EXISTS company TEXT,
ADD COLUMN IF NOT EXISTS requirement_description TEXT;

-- Update RLS policies if necessary (assuming existing policies cover inserts)
-- Ensure public can insert
-- CREATE POLICY "Enable insert for everyone" ON "public"."contacts" FOR INSERT WITH CHECK (true);


-- Add status column to contacts table
ALTER TABLE contacts
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'Pending';

-- Optional: Add check constraint for valid status values
-- ALTER TABLE contacts
-- ADD CONSTRAINT valid_status CHECK (status IN ('Pending', 'In-Progress', 'Completed', 'Follow Up'));
-- Add status column to contacts table

-- Allow admins to update contacts
CREATE POLICY "Admins can update contacts."
  ON public.contacts FOR UPDATE
  USING ( public.is_admin() );

-- Allow admins to delete contacts
CREATE POLICY "Admins can delete contacts."
  ON public.contacts FOR DELETE
  USING ( public.is_admin() );
