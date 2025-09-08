"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative z-0 max-w-5xl mx-auto py-24 px-4">
      <motion.h2 
        className="text-3xl font-bold mb-10 text-primary"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      {/* Top Row: name + role/location */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="md:col-span-2">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Nahom Zewdu</h3>
        </div>
        <div className="flex md:justify-end">
          <div className="rounded-2xl border border-white/15 dark:border-white/10 backdrop-blur-md bg-transparent px-4 py-3 shadow-sm">
            <p className="text-sm md:text-base text-muted-foreground">Backend Engineer · Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </motion.div>

      {/* Body: narrative with engineering vibe */}
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-white/15 dark:border-white/10 backdrop-blur-md bg-transparent p-6 md:p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
          {/* subtle blueprint grid via CSS vars from theme */}
          <div className="h-full w-full" style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            color: "var(--ring)",
          }} />
        </div>
        <div className="relative space-y-5 text-base md:text-lg leading-relaxed text-foreground/90">
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