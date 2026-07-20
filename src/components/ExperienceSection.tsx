const experiences = [
  {
    title: "Backend & Systems Engineer",
    company: "BE Technology",
    period: "2022–Present",
    summary:
      "Built and operated backend systems for automation and content workflows, with responsibility for infrastructure, reliability, and delivery across production services.",
  },
  {
    title: "Backend Engineering Intern (Team Lead)",
    company: "Eskalate",
    period: "2021",
    summary:
      "Led a small team in shaping modular backend services, enforcing architecture standards, and shipping reliable APIs ahead of schedule.",
  },
  {
    title: "Software Engineering Trainee",
    company: "A2SV",
    period: "2020",
    summary:
      "Developed core systems fundamentals through intensive backend training, problem solving, and architectural practice.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Experience</p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">Selected work</h2>
      </div>

      <div className="mt-10 space-y-10">
        {experiences.map((exp) => (
          <article key={exp.company + exp.period} className="border-b border-border pb-8 last:border-b-0 last:pb-0">
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                <p className="text-base text-muted-foreground">{exp.company}</p>
              </div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{exp.period}</p>
            </div>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/90">{exp.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
} 