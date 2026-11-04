import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { localePath } from "@/i18n/config";
import { getI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return { title: t.notFound.metaTitle };
}

export default async function NotFound() {
  const { locale, t } = await getI18n();

  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-bg px-6 text-fg">
      <Navbar />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-glow-a blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-glow-b blur-[120px]" />

      <div className="relative mx-auto max-w-2xl py-32 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Compass
            size={40}
            className="animate-[spin_8s_linear_infinite] motion-reduce:animate-none"
            aria-hidden="true"
          />
        </div>

        <p className="mt-8 text-8xl font-bold tracking-tight md:text-9xl">
          4<span className="text-accent">0</span>4
        </p>

        <h1 className="mt-6 text-3xl font-semibold md:text-4xl">{t.notFound.title}</h1>

        <p className="mt-4 leading-8 text-muted">{t.notFound.text}</p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href={localePath(locale)}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-on-accent transition hover:-translate-y-1 hover:bg-accent-hover"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            {t.notFound.home}
          </Link>
          <Link
            href={localePath(locale, "/#projects")}
            className="rounded-full border border-line-strong px-7 py-4 font-semibold transition hover:-translate-y-1 hover:border-accent hover:text-accent"
          >
            {t.notFound.projects}
          </Link>
        </div>
      </div>
    </main>
  );
}
