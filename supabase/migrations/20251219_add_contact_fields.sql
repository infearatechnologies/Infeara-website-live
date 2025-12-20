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
