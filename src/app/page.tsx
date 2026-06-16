"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="prose-content py-16 px-4 min-h-screen flex flex-col justify-center">
      <h1 className="text-4xl font-bold tracking-tight leading-tight mb-8">
        Backend & Systems Engineer
      </h1>

      <p className="text-xl leading-relaxed text-foreground/90 mb-12 max-w-2xl">
        I build difficult systems. Real-time platforms, automation pipelines, and infrastructure that operates
        predictably at scale. This site documents my work, thinking, and current focus.
      </p>

      <nav className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Start here</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/introduction" className="text-base">
                Introduction
              </Link>
            </li>
            <li>
              <Link href="/current-work" className="text-base">
                Current Work
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Explore</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/engineering-notebook" className="text-base">
                Engineering Notebook
              </Link>
            </li>
            <li>
              <Link href="/experience" className="text-base">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/projects/nuvom" className="text-base">
                Nuvom Project Study
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Connect</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/contact" className="text-base">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
