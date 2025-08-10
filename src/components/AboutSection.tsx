import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative z-0 max-w-3xl mx-auto py-20 px-4">
      <motion.h2 
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.p 
        className="text-lg leading-relaxed text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I care deeply about building backend systems that are simple, scalable, and maintainable. My approach is grounded in clear architectural thinking, a bias for automation, and a relentless focus on reliability. I believe the best systems are those that empower teams to move fast without sacrificing long-term stability. I enjoy designing APIs, distributed systems, and automation that solve real business problems with technical elegance and minimal complexity.
      </motion.p>
    </section>
  );
} 