import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, FolderOpen } from "lucide-react";

import SubPage from "@/components/layout/SubPage";
import SkillBadges from "@/components/ui/SkillBadges";
import ProjectLinks from "@/components/ui/ProjectLinks";
import { getSkill, skills } from "@/data/skills";
import { getProjectsBySkill } from "@/data/projects";

// Une page est générée au build pour chaque compétence ; les autres URLs → 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return skills.map((skill) => ({ slug: skill.slug }));
}

export async function generateMetadata(
  props: PageProps<"/competences/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const skill = getSkill(slug);
  if (!skill) return {};

  return {
    title: `${skill.name} — Projets | Sean Chaophrasy-Tran`,
    description: `Mes projets réalisés avec ${skill.name}.`,
  };
}

export default async function SkillPage(props: PageProps<"/competences/[slug]">) {
  const { slug } = await props.params;
  const skill = getSkill(slug);
  if (!skill) notFound();

  const projects = getProjectsBySkill(skill.slug);

  return (
    <SubPage back={{ href: "/#skills", label: "Retour aux compétences" }}>
      <p className="mb-4 mt-10 text-sm uppercase tracking-[0.3em] text-accent">
        Compétence — {skill.category}
      </p>

      <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
        {skill.name}
        <span className="text-accent">.</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        {skill.description}
      </p>

      <h2 className="mb-8 mt-20 text-2xl font-semibold">
        {projects.length > 1 ? "Projets liés" : "Projet lié"}
      </h2>

      {projects.length === 0 ? (
        <div className="flex flex-col items-center rounded-2xl border border-dashed border-line-strong bg-surface px-6 py-16 text-center">
          <FolderOpen size={36} className="text-accent" aria-hidden="true" />
          <p className="mt-4 text-lg font-semibold">Projet à venir</p>
          <p className="mt-2 max-w-md text-muted">
            Je n’ai pas encore publié de projet avec {skill.name} sur ce
            portfolio. Revenez bientôt !
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="rounded-2xl border border-line bg-card p-8 shadow-2xl shadow-accent/5 md:p-10"
            >
              <p className="text-xs uppercase tracking-wider text-subtle">
                {project.context} · {project.period}
              </p>
              <h3 className="mt-2 text-3xl font-bold">{project.title}</h3>

              <p className="mt-4 text-lg text-fg-soft">{project.summary}</p>

              <div className="mt-6 space-y-4 leading-8 text-muted">
                {project.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8">
                <SkillBadges slugs={project.skills} current={skill.slug} />
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-line pt-8">
                <ProjectLinks project={project} />
                <Link
                  href={`/projets/${project.slug}`}
                  className="inline-flex items-center gap-2 px-2 py-3 font-semibold text-accent transition hover:text-accent-hover"
                >
                  Page du projet
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </SubPage>
  );
}
