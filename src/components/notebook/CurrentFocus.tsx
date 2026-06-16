import React, { ReactNode } from "react";

interface CurrentFocusProps {
  title: string;
  status?: "active" | "exploring" | "planning";
  children: ReactNode;
  areas?: string[];
}

export default function CurrentFocus({ title, status, children, areas }: CurrentFocusProps) {
  const statusLabel = {
    active: "Active",
    exploring: "Exploring",
    planning: "Planning",
  };

  return (
    <section className="mb-8 pb-8 border-b border-border last:border-b-0 last:mb-0 last:pb-0">
      <div className="flex items-baseline justify-between mb-4">
        <h3 className="text-2xl font-semibold leading-normal">{title}</h3>
        {status && (
          <span className="text-sm text-[var(--accent-amber)] font-medium">{statusLabel[status]}</span>
        )}
      </div>

      <div className="text-base leading-relaxed text-foreground/90 mb-6">{children}</div>

      {areas && areas.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-[var(--accent-amber)] mb-3 uppercase tracking-wide">
            Focus Areas
          </h4>
          <ul className="space-y-2">
            {areas.map((area, i) => (
              <li key={i} className="text-base leading-normal">
                {area}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
