import type { Metadata } from "next";
import "./globals.css";
import { MobileMenuProvider } from "../components/MobileMenuProvider";
import { SuccessPopupProvider } from "../contexts/SuccessPopupContext";
import SuccessPopupWrapper from "../components/SuccessPopupWrapper";

export const metadata: Metadata = {
  title: "حسين حوش - وكيل عقارات متميز في دبي",
  description:
    "حوّل أحلامك العقارية إلى حقيقة مع حسين حوش، وكيل العقارات المتميز في دبي. خبرة في العقارات الفاخرة والاستثمارات.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="arabic" suppressHydrationWarning={true}>
        <SuccessPopupProvider>
          <MobileMenuProvider>
            <main className="">{children}</main>
            <SuccessPopupWrapper />
          </MobileMenuProvider>
        </SuccessPopupProvider>
      </body>
    </html>
  );
}
