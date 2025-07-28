import path from "path";
import fs from "fs";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const notesDir = path.join(process.cwd(), "my-portfolio/content/notes");
  const files = fs.readdirSync(notesDir).filter(f => f.endsWith(".mdx"));
  return files.map(file => ({ slug: file.replace(/\.mdx$/, "") }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function NotePage({ params }: PageProps) {
  const filePath = path.join(process.cwd(), "my-portfolio/content/notes", `${params.slug}.mdx`);
  if (!fs.existsSync(filePath)) return notFound();

  const Note = (await import(`../../../../content/notes/${params.slug}.mdx`)).default;

  return (
    <article className="prose dark:prose-invert mx-auto py-16 px-4">
      <Note />
    </article>
  );
}
