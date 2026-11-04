
"use client";

import { Download, ExternalLink, FileText } from "lucide-react";

export default function CV() {
  return (
    <section
      id="cv"
      className="w-full bg-[#09090b] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-12 text-center">
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Mon parcours
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Mon CV<span className="text-blue-500">.</span>
          </h2>

          <p className="mt-4 text-gray-400">
            Découvrez mon parcours, mes expériences et mes compétences.
          </p>
        </div>

        {/* Aperçu du CV */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#151519] shadow-2xl">

          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <FileText className="text-blue-400" size={22} />
              <span className="font-medium">CV - Sean.pdf</span>
            </div>

            <span className="text-xs text-gray-500">PDF</span>
          </div>

          <iframe
            src="/CV SEAN INFO 2026.pdf#toolbar=0"
            className="h-[600px] w-full bg-white"
            title="Aperçu de mon CV"
          />

          <div className="flex flex-wrap justify-center gap-4 p-6">
            <a
              href="/CV SEAN INFO 2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 transition hover:bg-white/10"
            >
              <ExternalLink size={18} />
              Consulter
            </a>

            <a
              href="/cv-sean.pdf"
              download="CV-Sean.pdf"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
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
