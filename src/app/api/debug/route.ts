import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    console.log("[DEBUG_API] Debug endpoint called");

    // Check environment
    const isDev = process.env.NODE_ENV === "development";
    const hasAdminPassword = !!process.env.ADMIN_PASSWORD;
    const workingDirectory = process.cwd();

    // Try to check if better-sqlite3 is available
    let sqliteAvailable = false;
    let sqliteError = null;
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require("better-sqlite3");
      sqliteAvailable = true;
    } catch (error) {
      sqliteError = error instanceof Error ? error.message : "Unknown error";
    }

    const debugInfo = {
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      isDevelopment: isDev,
      hasAdminPassword,
      workingDirectory,
      platform: process.platform,
      nodeVersion: process.version,
      sqliteAvailable,
      sqliteError,
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
