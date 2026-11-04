"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { localePath } from "@/i18n/config";
import { useI18n } from "@/i18n/client";

// Sections de l'accueil. Le Contact (footer) est présent sur toutes les pages,
// d'où son ancre locale « #contact ».
const sectionIds = ["home", "about", "skills", "projects", "parcours", "cv", "contact"] as const;
type SectionId = (typeof sectionIds)[number];

/** Sur l'accueil : section actuellement au milieu de l'écran. */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    // Une section est « active » quand elle croise la ligne du milieu de l'écran.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [enabled]);

  return enabled ? active : null;
}

export default function Navbar() {
  const { locale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? `/${locale}`;
  // Chemin sans la langue : "/fr/projets/x" → "/projets/x", "/en" → "/"
  const path = pathname.replace(/^\/(fr|en)(?=\/|$)/, "") || "/";
  const activeSection = useActiveSection(path === "/");

  // Sur les pages secondaires, on met en avant la rubrique parente.
  const current = path.startsWith("/competences")
    ? "skills"
    : path.startsWith("/projets")
      ? "projects"
      : activeSection;

  const labels: Record<SectionId, string> = {
    home: t.nav.home,
    about: t.nav.about,
    skills: t.nav.skills,
    projects: t.nav.projects,
    parcours: t.nav.parcours,
    cv: t.nav.cv,
    contact: t.nav.contact,
  };

  const links = sectionIds.map((id) => ({
    id,
    name: labels[id],
    href: id === "contact" ? "#contact" : localePath(locale, `/#${id}`),
  }));

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href={localePath(locale, "/#home")} className="text-xl font-bold tracking-tight">
          SEAN<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const isActive = link.id === current;
            return (
              <Link
                key={link.id}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={`relative py-1 text-sm transition hover:text-accent ${
                  isActive ? "text-accent" : "text-muted"
                }`}
              >
                {link.name}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-accent transition-all duration-300 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden rounded-full border border-accent/50 px-5 py-2 text-sm text-accent-soft transition hover:bg-accent hover:text-on-accent xl:block"
          >
            {t.nav.contactCta}
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-fg lg:hidden"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-bg px-6 py-5 lg:hidden">
          {links.map((link) => {
            const isActive = link.id === current;
            return (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "location" : undefined}
                className={`flex items-center gap-3 py-3 hover:text-accent ${
                  isActive ? "text-accent" : "text-fg-soft"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full bg-accent transition ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
