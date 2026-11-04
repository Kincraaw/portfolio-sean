export default function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">
          01 — À propos
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Construire des expériences
            <span className="text-accent"> qui ont du sens.</span>
          </h2>

          <div>
            <p className="leading-8 text-muted">
              Passionné par le développement web et les nouvelles
              technologies, j’aime imaginer et concevoir des solutions
              digitales modernes.
            </p>

            <p className="mt-5 leading-8 text-muted">
              Mon objectif : créer des interfaces intuitives,
              accessibles et performantes, tout en continuant
              à apprendre et à relever de nouveaux défis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
