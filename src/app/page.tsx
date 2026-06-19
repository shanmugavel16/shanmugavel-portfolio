
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { HeroBlock } from "@/components/ui/hero-block-shadcnui";
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
  GraduationCap,
  Target,
  Heart,
  Loader2,
  ArrowUp
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      title: "SkillMate",
      subtitle: "AI Skill Roadmap Generator",
      desc: "A smart roadmap application designed to help users learn any skill with the help of AI. Users enter a learning goal, and the system dynamically generates interactive step-by-step node tracks, progress metrics, and curated training resources.",
      image: "ai-brain",
      tags: ["Next.js", "React", "AI Integration", "Gemini API", "Tailwind CSS", "TypeScript"],
      icon: GraduationCap
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
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden flex flex-col">
      <Navbar />

      <HeroBlock />

      {/* 2. About Section */}
      <section id="about" className="min-h-screen py-16 md:py-32 px-4 md:px-8 bg-zinc-50 scroll-mt-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-none mb-4 tracking-tighter">
              <span className="inline-block">About <span className="text-zinc-900 font-serif italic">Me</span></span>
            </h2>
            
            <p className="text-muted-foreground text-base font-light leading-relaxed">
              Hello! I&apos;m Shanmugavel, a Computer Science and Design student. I love bridging the gap between hardware mechanics and beautiful software interfaces. My process combines engineering logic with user experience aesthetics.
            </p>

            <div className="space-y-6">
              {[
                { icon: GraduationCap, title: "Education", text: "Computer Science and Design student with a solid programming core, translating design ideas into fully working prototypes." },
                { icon: Heart, title: "Passion", text: "Designing and building high-performance modern websites while implementing smart IoT hardware systems for real-world impact." },
                { icon: Target, title: "Goal", text: "To continuously advance my skills in modern tech stacks, creating intelligent, intuitive, and robust digital solutions." }
              ].map((card, i) => (
                <div key={i} className="glass-card p-5 sm:p-6 rounded-xl sm:rounded-2xl flex gap-5 items-start hover:border-zinc-300">
                  <div className="p-3 bg-zinc-100 rounded-xl text-zinc-900">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold tracking-tight">{card.title}</h3>
                    <p className="text-muted-foreground font-light text-sm leading-relaxed">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-center lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto rounded-full px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg group bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-900" onClick={() => {
                const link = document.createElement('a');
                link.href = '/Shanmugavelcv.pdf';
                link.download = 'Shanmugavel_CV.pdf';
                link.click();
              }}>
                Download Resume <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden glass-card p-2 sm:p-3 shadow-2xl shadow-zinc-100"
          >
            <div className="relative w-full h-full rounded-[1.2rem] sm:rounded-[2rem] overflow-hidden group">
              <Image 
                src={ownerImg.imageUrl}
                alt={ownerImg.description}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint={ownerImg.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl backdrop-blur-md border-zinc-200">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-1">Developer & Designer</p>
                <p className="text-xl font-extrabold tracking-tight">Shanmugavel</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Projects Section */}
      <section id="projects" className="min-h-screen py-16 md:py-32 px-4 md:px-8 scroll-mt-32">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter"><span className="inline-block">Latest <span className="text-zinc-900 font-serif italic">Projects</span></span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light text-base">A handpicked selection of my technical work bridging code, hardware, and design.</p>
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
                  className="flex flex-col gap-8 glass-card p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] group border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors"
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
                      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white">Active System Prototype</p>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <project.icon className="w-8 h-8 text-zinc-900" />
                        <h4 className="text-xs text-zinc-800 uppercase tracking-widest font-extrabold">{project.subtitle}</h4>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight line-clamp-2">{project.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed flex-1">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-200">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="border-zinc-200 bg-zinc-50 py-1.5 px-4 font-mono text-xs text-zinc-850">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Skills Section */}
      <section id="skills" className="min-h-screen py-16 md:py-32 px-4 md:px-8 bg-zinc-50 scroll-mt-32">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
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
                className="glass-card p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] group hover:border-zinc-300"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-zinc-100 rounded-2xl group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-500 text-zinc-900">
                    <group.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-full text-sm font-medium hover:border-zinc-900 hover:text-zinc-900 transition-colors duration-300">
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
      <section id="contact" className="min-h-screen py-16 md:py-32 px-4 md:px-8 scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter"><span className="inline-block">Con<span className="text-zinc-900 italic font-serif">tact</span></span></h2>
            <div className="h-1.5 w-24 bg-zinc-900 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12 text-center lg:text-left"
            >
              <div className="space-y-6">
                <h3 className="text-xl font-bold tracking-tight">Let&apos;s build something beautiful.</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-md mx-auto lg:mx-0">
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
                    className="glass-card p-4 rounded-2xl flex items-center justify-center transition-all hover:border-zinc-300 hover:bg-zinc-50 text-muted-foreground hover:text-zinc-900"
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
              className="glass-card p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] border border-zinc-200"
            >
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="space-y-2">
                  <Label htmlFor="name" className="block text-left w-full text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Your Name</Label>
                  <Input id="name" name="user_name" placeholder="Enter your name" required className="bg-zinc-50 border-zinc-200 h-14 rounded-2xl focus-visible:ring-zinc-900 focus-visible:border-zinc-900 focus:border-zinc-900 text-zinc-900" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="block text-left w-full text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</Label>
                  <Input id="email" name="user_email" type="email" placeholder="Enter your mail id" required className="bg-zinc-50 border-zinc-200 h-14 rounded-2xl focus-visible:ring-zinc-900 focus-visible:border-zinc-900 focus:border-zinc-900 text-zinc-900" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="block text-left w-full text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell me about your project..." required className="bg-zinc-50 border-zinc-200 min-h-[140px] rounded-2xl focus-visible:ring-zinc-900 focus-visible:border-zinc-900 focus:border-zinc-900 text-zinc-900" />
                </div>
                <Button type="submit" size="lg" disabled={isSubmitting} className="flex w-full bg-zinc-900 hover:bg-zinc-800 h-16 rounded-2xl font-bold text-white group transition-all duration-300">
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

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-zinc-900 text-white shadow-lg border border-zinc-750 hover:bg-zinc-800 transition-all duration-300 flex items-center justify-center animate-in fade-in slide-in-from-bottom-4"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <Footer />
    </div>
  );
}
