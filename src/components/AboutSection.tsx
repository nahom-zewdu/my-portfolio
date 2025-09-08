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
        <p className="text-lg text-muted-foreground mt-2">Backend Engineer · Addis Ababa, Ethiopia</p>
      </motion.div>

      {/* Body: left-aligned narrative */}
      <motion.div
        className="max-w-2xl mx-auto mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="space-y-5 text-base leading-relaxed text-foreground/90">
          <p>
            I’m a backend engineer and a student at AASTU. I focus on building scalable backend systems using Python and Go, with experience in Django, FastAPI, and Gin.
          </p>
          <p>
            I’ve worked as a backend developer at Eskalate, where I contributed to production-grade backend systems and APIs. I also completed my training at A2SV, earning a certificate in Data Structures and Algorithms after solving more than 700 problems, and collaborating on real-world projects with diverse teams.
          </p>
          <p>
            I believe in clarity over cleverness, building systems that fail gracefully, and creating tools that make engineering easier and more reliable. My main interests lie in distributed systems, real-time applications, and developer tooling.
          </p>
        </div>
      </motion.div>
    </section>
  );
} 