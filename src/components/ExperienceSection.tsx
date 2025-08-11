import { motion } from "framer-motion";
import InteractiveCard from "@/components/shared/InteractiveCard";

const experiences = [
  {
    org: "Eskalate (Backend Intern)",
    tech: ["Go", "gRPC", "PostgreSQL"],
    bullets: [
      "Built and optimized microservices for high-throughput data pipelines.",
      "Designed and implemented gRPC APIs for internal tooling.",
      "Improved system observability with custom metrics and tracing."
    ]
  },
  {
    org: "A2SV (Software Engineering Trainee)",
    tech: ["Python", "Algorithms", "System Design"],
    bullets: [
      "Completed intensive training in algorithms and system design.",
      "Collaborated on backend projects with a focus on code quality and testing."
    ]
  },
  {
    org: "Tigat (Automation System)",
    tech: ["Node.js", "MongoDB", "Docker"],
    bullets: [
      "Developed automation for a subscription-based service platform.",
      "Implemented CI/CD pipelines and containerized deployments.",
      "Reduced manual ops by 80% through workflow automation."
    ]
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative z-0 max-w-3xl mx-auto py-20 px-4">
      <motion.h2 
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
      <motion.ul 
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experiences.map((exp, idx) => (
          <motion.li 
            key={exp.org}
            variants={itemVariants}
          >
            <InteractiveCard tiltDefault={idx % 2 === 0 ? "left" : "right"}>
              <div className="rounded-2xl p-6 bg-transparent border-0 shadow-none">
                <div className="flex flex-wrap gap-2 items-center mb-2">
                  <span className="font-semibold text-lg">{exp.org}</span>
                  <span className="flex gap-1 text-xs font-mono text-muted-foreground">
                    {exp.tech.map(t => <span key={t} className="bg-accent/40 px-2 py-0.5 rounded">{t}</span>)}
                  </span>
                </div>
                <ul className="list-disc list-inside text-sm pl-2 text-muted-foreground">
                  {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            </InteractiveCard>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
} 