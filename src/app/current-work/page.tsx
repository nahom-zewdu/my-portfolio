import { ProjectStudy } from "@/components/notebook";

const projects = [
  {
    title: "Nuvom",
    overview:
      "A Python task execution engine designed for developers who need reliable background processing without the operational overhead of traditional distributed task queues.",
    highlights: [
      "Plugin-oriented architecture",
      "Automatic task discovery",
      "Retry and scheduling support",
      "Multiple serialization strategies",
      "Structured logging and observability",
      "Production-oriented execution model",
    ],
    links: [{ label: "Visit site", href: "https://nuvom.netlify.app/" }],
    children: (
      <>
        <p>
          Existing solutions often assume external infrastructure or prioritize distributed deployments over simplicity.
          Nuvom explores a lightweight architecture focused on portability, predictable execution, and developer experience.
        </p>
        <p>
          Designed around modular components including pluggable queue backends, result backends, task discovery,
          scheduling, retries, batching, observability, and configurable execution strategies. The architecture
          emphasizes extensibility while keeping the developer experience straightforward.
        </p>
        <p>Status: Actively evolving as an open-source infrastructure project.</p>
      </>
    ),
  },
  {
    title: "KMS",
    overview:
      "An AI-powered knowledge management system that transforms engineering conversations, repositories, and documentation into a searchable knowledge base for teams.",
    highlights: [
      "Multi-source knowledge ingestion",
      "AI-powered semantic retrieval",
      "Repository and documentation indexing",
      "Modular ingestion pipeline",
      "Extensible architecture for new data sources",
    ],
    links: [{ label: "View repository", href: "https://github.com/nahom-zewdu/KMS" }],
    children: (
      <>
        <p>
          Engineering knowledge is often fragmented across Slack, GitHub, documentation, and individual contributors.
          KMS focuses on preserving institutional knowledge and making it accessible through semantic search and retrieval.
        </p>
        <p>
          Built around an ingestion pipeline that processes multiple knowledge sources into a unified retrieval system.
          The architecture combines document processing, embeddings, vector search, and LLM-powered retrieval while
          remaining modular enough to support additional integrations.
        </p>
        <p>Status: Under active development.</p>
      </>
    ),
  },
  {
    title: "Guessit",
    overview:
      "A real-time multiplayer drawing and guessing game focused on synchronization, low-latency communication, and multiplayer state management.",
    highlights: [
      "Real-time multiplayer architecture",
      "WebSocket communication",
      "Room management",
      "Live synchronization",
      "Event-driven game engine",
    ],
    links: [{ label: "Open app", href: "https://guessit-nu.vercel.app/" }],
    children: (
      <>
        <p>
          Building responsive multiplayer applications requires careful handling of synchronization, game state consistency,
          and real-time communication between multiple participants.
        </p>
        <p>
          Designed around WebSocket-based communication with centralized game state management, room coordination, player
          synchronization, and event-driven interactions to provide a smooth multiplayer experience.
        </p>
        <p>Status: Functional deployment with ongoing improvements.</p>
      </>
    ),
  },
];

export default function CurrentWorkPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 space-y-2">
        <p className="text-sm uppercase tracking-[0.24em] text-accent">Selected Projects</p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">A selection of systems built around technical problems.</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          A selection of systems I&apos;ve built to explore backend infrastructure, developer tooling, and knowledge systems.
          Each project represents solving a technical problem rather than showcasing a technology stack.
        </p>
      </div>

      <div>
        {projects.map((project) => (
          <ProjectStudy
            key={project.title}
            title={project.title}
            overview={project.overview}
            highlights={project.highlights}
            links={project.links}
          >
            {project.children}
          </ProjectStudy>
        ))}
      </div>
    </section>
  );
}

