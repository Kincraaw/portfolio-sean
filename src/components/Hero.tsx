
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="animate-fade-up">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="text-xs tracking-wide text-cyan-300">
              DISPONIBLE POUR DE NOUVEAUX PROJETS
            </span>
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            Bonjour, je suis
          </p>

          <h1 className="text-6xl font-bold leading-tight tracking-tight md:text-8xl">
            Sean<span className="text-cyan-400">.</span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-gray-300 md:text-3xl">
            Développeur{" "}
            <span className="text-cyan-400">Web</span>
            <br />
            & Créatif.
          </h2>

          <p className="mt-7 max-w-lg text-base leading-8 text-gray-400">
            Je conçois et développe des expériences web modernes,
            performantes et intuitives. J'aime transformer des idées
            en projets concrets.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-7 py-4 font-semibold text-[#080b12] transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              Découvrir mes projets ↗
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              Me contacter
            </a>
          </div>
        </div>

        {/* Visual card */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 rounded-3xl bg-cyan-400/10 blur-3xl" />

          <div className="relative rounded-3xl border border-white/10 bg-[#101722]/90 p-7 shadow-2xl shadow-cyan-950/30">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-gray-500">developer.ts</span>
            </div>

            <div className="space-y-5 font-mono text-sm leading-7">
              <p className="text-purple-400">const developer = {"{"}</p>
              <p className="pl-5">
                <span className="text-cyan-300">name:</span>{" "}
                <span className="text-green-300">"Sean"</span>,
              </p>
              <p className="pl-5">
                <span className="text-cyan-300">role:</span>{" "}
                <span className="text-green-300">"Web Developer"</span>,
              </p>
              <p className="pl-5">
                <span className="text-cyan-300">stack:</span> [
              </p>
              <p className="pl-10 text-green-300">
                "React", "Next.js",
              </p>
              <p className="pl-10 text-green-300">
                "TypeScript", "Tailwind"
              </p>
              <p className="pl-5">],</p>
              <p className="pl-5">
                <span className="text-cyan-300">passion:</span>{" "}
                <span className="text-green-300">"Creating"</span>
              </p>
              <p className="text-purple-400">{"}"}</p>
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
              <span className="text-xs text-gray-500">
                Always learning. Always building.
              </span>
              <span className="text-cyan-400">✦</span>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-5 rounded-2xl border border-white/10 bg-[#151e2b] px-5 py-4 shadow-xl">
            <p className="text-xs text-gray-500">CURRENTLY</p>
            <p className="mt-1 font-semibold text-cyan-300">
              Building the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
