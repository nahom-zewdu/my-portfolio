"use client";
import { ExperienceEntry } from "@/components/notebook";

export default function ExperienceSection() {
  return (
    <section className="prose-content py-16 px-4">
      <h1 className="mb-12">Experience</h1>

      <ExperienceEntry
        title="Backend & Systems Engineer"
        organization="BE Technology"
        technologies={["Python", "GCP", "Automation", "Event-driven Systems"]}
      >
        <p className="mb-4">
          Designed and built automation systems that integrate external services with structured data pipelines.
          Core responsibilities included: architecting event-driven workflows, managing cloud infrastructure on GCP,
          and ensuring cost-efficient operation of production systems.
        </p>
        <p className="mb-4">
          <strong>Systems built:</strong>
        </p>
        <ul className="space-y-2 ml-4 mb-4">
          <li>Lead generation pipeline integrating Google Maps, business registries, and external APIs into Notion</li>
          <li>Fully automated news-to-video pipeline using n8n, reducing content production time from hours to minutes</li>
          <li>Event-driven async processing pipelines for scalable automation</li>
        </ul>
        <p>
          <strong>Technical impact:</strong> Reduced manual workflows by orders of magnitude, enabling the team to
          focus on strategy rather than execution. Established patterns for reliable automation at scale.
        </p>
      </ExperienceEntry>

      <ExperienceEntry
        title="Backend Engineering Intern (Team Lead)"
        organization="Eskalate"
        technologies={["Go", "MongoDB", "Docker", "Clean Architecture"]}
      >
        <p className="mb-4">
          Led a team of 3 engineers to design and deliver a backend system ahead of schedule. Responsibilities included
          architecture decisions, code review, and maintaining code quality standards across the codebase.
        </p>
        <p className="mb-4">
          <strong>Systems built:</strong>
        </p>
        <ul className="space-y-2 ml-4 mb-4">
          <li>Modular REST APIs in Go using Clean Architecture principles</li>
          <li>JWT and OAuth authentication systems</li>
          <li>Docker containerization and staging environment setup</li>
        </ul>
        <p>
          <strong>Technical impact:</strong> Established architectural patterns that improved maintainability.
          Reviewed 15+ pull requests, enforcing standards and catching issues early. Project delivered ahead of schedule.
        </p>
      </ExperienceEntry>

      <ExperienceEntry
        title="Software Engineering Trainee"
        organization="A2SV"
        technologies={["Python", "Go", "Algorithms", "System Design"]}
      >
        <p className="mb-4">
          Intensive training program focused on building strong fundamentals in data structures, algorithms, and
          distributed systems thinking.
        </p>
        <p>
          <strong>Outcomes:</strong> Solved 700+ algorithmic problems across competitive programming platforms.
          Collaborated on backend-focused projects with emphasis on clean code and testing practices.
        </p>
      </ExperienceEntry>
    </section>
  );
} 