import fs from "fs";
import path from "path";
import Link from "next/link";

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

export default function NotesPage() {
  const notes = getNotes();
  return (
    <section className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Engineering Notebook</h1>
      <ul className="space-y-4">
        {notes.map(note => (
          <li key={note.slug}>
            <Link href={`/notes/${note.slug}`} className="text-xl font-semibold hover:underline">
              {note.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
} 