"use client";
import { motion } from "framer-motion";

// Keep hover effects local to each icon to avoid section overflow

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
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-5 md:gap-7 overflow-x-auto whitespace-nowrap px-2">
          {icons.map((icon) => (
            <a
              key={icon.alt}
              href={icon.src}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl hover:-translate-y-0.5 transition-transform duration-200 hover:ring-1 hover:ring-cyan-400/30"
              aria-label={icon.alt}
              title={icon.alt}
              style={{ contain: "paint" }}
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="h-8 w-8 md:h-10 md:w-10 object-contain select-none transition-transform duration-200 group-hover:scale-110"
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


