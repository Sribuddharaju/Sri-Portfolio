import { ArrowRight, Download, Github, Linkedin, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { profile } from '@/data/profile';
import { heroStats } from '@/data/achievements';

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center pb-12 pt-32 sm:pt-36"
    >
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for Salesforce architecture & lead roles
          </div>

          <p className="mb-3 inline-flex items-center gap-2 font-mono text-sm text-brand-700 dark:text-brand-300">
            <Sparkles className="h-4 w-4" /> Hi there, I’m
          </p>

          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            <span className="block">{profile.shortName}</span>
            <span className="mt-2 block text-gradient">
              {profile.headline}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-ink-600 dark:text-ink-300 sm:text-xl">
            I architect <span className="font-semibold text-ink-900 dark:text-white">Sales &amp; Service Cloud</span> at enterprise scale,
            build <span className="font-semibold text-ink-900 dark:text-white">metadata-driven frameworks</span>,
            and ship <span className="font-semibold text-ink-900 dark:text-white">AI-powered developer tooling</span> that compresses delivery cycles end-to-end.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-500 dark:text-ink-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {profile.yearsExperience}+ years experience
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow" />
              {profile.certificationCount}× Salesforce-stack certified
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button as="a" href="#projects" rightIcon={<ArrowRight className="h-4 w-4" />} size="lg">
              View my work
            </Button>
            <Button
              as="a"
              href={profile.links.resume}
              variant="outline"
              size="lg"
              leftIcon={<Download className="h-4 w-4" />}
              download
            >
              Download résumé
            </Button>
            <div className="ml-1 flex items-center gap-2">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-ink-200 bg-white/70 text-ink-700 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-700 dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-200 dark:hover:border-brand-400 dark:hover:text-brand-300 focus-ring"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-ink-200 bg-white/70 text-ink-700 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-700 dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-200 dark:hover:border-brand-400 dark:hover:text-brand-300 focus-ring"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-ink-200/70 bg-white/60 p-5 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-brand-400/60 dark:border-ink-700/70 dark:bg-ink-900/50"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-brand-500/30 to-cyan-glow/30 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <p className="text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
