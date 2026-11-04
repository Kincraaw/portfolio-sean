
export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyan-400">
          03 — Contact
        </p>

        <h2 className="max-w-3xl text-4xl font-bold md:text-6xl">
          Un projet en tête ?
          <span className="text-cyan-400"> Parlons-en.</span>
        </h2>

        <a
          href="mailto:contact@example.com"
          className="mt-10 inline-block rounded-full bg-cyan-400 px-8 py-4 font-semibold text-[#080b12] transition hover:-translate-y-1 hover:bg-cyan-300"
        >
          M'envoyer un email ↗
        </a>

        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Sean. Tous droits réservés.</p>
          <p>Designed & developed with passion.</p>
        </div>
      </div>
    </footer>
  );
}
