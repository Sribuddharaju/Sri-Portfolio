import { motion } from 'framer-motion';
import { Bot, Brain, Cpu, Gauge, Layers, Sparkles, Workflow as WorkflowIcon } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { NeuralNet } from '@/components/effects/NeuralNet';
import { PromptFlow } from '@/components/effects/PromptFlow';

const capabilities = [
  {
    icon: Brain,
    title: 'Vector + intent retrieval',
    body: 'Indexed 18K Salesforce metadata components into a fast / deep dual-strategy search powering AI code generation in seconds.',
  },
  {
    icon: WorkflowIcon,
    title: 'Multi-tier model routing',
    body: 'Premium / mid-tier / nano routing per task class — cuts token spend ~45% with no quality loss on routine work.',
  },
  {
    icon: Bot,
    title: 'Bot-driven sprint workflows',
    body: 'Webex bot triggers prompt → search → generate → test → PR. Strict prod / sandbox session isolation built in.',
  },
  {
    icon: Sparkles,
    title: 'Multimodal debug',
    body: 'Logs + screenshots fed to the LLM for richer root-cause analysis. ~20% more edge-cases solved than text-only.',
  },
  {
    icon: Gauge,
    title: 'Token observability',
    body: 'Per-user usage, daily rollups, and a team leaderboard — full cost visibility across 50K+ monthly LLM calls.',
  },
  {
    icon: Layers,
    title: 'Prompt registry',
    body: 'Central versioned prompts with per-user Firestore overrides — A/B-able, auditable, governed.',
  },
];

export function AIShowcase() {
  return (
    <Section
      id="ai"
      eyebrow="AI in my workflow"
      title={
        <>
          The way I build now is{' '}
          <span className="text-gradient">AI-augmented, end to end.</span>
        </>
      }
      description="From metadata retrieval to code generation, automated testing, and root-cause analysis — here is the AI surface I shipped to my team and the loop it powers every day."
    >
      <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Animated visual */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="lg:col-span-7"
        >
          <div className="card-surface relative overflow-hidden p-5 sm:p-6">
            <div className="pointer-events-none absolute inset-0 bg-mesh-1 opacity-50" />
            <div className="relative">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-glow/30 bg-cyan-glow/10 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
                  <Cpu className="h-3.5 w-3.5" /> live model graph
                </span>
                <span className="font-mono text-[11px] text-ink-400 dark:text-ink-500">
                  3-layer · 10 nodes
                </span>
              </div>
              <NeuralNet />
            </div>
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="lg:col-span-5"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-brand-700 dark:text-brand-300">
            Why it matters
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink-900 dark:text-white sm:text-3xl">
            Not just prompts —{' '}
            <span className="text-gradient">a delivery system.</span>
          </h3>
          <p className="mt-3 text-base text-ink-600 dark:text-ink-300 sm:text-lg">
            I don&rsquo;t just &ldquo;use AI&rdquo; — I architect the loop around it. Search,
            governance, routing, observability, and human handoff are first-class
            citizens of every AI feature I ship.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              'Cisco Circuit LLM (OAuth2)',
              'Cursor IDE integration',
              'Vector + exact + intent search',
              'Playwright agentic testing',
              'Webex bot orchestration',
              'Prompt registry & overrides',
            ].map((tag) => (
              <li
                key={tag}
                className="flex items-center gap-2 rounded-xl border border-ink-200/70 bg-white/60 px-3 py-2 text-sm text-ink-700 dark:border-ink-700/70 dark:bg-ink-900/40 dark:text-ink-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-500 to-cyan-glow" />
                {tag}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Prompt flow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="mt-12"
      >
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-brand-700 dark:text-brand-300">
              The loop, in flight
            </p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight text-ink-900 dark:text-white sm:text-2xl">
              From a Webex message to a merged PR
            </h3>
          </div>
          <p className="max-w-md text-sm text-ink-500 dark:text-ink-400">
            A simulated tick of one full request — what every developer on the team
            triggers dozens of times a day.
          </p>
        </div>
        <PromptFlow />
      </motion.div>

      {/* Capability grid */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="card-surface group relative overflow-hidden p-5 transition-all hover:-translate-y-0.5 hover:border-brand-400/60 dark:hover:border-brand-400/60"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-glow/30 to-violet-500/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-glow">
                <c.icon className="h-5 w-5" />
              </span>
              <h4 className="mt-3 text-base font-semibold text-ink-900 dark:text-white">
                {c.title}
              </h4>
              <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">{c.body}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
