"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Network } from "lucide-react";

const projects = [
  {
    title: "Smart Device Animal Detection & Accident Prevention System",
    subtitle: "IoT Intrusion Deterrent",
    desc: [
      "An innovative IoT-based system designed to prevent animal intrusion in farms, roads, and residential areas. The system uses PIR sensors to detect animal movement based on heat and motion, and processes the data using a microcontroller like Arduino / ESP32.",
      "When an animal is detected, the system automatically activates a non-harmful deterrent—such as high-frequency sound—effectively driving animals away without causing injury. It can also be customized to respond differently to various animals using specific sound patterns.",
      "This solution is cost-effective, energy-efficient, and easy to deploy, helping to reduce crop damage, prevent road accidents, and improve safety in human environments.",
      "Future enhancements include camera integration, AI-based animal recognition, and IoT connectivity (Wi-Fi/GSM) for real-time alerts and remote monitoring via mobile devices."
    ],
    tags: ["Arduino", "ESP32", "PIR Sensors", "IoT", "AI Integration"],
    icon: Network
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 w-full max-w-full overflow-x-hidden flex flex-col">
      <Navbar />
      
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter">Projects</h1>
          <p className="text-muted-foreground text-lg md:text-xl font-light">Explore my recent work and technical experiments.</p>
        </div>

        {/* Projects List - Centered Layout */}
        <div className="max-w-4xl mx-auto">
          {projects.map((project, idx) => {
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="flex flex-col glass-card p-5 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] group border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors hover:border-accent/30"
              >
                {/* Content Section */}
                <div className="flex flex-col flex-1 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <project.icon className="w-8 h-8 text-accent animate-pulse" />
                      <h3 className="text-xs text-accent uppercase tracking-widest font-extrabold">{project.subtitle}</h3>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-tight">{project.title}</h2>
                  </div>
                  
                  <div className="text-base md:text-lg text-muted-foreground font-light leading-relaxed space-y-6">
                    {project.desc.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-8 border-t border-white/5">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="border-white/10 bg-white/5 py-1.5 px-4 font-mono text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
