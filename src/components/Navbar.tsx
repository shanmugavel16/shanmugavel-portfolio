
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-fit max-w-7xl">
      <div className="glass-card px-6 md:px-8 py-3 rounded-full flex items-center justify-between md:justify-start md:gap-8">
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-zinc-950 outline-none",
                  isActive ? "text-zinc-950 font-semibold" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-zinc-100 rounded-full transition-colors outline-none">
                <Menu className="w-6 h-6 text-zinc-900" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white/95 backdrop-blur-xl border-zinc-200 p-8 w-[80%] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-12">
                   <SheetTitle className="font-bold text-xl tracking-tight text-zinc-900 whitespace-nowrap">
                    Navigation
                  </SheetTitle>
                </div>
                <div className="flex flex-col gap-8">
                  {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "text-2xl font-bold transition-colors text-left outline-none",
                          isActive ? "text-zinc-950" : "text-zinc-500"
                        )}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
