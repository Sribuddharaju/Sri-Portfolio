import { ArrowRight, Download, Github, Linkedin, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { profile } from '@/data/profile';
import { heroStats } from '@/data/achievements';
import { RoleRotator } from '@/components/effects/RoleRotator';
import { HeroOrbit } from '@/components/effects/HeroOrbit';

const ROLES = [
  'Senior Salesforce Developer',
  'Technical Lead & Architect',
  'AI Tooling Builder',
  'LWC + React Engineer',
  'Service Cloud Specialist',
  'LWR-native App Builder',
] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center pb-12 pt-24 sm:pt-28 lg:pt-32"
    >
      <div className="container relative">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            {/* Status + greeting (now stack on mobile) */}
            <div className="mb-5 flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-300 sm:text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for new roles
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-brand-700 dark:text-brand-300 sm:text-sm">
                <Sparkles className="h-4 w-4" /> Hi there, I'm
              </span>
            </div>

            {/* Mobile-tuned headline */}
            <h1 className="text-balance font-bold leading-[1.05] tracking-tight">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5rem]">
                {profile.shortName}
              </span>
              <RoleRotator
                roles={ROLES}
                className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem]"
              />
            </h1>

            <p className="mt-5 max-w-2xl text-base text-ink-600 dark:text-ink-300 sm:mt-6 sm:text-lg lg:text-xl">
              I architect{' '}
              <span className="font-semibold text-ink-900 dark:text-white">
                Sales &amp; Service Cloud
              </span>{' '}
              at enterprise scale, build{' '}
              <span className="font-semibold text-ink-900 dark:text-white">
                metadata-driven frameworks
              </span>
              , and ship{' '}
              <span className="font-semibold text-ink-900 dark:text-white">
                AI-powered developer tooling
              </span>{' '}
              that compresses delivery cycles end-to-end.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-ink-500 dark:text-ink-400 sm:mt-5 sm:gap-x-5 sm:text-sm">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                {profile.yearsExperience}+ years experience
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow" />
                {profile.certificationCount}× certified
              </span>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <Button
                as="a"
                href="#projects"
                rightIcon={<ArrowRight className="h-4 w-4" />}
                size="lg"
              >
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
                Résumé
              </Button>
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
          </motion.div>

          {/* Orbit visual — appears beside the copy on lg+, scaled-down at top on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="order-first mx-auto w-full max-w-[260px] sm:max-w-[320px] lg:order-last lg:col-span-5 lg:max-w-none"
          >
            <HeroOrbit />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
          className="mt-12 grid grid-cols-2 gap-2.5 sm:mt-14 sm:gap-4 md:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-ink-200/70 bg-white/60 p-4 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-brand-400/60 dark:border-ink-700/70 dark:bg-ink-900/50 sm:p-5"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-brand-500/30 to-cyan-glow/30 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <p className="text-2xl font-bold tracking-tight text-gradient sm:text-3xl lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400 sm:text-xs">
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
