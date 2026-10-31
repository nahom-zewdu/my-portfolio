export type ProjectLink = { label: string; url: string };

export type Project = {
  slug: string;
  title: string;
  overview: string;
  status: string;
  stack: string[];
  highlights: string[];
  details: { heading: string; paragraphs: string[] }[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "kms",
    title: "KMS / Ramp",
    overview:
      "Ramp is a developer onboarding tool designed to help engineers understand unfamiliar codebases. It builds bounded, evidence-backed views of how implementation surfaces relate, then uses those candidates to generate structured onboarding plans. The system is designed to distinguish observed code relationships from assumptions that still require human verification.",
    status: "In development",
    stack: ["Python", "Go", "Supabase", "LLM integration"],
    highlights: [
      "Company-scoped code indexing and evidence extraction",
      "Evidence composition across connected implementation surfaces",
      "Deterministic candidate selection and onboarding plan generation",
      "Persistent onboarding plans and progress",
    ],
    details: [
      {
        heading: "Evidence-grounded code understanding",
        paragraphs: [
          "An early approach to codebase understanding relied too heavily on directory proximity and path naming. Those signals were insufficient to establish that files participated in the same engineering workflow. Ramp moved toward using indexed implementation surfaces and available code relationships to construct bounded workflow candidates.",
          "The evidence model separates direct relationships from derived and inferred ones. A relationship is not automatically treated as proof of runtime behavior. The system preserves uncertainty so that engineers can inspect the underlying source, verify control and data flow, and identify gaps rather than receiving an apparently complete but unsupported explanation.",
        ],
      },
      {
        heading: "Deterministic onboarding plans",
        paragraphs: [
          "Workflow candidates are evaluated and sequenced through deterministic logic. Eligibility, risk, prerequisites, and verification signals are kept distinct from language-model output. This separation is intended to make plan generation more inspectable and reduce the risk of an LLM presenting unsupported relationships as established facts.",
          "Generated onboarding plans and their progress are persisted so that the work can be revisited. The current implementation represents an evolving product direction; it has not established measured improvements in onboarding time, developer productivity, or production-scale reliability.",
        ],
      },
    ],
    links: [{ label: "GitHub", url: "https://github.com/nahom-zewdu/KMS" }],
  },
  {
    slug: "blender-automation",
    title: "Blender Automation",
    overview:
      "An automated 3D asset-to-render workflow that connects asset discovery, AI-assisted requirement extraction, cloud file transfer, and headless Blender rendering. The implementation combines n8n, an LLM integration, Sketchfab assets, Google Drive, a Flask service, and Google Cloud infrastructure. Alongside the working rendering pipeline, the project explored the limitations of generating complex procedural animations through LLM-produced Blender scripts.",
    status: "Professional experience case study",
    stack: [
      "n8n",
      "LLM integration",
      "Sketchfab",
      "Google Drive",
      "Flask",
      "Blender Python",
      "Google Cloud Platform",
    ],
    highlights: [
      "Asset requirement extraction and Sketchfab retrieval",
      "Asset transfer through Google Drive",
      "Headless Blender execution using xvfb-run on a GCP VM",
      "Scene construction and PNG or MP4 rendering branches",
    ],
    details: [
      {
        heading: "An integrated asset-to-render pipeline",
        paragraphs: [
          "The workflow uses n8n to coordinate the process and an LLM to extract scene requirements for up to two assets. Sketchfab provides the 3D assets, while Google Drive handles file transfer between workflow stages. A Flask service deployed on a Google Cloud VM receives rendering jobs, downloads the required files, and invokes Blender in background mode through xvfb-run. Rendered outputs are then stored in Google Cloud Storage.",
          "The Blender-side implementation includes GLTF/GLB asset importing, scene setup, bounding-box-based normalization, camera and lighting configuration, and image or video rendering. The rendering code also includes GPU detection with a CPU fallback. This project brought together workflow orchestration, API development, file handling, 3D tooling, and cloud infrastructure in one automated process.",
        ],
      },
      {
        heading: "Investigating procedural animation",
        paragraphs: [
          "Extending the pipeline from static rendering to animation exposed a different class of problems. LLM-generated Blender scripts made incorrect assumptions about scene objects, armatures, animation context, and keyframe operations. Generating syntactically valid Python was not enough to guarantee a valid or convincing animation.",
          "The investigation moved toward template-based animation and controlled changes to object transforms and timing rather than relying entirely on unconstrained generated scripts. Some experiments required manual corrections and viewport playback validation. The work demonstrated the gap between generating a scene or animation script and producing a coherent animation with meaningful object interaction. Complex procedural animation was not fully solved.",
        ],
      },
    ],
    links: [{ label: "GitHub repository", url: "https://github.com/nahom-zewdu/blender-automation" }],
  },
  {
    slug: "guessit",
    title: "Guessit",
    overview:
      "A real-time multiplayer drawing and guessing game built with a React and TypeScript frontend and a Go WebSocket backend. The project combines room-based game coordination, live drawing and chat events, and an operational metrics dashboard. It provided a practical environment for exploring event-driven communication, concurrent server state, WebSocket handling, and observability in a real-time application.",
    status: "Released project",
    stack: ["Go", "WebSockets", "React", "TypeScript", "Zustand", "Redis"],
    highlights: [
      "WebSocket game protocol for room and player lifecycle",
      "Drawing and chat events",
      "Operational metrics and latency tracking",
      "Redis persists metrics; game and room state remain in memory",
    ],
    details: [
      {
        heading: "Real-time multiplayer architecture",
        paragraphs: [
          "The backend uses Go and WebSockets to coordinate game rooms, players, drawing events, and chat messages. The frontend is built with React and TypeScript and communicates with the backend over persistent WebSocket connections. Game and room state is maintained in memory, allowing the server to coordinate active sessions without introducing a separate persistent game-state database.",
          "The implementation required handling concurrent connections and shared room state, coordinating messages between participants, and keeping the frontend synchronized with server-side game events. The project was exercised through games with friends and developer communities, providing practical feedback across multiple rounds of play.",
        ],
      },
      {
        heading: "Operational visibility and metrics",
        paragraphs: [
          "The project includes an operational metrics system for observing active and peak connections, rooms, message counts, transferred bytes, drawing and chat activity, and latency. The backend uses atomic operations and mutex-protected state for concurrent metric collection. A bounded rolling latency buffer stores up to 5,000 measurements for percentile calculations, while the frontend also measures round-trip time through client-side ping messages.",
          "Redis is used for metrics persistence rather than as the primary game-state store. Metrics are persisted at startup and periodically, with the dashboard refreshing on a short polling interval. This separation made it possible to observe application activity without making Redis responsible for coordinating the game itself.",
        ],
      },
    ],
    links: [
      { label: "Play Guessit", url: "https://guessit-nu.vercel.app/" },
      {
        label: "Frontend repository (Skribble)",
        url: "https://github.com/nahom-zewdu/skribble-frontend",
      },
      {
        label: "Go backend",
        url: "https://github.com/nahom-zewdu/skribble-backend",
      },
    ],
  },
  {
    slug: "nuvom",
    title: "Nuvom",
    overview:
      "An open-source Python task execution framework designed around a lightweight, local-first approach to background work. Nuvom provides a task API, queue and result backends, worker execution, retries, scheduling, plugin hooks, and a CLI. Its development explored how to provide useful task-processing capabilities without requiring a Redis-backed infrastructure for the default local workflow.",
    status: "Paused; latest known package version 0.11.2",
    stack: ["Python", "SQLite"],
    highlights: [
      "@task, .delay(), and .schedule() APIs",
      "AST-based task discovery with manifest caching",
      "SQLite queue and result backend support",
      "Retry and timeout configuration",
      "Plugin architecture, CLI, and configuration support",
      "One-off, interval, and cron scheduling",
      "Automated PyPI release workflow",
    ],
    details: [
      {
        heading: "Local-first task execution",
        paragraphs: [
          "Nuvom exposes a decorator-based task interface, allowing functions to be registered as tasks and submitted for execution through its API. The framework includes task discovery through AST-based scanning and a manifest cache, a worker execution engine, and SQLite-backed queue and result storage. Its backend design supports pluggable storage implementations rather than tying the framework to a single persistence mechanism.",
          "The framework developed beyond basic task submission to include retry handling, timeout configuration, task metadata, execution hooks, plugin support, and a command-line interface with configuration support. It also includes one-off, interval, and cron-style scheduling. The goal was to make background task execution accessible in local development environments without requiring a separate Redis service as a default dependency.",
        ],
      },
      {
        heading: "Execution semantics and design trade-offs",
        paragraphs: [
          "Developing the execution engine required making task lifecycle behavior explicit: how tasks are discovered, queued, executed, retried, and represented through results. The project also exposed important limitations in Python's concurrency primitives. In particular, timing out a Future does not forcibly terminate the underlying running thread. A timeout at the Future interface must therefore not be confused with guaranteed cancellation of the work itself.",
          "Nuvom reached version 0.11.2 and was published on PyPI, including its scheduling functionality. Development has since been paused. The project should be understood as a published open-source framework and an exploration of task execution design, not as a claim of exactly-once processing, distributed multi-host coordination, or production-scale fault tolerance.",
        ],
      },
    ],
    links: [
      { label: "Documentation", url: "https://nuvom.netlify.app/" },
      { label: "GitHub", url: "https://github.com/nahom-zewdu/Nuvom" },
    ],
  },
];

export const legacyProjectSlugs: Record<string, string> = {
  "nuvom--distributed-task-scheduling-for-python": "nuvom",
  "guessit--real-time-multiplayer-drawing-game": "guessit",
  "ethlink--group-chat-platform": "/current-work",
  "loan-tracker-application": "/current-work",
};
