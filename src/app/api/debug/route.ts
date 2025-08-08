import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    console.log("[DEBUG_API] Debug endpoint called");

    // Check environment
    const isDev = process.env.NODE_ENV === "development";
    const hasAdminPassword = !!process.env.ADMIN_PASSWORD;
    const workingDirectory = process.cwd();

    // Check Supabase configuration
    let supabaseConfigured = false;
    let supabaseError = null;
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      supabaseConfigured = !!(supabaseUrl && supabaseKey);
    } catch (error) {
      supabaseError = error instanceof Error ? error.message : "Unknown error";
    }

    const debugInfo = {
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      isDevelopment: isDev,
      hasAdminPassword,
      workingDirectory,
      platform: process.platform,
      nodeVersion: process.version,
      supabaseConfigured,
      supabaseError,
      // Don't expose sensitive data in production
      ...(isDev && {
        environmentVariables: Object.keys(process.env).filter(
          (key) => key.startsWith("ADMIN_") || key.startsWith("NODE_")
        ),
      }),
    };

    console.log("[DEBUG_API] Debug info collected:", debugInfo);

    return NextResponse.json({
      success: true,
      debug: debugInfo,
    });
  } catch (error) {
    console.error("[DEBUG_API] Error in debug endpoint:", error);
    return NextResponse.json(
      {
        error: "Debug endpoint error",
        details: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
