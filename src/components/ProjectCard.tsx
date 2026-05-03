import { lazy, Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { Network } from 'lucide-react';
import type { ProjectItem } from '@/data/projects';
import { cn } from '@/lib/cn';

const ArchitectureViewer = lazy(() =>
  import('@/components/architecture/ArchitectureViewer').then((m) => ({
    default: m.ArchitectureViewer,
  }))
);

const ACCENT_MAP: Record<ProjectItem['accent'], string> = {
  brand: 'from-brand-500 to-cyan-500',
  cyan: 'from-cyan-500 to-emerald-500',
  violet: 'from-violet-500 to-fuchsia-500',
  pink: 'from-pink-500 to-rose-500',
  emerald: 'from-emerald-500 to-teal-500',
};

const ACCENT_RING: Record<ProjectItem['accent'], string> = {
  brand: 'ring-brand-400/40',
  cyan: 'ring-cyan-400/40',
  violet: 'ring-violet-400/40',
  pink: 'ring-pink-400/40',
  emerald: 'ring-emerald-400/40',
};

const ACCENT_HOVER: Record<ProjectItem['accent'], string> = {
  brand: 'hover:border-brand-400/60 hover:text-brand-700 dark:hover:text-brand-300',
  cyan: 'hover:border-cyan-400/60 hover:text-cyan-700 dark:hover:text-cyan-300',
  violet: 'hover:border-violet-400/60 hover:text-violet-700 dark:hover:text-violet-300',
  pink: 'hover:border-pink-400/60 hover:text-pink-700 dark:hover:text-pink-300',
  emerald: 'hover:border-emerald-400/60 hover:text-emerald-700 dark:hover:text-emerald-300',
};

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [archOpen, setArchOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45, delay: index * 0.05 }}
        className={cn(
          'card-surface group relative flex h-full flex-col overflow-hidden p-6 transition-all hover:-translate-y-1 hover:ring-2',
          ACCENT_RING[project.accent],
          'sm:p-7'
        )}
      >
        <div
          className={cn(
            'absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br opacity-25 blur-3xl transition-opacity group-hover:opacity-50',
            ACCENT_MAP[project.accent]
          )}
          aria-hidden
        />
        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 items-start gap-3">
              <span
                className={cn(
                  'grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-white shadow-glow',
                  ACCENT_MAP[project.accent]
                )}
              >
                <project.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-ink-900 dark:text-white sm:text-xl">
                  {project.title}
                </h3>
                <p className="text-sm text-ink-500 dark:text-ink-400">
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* View architecture trigger.
                Sits in the top-right of the card so it never collides with
                the title block. The label collapses to icon-only at <sm
                while keeping a full ARIA label for screen readers. */}
            <button
              type="button"
              onClick={() => setArchOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={archOpen}
              aria-label={`View architecture for ${project.title}`}
              className={cn(
                'group/arch relative inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-ink-200/70 bg-white/70 px-2.5 py-1.5 text-xs font-medium text-ink-600 backdrop-blur transition-all hover:scale-[1.03] hover:bg-white hover:shadow-glow focus-ring dark:border-ink-700/70 dark:bg-ink-900/60 dark:text-ink-300 dark:hover:bg-ink-900 sm:px-3',
                ACCENT_HOVER[project.accent]
              )}
            >
              <span
                aria-hidden
                className={cn(
                  'absolute -inset-px rounded-full bg-gradient-to-br opacity-0 blur transition-opacity duration-300 group-hover/arch:opacity-50',
                  ACCENT_MAP[project.accent]
                )}
              />
              <Network className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover/arch:rotate-[18deg] sm:h-4 sm:w-4" />
              <span className="relative hidden sm:inline">View architecture</span>
              <span className="relative sm:hidden">Architecture</span>
            </button>
          </div>

          <p className="mt-5 text-sm text-ink-700 dark:text-ink-200 sm:text-[15px]">
            {project.description}
          </p>

          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-2">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-ink-200/70 bg-white/60 p-3 dark:border-ink-700/70 dark:bg-ink-900/40"
              >
                <p
                  className={cn(
                    'bg-gradient-to-br bg-clip-text text-lg font-bold text-transparent sm:text-xl',
                    ACCENT_MAP[project.accent]
                  )}
                >
                  {metric.value}
                </p>
                <p className="text-[11px] font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <ul className="mt-5 space-y-2 text-sm text-ink-600 dark:text-ink-300">
            {project.bullets.slice(0, 3).map((b, i) => (
              <li key={i} className="relative pl-5">
                <span
                  aria-hidden
                  className={cn(
                    'absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-gradient-to-br',
                    ACCENT_MAP[project.accent]
                  )}
                />
                {b}
              </li>
            ))}
          </ul>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </motion.article>

      {/* The viewer chunk is only fetched when archOpen flips to true.
          Suspense fallback is null because the modal itself animates in
          once the chunk resolves — no spinner needed for a sub-200 ms fetch. */}
      {archOpen && (
        <Suspense fallback={null}>
          <ArchitectureViewer
            open={archOpen}
            onClose={() => setArchOpen(false)}
            project={project}
          />
        </Suspense>
      )}
    </>
  );
}
