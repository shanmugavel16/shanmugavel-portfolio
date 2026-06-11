"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Terminal,
  Figma
} from "lucide-react";

const skillGroups = [
  {
    title: "UI/UX Design (Front Design)",
    icon: Palette,
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"]
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Basic Skills",
    icon: Terminal,
    skills: ["Prompt Engineering", "Java", "C++", "Vibe Coding"]
  },
  {
    title: "Backend & Cloud",
    icon: Terminal,
    skills: ["Node.js", "Firebase", "PostgreSQL", "REST APIs", "Vercel"]
  },
  {
    title: "Tools & Flow",
    icon: Figma,
    skills: ["Git", "GitHub Actions", "NPM", "VS Code", "Jest"]
  }
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-8">
      <Navbar />

      <div className="max-w-7xl mx-auto space-y-24">
        {/* Page Header */}
        <div className="text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter"
          >
            Skills
          </motion.h1>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light text-lg">
            A comprehensive set of skills across design and development to build end-to-end digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] group cursor-default"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-accent/10 rounded-2xl group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                  <group.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}