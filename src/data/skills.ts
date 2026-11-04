export type Skill = {
  /** Utilisé dans l'URL : /competences/<slug> */
  slug: string;
  name: string;
  category: "Frontend" | "Backend" | "Language" | "Design" | "Tools";
  description: string;
};

export const skills: Skill[] = [
  {
    slug: "react",
    name: "React.js",
    category: "Frontend",
    description:
      "Bibliothèque JavaScript pour construire des interfaces à base de composants.",
  },
  {
    slug: "nextjs",
    name: "Next.js",
    category: "Frontend",
    description:
      "Framework React pour créer des sites rapides, avec rendu serveur et routing intégré.",
  },
  {
    slug: "typescript",
    name: "TypeScript",
    category: "Language",
    description:
      "JavaScript typé : moins de bugs, un code plus lisible et plus facile à maintenir.",
  },
  {
    slug: "javascript",
    name: "JavaScript",
    category: "Language",
    description: "Le langage du web, côté navigateur comme côté serveur.",
  },
  {
    slug: "tailwind",
    name: "Tailwind CSS",
    category: "Design",
    description:
      "Framework CSS utilitaire pour styliser rapidement et de façon cohérente.",
  },
  {
    slug: "html-css",
    name: "HTML / CSS",
    category: "Frontend",
    description: "Les fondations de toute page web : structure et mise en forme.",
  },
  {
    slug: "git",
    name: "Git / GitHub",
    category: "Tools",
    description:
      "Gestion de versions et collaboration sur le code, hébergé sur GitHub.",
  },
  {
    slug: "nodejs",
    name: "Node.js",
    category: "Backend",
    description: "Environnement d’exécution JavaScript côté serveur.",
  },
];

export function getSkill(slug: string) {
  return skills.find((skill) => skill.slug === slug);
}
