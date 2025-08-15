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
    <div className="pointer-events-none fixed top-3 left-0 right-0 z-40">
      <nav className={`pointer-events-auto mx-auto w-[60%] max-w-5xl rounded-2xl border border-border/60 ${scrolled ? "shadow-md bg-background/70 backdrop-blur" : "bg-background/60 backdrop-blur-sm"}`} aria-label="Main navigation">
        <div className="flex items-center justify-between px-3 md:px-4 py-2 md:py-3">
          <div className="hidden md:flex gap-2 items-center">
            {navLinks.map(link => (
              <Button
                key={link.href}
                asChild
                variant={active === link.href ? "secondary" : "ghost"}
                className="rounded-2xl px-3 md:px-4 py-2 text-sm md:text-base font-medium transition-colors"
              >
                <Link href={link.href} scroll={link.href.startsWith("#")}>{link.label}</Link>
              </Button>
            ))}
          </div>
          <div className="md:hidden" />
          <div className="flex items-center gap-2">
            <ModeToggle />
            <div className="md:hidden">
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
        </div>
      </nav>
    </div>
  );
} 