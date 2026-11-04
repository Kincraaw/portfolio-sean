"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALE_COOKIE, switchLocalePath } from "@/i18n/config";
import { useI18n } from "@/i18n/client";

/** Bouton FR / EN : même page, dans l'autre langue (choix mémorisé 1 an). */
export default function LanguageSwitcher() {
  const { locale, t } = useI18n();
  const pathname = usePathname() ?? `/${locale}`;
  const target = locale === "fr" ? "en" : "fr";

  return (
    <Link
      href={switchLocalePath(pathname, target)}
      hrefLang={target}
      onClick={() => {
        document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; SameSite=Lax`;
      }}
      aria-label={t.nav.switchLanguage}
      title={t.nav.switchLanguage}
      className="flex h-10 items-center rounded-full border border-line-strong px-3 text-xs font-semibold tracking-wider transition hover:border-accent hover:text-accent"
    >
      <span className={locale === "fr" ? "text-accent" : "text-subtle"}>FR</span>
      <span className="mx-1.5 text-line-strong" aria-hidden="true">
        /
      </span>
      <span className={locale === "en" ? "text-accent" : "text-subtle"}>EN</span>
    </Link>
  );
}
