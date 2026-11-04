import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2">
          <SectionTitle
            index={1}
            label="À propos"
            title="Construire des expériences"
            highlight="qui ont du sens."
            className=""
          />

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
