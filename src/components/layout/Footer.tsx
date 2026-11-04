import { Mail } from "lucide-react";
import { site } from "@/data/site";
import GithubIcon from "@/components/ui/GithubIcon";
import ContactForm from "@/components/ui/ContactForm";

export default function Footer() {
  const { github } = site.socials;

  return (
    <footer id="contact" className="border-t border-line px-6 py-20">
      <div className="reveal mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[5fr_6fr] lg:gap-16">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-accent">
              06 — Contact
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">
              Une alternance à proposer ?
              <span className="text-accent"> Parlons-en.</span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-muted">
              Remplissez le formulaire ou écrivez-moi directement : je réponds
              rapidement. Vous pouvez aussi jeter un œil à mon code sur GitHub.
            </p>

            <ul className="mt-10 space-y-4">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-4 text-fg-soft transition hover:text-accent"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line-strong transition group-hover:border-accent">
                    <Mail size={20} aria-hidden="true" />
                  </span>
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 text-fg-soft transition hover:text-accent"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line-strong transition group-hover:border-accent">
                    <GithubIcon size={20} />
                  </span>
                  github.com/{github.username}
                </a>
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>

        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-line pt-8 text-sm text-subtle md:flex-row">
          <p>© {new Date().getFullYear()} {site.fullName}. Tous droits réservés.</p>
          <p>Conçu et développé par moi-même avec Next.js et Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
