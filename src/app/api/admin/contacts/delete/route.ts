import { NextRequest, NextResponse } from "next/server";
import { deleteContact } from "../../../../../../lib/database";

export async function DELETE(request: NextRequest) {
  try {
    console.log("[API_DELETE_CONTACT] Starting contact deletion...");
    const body = await request.json();
    const { password, contactId } = body;
    console.log("[API_DELETE_CONTACT] Request data:", {
      hasPassword: !!password,
      contactId,
      contactIdType: typeof contactId,
    });

    // Simple password check
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
    console.log(
      "[API_DELETE_CONTACT] Environment password configured:",
      !!process.env.ADMIN_PASSWORD
    );

    if (password !== ADMIN_PASSWORD) {
      console.log("[API_DELETE_CONTACT] Password validation failed");
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    if (!contactId || typeof contactId !== "number") {
      console.log("[API_DELETE_CONTACT] Validation failed: Invalid contact ID");
      return NextResponse.json({ error: "Valid contact ID is required" }, { status: 400 });
    }

    console.log("[API_DELETE_CONTACT] Validation passed, attempting deletion...");
    // Delete contact from database
    const deleted = deleteContact(contactId);
    console.log("[API_DELETE_CONTACT] Delete operation result:", deleted);

    if (deleted) {
      console.log("[API_DELETE_CONTACT] Contact deleted successfully");
      return NextResponse.json({
        success: true,
        message: "Contact deleted successfully",
      });
    } else {
      console.log("[API_DELETE_CONTACT] Contact not found or could not be deleted");
      return NextResponse.json(
        { error: "Contact not found or could not be deleted" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("[API_DELETE_CONTACT] Error deleting contact:", error);
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
