import { site } from "@/data/site";
import GithubIcon from "@/components/ui/GithubIcon";

export default function Footer() {
  const { github } = site.socials;

  return (
    <footer id="contact" className="border-t border-line px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-accent">
          05 — Contact
        </p>

        <h2 className="max-w-3xl text-4xl font-bold md:text-6xl">
          Une alternance à proposer ?
          <span className="text-accent"> Parlons-en.</span>
        </h2>

        <p className="mt-6 max-w-xl leading-8 text-muted">
          Je réponds rapidement par email. Vous pouvez aussi jeter un œil à mon
          code sur GitHub.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${site.email}`}
            className="inline-block rounded-full bg-accent px-8 py-4 font-semibold text-on-accent transition hover:-translate-y-1 hover:bg-accent-hover"
          >
            M’envoyer un email ↗
          </a>

          <a
            href={github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-line-strong px-8 py-4 font-semibold text-fg transition hover:-translate-y-1 hover:border-accent hover:text-accent"
          >
            <GithubIcon size={20} />
            {github.username}
          </a>
        </div>

        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-line pt-8 text-sm text-subtle md:flex-row">
          <p>© {new Date().getFullYear()} {site.fullName}. Tous droits réservés.</p>
          <p>Conçu et développé par moi-même avec Next.js et Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
