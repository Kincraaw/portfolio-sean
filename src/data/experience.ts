export type TimelineItem = {
  title: string;
  place: string;
  period: string;
  details?: string[];
};

export const experiences: TimelineItem[] = [
  {
    title: "Alternant développeur web",
    place: "Alphalink",
    period: "Sept. 2023 — Août 2025",
    details: [
      "Création du dashboard client de l’entreprise en React",
      "Interfaces responsives stylisées avec Tailwind CSS",
      "Versionnage sur le GitHub de l’entreprise, branches dédiées avec GitKraken",
      "Écriture d’expressions régulières pour automatiser une fonction métier",
    ],
  },
  {
    title: "Projets d’école",
    place: "Ingetis",
    period: "Sept. 2024 — Avr. 2025",
    details: [
      "Site e-commerce inspiré de Nike (PHP, HTML, CSS, JavaScript, SQL)",
      "Application lourde en C#",
      "Portfolio en HTML et CSS",
    ],
  },
  {
    title: "Auxiliaire d’été",
    place: "BPI France — DSI",
    period: "Juil. 2023 — Août 2023",
    details: [
      "Participation aux réunions des développeurs",
      "Participation aux réunions sur la sécurité informatique",
      "Suivi et mise à jour de tableaux Excel",
    ],
  },
];

export const education: TimelineItem[] = [
  {
    title: "Bachelor Développement Fullstack",
    place: "IPSSI — Grande école informatique",
    period: "Depuis sept. 2025",
  },
  {
    title: "BTS — Brevet de Technicien Supérieur",
    place: "Aurlom / Ingetis",
    period: "Sept. 2023 — Juin 2025",
  },
];
