import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Distributed Task Queue",
    overview: "A resilient, horizontally scalable task queue for background jobs.",
    stack: ["Go", "Redis", "PostgreSQL"],
    decisions: [
      "Used Redis streams for reliable delivery.",
      "Worker auto-scaling based on queue depth.",
      "Graceful failure handling and retries."
    ],
    Diagram: () => <div className="w-full h-24 bg-muted rounded-xl flex items-center justify-center text-muted-foreground">[Diagram]</div>
  },
  {
    title: "Event-Driven Notification System",
    overview: "Real-time notifications with event sourcing and fan-out.",
    stack: ["Node.js", "Kafka", "MongoDB"],
    decisions: [
      "Event sourcing for auditability.",
      "Kafka for high-throughput fan-out.",
      "Idempotent delivery logic."
    ],
    Diagram: () => <div className="w-full h-24 bg-muted rounded-xl flex items-center justify-center text-muted-foreground">[Diagram]</div>
  },
  {
    title: "API Gateway with Rate Limiting",
    overview: "A secure, performant API gateway with global rate limiting.",
    stack: ["Go", "Nginx", "Redis"],
    decisions: [
      "Token bucket algorithm for rate limiting.",
      "Centralized auth and logging.",
      "Zero-downtime config reloads."
    ],
    Diagram: () => <div className="w-full h-24 bg-muted rounded-xl flex items-center justify-center text-muted-foreground">[Diagram]</div>
  }
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
                <ul className="list-disc list-inside text-sm pl-2">
                  {proj.decisions.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
                <proj.Diagram />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 