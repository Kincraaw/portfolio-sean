export type Skill = {
  /** Utilisé dans l'URL : /competences/<slug> */
  slug: string;
  name: string;
  category: "Frontend" | "Backend" | "Langage" | "Design" | "Outils";
  description: string;
};

export const skills: Skill[] = [
  {
    slug: "react",
    name: "React.js",
    category: "Frontend",
    description:
      "Ma bibliothèque principale côté front : je l’ai utilisée deux ans en alternance pour construire le dashboard client d’Alphalink.",
  },
  {
    slug: "nextjs",
    name: "Next.js",
    category: "Frontend",
    description:
      "Framework React pour créer des sites rapides, avec rendu serveur et routing intégré. Ce portfolio est construit avec.",
  },
  {
    slug: "typescript",
    name: "TypeScript",
    category: "Langage",
    description:
      "JavaScript typé : moins de bugs, un code plus lisible et plus facile à maintenir.",
  },
  {
    slug: "javascript",
    name: "JavaScript",
    category: "Langage",
    description:
      "Le langage du web, que j’utilise aussi bien pour des sites classiques que dans React.",
  },
  {
    slug: "tailwind",
    name: "Tailwind CSS",
    category: "Design",
    description:
      "Framework CSS utilitaire pour des interfaces responsives et cohérentes, rapidement.",
  },
  {
    slug: "html-css",
    name: "HTML / CSS",
    category: "Frontend",
    description: "Les fondations de toute page web : structure, mise en page et style.",
  },
  {
    slug: "php",
    name: "PHP",
    category: "Backend",
    description:
      "Langage côté serveur que j’utilise pour des sites dynamiques reliés à une base de données.",
  },
  {
    slug: "sql",
    name: "SQL",
    category: "Backend",
    description:
      "Conception et interrogation de bases de données relationnelles.",
  },
  {
    slug: "csharp",
    name: "C#",
    category: "Langage",
    description:
      "Langage orienté objet de Microsoft, utilisé pour développer des applications lourdes.",
  },
  {
    slug: "git",
    name: "Git / GitHub",
    category: "Outils",
    description:
      "Versionnage du code, branches dédiées et travail en équipe sur GitHub (avec GitKraken).",
  },
  {
    slug: "jira",
    name: "JIRA",
    category: "Outils",
    description: "Suivi de projet et organisation des tâches en méthode agile.",
  },
  {
    slug: "canva",
    name: "Canva",
    category: "Design",
    description: "Création de visuels et de supports de communication (webmarketing).",
  },
];

export function getSkill(slug: string) {
  return skills.find((skill) => skill.slug === slug);
}
