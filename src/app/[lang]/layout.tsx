import type { Metadata } from "next";
import "../globals.css";
import { site } from "@/data/site";
import { alternatesFor, locales } from "@/i18n/config";
import { getI18n } from "@/i18n/server";

// Une version de chaque page est générée au build pour « fr » et « en ».
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  const title = `${site.fullName} | ${t.meta.role}`;

  return {
    metadataBase: new URL(site.url),
    title: { default: title, template: `%s | ${site.fullName}` },
    description: t.meta.description,
    authors: [{ name: site.fullName, url: site.socials.github.url }],
    alternates: alternatesFor(locale),
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? "en_US" : "fr_FR",
      siteName: site.fullName,
      title,
      description: t.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: t.meta.description,
    },
  };
}

// Applique le thème (choix enregistré, sinon préférence du système)
// avant le premier affichage, pour éviter un flash de la mauvaise couleur.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const { locale } = await getI18n();

  return (
    <html lang={locale} data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
