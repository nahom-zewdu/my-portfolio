import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <article className="prose-content py-16 px-4">
      <header className="mb-12">
        <p className="text-sm uppercase tracking-[0.24em] text-accent">{project.status}</p>
        <h1 className="mb-4">{project.title}</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {project.overview}
        </p>
      </header>

      {project.highlights.length > 0 && (
        <section className="mb-12 border-b border-border pb-10">
          <h2 className="mb-4">Engineering highlights</h2>
          <ul className="space-y-3">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="text-base leading-relaxed text-foreground/90">
                {highlight}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mb-12 border-b border-border pb-10">
        <h2 className="mb-4">Implementation notes</h2>
        <div className="space-y-8">
          {project.details.map((section) => (
            <section key={section.heading}>
              <h3 className="mb-3 text-xl font-semibold">{section.heading}</h3>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-foreground/90">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4">Technical areas</h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          {project.stack.join(" · ")}
        </p>
      </section>

      {project.links.length > 0 && (
        <nav aria-label={`${project.title} project links`} className="flex flex-wrap gap-5">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-accent underline underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}

      <p className="mt-10">
        <Link href="/current-work" className="text-sm text-muted-foreground underline underline-offset-4">
          Back to selected work
        </Link>
      </p>
    </article>
  );
}
