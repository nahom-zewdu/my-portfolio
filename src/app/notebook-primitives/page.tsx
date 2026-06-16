import {
  ObservationBlock,
  ProjectStudy,
  CurrentFocus,
  ExperienceEntry,
  NotebookEntry,
} from "@/components/notebook";

export default function NotebookPrimitivesReference() {
  return (
    <div className="prose-content py-16 px-4">
      <h1 className="mb-12">Notebook Content Primitives</h1>

      <section className="mb-16">
        <h2 className="mb-8">ObservationBlock</h2>
        <p className="mb-6 text-muted-foreground">
          For documenting key observations, insights, and technical findings.
        </p>

        <ObservationBlock title="Distributed State Management" date="2024-06-15">
          <p>
            When designing distributed systems, state consistency becomes the primary challenge. Event
            sourcing provides a clean model for maintaining consistency across services, but introduces
            complexity around eventual consistency windows. The tradeoff is worth it when you can handle
            the operational complexity of replaying events.
          </p>
        </ObservationBlock>

        <ObservationBlock title="Task Queue Design">
          <p>
            Building a task queue system requires thinking deeply about failure modes. What happens
            when a task fails? How many retries? Should failed tasks go to a dead-letter queue? These
            decisions shape the entire system. Redis is simple enough for most use cases, but consider
            durability requirements carefully.
          </p>
        </ObservationBlock>
      </section>

      <section className="mb-16">
        <h2 className="mb-8">ProjectStudy</h2>
        <p className="mb-6 text-muted-foreground">
          For in-depth project write-ups and case studies.
        </p>

        <ProjectStudy
          title="Nuvom — Distributed Task Scheduler"
          overview="A lightweight task execution engine designed to replace infrastructure-heavy systems like Celery. Built for clarity and simplicity."
          stack={["Python", "Pydantic", "Redis", "Prometheus", "TypedDict"]}
          highlights={[
            "Dynamic scheduling with one-off, periodic, cron, and interval support",
            "Resilient worker pool with automatic retries and fault isolation",
            "Pluggable storage and queue backends, no Redis required",
            "Static task discovery using Python AST introspection",
          ]}
          links={[{ label: "View on GitHub", href: "#" }]}
        >
          <p>
            The core design principle was simplicity. Rather than building a complex system that handles
            every edge case, we focused on a clean API and predictable behavior. Workers can be deployed
            anywhere, and the task queue can use Redis or any other backend.
          </p>
        </ProjectStudy>
      </section>

      <section className="mb-16">
        <h2 className="mb-8">CurrentFocus</h2>
        <p className="mb-6 text-muted-foreground">
          For highlighting current work and areas of focus.
        </p>

        <CurrentFocus
          title="Event-Driven Architecture"
          status="active"
          areas={[
            "Message queue design and operational considerations",
            "Event schema versioning and backward compatibility",
            "Distributed tracing and observability",
          ]}
        >
          <p>
            Exploring how to build systems that respond to events rather than requests. The challenge
            is moving from request-response thinking to event-driven thinking, where the system needs to
            handle ordering, deduplication, and late arrivals.
          </p>
        </CurrentFocus>

        <CurrentFocus title="Developer Tooling" status="exploring">
          <p>
            Interested in building tools that make developers more productive. This could be CLIs,
            libraries, or frameworks that reduce boilerplate and make common patterns more accessible.
          </p>
        </CurrentFocus>
      </section>

      <section className="mb-16">
        <h2 className="mb-8">ExperienceEntry</h2>
        <p className="mb-6 text-muted-foreground">
          For work experience and roles.
        </p>

        <ExperienceEntry
          title="Backend & Systems Engineer"
          organization="BE Technology"
          period="2023 - Present"
          technologies={["Python", "GCP", "Automation", "n8n"]}
        >
          <p>
            Built automation systems integrating external APIs with structured data pipelines. Designed
            and deployed backend services on Google Cloud Platform. Implemented event-driven workflows
            and managed cloud infrastructure for cost efficiency.
          </p>
        </ExperienceEntry>

        <ExperienceEntry
          title="Backend Engineering Intern (Team Lead)"
          organization="Eskalate"
          period="2023"
          technologies={["Go", "MongoDB", "Docker", "Clean Architecture"]}
        >
          <p>
            Led a team of 3 engineers to design and deliver a backend system ahead of schedule. Built
            modular REST APIs using Clean Architecture principles. Implemented JWT-based authentication
            and Docker containerization.
          </p>
        </ExperienceEntry>
      </section>

      <section className="mb-16">
        <h2 className="mb-8">NotebookEntry</h2>
        <p className="mb-6 text-muted-foreground">
          For general notebook entries, thoughts, and technical notes.
        </p>

        <NotebookEntry title="On Code Review" category="Process" date="2024-06-10">
          <p>
            Code review is not about finding bugs. It's about sharing knowledge and maintaining
            standards. A good review asks questions, suggests alternatives, and explains reasoning.
            The reviewer should understand the context and the constraints. The author should be open
            to feedback and explain their decisions.
          </p>
        </NotebookEntry>

        <NotebookEntry title="Building for Scale" category="Systems">
          <p>
            Scale often reveals assumptions you didn't know you made. Build incrementally and measure.
            Don't optimize prematurely, but also don't ignore obvious inefficiencies. The goal is to
            build systems that are simple to reason about and easy to operate.
          </p>
        </NotebookEntry>
      </section>

      <section className="mb-16">
        <h2 className="mb-8">Using These Primitives</h2>
        <p className="mb-4">
          These components are designed to support the engineering notebook aesthetic:
        </p>
        <ul className="space-y-3">
          <li>
            <strong>Semantic structure</strong> — Each primitive has a clear purpose and shape
          </li>
          <li>
            <strong>Readable typography</strong> — Proper hierarchy, line heights, and spacing
          </li>
          <li>
            <strong>Minimal styling</strong> — Uses typography and spacing, no decorative elements
          </li>
          <li>
            <strong>Content-first</strong> — Focuses on the content, not the design
          </li>
          <li>
            <strong>Consistent rhythm</strong> — Vertical spacing follows the design system
          </li>
        </ul>
      </section>
    </div>
  );
}
