"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

const links = [
  // « / » devant l'ancre : les liens marchent aussi depuis les pages
  // de compétences. Le Contact (footer) est présent sur toutes les pages.
  { name: "Accueil", href: "/#home" },
  { name: "À propos", href: "/#about" },
  { name: "Compétences", href: "/#skills" },
  { name: "Parcours", href: "/#parcours" },
  { name: "CV", href: "/#cv" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/#home" className="text-xl font-bold tracking-tight">
          SEAN<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-muted transition hover:text-accent"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden rounded-full border border-accent/50 px-5 py-2 text-sm text-accent-soft transition hover:bg-accent hover:text-on-accent md:block"
          >
            Me contacter ↗
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-fg md:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-bg px-6 py-5 md:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-fg-soft hover:text-accent"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
