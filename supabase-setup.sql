-- Supabase table setup for contacts
-- Run this in your Supabase SQL editor after creating your project

-- Create the contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);

-- Enable Row Level Security (RLS)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations for now
-- You can make this more restrictive based on your security needs
CREATE POLICY "Allow all operations on contacts" 
ON contacts 
FOR ALL 
TO anon, authenticated 
USING (true) 
WITH CHECK (true);

-- Optional: Create a view for easier querying
CREATE OR REPLACE VIEW contacts_view AS 
SELECT 
  id,
  first_name,
  last_name,
  email,
  phone,
  message,
  created_at
FROM contacts
ORDER BY created_at DESC;
