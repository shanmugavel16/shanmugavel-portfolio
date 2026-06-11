"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function GalaxyBackground() {
  const [dots, setDots] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    const generateDots = () => {
      const newDots = Array.from({ length: 150 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
      }));
      setDots(newDots);
    };
    generateDots();
  }, []);

  return (
    <div className="galaxy-container">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="dot"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            "--duration": `${dot.duration}s`,
          } as any}
        />
      ))}
      <div className="absolute inset-0 radial-glow opacity-40" />
    </div>
  );
}