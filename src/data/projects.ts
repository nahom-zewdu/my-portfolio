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
      "An n8n-orchestrated workflow that extracts 3D asset requirements, retrieves assets, and renders scenes through a Flask service running Blender headlessly. A separate procedural animation investigation remained incomplete.",
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
        heading: "Implemented rendering workflow",
        paragraphs: [
          "n8n orchestrated requirement extraction with an LLM, Sketchfab asset retrieval, Google Drive transfer, and a Flask rendering service on a Google Cloud VM. The service launched Blender with xvfb-run and used Blender Python to import GLB/GLTF assets, construct scenes, configure cameras and lighting, and render PNG or MP4 outputs to Google Cloud Storage.",
          "This describes the implemented asset-to-render workflow; it does not imply production-grade infrastructure or a fully autonomous animation system.",
        ],
      },
      {
        heading: "Procedural animation investigation",
        paragraphs: [
          "A basketball scenario was used to investigate procedural character animation. The work did not resolve character-rig discovery, scale, ground alignment, orientation, physics, or character-object interaction. It remains an investigation rather than a finished animation capability.",
        ],
      },
    ],
    links: [{ label: "GitHub repository", url: "https://github.com/nahom-zewdu/blender-automation" }],
  },
  {
    slug: "guessit",
    title: "Guessit",
    overview:
      "A real-time multiplayer drawing-and-guessing game with a Go WebSocket backend and a React/TypeScript frontend. The game has been played in sessions with school friends and developer communities, with feedback and feature suggestions gathered from participants.",
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
        heading: "Architecture",
        paragraphs: [
          "The Go backend manages rooms, players, game events, and WebSocket communication. The React and TypeScript frontend uses Zustand for client-side game state.",
          "Room and game state live in memory. Redis is used to persist operational metrics, not game sessions; persistent player sessions and reconnect restoration are not implemented.",
        ],
      },
      {
        heading: "Use and measurement",
        paragraphs: [
          "The game has been used for multiple rounds with school friends and developer communities. Participants shared feedback and suggestions for further features.",
          "Vercel recorded 1,792 requests between May and October 2026. This is a request count, not a count of unique visitors or players.",
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
      "An open-source Python task execution framework with a decorator-based API, configurable scheduling, and pluggable queue and result backends.",
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
        heading: "Execution model",
        paragraphs: [
          "Tasks are declared with @task and can be dispatched with .delay() or scheduled with .schedule(). The CLI discovers decorated functions through AST inspection and caches a manifest.",
          "The framework includes SQLite queue and result backends, configurable retries and timeouts, plugin support, and one-off, interval, and cron scheduling. The repository includes an automated PyPI release workflow.",
        ],
      },
      {
        heading: "Project status",
        paragraphs: [
          "Nuvom is a released open-source project that has been paused for over a year. Its latest known package version is 0.11.2; it is not presented as an actively evolving product.",
          "This case study does not claim multi-host worker clustering, exactly-once execution, safe termination of timed-out Python threads, Prometheus monitoring, or benchmarked throughput.",
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
