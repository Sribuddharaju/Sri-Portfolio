import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { experiences } from '@/data/experience';

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          Eight years shipping <span className="text-gradient">enterprise Salesforce</span> for Fortune 100s.
        </>
      }
      description="From end-to-end migrations and multi-tenant architectures to AI-powered tooling — here is the journey."
    >
      <ol className="relative">
        <span
          aria-hidden
          className="absolute left-3.5 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-500/60 via-cyan-glow/40 to-transparent sm:left-4"
        />
        {experiences.map((exp, idx) => (
          <motion.li
            key={`${exp.company}-${exp.start}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className="relative pb-10 pl-12 last:pb-0 sm:pl-14"
          >
            <span className="absolute left-0 top-1.5 grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-gradient-to-br from-brand-500 to-cyan-500 shadow-glow dark:border-ink-950 sm:h-8 sm:w-8">
              <span className="h-2 w-2 rounded-full bg-white" />
            </span>

            <div className="card-surface group relative overflow-hidden p-5 transition-all hover:-translate-y-0.5 hover:border-brand-400/60 sm:p-7 dark:hover:border-brand-400/60">
              {exp.current && (
                <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Current
                </span>
              )}
              <h3 className="text-lg font-semibold text-ink-900 dark:text-white sm:text-xl">
                {exp.role}
              </h3>
              <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-500 dark:text-ink-300">
                <span className="inline-flex items-center gap-1.5">
                  <Building2 className="h-4 w-4" /> {exp.company}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" /> {exp.start} – {exp.end}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" /> {exp.location}
                </span>
              </div>

              <p className="mt-4 text-sm text-ink-600 dark:text-ink-300 sm:text-base">
                {exp.summary}
              </p>

              <ul className="mt-5 space-y-2.5">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="relative pl-5 text-sm text-ink-700 dark:text-ink-200 sm:text-[15px]"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-500 to-cyan-glow"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <li key={tag} className="chip">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
