"use client";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const links = [
  { href: "mailto:nahiyo86@gmail.com", label: "Email", icon: Mail },
  { href: "https://github.com/nahom-zewdu", label: "GitHub", icon: Github },
  { href: "https://t.me/latencymonk", label: "Telegram", icon: Send },
  { href: "https://www.linkedin.com/in/nahom-zewdu/", label: "LinkedIn", icon: Linkedin },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2
    }
  }
};

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-0 max-w-2xl mx-auto py-20 px-4 text-center">
      <motion.h1
        className="text-3xl font-bold mb-6 text-accent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h1>
      <Card className="rounded-xl border border-border bg-card/80 backdrop-blur-none shadow-sm hover:shadow-md transition-shadow duration-200">
        <CardContent className="p-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              className="mb-6 text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              viewport={{ once: true }}
            >
              Open to collaborating on complex systems problems.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-4"
              variants={containerVariants}
            >
              {links.map(({ href, label, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-200 text-lg"
                  variants={itemVariants}
                  whileHover={{
                    transition: { duration: 0.2 }
                  }}
                >
                  <Icon className="w-6 h-6" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </motion.div>
            <motion.a
              href="mailto:nahiyo86@gmail.com"
              className="text-accent underline text-base transition-colors duration-200 hover:text-accent/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                transition: { duration: 0.2 }
              }}
            >
              nahiyo86@gmail.com
            </motion.a>
          </motion.div>
        </CardContent>
      </Card>
    </section>
  );
} 