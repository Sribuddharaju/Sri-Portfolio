import { lazy, Suspense } from 'react';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Navbar } from '@/components/Navbar';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Hero } from '@/sections/Hero';

// Below-the-fold sections are code-split so the first paint only ships
// Hero + Navbar + the animated background. Each section streams in as a
// separate chunk that the browser fetches in parallel after first paint.
const About = lazy(() =>
  import('@/sections/About').then((m) => ({ default: m.About }))
);
const Skills = lazy(() =>
  import('@/sections/Skills').then((m) => ({ default: m.Skills }))
);
const Experience = lazy(() =>
  import('@/sections/Experience').then((m) => ({ default: m.Experience }))
);
const Projects = lazy(() =>
  import('@/sections/Projects').then((m) => ({ default: m.Projects }))
);
const AIShowcase = lazy(() =>
  import('@/sections/AIShowcase').then((m) => ({ default: m.AIShowcase }))
);
const Certifications = lazy(() =>
  import('@/sections/Certifications').then((m) => ({ default: m.Certifications }))
);
const Contact = lazy(() =>
  import('@/sections/Contact').then((m) => ({ default: m.Contact }))
);
const Footer = lazy(() =>
  import('@/components/Footer').then((m) => ({ default: m.Footer }))
);

// Lightweight skeleton to reserve vertical rhythm while a chunk loads.
// Sized roughly to a section's min height so the page does not jump.
function SectionFallback() {
  return <div aria-hidden className="min-h-[40vh]" />;
}

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
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <AIShowcase />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
