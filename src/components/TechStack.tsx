"use client";
import { motion } from "framer-motion";

type IconProps = { label: string };

function IconPython({ label }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-label={label} role="img" className="size-12 text-foreground">
      <g fill="currentColor">
        <rect x="8" y="10" rx="8" ry="8" width="28" height="22" />
        <rect x="28" y="32" rx="8" ry="8" width="28" height="22" />
        <circle cx="24" cy="20" r="2" fill="white" />
        <circle cx="40" cy="44" r="2" fill="white" />
      </g>
    </svg>
  );
}

function IconGo({ label }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-label={label} role="img" className="size-12 text-foreground">
      <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 24h28" />
        <path d="M8 32h20" />
        <path d="M8 40h24" />
        <path d="M40 24l12 8-12 8" />
      </g>
    </svg>
  );
}

function IconDjango({ label }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-label={label} role="img" className="size-12 text-foreground">
      <g fill="currentColor">
        <rect x="18" y="10" width="10" height="44" rx="2" />
        <path d="M32 18h10a10 10 0 0 1 0 20H32z" />
      </g>
    </svg>
  );
}

function IconFastAPI({ label }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-label={label} role="img" className="size-12 text-foreground">
      <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="20" />
        <path d="M28 36l8-16m-4 16h8" />
      </g>
    </svg>
  );
}

function IconGin({ label }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-label={label} role="img" className="size-12 text-foreground">
      <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="14" y="10" width="36" height="44" rx="8" />
        <path d="M22 38a10 10 0 0 0 20 0" />
      </g>
    </svg>
  );
}

function IconPostgres({ label }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-label={label} role="img" className="size-12 text-foreground">
      <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="32" cy="18" rx="18" ry="8" />
        <path d="M14 18v18c0 4.4 8.1 8 18 8s18-3.6 18-8V18" />
        <path d="M14 30c0 4.4 8.1 8 18 8s18-3.6 18-8" />
      </g>
    </svg>
  );
}

function IconRedis({ label }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-label={label} role="img" className="size-12 text-foreground">
      <g fill="currentColor">
        <polygon points="32,12 56,20 32,28 8,20" />
        <polygon points="32,24 56,32 32,40 8,32" />
        <polygon points="32,36 56,44 32,52 8,44" />
      </g>
    </svg>
  );
}

function IconDocker({ label }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-label={label} role="img" className="size-12 text-foreground">
      <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="28" width="10" height="10" />
        <rect x="24" y="28" width="10" height="10" />
        <rect x="36" y="28" width="10" height="10" />
        <rect x="24" y="16" width="10" height="10" />
        <path d="M10 42c4 8 16 10 26 10 10 0 14-4 18-10" />
      </g>
    </svg>
  );
}

function IconLinux({ label }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-label={label} role="img" className="size-12 text-foreground">
      <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 10c8 0 12 8 12 16 0 10-6 16-12 16s-12-6-12-16c0-8 4-16 12-16z" />
        <path d="M20 48c4 4 8 6 12 6s8-2 12-6" />
        <circle cx="26" cy="26" r="2" />
        <circle cx="38" cy="26" r="2" />
      </g>
    </svg>
  );
}

function IconGit({ label }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-label={label} role="img" className="size-12 text-foreground">
      <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 32l20-20 20 20-20 20z" />
        <circle cx="32" cy="22" r="3" />
        <circle cx="22" cy="32" r="3" />
        <circle cx="42" cy="32" r="3" />
        <path d="M32 22v20M22 32h20" />
      </g>
    </svg>
  );
}

const hoverClasses = "transition-transform duration-200 will-change-transform hover:scale-105";
const glowClasses = "hover:drop-shadow-[0_0_12px_rgba(0,200,255,0.35)] dark:hover:drop-shadow-[0_0_12px_rgba(0,200,255,0.45)]";

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

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Row 1 */}
        <div className="flex items-center justify-center gap-6 md:gap-8">
          <div className={`${hoverClasses} ${glowClasses}`}><IconPython label="Python" /></div>
          <div className={`${hoverClasses} ${glowClasses}`}><IconGo label="Go" /></div>
          <div className={`${hoverClasses} ${glowClasses}`}><IconDjango label="Django" /></div>
          <div className={`${hoverClasses} ${glowClasses}`}><IconFastAPI label="FastAPI" /></div>
          <div className={`${hoverClasses} ${glowClasses}`}><IconGin label="Gin" /></div>
        </div>

        {/* Row 2 */}
        <div className="flex items-center justify-center gap-6 md:gap-8">
          <div className={`${hoverClasses} ${glowClasses}`}><IconPostgres label="PostgreSQL" /></div>
          <div className={`${hoverClasses} ${glowClasses}`}><IconRedis label="Redis" /></div>
        </div>

        {/* Row 3 */}
        <div className="flex items-center justify-center gap-6 md:gap-8">
          <div className={`${hoverClasses} ${glowClasses}`}><IconDocker label="Docker" /></div>
          <div className={`${hoverClasses} ${glowClasses}`}><IconLinux label="Linux" /></div>
          <div className={`${hoverClasses} ${glowClasses}`}><IconGit label="Git" /></div>
        </div>
      </div>
    </section>
  );
}


