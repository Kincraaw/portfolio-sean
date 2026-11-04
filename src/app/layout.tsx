
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sean | Développeur Web",
  description:
    "Portfolio de Sean, développeur web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
