"use client";

import { useEffect, useState } from "react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentYear(new Date().getFullYear());
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="py-16 px-4 border-t border-white/5 text-center mt-20">
      <p className="text-muted-foreground text-sm font-light">
        &copy; {currentYear || "2026"} Shanmugavel &bull; Built with Next.js, Tailwind CSS & Framer Motion.
      </p>
    </footer>
  );
}
