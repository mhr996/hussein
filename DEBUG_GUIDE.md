# Debugging Production Issues

## Error Logging Added

I've added comprehensive error logging to help identify the production issue:

### Database Layer (`lib/database.ts`)

- Added logging to `initDatabase()` with error identifiers `[DB_INIT]`
- Added logging to `insertContact()` with error identifiers `[INSERT_CONTACT]`
- Added logging to `getAllContacts()` with error identifiers `[GET_ALL_CONTACTS]`
- Added logging to `deleteContact()` with error identifiers `[DELETE_CONTACT]`

### API Endpoints

- `/api/contacts` - Logging with identifier `[API_CONTACTS]`
- `/api/admin/contacts` - Logging with identifier `[API_ADMIN_CONTACTS]`
- `/api/admin/contacts/delete` - Logging with identifier `[API_DELETE_CONTACT]`
- `/api/debug` - New debug endpoint with identifier `[DEBUG_API]`

## How to Debug

1. **Check the debug endpoint**: Visit `/api/debug` in production to see:

   - Environment information
   - SQLite availability
   - Working directory
   - Node.js version

2. **Check the logs**: Look for error identifiers in your production logs:

   - `[DB_INIT]` - Database initialization issues
   - `[INSERT_CONTACT]` - Contact insertion problems
   - `[API_CONTACTS]` - Contact form submission issues

3. **Common Production Issues**:
   - **SQLite not available**: The `better-sqlite3` package might not be installed or compatible
   - **File system permissions**: Can't create/write to the `data/` directory
   - **Environment variables**: `ADMIN_PASSWORD` not set correctly
   - **Build issues**: TypeScript interface mismatch with actual SQLite return types

## Quick Fixes to Try

1. **Verify better-sqlite3 installation**:

   ```bash
   npm install better-sqlite3
   npm install @types/better-sqlite3 --save-dev
   ```

2. **Check environment variables**:
   Make sure `ADMIN_PASSWORD` is set in your production environment.

3. **Test individual endpoints**:

   - Try submitting a contact form (should hit `[API_CONTACTS]`)
   - Try accessing admin panel (should hit `[API_ADMIN_CONTACTS]`)
   - Check if the issue is specific to delete operations

4. **Alternative database solutions**:
   If SQLite continues to fail in production, consider:
   - Using a cloud database (PostgreSQL, MySQL)
   - Using a service like Supabase or PlanetScale
   - Implementing a fallback storage mechanism

## Logs to Look For

Look for these specific error messages in your production logs:

- `Database initialization failed`
- `Failed to insert contact`
- `Failed to retrieve contacts`
- `Failed to delete contact`
- Error messages with timestamps and detailed error information
