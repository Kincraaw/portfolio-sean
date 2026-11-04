import { ExternalLink } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import type { Project } from "@/data/projects";
import { getI18n } from "@/i18n/server";

/** Boutons « Voir le code » / « Voir le site » d'un projet (si renseignés). */
export default async function ProjectLinks({ project }: { project: Project }) {
  if (!project.github && !project.demo) return null;
  const { t } = await getI18n();

  return (
    <div className="flex flex-wrap gap-4">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 font-semibold transition hover:-translate-y-1 hover:border-accent hover:text-accent"
        >
          <GithubIcon size={18} />
          {t.projects.viewCode}
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
          {t.projects.viewSite}
        </a>
      )}
    </div>
  );
}
