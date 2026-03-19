"use client";
import { motion } from "framer-motion";
import InteractiveCard from "@/components/shared/InteractiveCard";

const experiences = [
  {
    company: "BE Technology",
    role: "Backend & Systems Engineer",
    stack: "Python, GCP, n8n, Automation Systems",
    bullets: [
      "Built a lead generation automation system integrating Google Maps, business registries, and external APIs, delivering structured prospects into Notion with automated follow-ups.",
      "Designed and deployed a fully automated news-to-video pipeline using n8n, ElevenLabs, JSON2Video, Cloudinary, and Google Drive, reducing content production time from hours to minutes.",
      "Deployed and operated backend services on Google Cloud Platform (Compute Engine, Cloud Functions, GCS).",
      "Implemented event-driven workflows and async processing pipelines for scalable automation.",
      "Managed IAM roles, cloud resources, and billing to ensure cost-efficient and reliable system operation."
    ]
  },
  {
    company: "Eskalate",
    role: "Backend Engineering Intern (Team Lead)",
    stack: "Go, MongoDB, Docker, JWT, Clean Architecture",
    bullets: [
      "Led a team of 3 engineers to design and deliver a backend system ahead of schedule.",
      "Built modular REST APIs in Go using Clean Architecture, improving maintainability and scalability.",
      "Designed and implemented authentication systems using JWT and OAuth.",
      "Reviewed and approved 15+ pull requests, enforcing architecture standards and code quality.",
      "Containerized services with Docker and contributed to staging environment setup."
    ]
  },
  {
    company: "A2SV",
    role: "Software Engineering Trainee",
    stack: "Python, Go, Algorithms, System Design",
    bullets: [
      "Completed intensive training in data structures, algorithms, and system design.",
      "Solved 700+ problems across competitive programming platforms.",
      "Collaborated on backend-focused projects with emphasis on code quality and testing."
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
        {experiences.map((exp, idx) => (
          <motion.li 
            key={`${exp.company}-${exp.role}`}
            variants={itemVariants}
          >
            <InteractiveCard tiltDefault={idx % 2 === 0 ? "left" : "right"}>
              <div className="rounded-2xl p-6 bg-transparent border-0 shadow-none">
                <div className="mb-4 space-y-1">
                  <h3 className="text-lg font-semibold text-foreground">{exp.company}</h3>
                  <p className="text-sm md:text-base text-primary/90">{exp.role}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{exp.stack}</p>
                </div>
                <ul className="list-disc list-inside text-sm pl-2 space-y-2 text-muted-foreground">
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