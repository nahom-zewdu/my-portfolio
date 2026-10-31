import { projects } from "@/data/projects";
import { ProjectStudy } from "@/components/notebook";

export default function CurrentWorkPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 space-y-2">
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Selected Work</p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Systems, tools, and product work.</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          A closer look at engineering decisions across codebase understanding, automation, real-time products, and task execution.
        </p>
      </div>

      <div>
        {projects.map((project) => (
          <ProjectStudy
            key={project.slug}
            title={project.title}
            status={project.status}
            overview={project.overview}
            highlights={project.highlights}
            stack={project.stack}
            links={project.links.map(({ label, url }) => ({ label, href: url }))}
            caseStudyHref={`/projects/${project.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
