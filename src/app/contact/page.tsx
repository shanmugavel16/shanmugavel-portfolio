"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, MessageSquare, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
        description: "Thank you for reaching out! I will review your message and get back to you shortly.",
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

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:shanmugavelofficials@gmail.com",
      label: "Email",
      color: "hover:text-accent"
    },
    {
      icon: Github,
      href: "https://github.com/shanmugavel16",
      label: "GitHub",
      color: "hover:text-white"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/shanmuga-vel-4ba042342",
      label: "LinkedIn",
      color: "hover:text-[#0077b5]"
    },
    {
      icon: MessageSquare,
      href: "https://wa.me/919442366863",
      label: "WhatsApp",
      color: "hover:text-[#25d366]"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-8 relative overflow-hidden">
      <Navbar />
      
      <div className="max-w-7xl mx-auto">
        {/* Contact Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
            Con<span className="text-accent italic font-serif text-glow">tact</span>
          </h1>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side: Professional Icon Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12 text-center lg:text-left"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight">Let&apos;s Connect</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                I&apos;m always interested in hearing about new opportunities, projects, or just having a conversation about technology and innovation.
              </p>
            </div>

            <div className="grid grid-cols-4 lg:grid-cols-4 gap-4 max-w-sm mx-auto lg:mx-0">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`glass-card p-4 rounded-2xl flex items-center justify-center transition-all duration-300 group ${link.color} border-white/5 hover:border-accent/50 hover:bg-white/5`}
                  title={link.label}
                >
                  <link.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-8 md:p-10 rounded-[2.5rem] w-full self-start"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Your Name</Label>
                  <Input 
                    id="name" 
                    name="user_name"
                    placeholder="Enter your name" 
                    required
                    className="bg-white/5 border-white/10 h-14 rounded-2xl focus-visible:ring-accent focus-visible:border-accent focus:border-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</Label>
                  <Input 
                    id="email" 
                    name="user_email"
                    type="email" 
                    placeholder="Enter your mail id" 
                    required
                    className="bg-white/5 border-white/10 h-14 rounded-2xl focus-visible:ring-accent focus-visible:border-accent focus:border-accent"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject"
                  placeholder="Project Inquiry" 
                  className="bg-white/5 border-white/10 h-14 rounded-2xl focus-visible:ring-accent focus-visible:border-accent focus:border-accent"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  placeholder="Tell me about your project or idea..." 
                  required
                  className="bg-white/5 border-white/10 min-h-[150px] rounded-2xl focus-visible:ring-accent focus-visible:border-accent focus:border-accent"
                />
              </div>
              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-accent hover:bg-accent/80 h-16 rounded-2xl font-bold text-lg group shadow-xl shadow-accent/20">
                {isSubmitting ? (
                  <span className="flex items-center gap-2 justify-center">
                    <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2 justify-center">
                    Submit <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
