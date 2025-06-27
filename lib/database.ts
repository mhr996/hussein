import path from "path";
import fs from "fs";

interface Database {
  exec: (sql: string) => void;
  prepare: (sql: string) => {
    run: (...params: unknown[]) => { lastInsertRowid: number; changes: number };
    all: (...params: unknown[]) => unknown[];
  };
  close: () => void;
}

let db: Database | null = null;

function initDatabase(): Database {
  if (!db) {
    try {
      console.log("[DB_INIT] Starting database initialization...");
      const dbPath = path.join(process.cwd(), "data", "contacts.db");
      console.log("[DB_INIT] Database path:", dbPath);

      // Create the data directory if it doesn't exist
      const dataDir = path.dirname(dbPath);
      if (!fs.existsSync(dataDir)) {
        console.log("[DB_INIT] Creating data directory:", dataDir);
        fs.mkdirSync(dataDir, { recursive: true });
      }

      // Use dynamic require to avoid build issues
      console.log("[DB_INIT] Loading better-sqlite3...");
      const Database = require("better-sqlite3");
      console.log("[DB_INIT] Creating database instance...");
      db = new Database(dbPath) as Database;

      // Create the contacts table if it doesn't exist
      console.log("[DB_INIT] Creating contacts table...");
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
      console.log("[DB_INIT] Database initialization completed successfully");
    } catch (error) {
      console.error("[DB_INIT] Database initialization failed:", error);
      throw new Error(
        `Database initialization failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
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
  try {
    console.log("[INSERT_CONTACT] Starting contact insertion:", {
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
    });

    const database = initDatabase();
    console.log("[INSERT_CONTACT] Database initialized successfully");

    const stmt = database.prepare(`
      INSERT INTO contacts (firstName, lastName, email, phone, message)
      VALUES (?, ?, ?, ?, ?)
    `);
    console.log("[INSERT_CONTACT] Prepared statement created");

    const result = stmt.run(
      contact.firstName,
      contact.lastName,
      contact.email,
      contact.phone,
      contact.message
    );
    console.log("[INSERT_CONTACT] Insert executed successfully, ID:", result.lastInsertRowid);

    const newContact = {
      id: result.lastInsertRowid as number,
      ...contact,
      createdAt: new Date().toISOString(),
    };

    console.log("[INSERT_CONTACT] Contact insertion completed successfully");
    return newContact;
  } catch (error) {
    console.error("[INSERT_CONTACT] Contact insertion failed:", error);
    throw new Error(
      `Failed to insert contact: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

export function getAllContacts(): Contact[] {
  try {
    console.log("[GET_ALL_CONTACTS] Starting contacts retrieval...");
    const database = initDatabase();
    console.log("[GET_ALL_CONTACTS] Database initialized successfully");

    const stmt = database.prepare("SELECT * FROM contacts ORDER BY createdAt DESC");
    console.log("[GET_ALL_CONTACTS] Prepared statement created");

    const contacts = stmt.all() as Contact[];
    console.log("[GET_ALL_CONTACTS] Retrieved contacts count:", contacts.length);

    return contacts;
  } catch (error) {
    console.error("[GET_ALL_CONTACTS] Failed to retrieve contacts:", error);
    throw new Error(
      `Failed to retrieve contacts: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

export function deleteContact(id: number): boolean {
  try {
    console.log("[DELETE_CONTACT] Starting contact deletion, ID:", id);
    const database = initDatabase();
    console.log("[DELETE_CONTACT] Database initialized successfully");

    const stmt = database.prepare("DELETE FROM contacts WHERE id = ?");
    console.log("[DELETE_CONTACT] Prepared statement created");

    const result = stmt.run(id);
    console.log("[DELETE_CONTACT] Delete executed, changes:", result.changes);

    const success = result.changes > 0;
    console.log("[DELETE_CONTACT] Deletion result:", success);

    return success;
  } catch (error) {
    console.error("[DELETE_CONTACT] Failed to delete contact:", error);
    throw new Error(
      `Failed to delete contact: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

export function closeDatabase(): void {
  if (db) {
    db.close();
    db = null;
  }
}
