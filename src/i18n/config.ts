export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

/** Nom du cookie qui mémorise la langue choisie avec le bouton FR/EN. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

/** Texte disponible dans chaque langue. */
export type Localized<T = string> = Record<Locale, T>;

/** Retourne la version d'un texte dans la langue demandée. */
export function tr<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

/**
 * Construit un lien vers une page dans une langue donnée.
 * localePath("en", "/projets/portfolio") → "/en/projets/portfolio"
 * localePath("fr", "/#about")            → "/fr#about"
 */
export function localePath(locale: Locale, path = "/"): string {
  if (path === "/") return `/${locale}`;
  if (path.startsWith("/#")) return `/${locale}${path.slice(1)}`;
  return `/${locale}${path}`;
}

/** Remplace la langue au début d'un chemin : "/fr/projets/x" → "/en/projets/x". */
export function switchLocalePath(pathname: string, target: Locale): string {
  const rest = pathname.replace(/^\/(fr|en)(?=\/|$)/, "");
  return `/${target}${rest}`;
}

/** Balises hreflang + URL canonique d'une page, pour Google. */
export function alternatesFor(locale: Locale, path = "/") {
  return {
    canonical: localePath(locale, path),
    languages: {
      fr: localePath("fr", path),
      en: localePath("en", path),
      "x-default": localePath(defaultLocale, path),
    },
  };
}
