import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hussein Housh - Premier Real Estate Agent in Dubai",
  description:
    "Transform your real estate dreams into reality with Hussein Housh, Dubai's premier real estate agent. Expert guidance in luxury properties and investments.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
