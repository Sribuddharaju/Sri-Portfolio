import {
  Bot,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers,
  MessageSquare,
  Network,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import type { ComponentType, SVGProps } from 'react';
import { cn } from '@/lib/cn';

type IconCmp = ComponentType<SVGProps<SVGSVGElement>>;

interface OrbitNode {
  Icon: IconCmp;
  label: string;
  hue: 'brand' | 'cyan' | 'violet' | 'pink' | 'emerald';
}

const innerNodes: OrbitNode[] = [
  { Icon: Zap, label: 'Apex', hue: 'brand' },
  { Icon: Layers, label: 'LWC', hue: 'cyan' },
  { Icon: Workflow, label: 'Flows', hue: 'violet' },
  { Icon: Cloud, label: 'CMDT', hue: 'emerald' },
];

const outerNodes: OrbitNode[] = [
  { Icon: Bot, label: 'AI / LLM', hue: 'cyan' },
  { Icon: Network, label: 'Integrations', hue: 'violet' },
  { Icon: GitBranch, label: 'CI/CD', hue: 'pink' },
  { Icon: MessageSquare, label: 'Agentforce', hue: 'brand' },
  { Icon: Database, label: 'Data Cloud', hue: 'emerald' },
  { Icon: Code2, label: 'React / LWR', hue: 'cyan' },
];

const hueRing: Record<OrbitNode['hue'], string> = {
  brand: 'from-brand-500/90 to-brand-700/90 ring-brand-400/50',
  cyan: 'from-cyan-500/90 to-teal-500/90 ring-cyan-400/50',
  violet: 'from-violet-500/90 to-fuchsia-500/90 ring-violet-400/50',
  pink: 'from-pink-500/90 to-rose-500/90 ring-pink-400/50',
  emerald: 'from-emerald-500/90 to-teal-500/90 ring-emerald-400/50',
};

interface HeroOrbitProps {
  className?: string;
}

/**
 * Hero ecosystem visualization:
 * - Central pulsing "platform" core.
 * - Inner orbit (4 nodes) rotating clockwise.
 * - Outer orbit (6 nodes) rotating counter-clockwise.
 * - Icons themselves counter-rotate so they stay upright.
 * - Motion is paused on prefers-reduced-motion.
 */
export function HeroOrbit({ className }: HeroOrbitProps) {
  const reduced = useReducedMotion();

  return (
    <div
      className={cn(
        'relative mx-auto aspect-square w-full max-w-[460px]',
        className
      )}
      aria-hidden
    >
      {/* Background concentric rings */}
      <div className="absolute inset-[14%] rounded-full border border-brand-500/15 dark:border-brand-400/15" />
      <div className="absolute inset-[6%] rounded-full border border-ink-300/20 dark:border-ink-600/30" />
      <div className="absolute inset-0 rounded-full border border-ink-300/10 dark:border-ink-700/30" />

      {/* Soft glow */}
      <div className="absolute inset-[24%] rounded-full bg-gradient-to-br from-brand-500/30 via-cyan-glow/25 to-violet-500/25 blur-3xl" />

      {/* Center "core" */}
      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-glow sm:h-28 sm:w-28">
          <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-brand-500 to-cyan-500 opacity-60 blur-xl animate-pulse-soft" />
          <Sparkles className="h-7 w-7 sm:h-8 sm:w-8" />
        </div>
        <div className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">
          Salesforce&nbsp;×&nbsp;AI
        </div>
      </motion.div>

      {/* Inner orbit — 4 nodes, ~32% radius */}
      <div
        className={cn(
          'absolute inset-[18%]',
          reduced ? '' : 'animate-spin-slow'
        )}
      >
        {innerNodes.map((node, i) => {
          const angle = (360 / innerNodes.length) * i;
          return (
            <OrbitNode
              key={node.label}
              node={node}
              angle={angle}
              radiusPct={50}
              counterRotateClass={reduced ? '' : 'animate-spin-reverse'}
              size="md"
            />
          );
        })}
      </div>

      {/* Outer orbit — 6 nodes */}
      <div
        className={cn(
          'absolute inset-[2%]',
          reduced ? '' : 'animate-spin-reverse'
        )}
      >
        {outerNodes.map((node, i) => {
          const angle = (360 / outerNodes.length) * i + 18;
          return (
            <OrbitNode
              key={node.label}
              node={node}
              angle={angle}
              radiusPct={50}
              counterRotateClass={reduced ? '' : 'animate-spin-slow'}
              size="sm"
            />
          );
        })}
      </div>

      {/* Sparkle dots */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const r = 48; // pct
          const x = 50 + Math.cos(angle) * r;
          const y = 50 + Math.sin(angle) * r;
          return (
            <span
              key={i}
              className="absolute h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-glow/60 animate-pulse-soft"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                animationDelay: `${(i * 0.25).toFixed(2)}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

interface OrbitNodeProps {
  node: OrbitNode;
  angle: number;
  radiusPct: number;
  counterRotateClass: string;
  size: 'sm' | 'md';
}

function OrbitNode({ node, angle, radiusPct, counterRotateClass, size }: OrbitNodeProps) {
  const sizeClass =
    size === 'md' ? 'h-12 w-12 sm:h-14 sm:w-14' : 'h-10 w-10 sm:h-11 sm:w-11';
  const iconSize = size === 'md' ? 'h-5 w-5 sm:h-6 sm:w-6' : 'h-4 w-4 sm:h-5 sm:w-5';
  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        transform: `rotate(${angle}deg) translateX(${radiusPct}%) rotate(-${angle}deg)`,
      }}
    >
      <div className={cn('-translate-x-1/2 -translate-y-1/2', counterRotateClass)}>
        <div
          className={cn(
            'group grid place-items-center rounded-2xl bg-gradient-to-br ring-1 ring-inset shadow-glow backdrop-blur-sm',
            'border border-white/20 dark:border-white/10',
            'animate-orbit-glow',
            hueRing[node.hue],
            sizeClass
          )}
        >
          <node.Icon className={cn('text-white', iconSize)} aria-hidden />
        </div>
      </div>
    </div>
  );
}
