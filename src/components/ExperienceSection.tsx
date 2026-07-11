"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Backend & Systems Engineer",
    company: "BE Technology",
    responsibilities: "Designed and operated lead generation and content automation systems; managed GCP infrastructure, IAM, and cost optimization.",
    systems: "Lead generation automation pipeline, news-to-video production system, event-driven async processing, cloud resource management.",
    impact: "Reduced content production time from hours to minutes; delivered structured prospect workflows at scale."
  },
  {
    title: "Backend Engineering Intern (Team Lead)",
    company: "Eskalate",
    responsibilities: "Led cross-functional team; designed and shipped modular REST APIs; enforced architecture standards and code quality.",
    systems: "Go REST APIs using Clean Architecture, JWT/OAuth authentication, Docker containerization, MongoDB persistence.",
    impact: "Delivered backend system ahead of schedule; reviewed 15+ PRs maintaining architectural consistency."
  },
  {
    title: "Software Engineering Trainee",
    company: "A2SV",
    responsibilities: "Completed intensive backend training; solved complex algorithm and system design problems.",
    systems: "Competitive programming foundations, data structures, system design patterns, backend architecture.",
    impact: "Mastered 700+ algorithm problems; demonstrated proficiency in system design and backend engineering."
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
        className="text-3xl font-bold mb-6 text-primary"
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
        {experiences.map((exp) => (
          <motion.li 
            key={exp.company}
            variants={itemVariants}
          >
            <Card className="rounded-xl h-full border border-border bg-card/80 backdrop-blur-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground mb-1">Responsibilities</p>
                    <p>{exp.responsibilities}</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Systems</p>
                    <p>{exp.systems}</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Impact</p>
                    <p>{exp.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
} 