"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ModeToggle from "@/components/mode-toggle";

const navItems = [
  { href: "/introduction", label: "Introduction" },
  { href: "/current-work", label: "Selected Work" },
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
      <div className="flex items-center justify-between px-3 py-3">
        <h1 className="text-base font-semibold"><a href="/" className="hover:underline" style={{ textDecoration: "none" }}>
          Nahom Zewdu
        </a></h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <ModeToggle />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="rounded p-1.5 transition-colors duration-200"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="border-t border-border bg-background px-3 py-3">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-accent font-semibold"
                      : "text-muted-foreground hover:text-accent"
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
