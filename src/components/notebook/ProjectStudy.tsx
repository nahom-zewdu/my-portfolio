import React, { ReactNode } from "react";

interface ProjectStudyProps {
  title: string;
  overview: string;
  highlights: string[];
  stack?: string[];
  children?: ReactNode;
  links?: Array<{ label: string; href: string }>;
}

export default function ProjectStudy({
  title,
  overview,
  highlights,
  stack,
  children,
  links,
}: ProjectStudyProps) {
  return (
    <article className="mb-12 pb-12 border-b border-border last:border-b-0 last:mb-0 last:pb-0">
      <h2 className="text-3xl font-bold leading-tight mb-4">{title}</h2>

      <p className="text-lg text-foreground/80 mb-8 leading-normal">{overview}</p>

      {stack && stack.length > 0 && (
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
            Stack
          </h4>
          <p className="text-base leading-normal">{stack.join(", ")}</p>
        </div>
      )}

      <div className="mb-8">
        <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
          Highlights
        </h4>
        <ul className="space-y-3">
          {highlights.map((highlight, i) => (
            <li key={i} className="text-base leading-normal pl-4 relative">
              <span className="absolute left-0">—</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {children && <div className="mb-8 text-base leading-relaxed">{children}</div>}

      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
