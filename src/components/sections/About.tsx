import { Languages, MapPin } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="reveal mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2">
          <SectionTitle
            index={1}
            label="À propos"
            title="Construire des outils"
            highlight="qui servent vraiment."
            className=""
          />

          <div>
            <p className="leading-8 text-muted">
              Je suis {site.fullName}, développeur fullstack basé à{" "}
              {site.location}. Après un BTS et deux ans d’alternance chez
              Alphalink, où j’ai conçu le dashboard utilisé par les clients de
              l’entreprise, je poursuis en Bachelor Développement Fullstack à
              l’IPSSI.
            </p>

            <p className="mt-5 leading-8 text-muted">
              J’aime partir d’un besoin concret et en faire une interface
              claire, responsive et agréable à utiliser — en React côté front,
              en PHP ou C# quand il faut aller plus loin.
            </p>

            <p className="mt-5 leading-8 text-muted">
              Je recherche une alternance de 12 mois, au rythme de{" "}
              <strong className="font-semibold text-fg-soft">
                1 semaine à l’école / 3 semaines en entreprise
              </strong>
              .
            </p>

            {/* Qualités */}
            <ul className="mt-8 flex flex-wrap gap-2">
              {site.qualities.map((quality) => (
                <li
                  key={quality}
                  className="rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-sm text-accent-soft"
                >
                  {quality}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-accent" aria-hidden="true" />
                {site.location}, Île-de-France
              </span>
              <span className="flex items-center gap-2">
                <Languages size={16} className="text-accent" aria-hidden="true" />
                {site.languages.join(" · ")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
