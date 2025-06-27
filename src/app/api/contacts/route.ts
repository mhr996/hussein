import { NextRequest, NextResponse } from "next/server";
import { insertContact } from "../../../../lib/database";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { firstName, lastName, email, phone, message } = body;

    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Insert contact into database
    const contact = insertContact({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      message: message.trim(),
    });

    return NextResponse.json({
      success: true,
      message: "Contact saved successfully",
      id: contact.id,
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
