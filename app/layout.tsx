import type { Metadata } from "next";
import "./globals.css";
import { CookieConsent, Footer, Navbar, PreLoader } from "./_components";
import SmoothLayout from "./_components/smoothLayout";

export const metadata: Metadata = {
  title: "ThrillQuest",
  description: "Gsap Animation First Website",
  icons: ["/logo.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-drak-body">
        <PreLoader />
        <SmoothLayout>
          <Navbar />
          <main>{children}</main>
          <CookieConsent />
          <Footer />
        </SmoothLayout>
      </body>
    </html>
  );
}
