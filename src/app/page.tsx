import Link from "next/link";

const links = [
  { href: "https://github.com/nahom-zewdu", label: "GitHub" },
  { href: "https://www.linkedin.com/in/nahom-zewdu/", label: "LinkedIn" },
  { href: "https://drive.google.com/file/d/1ypTQLxS3qpCXmY6LL1JGtCQqwxkKVnAI/view?usp=sharing", label: "Resume" },
  { href: "mailto:nahiyo86@gmail.com", label: "Email" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="space-y-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Introduction</p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Nahom Zewdu
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I build reliable backend systems, automation pipelines, and infrastructure for demanding product work.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Current focus</p>
          <p className="max-w-2xl text-base leading-relaxed text-foreground/90">
            Building durable systems with clear boundaries, dependable operations, and thoughtful architecture.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent underline-offset-4 transition-opacity duration-200 hover:opacity-80"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
