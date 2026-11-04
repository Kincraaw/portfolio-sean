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
  role: "Développeur Fullstack",
  location: "Lognes",
  availability: "En recherche d’alternance — 12 mois",
  qualities: ["Autonome", "Consciencieux", "Travail en équipe", "Capacité d’adaptation"],
  languages: ["Français", "Anglais", "Espagnol"],
  email: "sean.chaotran@gmail.com",
  cvPath: "/cv-sean.pdf",
  socials: {
    github: {
      label: "GitHub",
      username: "Kincraaw",
      url: "https://github.com/Kincraaw",
    },
  },
} as const;
