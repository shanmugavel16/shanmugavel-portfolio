"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Eye, Network } from "lucide-react";

const projects = [
  {
    title: "Intelligent Animal Detection System",
    subtitle: "PIR Sensors & IoT Integration",
    desc: [
      "This project presents the design and development of an intelligent animal detection and intrusion prevention system aimed at reducing unwanted animal interference in human environments such as farms, roads, and residential areas.",
      "The system utilizes sensor-based detection mechanisms, including Passive Infrared (PIR) sensors, to identify the presence of animals based on motion and body heat. Upon detection, the system processes the input using a microcontroller (such as Arduino or ESP32) and triggers a response mechanism.",
      "The response includes generating high-frequency sound waves through a speaker or buzzer, which are unpleasant to animals and effectively drive them away without causing harm. Additionally, the system can be programmed to differentiate between different types of animals and produce specific sound patterns tailored to each animal for improved efficiency.",
      "The proposed solution is cost-effective, energy-efficient, and easy to install, making it suitable for rural and urban deployment. It helps in preventing crop damage, reducing road accidents caused by animal crossings, and enhancing safety in human habitats. Future enhancements may include integrating camera modules and machine learning algorithms for more accurate animal classification and real-time monitoring.",
      "Furthermore, the system can be extended with wireless communication technologies such as GSM, Wi-Fi, or IoT platforms to provide real-time alerts and remote monitoring capabilities to users. This allows farmers or authorities to receive notifications on their mobile devices whenever animal intrusion is detected, enabling quicker response and better control. Such integration enhances the scalability and effectiveness of the system, making it a smart and adaptable solution for modern agricultural and safety applications."
    ],
    image: "animal-detection",
    tags: ["Arduino", "ESP32", "PIR Sensors", "IoT", "GSM/Wi-Fi", "Hardware"],
    icon: Eye
  },
  {
    title: "Smart Device Animal Detection & Accident Prevention System",
    subtitle: "IoT Intrusion Deterrent",
    desc: [
      "An innovative IoT-based system designed to prevent animal intrusion in farms, roads, and residential areas. The system uses PIR sensors to detect animal movement based on heat and motion, and processes the data using a microcontroller like Arduino / ESP32.",
      "When an animal is detected, the system automatically activates a non-harmful deterrent—such as high-frequency sound—effectively driving animals away without causing injury. It can also be customized to respond differently to various animals using specific sound patterns.",
      "This solution is cost-effective, energy-efficient, and easy to deploy, helping to reduce crop damage, prevent road accidents, and improve safety in human environments.",
      "Future enhancements include camera integration, AI-based animal recognition, and IoT connectivity (Wi-Fi/GSM) for real-time alerts and remote monitoring via mobile devices."
    ],
    image: "iot-system",
    tags: ["Arduino", "ESP32", "PIR Sensors", "IoT", "AI Integration"],
    icon: Network
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-8">
      <Navbar />
      
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">Projects</h1>
          <p className="text-muted-foreground text-lg md:text-xl font-light">Explore my recent work and technical experiments.</p>
        </div>

        {/* Projects List - Grid Layout */}
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
                className="flex flex-col gap-8 glass-card p-6 md:p-8 rounded-[2.5rem] group border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors hover:border-accent/30"
              >
                {/* Image Section */}
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

                {/* Content Section */}
                <div className="flex flex-col flex-1 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <project.icon className="w-8 h-8 text-accent" />
                      <h3 className="text-xs text-accent uppercase tracking-widest font-extrabold">{project.subtitle}</h3>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight line-clamp-2">{project.title}</h2>
                  </div>
                  
                  <div className="text-sm md:text-base text-muted-foreground font-light leading-relaxed flex-1 space-y-4">
                    {project.desc.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
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
