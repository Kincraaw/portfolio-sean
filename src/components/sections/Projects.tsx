import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillBadges from "@/components/ui/SkillBadges";
import { projects } from "@/data/projects";
import { localePath, tr } from "@/i18n/config";
import { getI18n } from "@/i18n/server";

export default async function Projects() {
  const { locale, t } = await getI18n();

  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          index={3}
          label={t.projects.label}
          title={t.projects.title}
          highlight={t.projects.highlight}
          className="reveal mb-14"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            // L'animation d'apparition est sur un conteneur à part, pour ne pas
            // bloquer l'effet de survol (translate) de la carte.
            <div key={project.slug} className="reveal flex">
              <article className="group relative flex w-full flex-col rounded-3xl border border-line bg-surface p-8 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-accent/5">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-5xl font-bold text-accent/20 transition group-hover:text-accent/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight
                    size={22}
                    aria-hidden="true"
                    className="text-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>

                <p className="mt-6 text-xs uppercase tracking-wider text-subtle">
                  {tr(project.context, locale)} · {project.period}
                </p>

                <h3 className="mt-2 text-2xl font-semibold">
                  {/* Le lien couvre toute la carte (::after), les badges restent cliquables */}
                  <Link
                    href={localePath(locale, `/projets/${project.slug}`)}
                    className="transition after:absolute after:inset-0 after:rounded-3xl group-hover:text-accent focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent"
                  >
                    {tr(project.title, locale)}
                  </Link>
                </h3>

                <p className="mb-8 mt-3 flex-1 leading-7 text-muted">
                  {tr(project.summary, locale)}
                </p>

                <SkillBadges slugs={project.skills} size="sm" />
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
