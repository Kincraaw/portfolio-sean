"use client";

import { useParams } from "next/navigation";
import { defaultLocale, isLocale, type Locale } from "./config";
import { dictionaries } from "./dictionaries";

/** Langue + textes de l'interface (Client Components). */
export function useI18n() {
  const params = useParams<{ lang?: string }>();
  const locale: Locale = isLocale(params?.lang) ? params.lang : defaultLocale;
  return { locale, t: dictionaries[locale] };
}
