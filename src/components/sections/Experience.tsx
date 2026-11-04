import { Briefcase, GraduationCap, type LucideIcon } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { education, experiences, type TimelineItem } from "@/data/experience";

function Timeline({
  icon: Icon,
  heading,
  items,
}: {
  icon: LucideIcon;
  heading: string;
  items: TimelineItem[];
}) {
  return (
    <div>
      <h3 className="mb-8 flex items-center gap-3 text-xl font-semibold">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Icon size={20} aria-hidden="true" />
        </span>
        {heading}
      </h3>

      <ol className="relative ml-5 border-l border-line-strong">
        {items.map((item) => (
          <li key={`${item.title}-${item.period}`} className="reveal relative pb-10 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-bg bg-accent ring-4 ring-accent/15"
            />
            <p className="text-xs uppercase tracking-wider text-subtle">
              {item.period}
            </p>
            <h4 className="mt-2 text-lg font-semibold text-fg">{item.title}</h4>
            <p className="text-sm font-medium text-accent">{item.place}</p>

            {item.details && (
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-muted">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span aria-hidden="true" className="text-accent">
                      ›
                    </span>
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="parcours" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          index={4}
          label="Parcours"
          title="Mon chemin"
          highlight="jusqu’ici."
          className="reveal mb-14"
        />

        <div className="grid gap-16 lg:grid-cols-[3fr_2fr]">
          <Timeline icon={Briefcase} heading="Expériences" items={experiences} />
          <Timeline icon={GraduationCap} heading="Formations" items={education} />
        </div>
      </div>
    </section>
  );
}
