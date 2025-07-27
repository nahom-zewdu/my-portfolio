import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Nuvom - Distributed Task Queue",
    overview:
      "A developer-first, plugin-powered background job system for Python. Built for flexibility, clarity, and production-readiness without infrastructure overhead.",
    stack: ["Python", "Redis", "Prometheus", "Pydantic"],
    decisions: [
      "Plugin-first design: queues, storages, metrics, and hooks are all swappable.",
      "Supports job metadata, retries, tracebacks, rich CLI inspection and static task discovery."
    ],
    links: [
      { label: "Live Demo", href: "https://nuvom.netlify.app" },
      { label: "GitHub", href: "https://github.com/nahom-zewdu/Nuvom" }
    ],
    Diagram: () => (
      <div className="w-full h-24 bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
        [Nuvom System Diagram]
      </div>
    ),
  },

  {
    title: "GuessIt - Multiplayer Drawing Game",
    overview:
      "A real-time, turn-based game built with Django Channels and WebSockets for seamless live interaction.",
    stack: ["Django", "PostgreSQL", "Redis", "WebSockets"],
    decisions: [
      "WebSocket architecture via Django Channels and Redis layer.",
      "ASGI-first deployment with Daphne and Docker for scalability."
    ],
    links: [
      { label: "Live Demo", href: "https://guezzit.netlify.app" },
      { label: "GitHub", href: "https://github.com/nahom-zewdu/Online-Multiplayer-Drawing-Game" }
    ],
    Diagram: () => (
      <div className="w-full h-24 bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
        [Game Architecture Diagram]
      </div>
    ),
  },
  
  {
    title: "EthLink – Group Chat Platform",
    overview: "A minimalist web-based discussion app with room-based conversations and user profiles.",
    stack: ["Django", "HTML", "CSS", "JavaScript"],
    decisions: [
      "Searchable discussion rooms categorized by topic.",
      "Authenticated room creation with optional descriptions.",
      "User profiles with edit support and activity tracking."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/nahom-zewdu/EthLink" }
    ],
    Diagram: () => (
      <div className="w-full h-24 bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
        [Flow Diagram]
      </div>
    ),
  },

  {
    title: "Loan Tracker Application",
    overview:
      "A scalable backend service for managing loan workflows with secure JWT authentication, email verification, and admin controls.",
    stack: ["Go (Gin)", "MongoDB", "JWT", "SMTP"],
    decisions: [
      "Layered architecture with clean separation: domain, repository, use case, delivery.",
      "Robust JWT-based auth and middleware for secure API access.",
      "Flexible MongoDB data modeling with performant query filtering for admin workflows."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/nahom-zewdu/loan-tracker" }
    ],
    Diagram: () => (
      <div className="w-full h-24 bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
        [Loan Tracker System Diagram]
      </div>
    ),
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
    <section id="systems" className="max-w-5xl mx-auto py-20 px-4">
      <motion.h2 
        className="text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Systems I've Built
      </motion.h2>
      <motion.div 
        className="grid gap-8 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            variants={cardVariants}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <Card className="rounded-2xl shadow-md h-full">
              <CardHeader>
                <CardTitle>{proj.title}</CardTitle>
                <CardDescription>{proj.overview}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                  {proj.stack.map(s => <span key={s} className="bg-accent px-2 py-0.5 rounded">{s}</span>)}
                </div>

                <ul className="list-disc list-inside text-sm pl-2 font-mono text-muted-foreground">
                  {proj.decisions.map((d, j) => <li key={j}>{d}</li>)}
                </ul>

                <div className="mt-4 flex gap-4 ">
                  {proj.links.map(({ label, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline">
                      {label}
                    </a> 
                  ))}
                </div>
                {/* <proj.Diagram /> */}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 