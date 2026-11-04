import type { Localized } from "@/i18n/config";

export type Project = {
  /** Utilisé dans l'URL : /<langue>/projets/<slug> */
  slug: string;
  title: Localized;
  /** Cadre du projet : entreprise, école, perso… */
  context: Localized;
  period: string;
  /** Une phrase, affichée en accroche */
  summary: Localized;
  /** Un paragraphe par entrée */
  description: Localized<string[]>;
  /** Slugs des compétences utilisées (voir src/data/skills.ts) */
  skills: string[];
  github?: string;
  demo?: string;
};

// Pour ajouter un projet : copie un bloc, change les textes (fr + en), et
// liste dans `skills` les compétences concernées. Le projet apparaîtra
// automatiquement dans la section Projets et sur la page de ces compétences.
export const projects: Project[] = [
  {
    slug: "dashboard-alphalink",
    title: { fr: "Dashboard client", en: "Customer dashboard" },
    context: { fr: "Alternance — Alphalink", en: "Work-study — Alphalink" },
    period: "2023 — 2025",
    summary: {
      fr: "Le tableau de bord utilisé par les clients d’Alphalink, développé pendant mes deux ans d’alternance.",
      en: "The dashboard used by Alphalink’s customers, built during my two years of work-study.",
    },
    description: {
      fr: [
        "J’ai participé à la création du dashboard client de l’entreprise en développant ses fonctionnalités en React, stylisées avec Tailwind CSS et pensées responsive pour un confort visuel sur tous les écrans.",
        "Le travail était versionné sur le GitHub de l’entreprise, chaque fonctionnalité avançant dans sa propre branche via GitKraken. J’ai aussi écrit des expressions régulières pour automatiser une fonction métier.",
      ],
      en: [
        "I helped build the company’s customer dashboard by developing its features in React, styled with Tailwind CSS and designed to be responsive for a comfortable experience on every screen.",
        "Work was versioned on the company’s GitHub, with each feature developed in its own branch using GitKraken. I also wrote regular expressions to automate a business process.",
      ],
    },
    skills: ["react", "javascript", "tailwind", "git"],
  },
  {
    slug: "boutique-ecommerce",
    title: { fr: "Boutique e-commerce", en: "E-commerce store" },
    context: { fr: "Projet d’école — Ingetis", en: "School project — Ingetis" },
    period: "2024 — 2025",
    summary: {
      fr: "Un site e-commerce inspiré de celui de Nike, de la base de données à l’interface.",
      en: "An e-commerce website inspired by Nike’s, from the database to the interface.",
    },
    description: {
      fr: [
        "Projet d’école réalisé de bout en bout : catalogue de produits, pages produit et logique côté serveur.",
        "Le site est développé en PHP avec une base de données SQL, et une interface en HTML, CSS et JavaScript.",
      ],
      en: [
        "A school project built end to end: product catalogue, product pages and server-side logic.",
        "The site is built in PHP with a SQL database, and an interface in HTML, CSS and JavaScript.",
      ],
    },
    skills: ["php", "sql", "html-css", "javascript"],
  },
  {
    slug: "portfolio",
    title: { fr: "Mon portfolio", en: "My portfolio" },
    context: { fr: "Projet personnel", en: "Personal project" },
    period: "2026",
    summary: {
      fr: "Le site sur lequel vous vous trouvez : un portfolio moderne, animé et responsive.",
      en: "The site you’re on right now: a modern, animated and responsive portfolio.",
    },
    description: {
      fr: [
        "Conçu et développé de zéro avec Next.js, React et TypeScript, ce portfolio présente mon parcours, mes compétences et mes projets.",
        "Il propose un thème clair et sombre avec transition animée, un atome animé pour mes centres d’intérêt, une version anglaise, et une page dédiée à chaque compétence et à chaque projet.",
      ],
      en: [
        "Designed and built from scratch with Next.js, React and TypeScript, this portfolio presents my background, skills and projects.",
        "It features light and dark themes with an animated transition, an animated atom for my interests, a French and English version, and a dedicated page for every skill and project.",
      ],
    },
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
