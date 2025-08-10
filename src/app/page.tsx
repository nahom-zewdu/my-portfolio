"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import TypewriterText from "@/components/TypewriterText";

const SystemsSection = dynamic(() => import("@/components/SystemsSection"));
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const ExperienceSection = dynamic(() => import("@/components/ExperienceSection"));
const ContactSection = dynamic(() => import("@/components/ContactSection"));

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState<{ x: number; y: number } | null>(null);

  return (
    <>
      <motion.section
        id="hero"
        ref={heroRef}
        className="relative z-0 flex flex-col items-center justify-center min-h-[70vh] gap-8 text-center px-4 overflow-hidden pb-12"
        onMouseMove={e => {
          const rect = heroRef.current?.getBoundingClientRect();
          if (!rect) return;
          setSpot({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }}
        onMouseLeave={() => setSpot(null)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Spotlight effect */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-500"
          style={
            spot !== null
              ? {
                  opacity: 1,
                  background: `radial-gradient(600px circle at ${spot.x}px ${spot.y}px, rgba(255,255,255,0.10), transparent 80%)`,
                }
              : { opacity: 0 }
          }
        />
        <motion.div 
          className="space-y-6 max-w-3xl mx-auto"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-tight"
            variants={fadeInUp}
          >
            Nahom
          </motion.h1>
          <TypewriterText 
            text="Backend Engineer & System Design Practitioner"
            speed={80}
            delay={0.5}
            className="text-xl md:text-2xl font-mono text-muted-foreground"
          />
          <motion.p 
            className="mx-auto text-lg md:text-xl text-muted-foreground"
            variants={fadeInUp}
          >
            "I design and build resilient backend systems that scale — with clarity, intention, and impact."
          </motion.p>
        </motion.div>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <Button asChild size="lg">
              <Link href="#systems">View Projects</Link>
            </Button>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Button asChild variant="outline" size="lg">
              <Link href="/notes">Engineering Notes</Link>
            </Button>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Button asChild variant="ghost" size="lg">
              <a href="https://github.com/nahom" target="_blank" rel="noopener noreferrer">GitHub</a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>
      <SystemsSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
