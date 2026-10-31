import Link from "next/link";

const experiences = [
  {
    company: "BE Technology",
    role: "Software Engineer",
    summary:
      "Designed, developed, maintained, and optimized software systems. The work included automation workflows and internal tools, including n8n; AI/LLM integrations; maintainable implementation; and reliability and documentation.",
    contributions: [
      "Built workflows connecting asset requirements, retrieval, transfer, and Blender rendering.",
      "Investigated procedural character animation separately from the implemented rendering workflow.",
    ],
    projectHref: "/projects/blender-automation",
    projectLabel: "Blender automation case study",
  },
  {
    company: "Eskalate",
    role: "Backend Engineering Intern",
    summary:
      "Contributed to backend development for a knowledge management platform, including API, authentication, data-management, and AI-assisted knowledge-retrieval work as part of an engineering team.",
    contributions: [
      "Worked across backend features and the platform's knowledge retrieval capabilities.",
    ],
  },
  {
    company: "A2SV",
    role: "Software Engineering Trainee · Engineering training",
    summary:
      "Engineering training focused on problem solving, software engineering fundamentals, and collaborative development.",
    contributions: [
      "Developed algorithmic problem-solving and software design skills.",
      "Practiced collaborative project work and code review.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Professional Experience</p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">Systems, automation, and product engineering.</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          Experience across software systems, workflow automation, AI integrations, and engineering training.
        </p>
      </div>

      <div className="mt-10 space-y-10">
        {experiences.map((exp) => (
          <article key={exp.company} className="border-b border-border pb-8 last:border-b-0 last:pb-0">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
              <p className="text-base text-muted-foreground">{exp.role}</p>
            </div>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/90">{exp.summary}</p>
            <ul className="mt-4 space-y-2 text-base leading-relaxed text-muted-foreground">
              {exp.contributions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 text-accent">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {exp.projectHref && (
              <p className="mt-4">
                <Link
                  href={exp.projectHref}
                  className="text-sm text-accent underline underline-offset-4"
                >
                  {exp.projectLabel}
                </Link>
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
} 