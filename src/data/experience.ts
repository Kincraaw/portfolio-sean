import type { Localized } from "@/i18n/config";

export type TimelineItem = {
  title: Localized;
  place: Localized;
  period: Localized;
  details?: Localized<string[]>;
};

export const experiences: TimelineItem[] = [
  {
    title: { fr: "Alternant développeur web", en: "Work-study web developer" },
    place: { fr: "Alphalink", en: "Alphalink" },
    period: { fr: "Sept. 2023 — Août 2025", en: "Sept. 2023 — Aug. 2025" },
    details: {
      fr: [
        "Création du dashboard client de l’entreprise en React",
        "Interfaces responsives stylisées avec Tailwind CSS",
        "Versionnage sur le GitHub de l’entreprise, branches dédiées avec GitKraken",
        "Écriture d’expressions régulières pour automatiser une fonction métier",
      ],
      en: [
        "Built the company’s customer dashboard in React",
        "Responsive interfaces styled with Tailwind CSS",
        "Version control on the company GitHub, feature branches with GitKraken",
        "Wrote regular expressions to automate a business process",
      ],
    },
  },
  {
    title: { fr: "Projets d’école", en: "School projects" },
    place: { fr: "Ingetis", en: "Ingetis" },
    period: { fr: "Sept. 2024 — Avr. 2025", en: "Sept. 2024 — Apr. 2025" },
    details: {
      fr: [
        "Site e-commerce inspiré de Nike (PHP, HTML, CSS, JavaScript, SQL)",
        "Application lourde en C#",
        "Portfolio en HTML et CSS",
      ],
      en: [
        "E-commerce website inspired by Nike (PHP, HTML, CSS, JavaScript, SQL)",
        "Desktop application in C#",
        "Portfolio in HTML and CSS",
      ],
    },
  },
  {
    title: { fr: "Auxiliaire d’été", en: "Summer assistant" },
    place: { fr: "BPI France — DSI", en: "BPI France — IT department" },
    period: { fr: "Juil. 2023 — Août 2023", en: "July 2023 — Aug. 2023" },
    details: {
      fr: [
        "Participation aux réunions des développeurs",
        "Participation aux réunions sur la sécurité informatique",
        "Suivi et mise à jour de tableaux Excel",
      ],
      en: [
        "Attended developer team meetings",
        "Attended IT security meetings",
        "Tracked and updated Excel spreadsheets",
      ],
    },
  },
];

export const education: TimelineItem[] = [
  {
    title: {
      fr: "Bachelor Développement Fullstack",
      en: "Bachelor’s in Fullstack Development",
    },
    place: {
      fr: "IPSSI — Grande école informatique",
      en: "IPSSI — School of Computer Science",
    },
    period: { fr: "Depuis sept. 2025", en: "Since Sept. 2025" },
  },
  {
    title: {
      fr: "BTS — Brevet de Technicien Supérieur",
      en: "BTS — Two-year higher technical degree",
    },
    place: { fr: "Aurlom / Ingetis", en: "Aurlom / Ingetis" },
    period: { fr: "Sept. 2023 — Juin 2025", en: "Sept. 2023 — June 2025" },
  },
];
