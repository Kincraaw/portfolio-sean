"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";

const links = [
  // « / » devant l'ancre : les liens marchent aussi depuis les autres pages.
  // Le Contact (footer) est présent sur toutes les pages.
  { id: "home", name: "Accueil", href: "/#home" },
  { id: "about", name: "À propos", href: "/#about" },
  { id: "skills", name: "Compétences", href: "/#skills" },
  { id: "projects", name: "Projets", href: "/#projects" },
  { id: "parcours", name: "Parcours", href: "/#parcours" },
  { id: "cv", name: "CV", href: "/#cv" },
  { id: "contact", name: "Contact", href: "#contact" },
];

/** Sur l'accueil : section actuellement au milieu de l'écran. */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const sections = links
      .map((link) => document.getElementById(link.id))
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
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const activeSection = useActiveSection(pathname === "/");

  // Sur les pages secondaires, on met en avant la rubrique parente.
  const current = pathname.startsWith("/competences")
    ? "skills"
    : pathname.startsWith("/projets")
      ? "projects"
      : activeSection;

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/#home" className="text-xl font-bold tracking-tight">
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
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden rounded-full border border-accent/50 px-5 py-2 text-sm text-accent-soft transition hover:bg-accent hover:text-on-accent lg:block"
          >
            Me contacter ↗
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-fg lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
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
