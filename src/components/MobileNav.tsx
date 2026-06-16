"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/introduction", label: "Introduction" },
  { href: "/current-work", label: "Current Work" },
  { href: "/engineering-notebook", label: "Engineering Notebook" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-30 border-b border-border bg-background">
      <div className="flex items-center justify-between px-4 py-4">
        <h1 className="text-lg font-bold">Nahom Zewdu</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="p-2"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-border bg-background px-4 py-4 space-y-3">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
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
      )}
    </div>
  );
}
