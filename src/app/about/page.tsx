
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Search, Palette, Code, Rocket } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutPage() {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      desc: "Deep diving into requirements, user needs, and business goals to set a solid foundation."
    },
    {
      icon: Palette,
      title: "Design",
      desc: "Crafting wireframes and high-fidelity prototypes that balance aesthetics with functionality."
    },
    {
      icon: Code,
      title: "Development",
      desc: "Bringing designs to life with clean, efficient code using modern frameworks like Next.js."
    },
    {
      icon: Rocket,
      title: "Launch",
      desc: "Rigorous testing and optimization for a smooth, high-performance deployment."
    }
  ];

  const ownerImg = PlaceHolderImages.find(img => img.id === "owner-portrait") || {
    imageUrl: "https://picsum.photos/seed/owner/800/1000",
    description: "Professional portrait of the owner",
    imageHint: "professional portrait"
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 w-full max-w-full overflow-x-hidden flex flex-col">
      <Navbar />

      <div className="max-w-7xl mx-auto space-y-32">
        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold leading-none tracking-tighter mb-8">
              <span className="inline-block">About <span className="text-accent font-serif italic text-glow">Me</span></span>
            </h1>
            
            <div className="about-details space-y-6">
              <div className="detail-card glass-card p-5 sm:p-6 rounded-xl sm:rounded-2xl hover:border-accent/30">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span>🎓</span> Education
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base">
                  Computer Science and Design student with a strong foundation in web development and programming, continuously enhancing skills through learning and hands-on experience.
                </p>
              </div>

              <div className="detail-card glass-card p-5 sm:p-6 rounded-xl sm:rounded-2xl hover:border-accent/30">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span>💡</span> Passion
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base">
                  Passionate about learning computer science concepts and developing modern, responsive websites while continuously improving technical and design skills.
                </p>
              </div>

              <div className="detail-card glass-card p-5 sm:p-6 rounded-xl sm:rounded-2xl hover:border-accent/30">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span>🎯</span> Goal
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base">
                  To build a strong career in web development by creating innovative, user-friendly, and efficient web solutions. I aim to continuously enhance my technical and design skills and contribute to meaningful digital projects.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden glass-card p-2 sm:p-3 shadow-2xl shadow-accent/10 lg:sticky lg:top-32"
          >
            <div className="relative w-full h-full rounded-[1.2rem] sm:rounded-[2rem] overflow-hidden group">
              <Image 
                src={ownerImg.imageUrl}
                alt={ownerImg.description}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint={ownerImg.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl backdrop-blur-md border-white/5">
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">Developer & Designer</p>
                <p className="text-lg font-bold">Shanmugavel</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Working Process Section */}
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter">My <span className="text-accent font-serif italic text-glow">Working Process</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light text-base md:text-lg">A structured approach to turning ideas into reality, ensuring consistency and quality at every stage.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] relative group hover:border-accent/30"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-extrabold text-lg group-hover:scale-110 transition-transform shadow-lg shadow-accent/20">
                  {idx + 1}
                </div>
                <div className="mb-6 mt-2">
                  <step.icon className="w-12 h-12 text-accent" />
                </div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight">{step.title}</h4>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
