import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header"; // Import your new component

export const metadata: Metadata = {
  title: "Maybe Banger",
  description: "Music reviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Header sits here so it appears on every page */}
        <Header /> 
        {children}
      </body>
    </html>
  );
}
