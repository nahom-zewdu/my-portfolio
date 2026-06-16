import React, { ReactNode } from "react";

interface ObservationBlockProps {
  title: string;
  children: ReactNode;
  date?: string;
}

export default function ObservationBlock({ title, children, date }: ObservationBlockProps) {
  return (
    <section className="mb-8 pb-8 border-b border-border last:border-b-0 last:mb-0 last:pb-0">
      <div className="flex items-baseline justify-between mb-4">
        <h3 className="text-xl font-semibold leading-normal">{title}</h3>
        {date && <time className="text-sm text-[var(--accent-amber)]">{date}</time>}
      </div>
      <div className="text-base leading-relaxed text-foreground/90">
        {children}
      </div>
    </section>
  );
}
