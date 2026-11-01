import Link from "next/link";

type Experience = {
  company: string;
  role: string;
  startDate?: string;
  endDate?: string;
  employmentType?: string;
  location?: string;
  summary: string;
  contributions: string[];
  projectHref?: string;
  projectLabel?: string;
};

const experiences: Experience[] = [
  {
    company: "BE Technology",
    role: "Software Engineer",
    location: "Remote",
    summary:
      "Build and maintain automation-oriented software systems spanning lead generation, media production, and 3D rendering. The work covers workflow design, local implementation, deployment, and cloud-side operation, with n8n and AI/LLM integrations used to connect practical business processes.",
    contributions: [
      "Developed lead-generation automation workflows to support business development processes.",
      "Built an automated news-to-YouTube pipeline using RSS feeds, OpenAI, ElevenLabs, n8n, and Google Cloud Platform to turn news articles into narrated video content.",
      "Built an AI-assisted 3D asset-to-render workflow: n8n and an LLM extract requirements for up to two assets, Sketchfab provides the assets, Google Drive handles file transfer, and a Flask service on a Google Cloud VM runs Blender headlessly using xvfb-run and stores rendered outputs in Google Cloud Storage.",
    ],
    projectHref: "/projects/blender-automation",
    projectLabel: "Blender automation case study",
  },
  {
    company: "Eskalate",
    role: "Backend Engineering Intern",
    summary:
      "Contributed to backend engineering for a knowledge management platform, working across backend application development, API functionality, authentication, data management, and AI-assisted knowledge retrieval. The internship involved implementing and improving backend capabilities as part of an engineering team.",
    contributions: [
      "Contributed to backend features supporting the platform's APIs, authentication, data management, and knowledge retrieval workflows.",
    ],
  },
  {
    company: "A2SV",
    role: "Software Engineering Trainee · Engineering Training",
    summary:
      "Completed software engineering training focused on data structures and algorithms, problem solving, programming fundamentals, and collaborative software development. The experience emphasized building strong engineering foundations through structured technical practice.",
    contributions: [
      "Strengthened algorithmic problem-solving skills through data structures and algorithms practice.",
      "Practiced software engineering fundamentals, including code organization, implementation, and problem decomposition.",
      "Worked in a collaborative engineering environment, developing experience with teamwork, technical communication, and shared project work.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Professional Experience</p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Systems, automation, and product engineering.</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          Experience across software systems, workflow automation, AI integrations, and engineering training.
        </p>
      </div>

      <div className="mt-10 space-y-10">
        {experiences.map((exp) => (
          <article key={exp.company} className="border-b border-border pb-8 last:border-b-0 last:pb-0">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-foreground">{exp.company}</h2>
              <p className="text-base text-muted-foreground">{exp.role}</p>
              {(exp.startDate || exp.employmentType || exp.location) && (
                <p className="text-sm text-muted-foreground mt-1">
                  {[
                    exp.startDate && `${exp.startDate} – ${exp.endDate ?? "Present"}`,
                    exp.employmentType,
                    exp.location,
                  ]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              )}
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