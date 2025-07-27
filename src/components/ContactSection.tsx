import { Mail, Github, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { href: "mailto:nahom@example.com", label: "Email", icon: Mail },
  { href: "https://github.com/nahom", label: "GitHub", icon: Github },
  { href: "https://t.me/nahom", label: "Telegram", icon: Send },
  { href: "https://linkedin.com/in/nahom", label: "LinkedIn", icon: Linkedin },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-2xl mx-auto py-20 px-4 text-center">
      <motion.h2 
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>
      <motion.p 
        className="mb-6 text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Open to collaborating on complex systems problems.
      </motion.p>
      <motion.div 
        className="flex flex-wrap justify-center gap-6 mb-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {links.map(({ href, label, icon: Icon }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-lg"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
          >
            <Icon className="w-6 h-6" />
            <span className="sr-only">{label}</span>
          </motion.a>
        ))}
      </motion.div>
      <motion.a 
        href="mailto:nahom@example.com" 
        className="text-primary underline text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
      >
        nahom@example.com
      </motion.a>
    </section>
  );
} 