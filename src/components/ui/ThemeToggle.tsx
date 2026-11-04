"use client";

import { useLayoutEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useI18n } from "@/i18n/client";

type Theme = "light" | "dark";

let transitionTimer: number | undefined;

function getPreferredTheme(): Theme {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch {}
  return matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function ThemeToggle() {
  const { t } = useI18n();

  // En dev, le Strict Mode de React efface l'attribut posé par le script
  // inline : on le réapplique avant l'affichage. Sans effet en production.
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", getPreferredTheme());
  }, []);

  function toggle() {
    const root = document.documentElement;
    const next: Theme =
      root.getAttribute("data-theme") === "light" ? "dark" : "light";

    // Active un fondu des couleurs sur toute la page pendant le changement,
    // puis le retire pour ne pas ralentir les effets de survol.
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduceMotion) {
      root.classList.add("theme-transition");
      window.clearTimeout(transitionTimer);
      transitionTimer = window.setTimeout(
        () => root.classList.remove("theme-transition"),
        600,
      );
    }

    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  // Les deux icônes sont superposées ; le CSS anime l'une qui sort
  // (rotation + réduction) pendant que l'autre entre. Aucune différence
  // entre le rendu serveur et le client.
  const icon =
    "absolute transition-all duration-500 ease-out motion-reduce:transition-none";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.theme.toggle}
      title={t.theme.title}
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-line-strong text-fg-soft transition hover:border-accent hover:text-accent"
    >
      <Sun
        size={18}
        className={`${icon} rotate-90 scale-0 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100`}
      />
      <Moon
        size={18}
        className={`${icon} rotate-0 scale-100 opacity-100 dark:-rotate-90 dark:scale-0 dark:opacity-0`}
      />
    </button>
  );
}
