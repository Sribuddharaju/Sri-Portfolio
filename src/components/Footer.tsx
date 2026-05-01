import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/profile';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-200/60 py-8 dark:border-ink-700/60">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center text-sm text-ink-500 dark:text-ink-400 sm:text-left">
          © {year} {profile.shortName}. Built with{' '}
          <span className="font-mono">React · TypeScript · Tailwind · Framer Motion</span>.
        </p>
        <div className="flex items-center gap-2">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 bg-white/70 text-ink-700 transition-colors hover:border-brand-400 hover:text-brand-700 dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-200 dark:hover:border-brand-400 dark:hover:text-brand-300 focus-ring"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 bg-white/70 text-ink-700 transition-colors hover:border-brand-400 hover:text-brand-700 dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-200 dark:hover:border-brand-400 dark:hover:text-brand-300 focus-ring"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.links.email}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 bg-white/70 text-ink-700 transition-colors hover:border-brand-400 hover:text-brand-700 dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-200 dark:hover:border-brand-400 dark:hover:text-brand-300 focus-ring"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
