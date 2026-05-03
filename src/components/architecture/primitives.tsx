import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode, SVGProps } from 'react';
import { cn } from '@/lib/cn';

/* -------------------------------------------------------------------------- */
/* Shared visual language                                                     */
/* -------------------------------------------------------------------------- */
/**
 * All diagrams render inside an 800x500 viewBox so coordinates are
 * consistent across files. The frame is responsive — it scales to the
 * available width and keeps the aspect ratio.
 */
export const VIEW_W = 800;
export const VIEW_H = 500;

/* Accent gradient identifiers, defined once in <DiagramDefs />. */
export type Accent = 'brand' | 'cyan' | 'violet' | 'pink' | 'emerald' | 'amber';

const ACCENT_FROM: Record<Accent, string> = {
  brand: '#3b8ff6',
  cyan: '#22d3ee',
  violet: '#a78bfa',
  pink: '#ec4899',
  emerald: '#10b981',
  amber: '#f59e0b',
};

const ACCENT_TO: Record<Accent, string> = {
  brand: '#22d3ee',
  cyan: '#10b981',
  violet: '#ec4899',
  pink: '#f472b6',
  emerald: '#06b6d4',
  amber: '#ef4444',
};

export function accentColor(a: Accent) {
  return ACCENT_FROM[a];
}

/* -------------------------------------------------------------------------- */
/* Frame + shared <defs />                                                    */
/* -------------------------------------------------------------------------- */
interface DiagramFrameProps {
  children: ReactNode;
  className?: string;
  /** Caption shown beneath the diagram (e.g. legend / annotation). */
  legend?: ReactNode;
  ariaLabel: string;
}

/**
 * Outer container for every architecture diagram. Keeps the viewBox,
 * background, grid pattern, and shared <defs /> consistent so individual
 * diagrams only have to express their own nodes + edges.
 */
export function DiagramFrame({ children, className, legend, ariaLabel }: DiagramFrameProps) {
  return (
    <div className={cn('w-full', className)}>
      <div className="relative overflow-hidden rounded-2xl border border-ink-200/70 bg-gradient-to-br from-ink-50/80 to-white/60 p-2 dark:border-ink-800/60 dark:from-ink-950 dark:to-ink-900/60 sm:p-3">
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
        <svg
          role="img"
          aria-label={ariaLabel}
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="relative block h-auto w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <DiagramDefs />
          {children}
        </svg>
      </div>
      {legend && (
        <div className="mt-3 text-xs text-ink-500 dark:text-ink-400 sm:text-sm">
          {legend}
        </div>
      )}
    </div>
  );
}

/**
 * Centralised <defs /> — every diagram inherits the same gradient palette,
 * arrow markers, and glow filter so they read as a coherent system.
 */
export function DiagramDefs() {
  return (
    <defs>
      {(Object.keys(ACCENT_FROM) as Accent[]).map((a) => (
        <linearGradient
          id={`grad-${a}`}
          key={a}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor={ACCENT_FROM[a]} />
          <stop offset="100%" stopColor={ACCENT_TO[a]} />
        </linearGradient>
      ))}

      {/* Reusable arrowhead. Sized for stroke-width 2. */}
      <marker
        id="arrow"
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
      </marker>

      {/* Soft cyan glow used for active nodes. */}
      <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
      </filter>
    </defs>
  );
}

/* -------------------------------------------------------------------------- */
/* Node                                                                       */
/* -------------------------------------------------------------------------- */
interface NodeProps {
  x: number;
  y: number;
  w?: number;
  h?: number;
  label: string;
  sublabel?: string;
  accent?: Accent;
  /** Optional icon path (single d attribute) drawn inside a 16x16 viewport. */
  iconPath?: string;
  /** Subtle pulsing border treatment. */
  pulse?: boolean;
  /** Override the default rounded box with a stadium / pill shape. */
  variant?: 'card' | 'pill';
  textAnchor?: 'start' | 'middle';
}

export function DNode({
  x,
  y,
  w = 170,
  h = 64,
  label,
  sublabel,
  accent = 'brand',
  iconPath,
  pulse = false,
  variant = 'card',
  textAnchor = 'start',
}: NodeProps) {
  const reduced = useReducedMotion();
  const r = variant === 'pill' ? h / 2 : 14;

  // Layout constants for label positioning. The icon (if present) is rendered
  // at a 32×32 footprint inside an 18px padding from the node's left edge.
  const padX = 16;
  const iconBox = 32;
  const textX =
    textAnchor === 'middle'
      ? x + w / 2
      : iconPath
      ? x + padX + iconBox + 12
      : x + padX;

  return (
    <g>
      {/* Pulse halo behind the node */}
      {pulse && !reduced && (
        <motion.rect
          x={x - 4}
          y={y - 4}
          width={w + 8}
          height={h + 8}
          rx={r + 4}
          fill={`url(#grad-${accent})`}
          opacity={0.18}
          initial={{ scale: 0.96 }}
          animate={{ scale: [0.96, 1.04, 0.96], opacity: [0.18, 0.32, 0.18] }}
          transition={{ duration: 2.4, ease: 'easeInOut', repeat: Infinity }}
          style={{ transformOrigin: `${x + w / 2}px ${y + h / 2}px` }}
        />
      )}

      {/* Card surface */}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={r}
        fill="rgba(15,23,42,0.85)"
        stroke={`url(#grad-${accent})`}
        strokeWidth={1.6}
      />

      {/* Top-edge accent */}
      <rect
        x={x + 1}
        y={y + 1}
        width={w - 2}
        height={3}
        rx={r}
        fill={`url(#grad-${accent})`}
        opacity={0.85}
      />

      {/* Icon */}
      {iconPath && (
        <g transform={`translate(${x + padX}, ${y + (h - iconBox) / 2})`}>
          <rect
            width={iconBox}
            height={iconBox}
            rx={9}
            fill={`url(#grad-${accent})`}
            opacity={0.18}
          />
          <g transform="translate(8, 8) scale(1)" fill="none">
            <path
              d={iconPath}
              stroke={ACCENT_FROM[accent]}
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      )}

      {/* Labels */}
      <text
        x={textX}
        y={sublabel ? y + h / 2 - 4 : y + h / 2 + 5}
        textAnchor={textAnchor}
        dominantBaseline="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize={14}
        fontWeight={600}
        fill="#e5edff"
      >
        {label}
      </text>
      {sublabel && (
        <text
          x={textX}
          y={y + h / 2 + 13}
          textAnchor={textAnchor}
          dominantBaseline="middle"
          fontFamily="JetBrains Mono, ui-monospace, monospace"
          fontSize={10}
          fill="#94a3b8"
        >
          {sublabel}
        </text>
      )}
    </g>
  );
}

/* -------------------------------------------------------------------------- */
/* Edge                                                                       */
/* -------------------------------------------------------------------------- */
interface EdgeProps {
  d: string;
  accent?: Accent;
  /** Show animated dash flow on top of the static line. */
  flow?: boolean;
  /** Add an arrowhead at the end. */
  arrow?: boolean;
  /** Add an arrowhead at the start as well (bi-directional). */
  bidir?: boolean;
  dashed?: boolean;
  /** Slow the flow animation; default is 1.6s per cycle. */
  speed?: 'fast' | 'normal' | 'slow';
}

/**
 * A connection line. Render this BEFORE node groups so the line passes
 * underneath any boxes it crosses — the box visually masks the segment.
 * Labels are intentionally NOT supported here; use <DEdgeLabel /> in a
 * separate render pass after nodes so the badge always sits on top.
 */
export function DEdge({
  d,
  accent = 'brand',
  flow = true,
  arrow = true,
  bidir = false,
  dashed = false,
  speed = 'normal',
}: EdgeProps) {
  const reduced = useReducedMotion();
  const dur = speed === 'fast' ? 1.0 : speed === 'slow' ? 2.6 : 1.6;
  const stroke = `url(#grad-${accent})`;
  const markerEnd = arrow ? 'url(#arrow)' : undefined;
  const markerStart = bidir ? 'url(#arrow)' : undefined;

  return (
    <g style={{ color: ACCENT_FROM[accent] }}>
      <path
        d={d}
        fill="none"
        stroke={stroke}
        strokeWidth={1.6}
        strokeOpacity={dashed ? 0.55 : 0.9}
        strokeLinecap="round"
        strokeDasharray={dashed ? '5 6' : undefined}
        markerEnd={markerEnd}
        markerStart={markerStart}
      />

      {flow && !reduced && (
        <path
          d={d}
          fill="none"
          stroke={ACCENT_FROM[accent]}
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray="8 14"
          opacity={0.85}
        >
          <animate
            attributeName="stroke-dashoffset"
            from={0}
            to={-44}
            dur={`${dur}s`}
            repeatCount="indefinite"
          />
        </path>
      )}
    </g>
  );
}

interface EdgeLabelProps {
  x: number;
  y: number;
  text: string;
  accent?: Accent;
  /** Horizontal half-width of the badge. Auto-sized for short text. */
  pad?: number;
}

/**
 * Pill-shaped label drawn on top of an edge line. Render this AFTER
 * nodes so it sits at the very top of the z-stack and never gets hidden
 * by a box edge or another line crossing.
 *
 * Place the (x, y) anchor in a CLEAR ZONE between boxes — never on a box
 * edge. The badge auto-widens to fit short strings (3–14 chars).
 */
export function DEdgeLabel({ x, y, text, accent = 'brand', pad }: EdgeLabelProps) {
  // Approximate the rendered width of the JetBrains Mono 10px text.
  const w = pad ?? Math.max(34, text.length * 6.4 + 16);
  const h = 20;
  return (
    <g>
      <rect
        x={x - w / 2}
        y={y - h / 2}
        width={w}
        height={h}
        rx={h / 2}
        fill="rgba(6,9,26,0.95)"
        stroke={ACCENT_FROM[accent]}
        strokeOpacity={0.55}
        strokeWidth={1}
      />
      <text
        x={x}
        y={y + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="JetBrains Mono, ui-monospace, monospace"
        fontSize={10}
        fill="#e5edff"
      >
        {text}
      </text>
    </g>
  );
}

/* -------------------------------------------------------------------------- */
/* Lane / region                                                              */
/* -------------------------------------------------------------------------- */
interface LaneProps {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  accent?: Accent;
  align?: 'left' | 'right';
}

/**
 * Translucent grouping rectangle with a label — used to cluster nodes that
 * belong to the same trust boundary or environment.
 */
export function DLane({ x, y, w, h, title, accent = 'brand', align = 'left' }: LaneProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={20}
        fill={ACCENT_FROM[accent]}
        opacity={0.06}
        stroke={ACCENT_FROM[accent]}
        strokeOpacity={0.35}
        strokeDasharray="4 6"
        strokeWidth={1.2}
      />
      <text
        x={align === 'right' ? x + w - 14 : x + 14}
        y={y + 18}
        textAnchor={align === 'right' ? 'end' : 'start'}
        fontFamily="JetBrains Mono, ui-monospace, monospace"
        fontSize={11}
        fill={ACCENT_FROM[accent]}
        opacity={0.95}
        letterSpacing={1.2}
      >
        {title.toUpperCase()}
      </text>
    </g>
  );
}

/* -------------------------------------------------------------------------- */
/* Caption                                                                    */
/* -------------------------------------------------------------------------- */
interface CaptionProps extends SVGProps<SVGTextElement> {
  text: string;
}

/** Small annotation text — used to label data formats / step numbers. */
export function DCaption({ text, ...rest }: CaptionProps) {
  return (
    <text
      fontFamily="JetBrains Mono, ui-monospace, monospace"
      fontSize={10}
      fill="#94a3b8"
      {...rest}
    >
      {text}
    </text>
  );
}

/* -------------------------------------------------------------------------- */
/* Common icon paths (16x16 viewBox)                                          */
/* -------------------------------------------------------------------------- */
/** Hand-picked Lucide-style icon paths so node icons render inline in SVG. */
export const ICONS = {
  bot: 'M8 0v3M5 6h6M3.5 6a2.5 2.5 0 0 0-2.5 2.5v4A2.5 2.5 0 0 0 3.5 15h9a2.5 2.5 0 0 0 2.5-2.5v-4A2.5 2.5 0 0 0 12.5 6h-9zM6 10v1M10 10v1',
  cloud: 'M3 11a3 3 0 0 1 .8-5.9A4.5 4.5 0 0 1 12.5 5a3.5 3.5 0 0 1 .5 7H4z',
  database: 'M2 3.5C2 2.4 4.7 1.5 8 1.5s6 .9 6 2v9c0 1.1-2.7 2-6 2s-6-.9-6-2v-9zM2 6.5c0 1.1 2.7 2 6 2s6-.9 6-2M2 9.5c0 1.1 2.7 2 6 2s6-.9 6-2',
  server: 'M1.5 2.5h13v4h-13zM1.5 9.5h13v4h-13zM3.5 4.5h.01M3.5 11.5h.01',
  globe: 'M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM1 8h14M8 1c2 2 3 5 3 7s-1 5-3 7M8 1C6 3 5 6 5 8s1 5 3 7',
  cpu: 'M3.5 3.5h9v9h-9zM6 1v2.5M10 1v2.5M6 12.5V15M10 12.5V15M1 6h2.5M1 10h2.5M12.5 6H15M12.5 10H15M6 6h4v4H6z',
  brain: 'M5.5 2.5a2 2 0 0 0-2 2v.5a2 2 0 0 0-1 3.5 2 2 0 0 0 1 3.5v.5a2 2 0 0 0 2 2c1 0 2-.5 2.5-1.5M10.5 2.5a2 2 0 0 1 2 2v.5a2 2 0 0 1 1 3.5 2 2 0 0 1-1 3.5v.5a2 2 0 0 1-2 2c-1 0-2-.5-2.5-1.5M8 4v8',
  message: 'M2 3.5h12v8h-7l-3 2.5v-2.5H2z',
  branch: 'M5 2v8M11 6v8M5 10a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3M5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 12.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z',
  layers: 'M8 1L1 5l7 4 7-4-7-4zM1 9l7 4 7-4M1 12l7 4 7-4',
  sparkles: 'M5 1l1 3 3 1-3 1-1 3-1-3-3-1 3-1zM12 7l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7zM10 11l.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5z',
  user: 'M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2.5 14.5a5.5 5.5 0 1 1 11 0',
  shield: 'M8 1.5l5.5 2v4c0 3.5-2.3 6.4-5.5 7.5-3.2-1.1-5.5-4-5.5-7.5v-4z',
  workflow: 'M2 3.5h4v4H2zM10 8.5h4v4h-4zM4 7.5v3a1 1 0 0 0 1 1h4',
  filecode: 'M3 1.5h6.5L13 5v9.5H3zM9 1.5V5h4M5.5 8.5l-1.5 1.5 1.5 1.5M8.5 8.5l1.5 1.5-1.5 1.5',
  search: 'M7 1.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zM11 11l3.5 3.5',
  gauge: 'M8 1.5a6.5 6.5 0 0 0-6 9.2M8 1.5a6.5 6.5 0 0 1 6 9.2M5 14h6M8 8.5L11 5.5',
  chat: 'M2 3.5h12v8h-3l-3 2.5V11.5H2zM5 6h6M5 8.5h4',
  translate: 'M2 4h6M5 2v2M2.5 4S3 8 5 9s2.5-2 2.5-2M9 14l3-7 3 7M10 12h4',
  pr: 'M5 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM11 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM5 7.5v3a3 3 0 0 0 3 3h2M11 4v2.5',
  cog: 'M8 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM8 1v2.5M8 12.5V15M1 8h2.5M12.5 8H15M3 3l1.8 1.8M11.2 11.2L13 13M3 13l1.8-1.8M11.2 4.8L13 3',
} as const;
