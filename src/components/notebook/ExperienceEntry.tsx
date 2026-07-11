import React, { ReactNode } from "react";

interface ExperienceEntryProps {
  title: string;
  organization: string;
  period?: string;
  technologies?: string[];
  children: ReactNode;
}

export default function ExperienceEntry({
  title,
  organization,
  period,
  technologies,
  children,
}: ExperienceEntryProps) {
  return (
    <section className="mb-8 pb-8 border-b border-border last:border-b-0 last:mb-0 last:pb-0">
      <div className="mb-4">
        <h3 className="text-xl font-semibold leading-normal">{title}</h3>
        <p className="text-base text-muted-foreground mt-1">{organization}</p>
        {period && <p className="text-sm text-muted-foreground mt-1">{period}</p>}
      </div>

      {technologies && technologies.length > 0 && (
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">{technologies.join(" · ")}</p>
        </div>
      )}

      <div className="text-base leading-relaxed text-foreground/90">{children}</div>
    </section>
  );
}
