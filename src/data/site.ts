import type { Localized } from "@/i18n/config";

// Adresse publique du site : NEXT_PUBLIC_SITE_URL si définie, sinon l'URL de
// production fournie automatiquement par Vercel, sinon le serveur local.
const url =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const site = {
  url,
  name: "Sean",
  fullName: "Sean Chaophrasy-Tran",
  qualities: {
    fr: ["Autonome", "Consciencieux", "Travail en équipe", "Capacité d’adaptation"],
    en: ["Autonomous", "Conscientious", "Team player", "Adaptable"],
  } satisfies Localized<string[]>,
  languages: {
    fr: ["Français", "Anglais", "Espagnol"],
    en: ["French", "English", "Spanish"],
  } satisfies Localized<string[]>,
  email: "sean.chaotran@gmail.com",
  cvPath: "/cv-sean.pdf",
  socials: {
    github: {
      label: "GitHub",
      username: "Kincraaw",
      url: "https://github.com/Kincraaw",
    },
  },
};
