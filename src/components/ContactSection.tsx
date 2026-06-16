"use client";

export default function ContactSection() {
  return (
    <section className="prose-content py-16 px-4">
      <h1 className="mb-12">Contact</h1>

      <p className="text-lg leading-relaxed text-foreground/90 mb-8">
        Open to collaborating on complex systems problems.
      </p>

      <nav>
        <ul className="space-y-4">
          <li>
            <a href="mailto:nahiyo86@gmail.com" className="text-base">
              Email: nahiyo86@gmail.com
            </a>
          </li>
          <li>
            <a href="https://github.com/nahom-zewdu" target="_blank" rel="noopener noreferrer" className="text-base">
              GitHub: github.com/nahom-zewdu
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nahom-zewdu/" target="_blank" rel="noopener noreferrer" className="text-base">
              LinkedIn: linkedin.com/in/nahom-zewdu
            </a>
          </li>
          <li>
            <a href="https://t.me/latencymonk" target="_blank" rel="noopener noreferrer" className="text-base">
              Telegram: @latencymonk
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
} 