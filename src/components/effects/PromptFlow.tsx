import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Bot, FileCode, MessageSquareText, ScanSearch } from 'lucide-react';
import { cn } from '@/lib/cn';

interface PromptFlowProps {
  className?: string;
}

const STAGES = [
  { Icon: MessageSquareText, label: 'Webex bot ask', detail: '@bot enhance story', accent: 'from-brand-500 to-cyan-500' },
  { Icon: ScanSearch, label: 'Vector + intent search', detail: '18K metadata · top-K retrieval', accent: 'from-cyan-500 to-emerald-500' },
  { Icon: Bot, label: 'Cisco Circuit LLM', detail: '3-tier model routing', accent: 'from-violet-500 to-fuchsia-500' },
  { Icon: FileCode, label: 'Apex + LWC scaffolded', detail: 'tests · docs · PR', accent: 'from-pink-500 to-rose-500' },
] as const;

/**
 * Animated horizontal flow visualization that walks through the stages of an
 * AI sprint-execution call. A glowing "head" travels left-to-right, lighting up
 * each stage in turn.
 */
export function PromptFlow({ className }: PromptFlowProps) {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % STAGES.length);
    }, 1700);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <div className={cn('relative', className)}>
      <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {STAGES.map((s, i) => {
          const isActive = !reduced && i === active;
          const isPast = !reduced && i < active;
          return (
            <li
              key={s.label}
              className={cn(
                'group relative flex items-center gap-3 overflow-hidden rounded-2xl border p-4 transition-all duration-500',
                isActive
                  ? 'border-cyan-glow/60 bg-white/80 shadow-glow-lg dark:bg-ink-900/70'
                  : isPast
                  ? 'border-brand-400/30 bg-white/60 dark:bg-ink-900/50'
                  : 'border-ink-200/70 bg-white/40 dark:border-ink-700/70 dark:bg-ink-900/30'
              )}
            >
              {/* Active highlight bar */}
              <motion.span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-brand-500 to-cyan-glow"
                initial={false}
                animate={{ scaleX: isActive ? 1 : isPast ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.22, 0.9, 0.32, 1] }}
              />

              <span
                className={cn(
                  'grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-white shadow-glow transition-transform',
                  s.accent,
                  isActive ? 'scale-110' : 'scale-100'
                )}
              >
                <s.Icon className="h-5 w-5" />
              </span>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-ink-900 dark:text-white">
                  {s.label}
                </p>
                <p className="truncate font-mono text-[11px] text-ink-500 dark:text-ink-400">
                  {s.detail}
                </p>
              </div>

              {i < STAGES.length - 1 && (
                <ArrowRight
                  aria-hidden
                  className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-ink-300 dark:text-ink-600 lg:block"
                />
              )}
            </li>
          );
        })}
      </ol>

      {/* Bottom progress bar */}
      <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-ink-200/60 dark:bg-ink-800/60">
        <motion.div
          initial={false}
          animate={{
            width: reduced
              ? '100%'
              : `${((active + 1) / STAGES.length) * 100}%`,
          }}
          transition={{ duration: 0.6, ease: [0.22, 0.9, 0.32, 1] }}
          className="h-full bg-gradient-to-r from-brand-500 via-cyan-glow to-violet-500"
        />
      </div>
    </div>
  );
}
