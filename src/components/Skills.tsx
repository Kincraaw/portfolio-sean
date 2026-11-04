
const skills = [
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Tailwind CSS", category: "Design" },
  { name: "HTML / CSS", category: "Frontend" },
  { name: "Git / GitHub", category: "Tools" },
  { name: "Node.js", category: "Backend" },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
          02 — Compétences
        </p>

        <h2 className="mb-14 text-4xl font-bold md:text-5xl">
          Mon environnement <span className="text-cyan-400">technique.</span>
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-cyan-400/5"
            >
              <span className="text-xs text-gray-500">
                0{index + 1} / {skill.category}
              </span>

              <h3 className="mt-6 text-xl font-semibold text-gray-200 transition group-hover:text-cyan-400">
                {skill.name}
              </h3>

              <div className="mt-6 h-1 w-10 rounded-full bg-cyan-400 transition-all group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
