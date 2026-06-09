import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { GalaxyBackground } from "@/components/GalaxyBackground";

export const metadata: Metadata = {
  title: 'Shanmugavel | Web Developer & UI/UX Designer',
  description: 'Portfolio of Shanmugavel - Crafting Digital Experiences with Precision and Creativity.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-background overflow-x-hidden">
        <GalaxyBackground />
        {children}
        <Toaster />
      </body>
    </html>
  );
}