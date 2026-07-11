const stackGroups = [
  {
    title: "Core",
    items: ["Python", "Go", "TypeScript"],
  },
  {
    title: "Systems",
    items: ["Distributed queues", "Event-driven workflows", "Cloud infrastructure"],
  },
  {
    title: "Practice",
    items: ["Reliability", "Observability", "Automation"],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="mx-auto max-w-3xl px-4 py-16">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Technical Stack</p>
        <h2 className="mt-2 text-3xl font-semibold text-foreground">
          Systems I know how to build
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stackGroups.map((group) => (
          <div key={group.title} className="rounded-xl border border-border bg-card/80 p-5">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
              {group.title}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
