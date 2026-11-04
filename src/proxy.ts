import { NextResponse, type NextRequest } from "next/server";

// Gardé autonome (pas d'import du reste de l'app), comme recommandé pour Proxy.
const locales = ["fr", "en"];
const defaultLocale = "fr";
const LOCALE_COOKIE = "NEXT_LOCALE";

/** Langue préférée : choix mémorisé (bouton FR/EN), sinon langue du navigateur. */
function getPreferredLocale(request: NextRequest): string {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  if (saved && locales.includes(saved)) return saved;

  // "en-US,en;q=0.9,fr;q=0.8" → langues triées par préférence
  const header = request.headers.get("accept-language") ?? "";
  const preferred = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.slice(0, 2).toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q)
    .find(({ lang }) => locales.includes(lang));

  return preferred?.lang ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  // Ex. "/" → "/fr", "/projets/portfolio" → "/en/projets/portfolio"
  const url = request.nextUrl.clone();
  url.pathname = `/${getPreferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Tout sauf les fichiers internes, les fichiers avec extension (CV, images…)
    // et les fichiers de métadonnées générés (icônes, image de partage).
    "/((?!_next|.*\\..*|opengraph-image|apple-icon|icon).*)",
  ],
};
