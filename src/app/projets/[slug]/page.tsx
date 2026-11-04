import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import SubPage from "@/components/layout/SubPage";
import SkillBadges from "@/components/ui/SkillBadges";
import ProjectLinks from "@/components/ui/ProjectLinks";
import { getProject, projects } from "@/data/projects";

// Une page par projet générée au build ; les autres URLs → 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projets/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.title} | Sean Chaophrasy-Tran`,
    description: project.summary,
  };
}

export default async function ProjectPage(props: PageProps<"/projets/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <SubPage back={{ href: "/#projects", label: "Retour aux projets" }}>
      <p className="mb-4 mt-10 text-sm uppercase tracking-[0.3em] text-accent">
        {project.context} · {project.period}
      </p>

      <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
        {project.title}
        <span className="text-accent">.</span>
      </h1>

      <p className="mt-6 max-w-3xl text-xl leading-9 text-fg-soft">
        {project.summary}
      </p>

      <div className="mt-16 grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-5 text-lg leading-8 text-muted">
          {project.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside className="space-y-8 rounded-2xl border border-line bg-card p-6 lg:self-start">
          <div>
            <h2 className="mb-4 text-sm uppercase tracking-wider text-subtle">
              Technologies
            </h2>
            <SkillBadges slugs={project.skills} size="sm" />
          </div>

          {(project.github || project.demo) && (
            <div>
              <h2 className="mb-4 text-sm uppercase tracking-wider text-subtle">
                Liens
              </h2>
              <ProjectLinks project={project} />
            </div>
          )}
        </aside>
      </div>

      {next.slug !== project.slug && (
        <Link
          href={`/projets/${next.slug}`}
          className="group mt-24 flex items-center justify-between gap-6 rounded-2xl border border-line bg-surface p-8 transition hover:border-accent/50 hover:bg-accent/5"
        >
          <div>
            <p className="text-xs uppercase tracking-wider text-subtle">
              Projet suivant
            </p>
            <p className="mt-2 text-2xl font-semibold transition group-hover:text-accent">
              {next.title}
            </p>
          </div>
          <ArrowRight
            size={28}
            aria-hidden="true"
            className="text-accent transition group-hover:translate-x-1"
          />
        </Link>
      )}
    </SubPage>
  );
}
