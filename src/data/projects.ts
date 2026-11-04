export type Project = {
  /** Utilisé dans l'URL : /projets/<slug> */
  slug: string;
  title: string;
  /** Cadre du projet : entreprise, école, perso… */
  context: string;
  period: string;
  /** Une phrase, affichée en accroche */
  summary: string;
  /** Un paragraphe par entrée */
  description: string[];
  /** Slugs des compétences utilisées (voir src/data/skills.ts) */
  skills: string[];
  github?: string;
  demo?: string;
};

// Pour ajouter un projet : copie un bloc, change les textes, et liste dans
// `skills` les compétences concernées. Le projet apparaîtra automatiquement
// dans la section Projets et sur la page de chacune de ces compétences.
export const projects: Project[] = [
  {
    slug: "dashboard-alphalink",
    title: "Dashboard client",
    context: "Alternance — Alphalink",
    period: "2023 — 2025",
    summary:
      "Le tableau de bord utilisé par les clients d’Alphalink, développé pendant mes deux ans d’alternance.",
    description: [
      "J’ai participé à la création du dashboard client de l’entreprise en développant ses fonctionnalités en React, stylisées avec Tailwind CSS et pensées responsive pour un confort visuel sur tous les écrans.",
      "Le travail était versionné sur le GitHub de l’entreprise, chaque fonctionnalité avançant dans sa propre branche via GitKraken. J’ai aussi écrit des expressions régulières pour automatiser une fonction métier.",
    ],
    skills: ["react", "javascript", "tailwind", "git"],
  },
  {
    slug: "boutique-ecommerce",
    title: "Boutique e-commerce",
    context: "Projet d’école — Ingetis",
    period: "2024 — 2025",
    summary:
      "Un site e-commerce inspiré de celui de Nike, de la base de données à l’interface.",
    description: [
      "Projet d’école réalisé de bout en bout : catalogue de produits, pages produit et logique côté serveur.",
      "Le site est développé en PHP avec une base de données SQL, et une interface en HTML, CSS et JavaScript.",
    ],
    skills: ["php", "sql", "html-css", "javascript"],
  },
  {
    slug: "application-csharp",
    title: "Application lourde en C#",
    context: "Projet d’école — Ingetis",
    period: "2024 — 2025",
    summary: "Une application de bureau développée en C# dans le cadre du BTS.",
    description: [
      "Projet d’école consacré au développement d’une application lourde (application de bureau) en C#, avec une approche orientée objet.",
    ],
    skills: ["csharp"],
  },
  {
    slug: "portfolio",
    title: "Mon portfolio",
    context: "Projet personnel",
    period: "2026",
    summary:
      "Le site sur lequel vous vous trouvez : un portfolio moderne, animé et responsive.",
    description: [
      "Conçu et développé de zéro avec Next.js, React et TypeScript, ce portfolio présente mon parcours, mes compétences et mes projets.",
      "Il propose un thème clair et sombre avec transition animée, un atome animé pour mes centres d’intérêt, et une page dédiée à chaque compétence et à chaque projet.",
    ],
    skills: ["react", "nextjs", "typescript", "tailwind", "html-css", "git"],
    github: "https://github.com/Kincraaw/portfolio-sean",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsBySkill(skillSlug: string) {
  return projects.filter((project) => project.skills.includes(skillSlug));
}
