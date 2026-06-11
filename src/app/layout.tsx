import type {Metadata} from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

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
    <html lang="en" className="scroll-smooth w-full max-w-full overflow-x-hidden" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} ${playfairDisplay.variable} antialiased bg-background w-full max-w-full overflow-x-hidden`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}