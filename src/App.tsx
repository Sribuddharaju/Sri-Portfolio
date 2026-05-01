import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ScrollProgress } from '@/components/ScrollProgress';
import { About } from '@/sections/About';
import { AIShowcase } from '@/sections/AIShowcase';
import { Certifications } from '@/sections/Certifications';
import { Contact } from '@/sections/Contact';
import { Experience } from '@/sections/Experience';
import { Hero } from '@/sections/Hero';
import { Projects } from '@/sections/Projects';
import { Skills } from '@/sections/Skills';

export default function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-glow focus:outline-none"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AIShowcase />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
