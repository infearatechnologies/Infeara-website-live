-- Add status column to contacts table
ALTER TABLE contacts
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'Pending';

-- Optional: Add check constraint for valid status values
-- ALTER TABLE contacts
-- ADD CONSTRAINT valid_status CHECK (status IN ('Pending', 'In-Progress', 'Completed', 'Follow Up'));
