import type { Metadata } from "next";
import "./globals.css";
import { MobileMenuProvider } from "../components/MobileMenuProvider";
import { SuccessPopupProvider } from "../contexts/SuccessPopupContext";
import SuccessPopupWrapper from "../components/SuccessPopupWrapper";
import Script from "next/script";

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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3KEJ9FEYNN"
        ></Script>
        <Script>
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3KEJ9FEYNN');
`}
        </Script>
      </head>
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
