"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="relative z-0 py-16 px-4">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl font-bold tracking-tight text-accent">Engineering Profile</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Software Engineer — Systems, Automation &amp; Developer Tools
        </p>
        <p className="text-sm text-muted-foreground mt-2">Addis Ababa, Ethiopia</p>
      </motion.div>

      <motion.div
        className="max-w-3xl mx-auto mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.05 }}
        viewport={{ once: true }}
      >
        <div className="space-y-5 text-base leading-relaxed text-foreground/90">
          <p>
            I build software across backend systems, automation workflows, cloud infrastructure, AI/LLM integration, and full-stack products. My projects range from a Python task execution framework and a real-time multiplayer application to cloud-based 3D rendering automation and tools for understanding unfamiliar codebases.
          </p>
          <p>
            I’m interested in the engineering decisions beneath those products: how components communicate, how asynchronous work is executed and observed, how integrations fail, and how developers can understand systems they did not build. I aim to make those decisions explicit and validate them against working implementations.
          </p>
          <p>
            Explore{" "}
            <Link href="/current-work" className="text-accent underline underline-offset-4">
              selected work
            </Link>
            , my{" "}
            <Link href="/experience" className="text-accent underline underline-offset-4">
              experience
            </Link>
            , and the{" "}
            <Link href="/engineering-notebook" className="text-accent underline underline-offset-4">
              engineering notebook
            </Link>
            , where I document the decisions, trade-offs, and unresolved questions behind the work.
          </p>
        </div>
      </motion.div>
    </section>
  );
} 