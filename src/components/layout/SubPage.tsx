import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

type SubPageProps = {
  back: { href: string; label: string };
  children: React.ReactNode;
};

/** Gabarit commun aux pages secondaires (compétences, projets…). */
export default function SubPage({ back, children }: SubPageProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-bg text-fg">
      <Navbar />

      <section className="relative px-6 pb-24 pt-40">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-glow-a blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 top-96 h-96 w-96 rounded-full bg-glow-b blur-[120px]" />

        <div className="relative mx-auto max-w-5xl">
          <Link
            href={back.href}
            className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {back.label}
          </Link>

          {children}
        </div>
      </section>

      <Footer />
    </main>
  );
}
