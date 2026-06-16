import fs from "fs";
import path from "path";
import Link from "next/link";
import { NotebookEntry } from "@/components/notebook";

function getNotes() {
  const notesDir = path.join(process.cwd(), "content/notes");
  const files = fs.existsSync(notesDir) ? fs.readdirSync(notesDir).filter(f => f.endsWith(".mdx")) : [];
  return files.map(file => {
    const slug = file.replace(/\.mdx$/, "");
    const content = fs.readFileSync(path.join(notesDir, file), "utf8");
    const match = content.match(/title:\s*"([^"]+)"/);
    const title = match ? match[1] : slug;
    return { slug, title };
  });
}

export default function EngineeringNotebookPage() {
  const notes = getNotes();
  return (
    <div className="prose-content py-16 px-4">
      <h1 className="mb-12">Engineering Notebook</h1>

      <div className="mb-16">
        <p className="text-lg leading-relaxed text-foreground/80 mb-8">
          Technical observations, design notes, and engineering insights. These are structured thoughts on systems,
          patterns, and decisions that shape how I approach building software.
        </p>
      </div>

      {/* Curated core observations */}
      <section className="mb-16">
        <NotebookEntry
          title="On Simplicity in System Design"
          category="Systems"
        >
          <p>
            Complex systems often emerge not from complex requirements, but from over-engineering. Each layer of
            abstraction that seemed necessary at the time becomes a maintenance burden later. The best systems are
            those that solve the problem with the minimal amount of moving parts. This doesn't mean cutting corners—it
            means carefully choosing what to build and what to leave out.
          </p>
          <p className="mt-4">
            When designing a new system, ask: what is the simplest solution that handles the core problem? Then add
            complexity only when you have concrete evidence that it's needed.
          </p>
        </NotebookEntry>

        <NotebookEntry
          title="Understanding Failure Modes"
          category="Operations"
        >
          <p>
            Every system will fail. The question is not if, but when and how gracefully. Before writing a single line
            of code, think about failure modes:
          </p>
          <ul className="mt-4 space-y-2 ml-4">
            <li>What happens if this service is down for 5 minutes?</li>
            <li>What happens if this network call times out?</li>
            <li>What happens if this database connection fails?</li>
            <li>How do we recover?</li>
          </ul>
          <p className="mt-4">
            Systems that handle failures gracefully are not built by accident. They're designed with failure in mind
            from the start.
          </p>
        </NotebookEntry>

        <NotebookEntry
          title="The Cost of Flexibility"
          category="Architecture"
        >
          <p>
            Every interface, every abstraction, every configuration option has a cost. The cost is usually paid in
            code complexity and maintenance burden. A flexible system is harder to understand, debug, and operate.
          </p>
          <p className="mt-4">
            Flexibility should be added only when you have multiple concrete use cases that require it. Generic
            flexibility that "might be useful someday" usually isn't worth it.
          </p>
        </NotebookEntry>

        <NotebookEntry
          title="Observability is Not Monitoring"
          category="Operations"
        >
          <p>
            Monitoring is collecting metrics about what you expect to fail. Observability is the ability to ask
            arbitrary questions about your system's behavior. You need both, but they're different.
          </p>
          <p className="mt-4">
            Good observability means: structured logging with context, distributed traces following requests, and
            metrics on all significant operations. This data should be queryable and explorable, not just
            visualized in dashboards.
          </p>
        </NotebookEntry>

        <NotebookEntry
          title="Testing in Production"
          category="Quality"
        >
          <p>
            Your test environment is not production. Network latencies are different, traffic patterns are different,
            edge cases emerge only at scale. This doesn't mean you shouldn't have tests—you absolutely should. But it
            means being realistic about what tests can catch.
          </p>
          <p className="mt-4">
            Good production monitoring and gradual rollouts are often more effective at catching problems than unit
            tests. Tests verify that your code works as written. Production shows what your code does when reality
            diverges from your assumptions.
          </p>
        </NotebookEntry>

        <NotebookEntry
          title="Building for Change"
          category="Architecture"
        >
          <p>
            You will never fully understand the requirements. Your system will need to change. The code you write
            today will seem obvious or wrong in a year. Plan for this.
          </p>
          <p className="mt-4">
            This means: clear abstractions that make intent obvious, minimal coupling between components, and a
            culture where refactoring is normal. It doesn't mean making everything pluggable. It means making common
            changes easy.
          </p>
        </NotebookEntry>
      </section>

      {/* User notes from content/notes */}
      {notes.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold mb-8">Additional Notes</h2>
          <ul className="space-y-4">
            {notes.map(note => (
              <li key={note.slug}>
                <Link href={`/engineering-notebook/${note.slug}`} className="text-base font-semibold hover:underline">
                  {note.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
