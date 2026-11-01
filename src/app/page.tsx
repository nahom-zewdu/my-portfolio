import Link from "next/link";

const workLinks = [
  { href: "/current-work", label: "Selected work" },
  { href: "/experience", label: "Experience" },
  { href: "/engineering-notebook", label: "Engineering notebook" },
];

export default function Home() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="space-y-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Introduction</p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Nahom Zewdu
          </h1>
          <p className="text-base font-medium text-foreground">
            Software Engineer — Systems, Automation &amp; Developer Tools
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I work across software systems and backend architecture, automation infrastructure, AI/LLM integration, cloud platforms, developer tools, and full-stack products.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Explore</p>
          <p className="max-w-2xl text-base leading-relaxed text-foreground/90">
            See selected projects for concrete examples, read about my engineering experience, or browse notes on the problems behind the work.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          {workLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-accent underline-offset-4 transition-opacity duration-200 hover:opacity-80"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/nahom-zewdu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent underline-offset-4 transition-opacity duration-200 hover:opacity-80"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
