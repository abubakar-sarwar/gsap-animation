import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://dl.dropboxusercontent.com/s/f62j9uzlmzp1bnu/ScrollSmoother.min.js?raw=1"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
