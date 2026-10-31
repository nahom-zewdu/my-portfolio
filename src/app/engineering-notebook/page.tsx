const proposedTopics = [
  "Why directory structure is not enough for codebase understanding",
  "From code relationships to evidence-grounded workflows",
  "Why bounding-box normalization does not solve semantic scene construction",
  "The difference between rendering a scene and generating an animation",
  "Designing operational metrics for a real-time WebSocket application",
  "Why a Python Future timeout does not terminate a running thread",
  "Designing local-first task execution systems",
];

export default function EngineeringNotebookPage() {
  return (
    <div className="prose-content py-16 px-4">
      <p className="text-sm uppercase tracking-[0.24em] text-accent">Engineering Notebook</p>
      <h1 className="mb-6">Investigations and design notes</h1>
      <p className="max-w-2xl text-lg leading-relaxed text-foreground/80">
        This notebook is being prepared around specific engineering work and the questions it raised. The topics below
        are proposed notes, not published articles.
      </p>

      <section className="mt-12 border-t border-border pt-8">
        <h2 className="mb-6 text-2xl font-semibold">Proposed investigations</h2>
        <ul className="space-y-3">
          {proposedTopics.map((topic) => (
            <li key={topic} className="text-base leading-relaxed text-foreground/90">
              {topic}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted-foreground">No notebook articles have been published yet.</p>
      </section>
    </div>
  );
}
