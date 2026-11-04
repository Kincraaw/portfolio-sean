import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import SubPage from "@/components/layout/SubPage";
import SkillBadges from "@/components/ui/SkillBadges";
import ProjectLinks from "@/components/ui/ProjectLinks";
import { getProject, projects } from "@/data/projects";
import { alternatesFor, localePath, tr } from "@/i18n/config";
import { getI18n } from "@/i18n/server";

// Une page par projet (et par langue) générée au build ; le reste → 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/[lang]/projets/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  const { locale } = await getI18n();

  return {
    title: tr(project.title, locale),
    description: tr(project.summary, locale),
    alternates: alternatesFor(locale, `/projets/${project.slug}`),
  };
}

export default async function ProjectPage(props: PageProps<"/[lang]/projets/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const { locale, t } = await getI18n();
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <SubPage back={{ href: localePath(locale, "/#projects"), label: t.projectPage.back }}>
      <p className="mb-4 mt-10 text-sm uppercase tracking-[0.3em] text-accent">
        {tr(project.context, locale)} · {project.period}
      </p>

      <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
        {tr(project.title, locale)}
        <span className="text-accent">.</span>
      </h1>

      <p className="mt-6 max-w-3xl text-xl leading-9 text-fg-soft">
        {tr(project.summary, locale)}
      </p>

      <div className="mt-16 grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-5 text-lg leading-8 text-muted">
          {tr(project.description, locale).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside className="space-y-8 rounded-2xl border border-line bg-card p-6 lg:self-start">
          <div>
            <h2 className="mb-4 text-sm uppercase tracking-wider text-subtle">
              {t.projectPage.technologies}
            </h2>
            <SkillBadges slugs={project.skills} size="sm" />
          </div>

          {(project.github || project.demo) && (
            <div>
              <h2 className="mb-4 text-sm uppercase tracking-wider text-subtle">
                {t.projectPage.links}
              </h2>
              <ProjectLinks project={project} />
            </div>
          )}
        </aside>
      </div>

      {next.slug !== project.slug && (
        <Link
          href={localePath(locale, `/projets/${next.slug}`)}
          className="group mt-24 flex items-center justify-between gap-6 rounded-2xl border border-line bg-surface p-8 transition hover:border-accent/50 hover:bg-accent/5"
        >
          <div>
            <p className="text-xs uppercase tracking-wider text-subtle">{t.projectPage.next}</p>
            <p className="mt-2 text-2xl font-semibold transition group-hover:text-accent">
              {tr(next.title, locale)}
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
