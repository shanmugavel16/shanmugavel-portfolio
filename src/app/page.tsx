
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  ArrowRight, 
  Send, 
  Github, 
  Linkedin, 
  Mail, 
  MessageSquare, 
  Eye, 
  Network,
  Palette,
  Code2,
  Terminal,
  Figma,
  Rocket,
  Cpu,
  Layers,
  GraduationCap,
  Target,
  Heart,
  Loader2
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      e.currentTarget as HTMLFormElement,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
    )
    .then(() => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out! I will get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      toast({
        variant: "destructive",
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please verify your config or try again.",
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const ownerImg = PlaceHolderImages.find(img => img.id === "owner-portrait") || {
    imageUrl: "/profile.jpg",
    description: "Professional portrait of Shanmugavel",
    imageHint: "professional portrait"
  };

  const projects = [
    {
      title: "Intelligent Animal Detection System",
      subtitle: "PIR Sensors & IoT Integration",
      desc: "An intelligent system utilizing PIR sensors to detect animals based on motion and body temperature. Processed via microcontrollers (Arduino/ESP32), it triggers customized high-frequency sound waves to safely drive animals away. Designed to prevent crop damage and road accidents, the system is cost-effective and scalable, featuring IoT integrations for real-time remote monitoring.",
      image: "animal-detection",
      tags: ["Arduino", "ESP32", "PIR Sensors", "IoT", "GSM/Wi-Fi", "Hardware"],
      icon: Eye
    },
    {
      title: "Smart Device Animal Detection & Accident Prevention System",
      subtitle: "IoT Intrusion Deterrent",
      desc: "An innovative IoT-based system using PIR sensors and microcontrollers (Arduino/ESP32) to prevent animal intrusion in farms and roads. Upon detection, it automatically activates specific non-harmful high-frequency sounds to drive various animals away. The solution prevents road accidents and crop damage while remaining cost-effective. Future enhancements include AI-based animal recognition and Wi-Fi/GSM connectivity for real-time mobile alerts.",
      image: "iot-system",
      tags: ["Arduino", "ESP32", "PIR Sensors", "IoT", "AI Integration"],
      icon: Network
    }
  ];

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="relative min-h-screen">
      <Navbar />

      {/* 1. Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-28 px-4 scroll-mt-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10 bg-white/[0.03] backdrop-blur-md border border-white/10 px-5 py-2 rounded-full mb-6 flex items-center gap-2"
        >
          <Terminal className="w-3.5 h-3.5 text-accent animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-accent">Computer Science & Design Student</span>
        </motion.div>

        <div className="z-10 text-center max-w-5xl mx-auto space-y-8 mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-9xl font-extrabold leading-none tracking-tighter"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-purple-200">SHANMU</span>
            <span className="text-accent italic font-serif text-glow ml-2">GAVEL</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed"
          >
            Crafting premium digital experiences through cutting-edge frontend development, hardware innovation, and UI/UX design.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <Button size="lg" className="rounded-full px-8 py-7 text-lg group bg-accent hover:bg-accent/80 text-white transition-all duration-300" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Projects <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="glass-button rounded-full px-8 py-7 text-lg border-white/10 text-white hover:bg-white/5 transition-all" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get in Touch <Send className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full px-4 z-10"
        >
          {[
            { emoji: "🚀", title: "Innovation", desc: "Building cutting-edge, hardware-integrated solutions with microcontrollers & IoT devices." },
            { emoji: "💻", title: "Development", desc: "Crafting fast, accessible, and responsive websites using modern frontend technologies." },
            { emoji: "🎨", title: "Design", desc: "Iterating from raw layout sketches to high-fidelity, user-centered interactive prototypes." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-card p-8 rounded-[2rem] text-center space-y-4 hover:border-accent/40 cursor-default"
            >
              <div className="text-5xl mb-4 filter drop-shadow-md">{item.emoji}</div>
              <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-semibold">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-5 bg-accent rounded-full opacity-60"
          />
        </motion.div>
      </section>

      {/* 2. About Section */}
      <section id="about" className="min-h-screen py-32 px-4 md:px-8 bg-black/10 scroll-mt-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-bold leading-none mb-4 tracking-tighter">
              About <span className="text-accent font-serif italic text-glow">Me</span>
            </h2>
            
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Hello! I'm Shanmugavel, a Computer Science and Design student. I love bridging the gap between hardware mechanics and beautiful software interfaces. My process combines engineering logic with user experience aesthetics.
            </p>

            <div className="space-y-6">
              {[
                { icon: GraduationCap, title: "Education", text: "Computer Science and Design student with a solid programming core, translating design ideas into fully working prototypes." },
                { icon: Heart, title: "Passion", text: "Designing and building high-performance modern websites while implementing smart IoT hardware systems for real-world impact." },
                { icon: Target, title: "Goal", text: "To continuously advance my skills in modern tech stacks, creating intelligent, intuitive, and robust digital solutions." }
              ].map((card, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl flex gap-5 items-start hover:border-accent/30">
                  <div className="p-3 bg-accent/10 rounded-xl text-accent">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold tracking-tight">{card.title}</h3>
                    <p className="text-muted-foreground font-light text-sm md:text-base leading-relaxed">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg group bg-white/5 hover:bg-white/10 border border-white/10 text-white" onClick={() => window.location.href = '/about'}>
                Read Full Biography <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[2.5rem] overflow-hidden glass-card p-3 shadow-2xl shadow-accent/10"
          >
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden group">
              <Image 
                src={ownerImg.imageUrl}
                alt={ownerImg.description}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint={ownerImg.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl backdrop-blur-md border-white/5">
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">Developer & Designer</p>
                <p className="text-xl font-extrabold tracking-tight">Shanmugavel</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Projects Section */}
      <section id="projects" className="min-h-screen py-32 px-4 md:px-8 scroll-mt-32">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Latest <span className="text-accent font-serif italic text-glow">Projects</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light text-lg">A handpicked selection of my technical work bridging code, hardware, and design.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, idx) => {
              const imgData = PlaceHolderImages.find(img => img.id === project.image)!;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="flex flex-col gap-8 glass-card p-6 md:p-8 rounded-[2.5rem] group border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
                >
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden glass-card">
                    <Image 
                      src={imgData.imageUrl} 
                      alt={imgData.description}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      data-ai-hint={imgData.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Active System Prototype</p>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <project.icon className="w-8 h-8 text-accent" />
                        <h4 className="text-xs text-accent uppercase tracking-widest font-extrabold">{project.subtitle}</h4>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight line-clamp-2">{project.title}</h3>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed flex-1">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="border-white/10 bg-white/5 py-1.5 px-4 font-mono text-xs">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg group bg-white/5 hover:bg-white/15 border border-white/10 text-white" onClick={() => window.location.href = '/projects'}>
              View Project Details <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Skills Section */}
      <section id="skills" className="min-h-screen py-32 px-4 md:px-8 bg-black/10 scroll-mt-32">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter">
              Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillGroups.map((group, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-[2rem] group hover:border-accent/30"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-accent/10 rounded-2xl group-hover:bg-accent group-hover:text-white transition-colors duration-500 text-accent">
                    <group.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="min-h-screen py-32 px-4 md:px-8 scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Con<span className="text-accent italic font-serif text-glow">tact</span></h2>
            <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12 text-center lg:text-left"
            >
              <div className="space-y-6">
                <h3 className="text-4xl font-bold tracking-tight">Let's build something beautiful.</h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                  Whether you have an IoT project idea, need a frontend developer, or just want to chat about tech, feel free to send a message.
                </p>
              </div>

              <div className="grid grid-cols-4 gap-4 max-w-sm mx-auto lg:mx-0">
                {[
                  { icon: Mail, href: "mailto:shanmugavelofficials@gmail.com", label: "Email" },
                  { icon: Github, href: "https://github.com/shanmugavel16", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/shanmuga-vel-4ba042342", label: "LinkedIn" },
                  { icon: MessageSquare, href: "https://wa.me/919442366863", label: "WhatsApp" }
                ].map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="glass-card p-4 rounded-2xl flex items-center justify-center transition-all hover:border-accent hover:bg-white/5 text-muted-foreground hover:text-accent"
                  >
                    <link.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-[2.5rem] border border-white/10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Your Name</Label>
                  <Input id="name" name="user_name" placeholder="Enter your name" required className="bg-white/5 border-white/10 h-14 rounded-2xl focus-visible:ring-accent focus-visible:border-accent focus:border-accent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Address</Label>
                  <Input id="email" name="user_email" type="email" placeholder="Enter your mail id" required className="bg-white/5 border-white/10 h-14 rounded-2xl focus-visible:ring-accent focus-visible:border-accent focus:border-accent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell me about your project..." required className="bg-white/5 border-white/10 min-h-[140px] rounded-2xl focus-visible:ring-accent focus-visible:border-accent focus:border-accent" />
                </div>
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-accent hover:bg-accent/80 h-16 rounded-2xl font-bold text-white group transition-all duration-300">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 justify-center">
                      <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 justify-center">
                      Submit <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
