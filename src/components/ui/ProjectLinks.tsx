import { ExternalLink } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import type { Project } from "@/data/projects";

/** Boutons « Voir le code » / « Voir le site » d'un projet (si renseignés). */
export default function ProjectLinks({ project }: { project: Project }) {
  if (!project.github && !project.demo) return null;

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
  );
}
