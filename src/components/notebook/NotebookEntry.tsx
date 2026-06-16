import React, { ReactNode } from "react";

interface NotebookEntryProps {
  title: string;
  date?: string;
  category?: string;
  children: ReactNode;
}

export default function NotebookEntry({ title, date, category, children }: NotebookEntryProps) {
  return (
    <section className="mb-8 pb-8 border-b border-border last:border-b-0 last:mb-0 last:pb-0">
      <div className="mb-4 flex flex-col">
        <h3 className="text-2xl font-semibold leading-tight">{title}</h3>
        <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
          {category && <span className="uppercase tracking-wide font-medium">{category}</span>}
          {date && <time>{date}</time>}
        </div>
      </div>

      <div className="text-base leading-relaxed text-foreground/90">{children}</div>
    </section>
  );
}
