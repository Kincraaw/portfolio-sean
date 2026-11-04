import { Languages, MapPin } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { site } from "@/data/site";
import { tr } from "@/i18n/config";
import { getI18n } from "@/i18n/server";

export default async function About() {
  const { locale, t } = await getI18n();

  return (
    <section id="about" className="px-6 py-32">
      <div className="reveal mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2">
          <SectionTitle
            index={1}
            label={t.about.label}
            title={t.about.title}
            highlight={t.about.highlight}
            className=""
          />

          <div>
            <p className="leading-8 text-muted">{t.about.p1}</p>

            <p className="mt-5 leading-8 text-muted">{t.about.p2}</p>

            <p className="mt-5 leading-8 text-muted">
              {t.about.p3Before}
              <strong className="font-semibold text-fg-soft">{t.about.p3Strong}</strong>
              {t.about.p3After}
            </p>

            {/* Qualités */}
            <ul className="mt-8 flex flex-wrap gap-2">
              {tr(site.qualities, locale).map((quality) => (
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
                {t.about.region}
              </span>
              <span className="flex items-center gap-2">
                <Languages size={16} className="text-accent" aria-hidden="true" />
                {tr(site.languages, locale).join(" · ")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
