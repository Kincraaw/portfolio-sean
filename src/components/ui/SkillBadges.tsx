import Link from "next/link";
import { getSkill } from "@/data/skills";

type SkillBadgesProps = {
  slugs: string[];
  /** Compétence mise en avant (page en cours) */
  current?: string;
  size?: "sm" | "md";
};

/** Liste de technologies ; chaque badge mène à la page de la compétence. */
export default function SkillBadges({ slugs, current, size = "md" }: SkillBadgesProps) {
  const padding = size === "sm" ? "px-3 py-1 text-xs" : "px-4 py-1.5 text-sm";

  return (
    <ul className="flex flex-wrap gap-2">
      {slugs.map((slug) => {
        const skill = getSkill(slug);
        if (!skill) return null;
        const isCurrent = skill.slug === current;

        return (
          <li key={skill.slug}>
            <Link
              href={`/competences/${skill.slug}`}
              aria-current={isCurrent ? "page" : undefined}
              className={`relative z-10 inline-block rounded-full ${padding} ${
                isCurrent
                  ? "bg-accent font-medium text-on-accent"
                  : "border border-line-strong text-muted transition hover:border-accent hover:text-accent"
              }`}
            >
              {skill.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
