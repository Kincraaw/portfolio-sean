import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { skills } from "@/data/skills";
import { getProjectsBySkill } from "@/data/projects";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          index={2}
          label="Compétences"
          title="Mon environnement"
          highlight="technique."
          className="reveal mb-14"
        />

        {/* reveal sur la grille (pas sur les cartes) pour garder leur effet de survol */}
        <div className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const count = getProjectsBySkill(skill.slug).length;

            return (
              <Link
                key={skill.slug}
                href={`/competences/${skill.slug}`}
                className="group relative rounded-2xl border border-line bg-surface p-7 transition duration-300 hover:-translate-y-2 hover:border-accent/50 hover:bg-accent/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="absolute right-6 top-6 text-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />

                <span className="text-xs text-subtle">
                  0{index + 1} / {skill.category}
                </span>

                <h3 className="mt-6 text-xl font-semibold text-fg-soft transition group-hover:text-accent">
                  {skill.name}
                </h3>

                <p className="mt-2 text-xs text-subtle">
                  {count === 0
                    ? "Projet à venir"
                    : `${count} projet${count > 1 ? "s" : ""}`}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-accent transition-all group-hover:w-full" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
