import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BadgeCheck, Filter } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import {
  certifications,
  certificationCategories,
  type Certification,
} from '@/data/certifications';
import { cn } from '@/lib/cn';

type Filter = 'all' | Certification['category'];

const categoryColor: Record<Certification['category'], string> = {
  salesforce: 'from-brand-500 to-blue-600',
  ai: 'from-cyan-500 to-emerald-500',
  agile: 'from-violet-500 to-fuchsia-500',
  devops: 'from-pink-500 to-rose-500',
};

const categoryRing: Record<Certification['category'], string> = {
  salesforce: 'ring-brand-400/40',
  ai: 'ring-cyan-400/40',
  agile: 'ring-violet-400/40',
  devops: 'ring-pink-400/40',
};

export function Certifications() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = useMemo(
    () =>
      certifications.filter((c) => filter === 'all' || c.category === filter),
    [filter]
  );

  const filters: { id: Filter; label: string; count: number }[] = useMemo(
    () => [
      { id: 'all', label: 'All', count: certifications.length },
      ...(Object.keys(certificationCategories) as Certification['category'][]).map(
        (key) => ({
          id: key,
          label: certificationCategories[key].label,
          count: certifications.filter((c) => c.category === key).length,
        })
      ),
    ],
    []
  );

  return (
    <Section
      id="certifications"
      eyebrow="Credentials"
      title={
        <>
          Certifications &amp; <span className="text-gradient">verified credentials.</span>
        </>
      }
      description="A working catalog of the certifications backing my Salesforce, AI, Agile, and DevOps practice."
    >
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <span className="mr-1 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink-500 dark:text-ink-400">
          <Filter className="h-3.5 w-3.5" /> Filter
        </span>
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all focus-ring',
              filter === f.id
                ? 'border-transparent bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-glow'
                : 'border-ink-200 bg-white/70 text-ink-700 hover:border-brand-400 hover:text-brand-700 dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-200 dark:hover:border-brand-400 dark:hover:text-brand-300'
            )}
            aria-pressed={filter === f.id}
          >
            {f.label}
            <span
              className={cn(
                'rounded-full px-1.5 py-0.5 text-[10px] font-bold',
                filter === f.id
                  ? 'bg-white/20 text-white'
                  : 'bg-ink-100 text-ink-500 dark:bg-ink-800 dark:text-ink-400'
              )}
            >
              {f.count}
            </span>
          </button>
        ))}
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((cert, idx) => (
            <motion.article
              key={cert.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className={cn(
                'card-surface group relative flex items-start gap-4 overflow-hidden p-5 transition-all hover:-translate-y-0.5 hover:ring-2',
                categoryRing[cert.category]
              )}
            >
              <div
                aria-hidden
                className={cn(
                  'absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br opacity-20 blur-2xl transition-opacity group-hover:opacity-40',
                  categoryColor[cert.category]
                )}
              />
              <span
                className={cn(
                  'relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-sm font-bold text-white shadow-glow',
                  categoryColor[cert.category]
                )}
              >
                {cert.shortIssuer}
              </span>
              <div className="relative min-w-0">
                <p className="text-sm font-semibold leading-snug text-ink-900 dark:text-white">
                  {cert.name}
                </p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-ink-500 dark:text-ink-400">
                  <BadgeCheck className="h-3.5 w-3.5 text-emerald-500" />
                  {cert.issuer}
                </p>
                <span
                  className={cn(
                    'mt-2 inline-flex rounded-full px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider',
                    cert.category === 'salesforce' &&
                      'bg-brand-500/10 text-brand-700 dark:text-brand-300',
                    cert.category === 'ai' &&
                      'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300',
                    cert.category === 'agile' &&
                      'bg-violet-500/10 text-violet-700 dark:text-violet-300',
                    cert.category === 'devops' &&
                      'bg-pink-500/10 text-pink-700 dark:text-pink-300'
                  )}
                >
                  {certificationCategories[cert.category].label}
                </span>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
