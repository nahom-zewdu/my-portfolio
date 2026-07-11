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
    <nav className="hidden md:flex md:fixed md:left-0 md:top-0 md:h-screen md:w-64 md:border-r md:border-border md:bg-background md:px-6 md:py-8 md:overflow-y-auto md:flex-col">
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
