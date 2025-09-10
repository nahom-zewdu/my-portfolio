"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Github, Globe, CheckCircle } from "lucide-react";

type ProjectLink = { label: string; url: string };
type Project = {
  title: string;
  overview: string;
  stack: string[];
  decisions: string[];
  links?: ProjectLink[];
  diagramUrl?: string;
};

const projects: Project[] = [
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
  return (
    <section id="projects" className="relative z-0 max-w-5xl mx-auto py-20 px-4">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((proj) => (
          <motion.div key={proj.title} variants={cardVariants}>
            <Card className="rounded-xl h-full border bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">{proj.title}</h3>
                  <p className="text-muted-foreground line-clamp-2">{proj.overview}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {proj.stack.map((s) => (
                    <div
                      key={s}
                      className="w-8 h-8 rounded-md bg-accent/40 text-muted-foreground flex items-center justify-center text-[10px] uppercase"
                      title={s}
                    >
                      {s.slice(0, 3)}
                    </div>
                  ))}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="px-0 text-primary hover:text-primary/90 hover:bg-transparent inline-flex items-center gap-2">
                      View More <ArrowRight className="w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl bg-background/75 backdrop-blur-xl border-border/50 shadow-xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">{proj.title}</DialogTitle>
                      <DialogDescription className="text-muted-foreground">{proj.overview}</DialogDescription>
                    </DialogHeader>

                    <div className="mt-2 grid gap-6">
                      <div className="aspect-video w-full rounded-xl border bg-muted/40 shadow-sm flex items-center justify-center text-sm text-muted-foreground">
                        Architecture Diagram
                      </div>

                      <div className="space-y-2">
                        {proj.decisions.slice(0, 6).map((d, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 mt-0.5 text-primary/80" />
                            <span className="text-foreground/90">{d}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {proj.stack.map((s) => (
                          <div
                            key={s}
                            className="w-9 h-9 rounded-md bg-accent/40 text-muted-foreground flex items-center justify-center text-[10px] uppercase transition shadow-xs ring-1 ring-transparent hover:ring-ring/50 hover:shadow-md"
                            title={s}
                          >
                            {s.slice(0, 3)}
                          </div>
                        ))}
                      </div>

                      {proj.links && proj.links.length > 0 && (
                        <div className="flex flex-wrap gap-3 pt-1">
                          {proj.links
                            .slice()
                            .sort((a, b) => {
                              const order = (l: string) =>
                                l.toLowerCase().includes("git") ? 0 : l.toLowerCase().includes("docs") ? 1 : 2;
                              return order(a.label) - order(b.label);
                            })
                            .map((link) => {
                              const label = link.label.toLowerCase();
                              const isGit = label.includes("git");
                              const isDocs = label.includes("doc");
                              const Icon = isGit ? Github : label.includes("live") ? Globe : FileText;
                              return (
                                <Button
                                  key={link.url}
                                  asChild
                                  variant={isGit ? "default" : "outline"}
                                  className="h-9"
                                >
                                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                                    <Icon className="w-4 h-4" /> {isGit ? "GitHub" : isDocs ? "Docs" : "Live Demo"}
                                  </a>
                                </Button>
                              );
                            })}
                        </div>
                      )}

                      <div className="pt-1 text-right">
                        <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Read Full Case Study →</a>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 