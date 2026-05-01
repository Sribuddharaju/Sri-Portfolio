import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { skillCategories } from '@/data/skills';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Tech stack"
      title={
        <>
          The toolkit I bring to every <span className="text-gradient">Salesforce engagement.</span>
        </>
      }
      description="Curated from delivery across Cisco, HPE, Deloitte, IBM, and Tech Mahindra — from the platform fundamentals to the AI-augmented workflows shaping what comes next."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.article
            key={category.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className="card-surface group relative overflow-hidden p-6 transition-all hover:-translate-y-1 hover:border-brand-400/60 dark:hover:border-brand-400/60"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-brand-500/20 to-cyan-glow/20 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-glow">
                  <category.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-ink-500 dark:text-ink-400">
                    {category.description}
                  </p>
                </div>
              </div>

              <ul className="flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
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
