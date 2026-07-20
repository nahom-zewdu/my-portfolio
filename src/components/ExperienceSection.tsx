const experiences = [
  {
    company: "BE Technology",
    role: "Software Engineer",
    summary:
      "Design and develop backend systems, internal engineering tools, workflow automation, and AI-assisted solutions. The work emphasizes maintainable architecture, scalable implementation, and practical software engineering for production environments.",
    contributions: [
      "Built backend services for internal platforms.",
      "Developed automation workflows to reduce repetitive engineering tasks.",
      "Integrated AI capabilities into software solutions where appropriate.",
      "Improved maintainability through clean architecture and documentation.",
      "Collaborated on production software delivery.",
    ],
  },
  {
    company: "Eskalate",
    role: "Backend Engineering Intern",
    summary:
      "Worked on backend development for a knowledge management platform, contributing to API development, authentication, data management, and AI-powered knowledge retrieval features while collaborating within an engineering team.",
    contributions: [
      "Contributed to backend feature development.",
      "Worked with authentication and authorization systems.",
      "Participated in designing scalable backend architecture.",
      "Integrated AI-assisted knowledge management functionality.",
      "Collaborated using modern engineering workflows.",
    ],
  },
  {
    company: "A2SV",
    role: "Software Engineering Trainee",
    summary:
      "Strengthened algorithmic problem solving, software engineering fundamentals, and collaborative development through intensive technical training and team-based projects.",
    contributions: [
      "Practiced advanced data structures and algorithms.",
      "Solved challenging programming problems consistently.",
      "Built collaborative software projects.",
      "Strengthened software design fundamentals.",
      "Improved code quality and review practices.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Professional Experience</p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">A record of building backend systems and engineering tools.</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          My professional work has centered around building backend systems, internal platforms, and automation tooling while continuously exploring distributed systems, developer infrastructure, and applied AI.
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
          </article>
        ))}
      </div>
    </section>
  );
} 