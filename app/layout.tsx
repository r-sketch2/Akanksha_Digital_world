import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akanksha Choudhary — Phool Wali Ladki",
  description: "The official world of Akanksha Choudhary — fashion, flowers, and timeless elegance.",
  openGraph: {
    title: "Akanksha Choudhary — Phool Wali Ladki",
    description: "A universe of elegance, style, and bloom.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain">
        {children}
      </body>
    </html>
  );
}
