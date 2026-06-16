"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/introduction", label: "Introduction" },
  { href: "/current-work", label: "Current Work" },
  { href: "/engineering-notebook", label: "Engineering Notebook" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-background px-6 py-8 overflow-y-auto">
      <div className="mb-12">
        <h1 className="text-2xl font-bold text-foreground">Nahom Zewdu</h1>
        <p className="text-sm text-muted-foreground mt-1">Backend & Systems Engineer</p>
      </div>

      <ul className="space-y-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`block text-base transition-colors ${
                isActive(item.href)
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
