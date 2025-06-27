import { NextRequest, NextResponse } from "next/server";
import { deleteContact } from "../../../../../../lib/database";

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { password, contactId } = body;

    // Simple password check
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    if (!contactId || typeof contactId !== "number") {
      return NextResponse.json({ error: "Valid contact ID is required" }, { status: 400 });
    }

    // Delete contact from database
    const deleted = deleteContact(contactId);

    if (deleted) {
      return NextResponse.json({
        success: true,
        message: "Contact deleted successfully",
      });
    } else {
      return NextResponse.json(
        { error: "Contact not found or could not be deleted" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error deleting contact:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
