export type ProjectLink = { label: string; url: string };
export type Project = {
  title: string;
  overview: string;
  stack: string[];
  decisions: string[];
  links?: ProjectLink[];
  diagramUrl?: string;
};

export function toSlug(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export const projects: Project[] = [
  {
    title: "Nuvom — Distributed Task Scheduling for Python",
    overview:
      "A lightweight, production-ready task execution engine that replaces infrastructure-heavy systems like Celery. Designed for solo developers and plugin authors, with a focus on clarity, speed, and extensibility.",
    stack: ["Pydantic", "Prometheus", "Python", "Redis", "msgpack", "typer"],
    decisions: [
      "Dynamic scheduling (one-off, periodic, cron, interval)",
      "Resilient worker pool with retries, backoff, and fault isolation",
      "Pluggable storage and queue backends (Redis-free)",
      "Static task discovery using Python ASTs",
    ],
    links: [
      { label: "Live", url: "https://nuvom.netlify.app/" },
      { label: "GitHub", url: "https://github.com/nahom-zewdu/Nuvom" },
    ],
  },
  {
    title: "GuessIt - Multiplayer Drawing Game",
    overview:
      "A real-time, turn-based game built with Django Channels and WebSockets for seamless live interaction.",
    stack: ["JavaScript", "Python", "PostgreSQL", "Redis", "WebSockets", "AsyncIO"],
    decisions: [
      "WebSocket architecture via Django Channels and Redis layer.",
      "ASGI-first deployment with Daphne and Docker for scalability.",
    ],
    links: [
      { label: "Live", url: "https://guezzit.netlify.app/" },
      { label: "GitHub", url: "https://github.com/nahom-zewdu/Online-Multiplayer-Drawing-Game" },
    ],
  },
  {
    title: "EthLink – Group Chat Platform",
    overview:
      "A minimalist web-based discussion app with room-based conversations and user profiles.",
    stack: ["Python", "JavaScript", "Django", "HTML", "CSS"],
    decisions: [
      "Searchable discussion rooms categorized by topic.",
      "Authenticated room creation with optional descriptions.",
      "User profiles with edit support and activity tracking.",
    ],
    links: [{ label: "GitHub", url: "https://github.com/nahom-zewdu/Ethlink" }],
  },
  {
    title: "Loan Tracker Application",
    overview:
      "A scalable backend service for managing loan workflows with secure JWT authentication, email verification, and admin controls.",
    stack: ["Go (Gin)", "JWT", "MongoDB", "SMTP"],
    decisions: [
      "Layered architecture with clean separation: domain, repository, use case, delivery.",
      "Robust JWT-based auth and middleware for secure API access.",
      "Flexible MongoDB data modeling with performant query filtering for admin workflows.",
    ],
    links: [{ label: "GitHub", url: "https://github.com/nahom-zewdu/loan-tracker" }],
  },
];


