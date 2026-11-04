import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sean | Développeur Web",
  description: "Portfolio de Sean, développeur web.",
};

// Applique le thème (choix enregistré, sinon préférence du système)
// avant le premier affichage, pour éviter un flash de la mauvaise couleur.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
