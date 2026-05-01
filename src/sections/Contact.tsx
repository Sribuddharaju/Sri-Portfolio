import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { profile } from '@/data/profile';

const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    accent: 'from-brand-500 to-cyan-500',
  },
  {
    label: 'LinkedIn',
    value: 'in/sri-buddharaju',
    href: profile.links.linkedin,
    icon: Linkedin,
    accent: 'from-blue-500 to-brand-600',
  },
  {
    label: 'GitHub',
    value: 'github.com/Sribuddharaju',
    href: profile.links.github,
    icon: Github,
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, '')}`,
    icon: Phone,
    accent: 'from-emerald-500 to-teal-500',
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={
        <>
          Have an interesting Salesforce challenge? <span className="text-gradient">Let’s talk.</span>
        </>
      }
      description="I’m always open to a great conversation about Sales Cloud, Service Cloud, AI integrations, or technical leadership roles."
      align="center"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="card-surface relative overflow-hidden p-8 sm:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-mesh-1 opacity-60"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-between gap-4 rounded-xl border border-ink-200 bg-white/70 p-4 transition-all hover:-translate-y-0.5 hover:border-brand-400 dark:border-ink-700 dark:bg-ink-900/60 dark:hover:border-brand-400 focus-ring"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${c.accent} text-white shadow-glow`}
                  >
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400">
                      {c.label}
                    </p>
                    <p className="truncate text-sm font-semibold text-ink-900 dark:text-white sm:text-base">
                      {c.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-500" />
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-ink-200/70 pt-6 dark:border-ink-700/70 sm:flex-row">
            <p className="inline-flex items-center gap-1.5 text-sm text-ink-500 dark:text-ink-400">
              <MapPin className="h-4 w-4" /> Based in {profile.location}
            </p>
            <Button as="a" href={profile.links.email} size="lg" leftIcon={<Mail className="h-4 w-4" />}>
              Send me an email
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
