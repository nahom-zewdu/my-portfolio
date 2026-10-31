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
        <h2 className="text-3xl font-bold tracking-tight text-accent">Nahom Zewdu</h2>
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
            I work on software systems and backend architecture, automation infrastructure and workflows, AI/LLM integrations, cloud infrastructure, developer tools, and full-stack products.
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
            , where I&apos;m preparing notes on the decisions and unresolved questions behind the work.
          </p>
        </div>
      </motion.div>
    </section>
  );
} 