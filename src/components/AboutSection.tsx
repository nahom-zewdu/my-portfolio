"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative z-0 py-16 px-4">
      {/* Top Row: centered */}
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold tracking-tight">Nahom Zewdu</h2>
        <p className="text-lg text-muted-foreground mt-2">Backend &amp; Systems Engineer · Addis Ababa, Ethiopia</p>
      </motion.div>

      {/* Body: left-aligned narrative */}
      <motion.div
        className="max-w-3xl mx-auto mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="space-y-5 text-base leading-relaxed text-foreground/90">
          <p>
            I build real-time systems, automation pipelines, and developer tools using Python and Go, with a focus on scalability, reliability, and clean architecture.
          </p>
          <p>
            My work spans backend services, distributed processing, and cloud infrastructure designing systems that handle asynchronous workloads, integrate external services, and operate predictably in production environments. I&apos;ve built everything from task queue systems and real-time applications to automation-heavy pipelines that reduce manual workflows and improve operational efficiency.
          </p>
          <p>
            I&apos;ve worked on systems deployed on Google Cloud Platform, including Compute Engine, Cloud Functions, and GCS, and have experience managing infrastructure, permissions, and cost-aware system design.
          </p>
          <p>
            I&apos;m particularly interested in event-driven systems, developer tooling, and AI-integrated workflows, and I approach engineering with a focus on clarity, practical design decisions, and long-term maintainability.
          </p>
        </div>
      </motion.div>
    </section>
  );
} 