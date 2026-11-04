import { site } from "@/data/site";
import GithubIcon from "@/components/ui/GithubIcon";
import InterestsAtom from "@/components/ui/InterestsAtom";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-glow-a blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-glow-b blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 py-12 lg:grid-cols-2">
        <div className="animate-fade-up">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-accent/20 bg-accent/5 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="text-xs tracking-wide text-accent-soft">
              {site.availability.toUpperCase()}
            </span>
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-subtle">
            Bonjour, je suis
          </p>

          <h1 className="text-6xl font-bold leading-tight tracking-tight md:text-8xl">
            {site.name}<span className="text-accent">.</span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-fg-soft md:text-3xl">
            Développeur{" "}
            <span className="text-accent">Fullstack</span>
            <br />
            en Bachelor à l’IPSSI.
          </h2>

          <p className="mt-7 max-w-lg text-base leading-8 text-muted">
            Deux ans d’alternance chez Alphalink m’ont appris à livrer des
            interfaces React utilisées par de vrais clients. Je cherche
            aujourd’hui une nouvelle alternance pour continuer à construire,
            du front au back.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent px-7 py-4 font-semibold text-on-accent transition hover:-translate-y-1 hover:bg-accent-hover"
            >
              Découvrir mes projets ↗
            </a>

            <a
              href="#contact"
              className="rounded-full border border-line-strong px-7 py-4 font-semibold text-fg transition hover:-translate-y-1 hover:border-accent hover:text-accent"
            >
              Me contacter
            </a>

            <a
              href={site.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Mon GitHub (${site.socials.github.username})`}
              title="GitHub"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-line-strong text-fg transition hover:-translate-y-1 hover:border-accent hover:text-accent"
            >
              <GithubIcon size={22} />
            </a>
          </div>
        </div>

        <InterestsAtom />
      </div>
    </section>
  );
}
