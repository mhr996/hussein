import { NextRequest, NextResponse } from "next/server";
import { getAllContacts } from "../../../../../lib/database";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    // Simple password check (you can make this more secure)
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Get all contacts from database
    const contacts = getAllContacts();

    return NextResponse.json({
      success: true,
      contacts,
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
