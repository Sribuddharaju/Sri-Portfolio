import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { projects, type ProjectItem } from '@/data/projects';
import { cn } from '@/lib/cn';

const accentMap: Record<ProjectItem['accent'], string> = {
  brand: 'from-brand-500 to-cyan-500',
  cyan: 'from-cyan-500 to-emerald-500',
  violet: 'from-violet-500 to-fuchsia-500',
  pink: 'from-pink-500 to-rose-500',
  emerald: 'from-emerald-500 to-teal-500',
};

const accentRing: Record<ProjectItem['accent'], string> = {
  brand: 'ring-brand-400/40',
  cyan: 'ring-cyan-400/40',
  violet: 'ring-violet-400/40',
  pink: 'ring-pink-400/40',
  emerald: 'ring-emerald-400/40',
};

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured work"
      title={
        <>
          Platforms, frameworks &amp; <span className="text-gradient">AI-powered tooling.</span>
        </>
      }
      description="The flagship initiatives I’ve led — from metadata-first architectures to AI-augmented developer experiences."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className={cn(
              'card-surface group relative flex h-full flex-col overflow-hidden p-6 transition-all hover:-translate-y-1 hover:ring-2',
              accentRing[project.accent],
              'sm:p-7'
            )}
          >
            <div
              className={cn(
                'absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br opacity-25 blur-3xl transition-opacity group-hover:opacity-50',
                accentMap[project.accent]
              )}
              aria-hidden
            />
            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <span
                    className={cn(
                      'grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-white shadow-glow',
                      accentMap[project.accent]
                    )}
                  >
                    <project.icon className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-ink-900 dark:text-white sm:text-xl">
                      {project.title}
                    </h3>
                    <p className="text-sm text-ink-500 dark:text-ink-400">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
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
                        accentMap[project.accent]
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
                        accentMap[project.accent]
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
        ))}
      </div>
    </Section>
  );
}
