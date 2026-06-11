"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function HeroBlock() {
  return (
    <section id="home" className="relative flex items-center justify-center overflow-hidden bg-background min-h-screen w-full">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >


          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
            Computer Science & Design Student
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 text-6xl font-extrabold text-foreground md:text-8xl tracking-tighter"
          >
            SHANMUGAVEL
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mb-8 max-w-3xl text-sm text-muted-foreground md:text-lg leading-relaxed"
          >
            Crafting premium digital experiences through cutting-edge frontend development, hardware innovation, and UI/UX design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-12 flex flex-wrap justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="gap-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full px-6 py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 border-zinc-200 text-zinc-900 hover:bg-zinc-50 rounded-full px-6 py-6"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Projects
              <ArrowDown className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/shanmugavel16" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/shanmuga-vel-4ba042342" },
              { icon: Mail, href: "mailto:shanmugavelofficials@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 border border-zinc-200 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
