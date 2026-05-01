import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Heart, Trophy } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { profile } from '@/data/profile';
import { achievements } from '@/data/achievements';

const facts = [
  {
    icon: Briefcase,
    title: 'Currently leading',
    body: 'A 7-member Salesforce delivery team across 3 scrum squads at Cisco ThousandEyes.',
  },
  {
    icon: Trophy,
    title: 'Past clients',
    body: 'Cisco, Hewlett Packard Enterprise, Deloitte, IBM, Tech Mahindra, Vodafone, BPCL.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    body: 'B.Tech, Mechanical Engineering — JNTU, Andhra Pradesh.',
  },
  {
    icon: Heart,
    title: 'What I love',
    body: 'Metadata-driven design, AI tooling, clean architecture, and great DX.',
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          Architecting Salesforce systems{' '}
          <span className="text-gradient">that scale with the business.</span>
        </>
      }
      description="A senior engineer turned technical lead — I obsess over reusable platforms, developer experience, and shipping outcomes Fortune 100 teams can rely on."
    >
      <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <p className="text-base leading-relaxed text-ink-700 dark:text-ink-200 sm:text-lg">
            {profile.summary}
          </p>
          <p className="mt-5 text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:text-lg">
            10× certified across the Salesforce stack — including{' '}
            <strong className="text-ink-900 dark:text-white">AI Specialist</strong> and
            <strong className="text-ink-900 dark:text-white"> Scrum Master</strong> — with hands-on architecture skills in
            Apex, LWC, custom metadata patterns, enterprise integrations, and Agentforce-era AI tooling.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {facts.map((f) => (
              <li
                key={f.title}
                className="card-surface flex items-start gap-3 p-4 transition-all hover:-translate-y-0.5 hover:border-brand-400/60 dark:hover:border-brand-400/60"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-500/20 to-cyan-glow/20 text-brand-700 dark:text-brand-300">
                  <f.icon className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-900 dark:text-white">
                    {f.title}
                  </p>
                  <p className="mt-0.5 text-sm text-ink-500 dark:text-ink-300">
                    {f.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-ink-500 dark:text-ink-400">
            Highlights
          </p>
          <ul className="space-y-3">
            {achievements.map((a) => (
              <li
                key={a.title}
                className="card-surface group relative overflow-hidden p-5 transition-all hover:-translate-y-0.5 hover:border-brand-400/60 dark:hover:border-brand-400/60"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-brand-500/20 to-cyan-glow/20 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
                <div className="relative flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-glow">
                    <a.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-ink-900 dark:text-white">
                      {a.title}
                    </p>
                    <p className="mt-0.5 text-sm text-ink-500 dark:text-ink-300">
                      {a.description}
                    </p>
                    <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                      {a.metric}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
