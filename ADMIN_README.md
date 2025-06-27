# Real Estate Admin Panel

## Overview

This real estate website includes a password-protected admin panel to view and manage contact form submissions.

## Features

### Contact Form

- Visitors can submit contact information through the contact form on the main page
- Form data is validated and stored in a SQLite database
- Success/error messages are shown to users in both English and Arabic

### Admin Panel

- Protected by password authentication
- View all contact submissions in a table format
- Search functionality to filter contacts
- Export data to CSV format
- Responsive design with modern UI

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```
ADMIN_PASSWORD=your_secure_password_here
```

### 3. Database Setup

The SQLite database will be automatically created in the `data/` directory when the first contact is submitted.

### 4. Run the Development Server

```bash
npm run dev
```

## Usage

### Accessing the Admin Panel

1. Navigate to `/admin` in your browser
2. Enter the admin password (default: `admin123`)
3. View and manage contact submissions

### Contact Form

- Located in the main page contact section
- All fields are required
- Email validation is performed
- Data is stored with timestamp

### Features Available in Admin Panel

- **View Contacts**: See all submissions in a table format
- **Search**: Filter contacts by name, email, phone, or message content
- **Export**: Download all visible contacts as CSV file
- **Real-time**: Password-protected access to sensitive data

## File Structure

```
/lib/database.ts           # Database connection and operations
/src/app/api/contacts/     # API endpoint for form submissions
/src/app/api/admin/        # API endpoint for admin authentication
/src/app/admin/            # Admin panel page
/src/components/ContactForm.tsx  # Contact form component
/data/contacts.db          # SQLite database (created automatically)
```

## Security Features

- Password protection for admin access
- Input validation and sanitization
- SQLite database with proper schema
- Error handling for all operations
- Rate limiting through Next.js built-in features

## Database Schema

```sql
CREATE TABLE contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints

### POST /api/contacts

Submit a new contact form

- **Body**: `{ firstName, lastName, email, phone, message }`
- **Response**: Success/error message

### POST /api/admin/contacts

Get all contacts (password protected)

- **Body**: `{ password }`
- **Response**: Array of contact objects

## Production Deployment

1. Set a strong admin password in environment variables
2. Ensure the `data/` directory has proper write permissions
3. Configure backup strategy for the SQLite database
4. Consider implementing additional security measures if needed

## Customization

- Update the admin password in `.env.local`
- Modify the database schema in `/lib/database.ts` if needed
- Customize the UI in the admin panel component
- Add additional validation rules in the API endpoints
