
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-fit max-w-7xl">
      <div className="glass-card px-6 md:px-8 py-3 rounded-full flex items-center justify-between md:justify-start md:gap-8">
        <button onClick={() => scrollTo("#home")} className="font-headline font-bold text-lg tracking-tight mr-4">
          SHANMU<span className="text-accent">GAVEL</span>
        </button>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white outline-none",
                activeSection === link.href.substring(1) ? "text-white" : "text-muted-foreground"
              )}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-white/5 rounded-full transition-colors outline-none">
                <Menu className="w-6 h-6 text-white" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-white/10 p-8 w-[80%] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-12">
                   <SheetTitle className="font-headline font-bold text-xl tracking-tight text-white">
                    SHANMU<span className="text-accent">GAVEL</span>
                  </SheetTitle>
                </div>
                <div className="flex flex-col gap-8">
                  {links.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollTo(link.href)}
                      className={cn(
                        "text-2xl font-bold transition-colors text-left outline-none",
                        activeSection === link.href.substring(1) ? "text-accent" : "text-white/70"
                      )}
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
