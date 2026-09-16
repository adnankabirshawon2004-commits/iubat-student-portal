import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IUBAT Student Portal",
  description:
    "IUBAT Student Portal - Notices and academic cover page tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
