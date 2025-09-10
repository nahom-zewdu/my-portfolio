import { notFound } from "next/navigation";
import { projects, toSlug } from "@/data/projects";

export function generateStaticParams() {
  return projects.map(p => ({ slug: toSlug(p.title) }));
}

export default function ProjectCaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => toSlug(p.title) === params.slug);
  if (!project) return notFound();

  return (
    <article className="max-w-3xl mx-auto py-16 px-4 prose dark:prose-invert">
      <h1>{project.title}</h1>
      <p className="lead">{project.overview}</p>
      <figure className="my-6">
        <div className="aspect-video w-full rounded-xl border bg-muted/40" />
        <figcaption className="text-sm text-muted-foreground mt-2">Architecture diagram</figcaption>
      </figure>
      <h2>Highlights</h2>
      <ul>
        {project.decisions.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
      {project.links && project.links.length > 0 && (
        <p>
          {project.links.map(l => (
            <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="mr-4 underline">
              {l.label}
            </a>
          ))}
        </p>
      )}
    </article>
  );
}


