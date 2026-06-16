import { CurrentFocus } from "@/components/notebook";

export default function CurrentWorkPage() {
  return (
    <section className="prose-content py-16 px-4">
      <h1 className="mb-12">Current Focus</h1>

      <CurrentFocus
        title="Event-Driven Architecture & Async Systems"
        status="active"
        areas={[
          "Message queue design patterns and operational tradeoffs",
          "Event schema versioning and backward compatibility",
          "Distributed tracing and observability for async workloads",
          "Consumer lag monitoring and failure recovery",
        ]}
      >
        <p>
          Building systems that respond to events rather than requests requires rethinking common patterns.
          The challenge is managing ordering guarantees, deduplication, and late arrivals while keeping the
          system simple to reason about. Currently exploring how to model event-driven workflows in Go and Python,
          with emphasis on testability and operational clarity.
        </p>
      </CurrentFocus>

      <CurrentFocus
        title="Developer Tooling & Automation Pipelines"
        status="active"
        areas={[
          "Building CLIs that reduce boilerplate and automate repetitive tasks",
          "Designing automation pipelines that integrate external services",
          "Task scheduling systems for complex workflows",
          "Observability and monitoring for automated processes",
        ]}
      >
        <p>
          Building tools that make developers more productive. This includes designing clean APIs, reducing
          cognitive load, and making common patterns explicit. Interested in automation frameworks that handle
          edge cases gracefully and provide good failure visibility.
        </p>
      </CurrentFocus>

      <CurrentFocus
        title="Distributed Systems at Scale"
        status="exploring"
        areas={[
          "Consistency models and tradeoffs (strong vs eventual)",
          "Consensus algorithms and their practical implications",
          "Database design for distributed workloads",
          "Cost-aware infrastructure and resource optimization",
        ]}
      >
        <p>
          Understanding how systems behave under real-world constraints: network partitions, partial failures,
          and operational complexity. Studying how companies scale systems from thousands to millions of requests
          per second, and what decisions enable that growth.
        </p>
      </CurrentFocus>

      <CurrentFocus
        title="Production Systems & Observability"
        status="active"
        areas={[
          "Structured logging and log aggregation patterns",
          "Metrics collection and alerting strategies",
          "Incident response and postmortem culture",
          "Making operational tradeoffs explicit in code",
        ]}
      >
        <p>
          The gap between what code does in tests and what it does in production is where most problems live.
          Focusing on systems that are easy to operate, debug, and improve. This means designing for observability
          from the start, not bolting it on later.
        </p>
      </CurrentFocus>
    </section>
  );
}

