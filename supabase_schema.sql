-- Blogs Table
create table if not exists blogs (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text not null unique,
  excerpt text,
  content text,
  cover_image text,
  published boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Case Studies Table
create table if not exists case_studies (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text not null unique,
  client text,
  challenge text,
  solution text,
  results text,
  cover_image text,
  published boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Downloads Table
create table if not exists downloads (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  file_url text,
  category text,
  published boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table blogs enable row level security;
alter table case_studies enable row level security;
alter table downloads enable row level security;

-- Create policies (Adjust these based on your auth needs)
-- For now, allowing public read access and authenticated insert/update/delete
create policy "Public blogs are viewable by everyone" on blogs for select using (true);
create policy "Authenticated users can insert blogs" on blogs for insert with check (auth.role() = 'authenticated');
create policy "Authenticated users can update blogs" on blogs for update using (auth.role() = 'authenticated');
create policy "Authenticated users can delete blogs" on blogs for delete using (auth.role() = 'authenticated');

create policy "Public case studies are viewable by everyone" on case_studies for select using (true);
create policy "Authenticated users can insert case studies" on case_studies for insert with check (auth.role() = 'authenticated');
create policy "Authenticated users can update case studies" on case_studies for update using (auth.role() = 'authenticated');
create policy "Authenticated users can delete case studies" on case_studies for delete using (auth.role() = 'authenticated');

create policy "Public downloads are viewable by everyone" on downloads for select using (true);
create policy "Authenticated users can insert downloads" on downloads for insert with check (auth.role() = 'authenticated');
create policy "Authenticated users can update downloads" on downloads for update using (auth.role() = 'authenticated');
create policy "Authenticated users can delete downloads" on downloads for delete using (auth.role() = 'authenticated');
