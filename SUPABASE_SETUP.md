# Supabase Database Setup

This project has been configured to use Supabase as the database instead of better-sqlite3.

## Setup Instructions

### 1. Create a Supabase Project

1. Go to [Supabase](https://app.supabase.com)
2. Create a new account or sign in
3. Click "New Project"
4. Choose your organization and fill in the project details:
   - Project name: "Real Estate Contacts" (or your preferred name)
   - Database password: Choose a strong password
   - Region: Choose the closest region to your users
5. Click "Create new project"

### 2. Set up the Database

1. In your Supabase dashboard, go to the "SQL Editor"
2. Copy the contents of `supabase-setup.sql` file
3. Paste it into the SQL editor and click "Run"

This will create:

- A `contacts` table with all necessary fields
- Proper indexes for performance
- Row Level Security policies
- A convenient view for querying

### 3. Configure Environment Variables

1. In your Supabase dashboard, go to "Settings" > "API"
2. Copy your "Project URL" and "anon public" API key
3. Create a `.env.local` file in your project root:

```bash
# Copy from .env.local.example and fill in your values
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### 4. Test the Setup

1. Start your development server: `npm run dev`
2. Try submitting a contact form
3. Check the browser console for success messages
4. Verify data appears in your Supabase dashboard under "Table Editor" > "contacts"

## Fallback System

The project includes an automatic fallback system:

- If Supabase is not configured or unavailable, it falls back to in-memory storage
- This ensures your app continues working during development
- In production, you should always have Supabase properly configured

## Security Notes

- The current setup allows public access to the contacts table
- For production, consider implementing proper Row Level Security policies
- You may want to add authentication for admin functions
- Consider adding rate limiting for contact form submissions

## Migration from SQLite

All your existing API endpoints continue to work without changes:

- `POST /api/contacts` - Submit contact form
- `POST /api/admin/contacts` - Get all contacts (admin)
- `DELETE /api/admin/contacts/delete` - Delete contact (admin)

The fallback system ensures compatibility during the transition.
