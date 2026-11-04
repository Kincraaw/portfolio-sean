import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, FolderOpen } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GithubIcon from "@/components/ui/GithubIcon";
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
    title: `${skill.name} — Projets | Sean`,
    description: `Mes projets réalisés avec ${skill.name}.`,
  };
}

export default async function SkillPage(
  props: PageProps<"/competences/[slug]">,
) {
  const { slug } = await props.params;
  const skill = getSkill(slug);
  if (!skill) notFound();

  const projects = getProjectsBySkill(skill.slug);

  return (
    <main className="min-h-screen overflow-hidden bg-bg text-fg">
      <Navbar />

      <section className="relative px-6 pb-24 pt-40">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-glow-a blur-[120px]" />

        <div className="relative mx-auto max-w-5xl">
          <Link
            href="/#skills"
            className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Retour aux compétences
          </Link>

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
                Je n’ai pas encore publié de projet avec {skill.name}. Revenez
                bientôt !
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {projects.map((project) => (
                <article
                  key={project.slug}
                  className="rounded-2xl border border-line bg-card p-8 shadow-2xl shadow-accent/5 md:p-10"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-4">
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                    <span className="text-sm text-subtle">{project.year}</span>
                  </div>

                  <p className="mt-4 text-lg text-fg-soft">{project.summary}</p>

                  <div className="mt-6 space-y-4 leading-8 text-muted">
                    {project.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Stack : chaque badge mène à la page de la compétence */}
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {project.skills.map((s) => {
                      const tech = getSkill(s);
                      if (!tech) return null;
                      const current = tech.slug === skill.slug;
                      return (
                        <li key={tech.slug}>
                          <Link
                            href={`/competences/${tech.slug}`}
                            aria-current={current ? "page" : undefined}
                            className={
                              current
                                ? "inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-on-accent"
                                : "inline-block rounded-full border border-line-strong px-4 py-1.5 text-sm text-muted transition hover:border-accent hover:text-accent"
                            }
                          >
                            {tech.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  {(project.github || project.demo) && (
                    <div className="mt-8 flex flex-wrap gap-4 border-t border-line pt-8">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 font-semibold transition hover:-translate-y-1 hover:border-accent hover:text-accent"
                        >
                          <GithubIcon size={18} />
                          Voir le code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-on-accent transition hover:-translate-y-1 hover:bg-accent-hover"
                        >
                          <ExternalLink size={18} aria-hidden="true" />
                          Voir le site
                        </a>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
