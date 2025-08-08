import { createClient } from "@supabase/supabase-js";
import {
  insertContact as insertContactFallback,
  getAllContacts as getAllContactsFallback,
  deleteContact as deleteContactFallback,
} from "./database-fallback";

// Initialize Supabase client
let supabase: ReturnType<typeof createClient> | null = null;
let useFallback = false;

function getSupabaseClient() {
  if (!supabase && !useFallback) {
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseKey) {
        console.log(
          "[SUPABASE_INIT] Environment variables not found, switching to fallback storage"
        );
        useFallback = true;
        return null;
      }

      console.log("[SUPABASE_INIT] Initializing Supabase client...");
      supabase = createClient(supabaseUrl, supabaseKey);
      console.log("[SUPABASE_INIT] Supabase client initialized successfully");
    } catch (error) {
      console.error("[SUPABASE_INIT] Supabase initialization failed:", error);
      useFallback = true;
      return null;
    }
  }

  return supabase;
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

export function insertContact(
  contact: Omit<Contact, "id" | "createdAt">
): Promise<Contact> {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("[INSERT_CONTACT] Starting contact insertion:", {
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
      });

      // Check if we should use fallback storage
      if (useFallback) {
        console.log("[INSERT_CONTACT] Using fallback storage");
        resolve(insertContactFallback(contact));
        return;
      }

      const client = getSupabaseClient();
      if (!client) {
        console.log("[INSERT_CONTACT] No Supabase client, using fallback");
        resolve(insertContactFallback(contact));
        return;
      }

      console.log("[INSERT_CONTACT] Using Supabase for contact insertion");

      const { data, error } = await client
        .from("contacts")
        .insert([
          {
            first_name: contact.firstName,
            last_name: contact.lastName,
            email: contact.email,
            phone: contact.phone,
            message: contact.message,
          },
        ])
        .select()
        .single();

      if (error) {
        console.error("[INSERT_CONTACT] Supabase error:", error);

        // Fall back to local storage on Supabase error
        console.log(
          "[INSERT_CONTACT] Falling back to local storage due to Supabase error"
        );
        useFallback = true;
        resolve(insertContactFallback(contact));
        return;
      }

      const newContact: Contact = {
        id: data.id as number,
        firstName: data.first_name as string,
        lastName: data.last_name as string,
        email: data.email as string,
        phone: data.phone as string,
        message: data.message as string,
        createdAt: data.created_at as string,
      };

      console.log("[INSERT_CONTACT] Contact insertion completed successfully");
      resolve(newContact);
    } catch (error) {
      console.error("[INSERT_CONTACT] Contact insertion failed:", error);

      // Fall back to local storage on any error
      console.log(
        "[INSERT_CONTACT] Falling back to local storage due to error"
      );
      useFallback = true;
      try {
        resolve(insertContactFallback(contact));
      } catch (fallbackError) {
        reject(
          new Error(
            `Both Supabase and fallback failed: ${error}, ${fallbackError}`
          )
        );
      }
    }
  });
}

export function getAllContacts(): Promise<Contact[]> {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("[GET_ALL_CONTACTS] Starting contacts retrieval...");

      // Check if we should use fallback storage
      if (useFallback) {
        console.log("[GET_ALL_CONTACTS] Using fallback storage");
        resolve(getAllContactsFallback());
        return;
      }

      const client = getSupabaseClient();
      if (!client) {
        console.log("[GET_ALL_CONTACTS] No Supabase client, using fallback");
        resolve(getAllContactsFallback());
        return;
      }

      console.log("[GET_ALL_CONTACTS] Using Supabase for contacts retrieval");

      const { data, error } = await client
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("[GET_ALL_CONTACTS] Supabase error:", error);

        // Fall back to local storage on Supabase error
        console.log(
          "[GET_ALL_CONTACTS] Falling back to local storage due to Supabase error"
        );
        useFallback = true;
        resolve(getAllContactsFallback());
        return;
      }

      const contacts: Contact[] = (data || []).map((row: any) => ({
        id: row.id as number,
        firstName: row.first_name as string,
        lastName: row.last_name as string,
        email: row.email as string,
        phone: row.phone as string,
        message: row.message as string,
        createdAt: row.created_at as string,
      }));

      console.log(
        "[GET_ALL_CONTACTS] Retrieved contacts count:",
        contacts.length
      );
      resolve(contacts);
    } catch (error) {
      console.error("[GET_ALL_CONTACTS] Failed to retrieve contacts:", error);

      // Fall back to local storage on any error
      console.log(
        "[GET_ALL_CONTACTS] Falling back to local storage due to error"
      );
      useFallback = true;
      try {
        resolve(getAllContactsFallback());
      } catch (fallbackError) {
        reject(
          new Error(
            `Both Supabase and fallback failed: ${error}, ${fallbackError}`
          )
        );
      }
    }
  });
}

export function deleteContact(id: number): Promise<boolean> {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("[DELETE_CONTACT] Starting contact deletion, ID:", id);

      // Check if we should use fallback storage
      if (useFallback) {
        console.log("[DELETE_CONTACT] Using fallback storage");
        resolve(deleteContactFallback(id));
        return;
      }

      const client = getSupabaseClient();
      if (!client) {
        console.log("[DELETE_CONTACT] No Supabase client, using fallback");
        resolve(deleteContactFallback(id));
        return;
      }

      console.log("[DELETE_CONTACT] Using Supabase for contact deletion");

      const { error } = await client.from("contacts").delete().eq("id", id);

      if (error) {
        console.error("[DELETE_CONTACT] Supabase error:", error);

        // Fall back to local storage on Supabase error
        console.log(
          "[DELETE_CONTACT] Falling back to local storage due to Supabase error"
        );
        useFallback = true;
        resolve(deleteContactFallback(id));
        return;
      }

      console.log("[DELETE_CONTACT] Contact deleted successfully");
      resolve(true);
    } catch (error) {
      console.error("[DELETE_CONTACT] Failed to delete contact:", error);

      // Fall back to local storage on any error
      console.log(
        "[DELETE_CONTACT] Falling back to local storage due to error"
      );
      useFallback = true;
      try {
        resolve(deleteContactFallback(id));
      } catch (fallbackError) {
        reject(
          new Error(
            `Both Supabase and fallback failed: ${error}, ${fallbackError}`
          )
        );
      }
    }
  });
}

export function closeDatabase(): void {
  // No need to close Supabase connection
  console.log(
    "[SUPABASE_CLOSE] Database connection closed (no-op for Supabase)"
  );
  supabase = null;
}
