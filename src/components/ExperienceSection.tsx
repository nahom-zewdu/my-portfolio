import { motion } from "framer-motion";

const experiences = [
  {
    org: "Eskalate (Backend Intern)",
    tech: ["Go", "REST", "MongoDB", "JWT"],
    bullets: [
      "Built and optimized microservices for high-throughput data pipelines.",
      "Designed and implemented RESTFUL APIs for internal tooling.",
      "Improved system observability with custom metrics and tracing."
    ]
  },
  {
    org: "A2SV (Software Engineering Trainee)",
    tech: ["Python", "Algorithms", "System Design"],
    bullets: [
      "Completed intensive training in algorithms and system design.",
      "Collaborated on backend projects with a focus on code quality and testing.",
      "Solved 800+ algorithm problems on platforms like LeetCode and Codeforces.",
    ]
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
    <section id="experience" className="max-w-3xl mx-auto py-20 px-4">
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
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.li 
            key={exp.org} 
            className="bg-card rounded-2xl shadow p-6"
            variants={itemVariants}
            whileHover={{ 
              y: -4,
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex flex-wrap gap-2 items-center mb-2">
              <span className="font-semibold text-lg">{exp.org}</span>
              <span className="flex gap-1 text-xs font-mono text-muted-foreground">
                {exp.tech.map(t => <span key={t} className="bg-accent px-2 py-0.5 rounded">{t}</span>)}
              </span>
            </div>
            <ul className="list-disc list-inside text-sm pl-2 text-muted-foreground">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
} 