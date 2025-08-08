import { NextRequest, NextResponse } from "next/server";
import { insertContact } from "../../../../lib/database";

export async function POST(request: NextRequest) {
  try {
    console.log("[API_CONTACTS] Starting contact submission...");
    const body = await request.json();
    console.log("[API_CONTACTS] Request body received:", {
      hasFirstName: !!body.firstName,
      hasLastName: !!body.lastName,
      hasEmail: !!body.email,
    });

    // Validate required fields
    const { firstName, lastName, email, phone, message } = body;

    if (!firstName || !lastName || !email || !phone || !message) {
      console.log("[API_CONTACTS] Validation failed: Missing required fields");
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("[API_CONTACTS] Validation failed: Invalid email format");
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    console.log("[API_CONTACTS] Validation passed, inserting contact...");
    // Insert contact into database
    const contact = await insertContact({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      message: message.trim(),
    });

    console.log(
      "[API_CONTACTS] Contact inserted successfully with ID:",
      contact.id
    );
    return NextResponse.json({
      success: true,
      message: "Contact saved successfully",
      id: contact.id,
    });
  } catch (error) {
    console.error("[API_CONTACTS] Error saving contact:", error);
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
