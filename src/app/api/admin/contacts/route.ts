import { NextRequest, NextResponse } from "next/server";
import { getAllContacts } from "../../../../../lib/database";

export async function POST(request: NextRequest) {
  try {
    console.log("[API_ADMIN_CONTACTS] Starting admin contacts fetch...");
    const body = await request.json();
    const { password } = body;
    console.log("[API_ADMIN_CONTACTS] Password received:", !!password);

    // Simple password check (you can make this more secure)
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
    console.log(
      "[API_ADMIN_CONTACTS] Environment password configured:",
      !!process.env.ADMIN_PASSWORD
    );

    if (password !== ADMIN_PASSWORD) {
      console.log("[API_ADMIN_CONTACTS] Password validation failed");
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    console.log("[API_ADMIN_CONTACTS] Password validated, fetching contacts...");
    // Get all contacts from database
    const contacts = getAllContacts();
    console.log("[API_ADMIN_CONTACTS] Contacts fetched successfully, count:", contacts.length);

    return NextResponse.json({
      success: true,
      contacts,
    });
  } catch (error) {
    console.error("[API_ADMIN_CONTACTS] Error fetching contacts:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
