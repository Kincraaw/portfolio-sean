import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, FolderOpen } from "lucide-react";

import SubPage from "@/components/layout/SubPage";
import SkillBadges from "@/components/ui/SkillBadges";
import ProjectLinks from "@/components/ui/ProjectLinks";
import { getSkill, skills } from "@/data/skills";
import { getProjectsBySkill } from "@/data/projects";
import { alternatesFor, localePath, tr } from "@/i18n/config";
import { getI18n } from "@/i18n/server";

// Une page par compétence (et par langue) générée au build ; le reste → 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return skills.map((skill) => ({ slug: skill.slug }));
}

export async function generateMetadata(
  props: PageProps<"/[lang]/competences/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const skill = getSkill(slug);
  if (!skill) return {};
  const { locale, t } = await getI18n();

  return {
    title: t.skillPage.metaTitle(skill.name),
    description: t.skillPage.metaDescription(skill.name),
    alternates: alternatesFor(locale, `/competences/${skill.slug}`),
  };
}

export default async function SkillPage(props: PageProps<"/[lang]/competences/[slug]">) {
  const { slug } = await props.params;
  const skill = getSkill(slug);
  if (!skill) notFound();

  const { locale, t } = await getI18n();
  const projects = getProjectsBySkill(skill.slug);

  return (
    <SubPage back={{ href: localePath(locale, "/#skills"), label: t.skillPage.back }}>
      <p className="mb-4 mt-10 text-sm uppercase tracking-[0.3em] text-accent">
        {t.skillPage.skill} — {tr(skill.category, locale)}
      </p>

      <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
        {skill.name}
        <span className="text-accent">.</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        {tr(skill.description, locale)}
      </p>

      <h2 className="mb-8 mt-20 text-2xl font-semibold">
        {projects.length > 1 ? t.skillPage.relatedMany : t.skillPage.relatedOne}
      </h2>

      {projects.length === 0 ? (
        <div className="flex flex-col items-center rounded-2xl border border-dashed border-line-strong bg-surface px-6 py-16 text-center">
          <FolderOpen size={36} className="text-accent" aria-hidden="true" />
          <p className="mt-4 text-lg font-semibold">{t.skillPage.emptyTitle}</p>
          <p className="mt-2 max-w-md text-muted">{t.skillPage.emptyText(skill.name)}</p>
        </div>
      ) : (
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="rounded-2xl border border-line bg-card p-8 shadow-2xl shadow-accent/5 md:p-10"
            >
              <p className="text-xs uppercase tracking-wider text-subtle">
                {tr(project.context, locale)} · {project.period}
              </p>
              <h3 className="mt-2 text-3xl font-bold">{tr(project.title, locale)}</h3>

              <p className="mt-4 text-lg text-fg-soft">{tr(project.summary, locale)}</p>

              <div className="mt-6 space-y-4 leading-8 text-muted">
                {tr(project.description, locale).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8">
                <SkillBadges slugs={project.skills} current={skill.slug} />
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-line pt-8">
                <ProjectLinks project={project} />
                <Link
                  href={localePath(locale, `/projets/${project.slug}`)}
                  className="inline-flex items-center gap-2 px-2 py-3 font-semibold text-accent transition hover:text-accent-hover"
                >
                  {t.skillPage.projectPage}
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
