"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ModeToggle from "@/components/mode-toggle";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#systems", label: "Systems" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("#hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
      // Scrollspy logic
      const offsets = navLinks.map(link => {
        if (!link.href.startsWith("#")) return 0;
        const el = document.getElementById(link.href.slice(1));
        return el ? el.getBoundingClientRect().top : 0;
      });
      const idx = offsets.findIndex((top, i) => top > 0 && (i === 0 || offsets[i - 1] <= 0));
      setActive(navLinks[idx > 0 ? idx - 1 : 0]?.href || "#hero");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-shadow ${scrolled ? "shadow-md bg-background/80 backdrop-blur" : "bg-background/95"}`} aria-label="Main navigation">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link href="#hero" className="font-bold text-lg tracking-tight">Nahom</Link>
        <div className="hidden md:flex gap-2 items-center">
          {navLinks.map(link => (
            <Button
              key={link.href}
              asChild
              variant={active === link.href ? "secondary" : "ghost"}
              className="rounded-2xl px-4 py-2 text-base font-medium transition-colors"
            >
              <Link href={link.href} scroll={link.href.startsWith("#")}>{link.label}</Link>
            </Button>
          ))}
          <ModeToggle />
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 flex flex-col gap-4 pt-8">
              {navLinks.map(link => (
                <Button
                  key={link.href}
                  asChild
                  variant={active === link.href ? "secondary" : "ghost"}
                  className="rounded-2xl px-4 py-2 text-lg font-medium w-full justify-start"
                  onClick={() => {
                    if (link.href.startsWith("#")) {
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <Link href={link.href} scroll={link.href.startsWith("#")}>{link.label}</Link>
                </Button>
              ))}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
} 