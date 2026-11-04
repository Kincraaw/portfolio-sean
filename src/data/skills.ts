import type { Localized } from "@/i18n/config";

const categories = {
  frontend: { fr: "Frontend", en: "Frontend" },
  backend: { fr: "Backend", en: "Backend" },
  language: { fr: "Langage", en: "Language" },
  design: { fr: "Design", en: "Design" },
  tools: { fr: "Outils", en: "Tools" },
} satisfies Record<string, Localized>;

export type Skill = {
  /** Utilisé dans l'URL : /<langue>/competences/<slug> */
  slug: string;
  name: string;
  category: Localized;
  description: Localized;
};

export const skills: Skill[] = [
  {
    slug: "react",
    name: "React.js",
    category: categories.frontend,
    description: {
      fr: "Ma bibliothèque principale côté front : je l’ai utilisée deux ans en alternance pour construire le dashboard client d’Alphalink.",
      en: "My main front-end library: I used it for two years of work-study to build Alphalink’s customer dashboard.",
    },
  },
  {
    slug: "nextjs",
    name: "Next.js",
    category: categories.frontend,
    description: {
      fr: "Framework React pour créer des sites rapides, avec rendu serveur et routing intégré. Ce portfolio est construit avec.",
      en: "React framework for fast websites, with server rendering and built-in routing. This portfolio is built with it.",
    },
  },
  {
    slug: "typescript",
    name: "TypeScript",
    category: categories.language,
    description: {
      fr: "JavaScript typé : moins de bugs, un code plus lisible et plus facile à maintenir.",
      en: "Typed JavaScript: fewer bugs, and code that is easier to read and maintain.",
    },
  },
  {
    slug: "javascript",
    name: "JavaScript",
    category: categories.language,
    description: {
      fr: "Le langage du web, que j’utilise aussi bien pour des sites classiques que dans React.",
      en: "The language of the web, which I use both for classic websites and inside React.",
    },
  },
  {
    slug: "tailwind",
    name: "Tailwind CSS",
    category: categories.design,
    description: {
      fr: "Framework CSS utilitaire pour des interfaces responsives et cohérentes, rapidement.",
      en: "Utility-first CSS framework for responsive, consistent interfaces — fast.",
    },
  },
  {
    slug: "html-css",
    name: "HTML / CSS",
    category: categories.frontend,
    description: {
      fr: "Les fondations de toute page web : structure, mise en page et style.",
      en: "The foundations of every web page: structure, layout and style.",
    },
  },
  {
    slug: "php",
    name: "PHP",
    category: categories.backend,
    description: {
      fr: "Langage côté serveur que j’utilise pour des sites dynamiques reliés à une base de données.",
      en: "Server-side language I use for dynamic websites backed by a database.",
    },
  },
  {
    slug: "sql",
    name: "SQL",
    category: categories.backend,
    description: {
      fr: "Conception et interrogation de bases de données relationnelles.",
      en: "Designing and querying relational databases.",
    },
  },
  {
    slug: "git",
    name: "Git / GitHub",
    category: categories.tools,
    description: {
      fr: "Versionnage du code, branches dédiées et travail en équipe sur GitHub (avec GitKraken).",
      en: "Version control, feature branches and teamwork on GitHub (with GitKraken).",
    },
  },
  {
    slug: "jira",
    name: "JIRA",
    category: categories.tools,
    description: {
      fr: "Suivi de projet et organisation des tâches en méthode agile.",
      en: "Project tracking and agile task management.",
    },
  },
  {
    slug: "canva",
    name: "Canva",
    category: categories.design,
    description: {
      fr: "Création de visuels et de supports de communication (webmarketing).",
      en: "Designing visuals and marketing materials (web marketing).",
    },
  },
];

export function getSkill(slug: string) {
  return skills.find((skill) => skill.slug === slug);
}
