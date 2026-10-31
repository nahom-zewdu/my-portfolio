import { notFound, redirect } from "next/navigation";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { legacyProjectSlugs, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project && legacyProjectSlugs[slug]) {
    const destination = legacyProjectSlugs[slug];
    redirect(destination.startsWith("/") ? destination : `/projects/${destination}`);
  }
  if (!project) return notFound();

  return <ProjectCaseStudy project={project} />;
}

