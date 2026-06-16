import { ProjectStudy } from "@/components/notebook";

export default function NuvomProjectPage() {
  return (
    <div className="prose-content py-16 px-4">
      <article>
        <h1 className="mb-12">Nuvom: Task Scheduling for Python</h1>

        <section className="mb-12 pb-12 border-b border-border">
          <h2 className="mb-4">Challenge</h2>
          <p className="text-base leading-relaxed text-foreground/90 mb-4">
            Building asynchronous systems requires a task scheduler, but existing solutions like Celery are
            feature-rich to the point of complexity. They're designed for large distributed teams at enterprises,
            not for developers who want simplicity. The challenge was: can we build a task scheduler that handles
            the common patterns (retry logic, scheduling, monitoring) without the operational overhead?
          </p>
          <p className="text-base leading-relaxed text-foreground/90">
            Additionally, most schedulers assume you're using Redis. What if you wanted to swap storage backends?
            What if you wanted to understand exactly how scheduling works without diving into thousands of lines of
            abstraction?
          </p>
        </section>

        <section className="mb-12 pb-12 border-b border-border">
          <h2 className="mb-4">Design Decisions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Dynamic Scheduling with Multiple Modes</h3>
              <p className="text-base leading-relaxed text-foreground/90">
                Instead of building separate primitives for one-off tasks, periodic jobs, and cron expressions,
                we unified them around a single scheduling interface. This simplified the API and made the mental
                model clearer: everything is a task with an execution time. The scheduler executes tasks when their
                time arrives.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Pluggable Backends</h3>
              <p className="text-base leading-relaxed text-foreground/90">
                By designing the storage and queue layers as interfaces, we avoided locking users into Redis.
                Tasks are serialized as msgpack, which is faster and smaller than JSON. This abstraction cost
                minimal overhead but gained enormous flexibility.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Static Task Discovery via AST Introspection</h3>
              <p className="text-base leading-relaxed text-foreground/90">
                Rather than requiring users to register tasks, we inspect the Python AST to find all decorated
                task functions. This means you don't register tasks — you just define them. The CLI discovers
                them automatically.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Resilient Worker Pool with Fault Isolation</h3>
              <p className="text-base leading-relaxed text-foreground/90">
                Workers are ephemeral processes. If a worker dies, another picks up the work. Task failures are
                retried with exponential backoff, but failures don't poison the entire pool. Each task fails
                independently.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 pb-12 border-b border-border">
          <h2 className="mb-4">Tradeoffs</h2>
          <div className="space-y-4">
            <div>
              <h4 className="text-base font-semibold mb-1">Simplicity vs. Completeness</h4>
              <p className="text-base leading-relaxed text-foreground/90 text-muted-foreground">
                We chose simplicity. Nuvom doesn't handle all edge cases, but it handles the common ones well.
                For unusual requirements, you're better served by a more complete system.
              </p>
            </div>

            <div>
              <h4 className="text-base font-semibold mb-1">Performance vs. Clarity</h4>
              <p className="text-base leading-relaxed text-foreground/90 text-muted-foreground">
                The code prioritizes readability. This means it's not the fastest task scheduler, but you can
                understand how it works by reading the source. That clarity matters more than squeezing extra
                throughput.
              </p>
            </div>

            <div>
              <h4 className="text-base font-semibold mb-1">Flexibility vs. Conventions</h4>
              <p className="text-base leading-relaxed text-foreground/90 text-muted-foreground">
                Pluggable backends add flexibility, but they also add API surface area. We tried to minimize this
                by having sensible defaults while allowing power users to customize.
              </p>
            </div>

            <div>
              <h4 className="text-base font-semibold mb-1">Operational Overhead</h4>
              <p className="text-base leading-relaxed text-foreground/90 text-muted-foreground">
                Monitoring is built in with Prometheus metrics. Task execution time, queue depth, failure rates
                are all observable out of the box.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4">Outcome</h2>
          <p className="text-base leading-relaxed text-foreground/90 mb-4">
            Nuvom successfully demonstrates that you don't need thousands of lines of code to build a useful task
            scheduler. The result is a system that solo developers can understand, deploy, and maintain without
            becoming experts in distributed systems.
          </p>
          <p className="text-base leading-relaxed text-foreground/90 mb-6">
            The project validates the hypothesis: simplicity is more valuable than feature completeness when it
            comes to developer tools. Users should be able to read the source code and understand what's happening.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://nuvom.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base underline"
            >
              View Documentation
            </a>
            <a
              href="https://github.com/nahom-zewdu/Nuvom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base underline"
            >
              GitHub Repository
            </a>
          </div>
        </section>

        <section className="mt-12 pt-12 border-t border-border">
          <h3 className="text-lg font-semibold mb-4">Technical Stack</h3>
          <p className="text-base leading-relaxed text-muted-foreground">
            Python · Pydantic · Redis · msgpack · Prometheus · typer
          </p>
        </section>
      </article>
    </div>
  );
}
