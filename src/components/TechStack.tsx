"use client";
import { motion } from "framer-motion";

const hoverClasses = "transition-transform duration-200 will-change-transform hover:scale-105";
const glowClasses = "hover:drop-shadow-[0_0_12px_rgba(0,200,255,0.35)] dark:hover:drop-shadow-[0_0_12px_rgba(0,200,255,0.45)]";

const icons: Array<{ alt: string; src: string }> = [
  { alt: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { alt: "Go", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  { alt: "Django", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { alt: "FastAPI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { alt: "Gin", src: "https://raw.githubusercontent.com/gin-gonic/logo/master/color.png" },
  { alt: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { alt: "Redis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { alt: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { alt: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { alt: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative z-0 py-16 px-4">
      <motion.h2
        className="text-2xl font-semibold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Tech Stack
      </motion.h2>

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-5 md:gap-7 overflow-x-auto whitespace-nowrap">
          {icons.map((icon) => (
            <a
              key={icon.alt}
              href={icon.src}
              target="_blank"
              rel="noopener noreferrer"
              className={`${hoverClasses} ${glowClasses}`}
              aria-label={icon.alt}
              title={icon.alt}
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="h-10 w-10 md:h-12 md:w-12 object-contain select-none"
                loading="lazy"
                decoding="async"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


