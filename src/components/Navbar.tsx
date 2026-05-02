import { useEffect, useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/Button';
import { navItems } from '@/data/navigation';
import { profile } from '@/data/profile';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/lib/cn';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(navItems.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'pt-2 sm:pt-3' : 'pt-3 sm:pt-5'
      )}
    >
      <div className="container">
        <nav
          className={cn(
            'flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-5',
            scrolled
              ? 'glass border-transparent shadow-soft'
              : 'border-ink-200/40 bg-white/30 backdrop-blur-md dark:border-ink-700/40 dark:bg-ink-900/30'
          )}
        >
          <a
            href="#top"
            className="flex items-center gap-3 focus-ring rounded-lg"
            aria-label={profile.shortName}
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-cyan-500 font-bold text-white shadow-glow">
              {profile.initials}
            </span>
            <span className="hidden text-sm font-semibold sm:inline">
              {profile.shortName}
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={cn(
                    'relative rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-ring',
                    active === item.id
                      ? 'text-brand-700 dark:text-brand-300'
                      : 'text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white'
                  )}
                >
                  {item.label}
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-500 to-cyan-glow"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 sm:gap-2">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-ink-200 bg-white/70 text-ink-700 transition-colors hover:border-brand-400 hover:text-brand-700 dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-200 dark:hover:border-brand-400 dark:hover:text-brand-300 focus-ring sm:h-10 sm:w-10"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-ink-200 bg-white/70 text-ink-700 transition-colors hover:border-brand-400 hover:text-brand-700 dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-200 dark:hover:border-brand-400 dark:hover:text-brand-300 focus-ring sm:h-10 sm:w-10"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <ThemeToggle />
            <Button
              as="a"
              href="#contact"
              size="sm"
              className="hidden lg:inline-flex"
            >
              Get in touch
            </Button>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-ink-200 bg-white/70 text-ink-700 transition-colors hover:border-brand-400 hover:text-brand-700 dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-200 dark:hover:border-brand-400 dark:hover:text-brand-300 focus-ring sm:h-10 sm:w-10 lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-ink-950/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="container relative z-50 mt-2 lg:hidden"
            >
              <div className="glass rounded-2xl p-4 shadow-soft">
                <ul className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          'block rounded-xl px-3 py-3 text-base font-medium transition-colors',
                          active === item.id
                            ? 'bg-brand-500/10 text-brand-700 dark:text-brand-300'
                            : 'text-ink-700 hover:bg-ink-100 dark:text-ink-100 dark:hover:bg-ink-800/60'
                        )}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex items-center gap-2 border-t border-ink-200/60 pt-3 dark:border-ink-700/60">
                  <Button as="a" href={profile.links.github} variant="outline" size="sm" leftIcon={<Github className="h-4 w-4" />}>
                    GitHub
                  </Button>
                  <Button as="a" href={profile.links.linkedin} variant="outline" size="sm" leftIcon={<Linkedin className="h-4 w-4" />}>
                    LinkedIn
                  </Button>
                  <Button as="a" href="#contact" onClick={() => setMobileOpen(false)} size="sm" className="ml-auto">
                    Contact
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
