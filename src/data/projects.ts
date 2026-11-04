export type Project = {
  slug: string;
  title: string;
  year: number;
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
// sur la page de chacune de ces compétences.
export const projects: Project[] = [
  {
    slug: "portfolio",
    title: "Mon portfolio",
    year: 2026,
    summary:
      "Le site sur lequel tu te trouves : un portfolio moderne, animé et responsive.",
    description: [
      "Conçu et développé de zéro avec Next.js et React, ce portfolio présente mon parcours, mes compétences et mes projets.",
      "Il propose un thème clair et sombre avec transition animée, un atome interactif pour mes centres d’intérêt, et une page dédiée à chaque compétence.",
    ],
    skills: ["react", "nextjs", "typescript", "tailwind", "html-css", "git"],
    github: "https://github.com/Kincraaw/portfolio-sean",
  },
];

export function getProjectsBySkill(skillSlug: string) {
  return projects.filter((project) => project.skills.includes(skillSlug));
}
