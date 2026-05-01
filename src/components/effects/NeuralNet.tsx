import { useId } from 'react';
import { useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface NeuralNetProps {
  className?: string;
}

/**
 * Pure-SVG animated neural network.
 * Three layers: input (3) -> hidden (5) -> output (2).
 * - Connecting lines have an animated stroke-dashoffset to create a "data flow" feel.
 * - Nodes pulse with staggered delays so the network appears "thinking".
 * - prefers-reduced-motion freezes everything in place but still renders the diagram.
 */
export function NeuralNet({ className }: NeuralNetProps) {
  const reduced = useReducedMotion();
  const gradId = useId();

  const W = 600;
  const H = 360;

  const layers = [
    { x: 90, ys: [80, 180, 280] },
    { x: 300, ys: [50, 130, 210, 290, 340] },
    { x: 510, ys: [140, 230] },
  ];

  // Build connections between adjacent layers
  const lines: Array<{ x1: number; y1: number; x2: number; y2: number; key: string }> = [];
  for (let l = 0; l < layers.length - 1; l++) {
    layers[l].ys.forEach((y1, i) => {
      layers[l + 1].ys.forEach((y2, j) => {
        lines.push({
          x1: layers[l].x,
          y1,
          x2: layers[l + 1].x,
          y2,
          key: `${l}-${i}-${j}`,
        });
      });
    });
  }

  // Flatten nodes
  const nodes = layers.flatMap((layer, li) =>
    layer.ys.map((y, ni) => ({ x: layer.x, y, key: `n-${li}-${ni}`, layer: li }))
  );

  return (
    <div className={cn('relative w-full', className)} aria-hidden>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        className="h-auto w-full"
      >
        <defs>
          <linearGradient id={`${gradId}-line`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#3b8ff6" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.05" />
          </linearGradient>
          <radialGradient id={`${gradId}-node`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
            <stop offset="60%" stopColor="#3b8ff6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3b8ff6" stopOpacity="0" />
          </radialGradient>
          <filter id={`${gradId}-glow`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connecting lines with flowing dash */}
        <g
          stroke={`url(#${gradId}-line)`}
          strokeWidth="1.1"
          fill="none"
          strokeLinecap="round"
        >
          {lines.map((l, i) => (
            <line
              key={l.key}
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              strokeDasharray="4 8"
              className={reduced ? '' : 'animate-flow-dash'}
              style={{
                animationDelay: `${(i * 0.07) % 1.6}s`,
                opacity: 0.55,
              }}
            />
          ))}
        </g>

        {/* Pulsing input/output labels (subtle) */}
        <g
          fill="currentColor"
          className="font-mono fill-ink-400 dark:fill-ink-500"
          fontSize="9"
          letterSpacing="0.12em"
        >
          <text x={layers[0].x} y={H - 12} textAnchor="middle">INPUT</text>
          <text x={layers[1].x} y={H - 12} textAnchor="middle">CONTEXT</text>
          <text x={layers[2].x} y={H - 12} textAnchor="middle">DECISION</text>
        </g>

        {/* Nodes */}
        <g filter={`url(#${gradId}-glow)`}>
          {nodes.map((n, i) => (
            <g key={n.key} style={{ transformOrigin: `${n.x}px ${n.y}px` }}>
              <circle
                cx={n.x}
                cy={n.y}
                r={n.layer === 1 ? 8 : 9}
                fill={`url(#${gradId}-node)`}
                className={reduced ? '' : 'origin-center animate-node-pulse'}
                style={{ animationDelay: `${(i * 0.16).toFixed(2)}s` }}
              />
              <circle
                cx={n.x}
                cy={n.y}
                r={n.layer === 1 ? 3 : 3.5}
                fill="#ffffff"
                opacity="0.95"
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
