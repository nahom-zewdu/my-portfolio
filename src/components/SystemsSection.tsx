const systems = [
  "Real-time services with clear operational boundaries",
  "Automation pipelines that remove manual toil",
  "Cloud-native infrastructure and deployment guardrails",
];

export default function SystemsSection() {
  return (
    <section id="systems" className="mx-auto max-w-3xl px-4 py-8">
      <div className="rounded-2xl border border-border bg-card/70 p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Current focus</p>
        <h2 className="mt-2 text-3xl font-semibold text-foreground">
          I build systems that are reliable under pressure.
        </h2>
        <ul className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground">
          {systems.map((system) => (
            <li key={system} className="flex gap-3">
              <span className="mt-1 text-accent">—</span>
              <span>{system}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
