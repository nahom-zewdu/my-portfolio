"use client";

export default function AboutSection() {
  return (
    <section className="prose-content py-16 px-4">
      <h1 className="mb-12">About</h1>

      <div className="space-y-8 text-base leading-relaxed text-foreground/90">
        <p>
          I build real-time systems, automation pipelines, and developer tools using Python and Go, with a focus on
          scalability, reliability, and clean architecture.
        </p>
        <p>
          My work spans backend services, distributed processing, and cloud infrastructure—designing systems that handle
          asynchronous workloads, integrate external services, and operate predictably in production environments. I've
          built everything from task queue systems and real-time applications to automation-heavy pipelines that reduce
          manual workflows and improve operational efficiency.
        </p>
        <p>
          I've worked on systems deployed on Google Cloud Platform, including Compute Engine, Cloud Functions, and GCS,
          and have experience managing infrastructure, permissions, and cost-aware system design.
        </p>
        <p>
          I'm particularly interested in event-driven systems, developer tooling, and AI-integrated workflows, and I
          approach engineering with a focus on clarity, practical design decisions, and long-term maintainability.
        </p>
      </div>
    </section>
  );
} 