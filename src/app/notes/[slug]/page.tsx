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

  const { slug } = params;
  const filePath = path.join(process.cwd(), "my-portfolio/content/notes", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return notFound();
  // Dynamic import of the MDX file as a React component
  const Note = (await import(`../../../../content/notes/${slug}.mdx`)).default;
  return (
    <article className="prose dark:prose-invert mx-auto py-16 px-4">
      <Note />
    </article>
  );
} 