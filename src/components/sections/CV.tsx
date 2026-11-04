import { Download, ExternalLink, FileText } from "lucide-react";
import { site } from "@/data/site";

export default function CV() {
  return (
    <section id="cv" className="w-full px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-accent">
            03 — Mon parcours
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Mon CV<span className="text-accent">.</span>
          </h2>

          <p className="mt-4 text-muted">
            Découvrez mon parcours, mes expériences et mes compétences.
          </p>
        </div>

        {/* Aperçu du CV */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-line bg-card shadow-2xl shadow-accent/5">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <div className="flex items-center gap-3">
              <FileText className="text-accent" size={22} />
              <span className="font-medium">CV - Sean.pdf</span>
            </div>

            <span className="text-xs text-subtle">PDF</span>
          </div>

          <iframe
            src={`${site.cvPath}#toolbar=0`}
            className="h-[600px] w-full bg-white"
            title="Aperçu de mon CV"
          />

          <div className="flex flex-wrap justify-center gap-4 p-6">
            <a
              href={site.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-line-strong px-6 py-3 transition hover:border-accent hover:text-accent"
            >
              <ExternalLink size={18} />
              Consulter
            </a>

            <a
              href={site.cvPath}
              download="CV-Sean.pdf"
              className="flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-on-accent transition hover:bg-accent-hover"
            >
              <Download size={18} />
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
