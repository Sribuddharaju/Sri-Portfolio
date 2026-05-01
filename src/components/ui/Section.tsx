import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  align?: 'left' | 'center';
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = 'left',
}: SectionProps) {
  return (
    <section id={id} className={cn('section-padding scroll-mt-24', className)}>
      <div className="container">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={cn('mb-12 max-w-3xl', align === 'center' && 'mx-auto text-center')}
        >
          {eyebrow && (
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-brand-700 dark:text-brand-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse-soft" />
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base text-ink-500 dark:text-ink-300 sm:text-lg">
              {description}
            </p>
          )}
        </motion.header>
        {children}
      </div>
    </section>
  );
}
