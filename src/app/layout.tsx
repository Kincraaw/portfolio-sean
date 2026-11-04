import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/site";

const title = `${site.fullName} | ${site.role}`;
const description = `Portfolio de ${site.fullName}, développeur fullstack (React, PHP, C#) en Bachelor à l’IPSSI, en recherche d’alternance.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  authors: [{ name: site.fullName, url: site.socials.github.url }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: site.fullName,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
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
