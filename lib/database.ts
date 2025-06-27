import path from "path";
import fs from "fs";

let db: any = null;

function initDatabase() {
  if (!db) {
    const dbPath = path.join(process.cwd(), "data", "contacts.db");

    // Create the data directory if it doesn't exist
    const dataDir = path.dirname(dbPath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Use dynamic require to avoid build issues
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const Database = require("better-sqlite3");
    db = new Database(dbPath);

    // Create the contacts table if it doesn't exist
    db.exec(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        message TEXT NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }

  return db;
}

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

export function insertContact(contact: Omit<Contact, "id" | "createdAt">): Contact {
  const database = initDatabase();
  const stmt = database.prepare(`
    INSERT INTO contacts (firstName, lastName, email, phone, message)
    VALUES (?, ?, ?, ?, ?)
  `);

  const result = stmt.run(
    contact.firstName,
    contact.lastName,
    contact.email,
    contact.phone,
    contact.message
  );

  return {
    id: result.lastInsertRowid as number,
    ...contact,
    createdAt: new Date().toISOString(),
  };
}

export function getAllContacts(): Contact[] {
  const database = initDatabase();
  const stmt = database.prepare("SELECT * FROM contacts ORDER BY createdAt DESC");
  return stmt.all() as Contact[];
}

export function closeDatabase(): void {
  if (db) {
    db.close();
    db = null;
  }
}
