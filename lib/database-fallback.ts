// Fallback database implementation for production environments
// This can be easily swapped for a cloud database like Supabase, PlanetScale, etc.

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

// In-memory storage (will reset on deployment - use this as a template for cloud DB)
let contacts: Contact[] = [];
let nextId = 1;

export function insertContact(contact: Omit<Contact, "id" | "createdAt">): Contact {
  const newContact: Contact = {
    id: nextId++,
    ...contact,
    createdAt: new Date().toISOString(),
  };

  contacts.push(newContact);
  return newContact;
}

export function getAllContacts(): Contact[] {
  return [...contacts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function deleteContact(id: number): boolean {
  const initialLength = contacts.length;
  contacts = contacts.filter((contact) => contact.id !== id);
  return contacts.length < initialLength;
}

export function closeDatabase(): void {
  // No-op for in-memory storage
}

// Helper function to check if we're in a production environment that doesn't support SQLite
export function isProductionEnvironment(): boolean {
  return (
    process.env.VERCEL === "1" ||
    process.env.NETLIFY === "true" ||
    (process.env.NODE_ENV === "production" && !process.env.SQLITE_ENABLED)
  );
}
