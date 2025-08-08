import { createClient } from "@supabase/supabase-js";

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

let supabase: ReturnType<typeof createClient> | null = null;

function getSupabaseClient() {
  if (!supabase) {
    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Supabase URL and key must be provided");
    }
    supabase = createClient(supabaseUrl, supabaseKey);
  }
  return supabase;
}

export async function insertContact(
  contact: Omit<Contact, "id" | "createdAt">
): Promise<Contact> {
  try {
    console.log("[SUPABASE_INSERT] Starting contact insertion:", {
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
    });

    const client = getSupabaseClient();

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
      console.error("[SUPABASE_INSERT] Error inserting contact:", error);
      throw new Error(`Failed to insert contact: ${error.message}`);
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

    console.log(
      "[SUPABASE_INSERT] Contact inserted successfully:",
      newContact.id
    );
    return newContact;
  } catch (error) {
    console.error("[SUPABASE_INSERT] Contact insertion failed:", error);
    throw error;
  }
}

export async function getAllContacts(): Promise<Contact[]> {
  try {
    console.log("[SUPABASE_GET_ALL] Starting contacts retrieval...");

    const client = getSupabaseClient();

    const { data, error } = await client
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("[SUPABASE_GET_ALL] Error retrieving contacts:", error);
      throw new Error(`Failed to retrieve contacts: ${error.message}`);
    }

    const contacts: Contact[] = (data || []).map((row) => ({
      id: row.id as number,
      firstName: row.first_name as string,
      lastName: row.last_name as string,
      email: row.email as string,
      phone: row.phone as string,
      message: row.message as string,
      createdAt: row.created_at as string,
    }));

    console.log(
      "[SUPABASE_GET_ALL] Retrieved contacts count:",
      contacts.length
    );
    return contacts;
  } catch (error) {
    console.error("[SUPABASE_GET_ALL] Failed to retrieve contacts:", error);
    throw error;
  }
}

export async function deleteContact(id: number): Promise<boolean> {
  try {
    console.log("[SUPABASE_DELETE] Starting contact deletion, ID:", id);

    const client = getSupabaseClient();

    const { error } = await client.from("contacts").delete().eq("id", id);

    if (error) {
      console.error("[SUPABASE_DELETE] Error deleting contact:", error);
      throw new Error(`Failed to delete contact: ${error.message}`);
    }

    console.log("[SUPABASE_DELETE] Contact deleted successfully");
    return true;
  } catch (error) {
    console.error("[SUPABASE_DELETE] Failed to delete contact:", error);
    throw error;
  }
}

export function closeDatabase(): void {
  // No need to close Supabase connection
  console.log(
    "[SUPABASE_CLOSE] Database connection closed (no-op for Supabase)"
  );
}
