"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import InteractiveCard from "@/components/shared/InteractiveCard";

const projects = [
  {
    title: "Nuvom - Distributed Task Queue",
    overview:
      "A developer-first, plugin-powered background job system for Python. Built for flexibility, clarity, and production-readiness without infrastructure overhead.",
    stack: ["Pydantic", "Prometheus", "Python", "Redis", "msgpack", "typer"],
    decisions: [
      "Plugin-first design: queues, storages, metrics, and hooks are all swappable.",
      "Supports job metadata, retries, tracebacks, rich CLI inspection and static task discovery.",
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function SystemsSection() {
  const rotations = ["rotate-[-2deg]", "rotate-[1.5deg]", "rotate-[-1deg]", "rotate-[2.5deg]", "rotate-[-1.5deg]", "rotate-[1deg]"];
  const lifts = ["-translate-y-0.5", "translate-y-0", "-translate-y-1", "translate-y-0.5", "-translate-y-0.5", "translate-y-0"];
  return (
    <section id="systems" className="relative z-0 max-w-5xl mx-auto py-20 px-4">
      <motion.h2 
        className="text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Systems I&apos;ve Built
      </motion.h2>
      <motion.div 
        className="grid gap-8 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((proj, idx) => (
          <motion.div key={proj.title} variants={cardVariants}>
            <InteractiveCard
              tiltDefault={idx % 2 === 0 ? "left" : "right"}
              className={`${rotations[idx % rotations.length]} ${lifts[idx % lifts.length]} transition-transform duration-300 hover:rotate-0 hover:-translate-y-1`}
            >
              <Card className="rounded-2xl h-full bg-transparent border-0 shadow-none">
                <CardHeader>
                  <CardTitle>{proj.title}</CardTitle>
                  <CardDescription>{proj.overview}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                    {proj.stack.map(s => <span key={s} className="bg-accent/40 px-2 py-0.5 rounded">{s}</span>)}
                  </div>
                  <ul className="list-disc list-inside text-sm pl-2">
                    {proj.decisions.map((d, j) => <li key={j}>{d}</li>)}
                  </ul>
                  {"links" in proj && Array.isArray((proj as any).links) && (
                    <div className="flex gap-3 pt-2">
                      {(proj as any).links.map((link: { label: string; url: string }) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-primary hover:underline"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </InteractiveCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 