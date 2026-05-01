import { useEffect, useReducer } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface RoleRotatorProps {
  roles: readonly string[];
  intervalMs?: number;
  className?: string;
}

/**
 * Animated headline that cycles through roles/capabilities with a clean
 * slot-machine slide. Uses an invisible spacer sized to the longest role so
 * the surrounding layout doesn't jump between transitions.
 *
 * IMPORTANT layering note:
 * `-webkit-background-clip: text` + `-webkit-text-fill-color: transparent`
 * (our `.text-gradient` utility) renders incorrectly in WebKit/Blink when the
 * SAME element also has a `transform` or `filter` applied. So we keep the
 * transform on the OUTER `<motion.span>` and put the gradient text on a plain
 * INNER `<span>`. That way each element does exactly one thing.
 */
export function RoleRotator({ roles, intervalMs = 2800, className }: RoleRotatorProps) {
  const [index, advance] = useReducer(
    (i: number) => (i + 1) % roles.length,
    0
  );
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || roles.length <= 1) return;
    const id = window.setInterval(advance, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs, reduced, roles.length]);

  const fallback = roles[0] ?? '';
  const current = roles[index] ?? fallback;

  // Longest entry reserves vertical/horizontal space so layout never jumps.
  const longest = roles.reduce(
    (a, b) => (b.length > a.length ? b : a),
    fallback
  );

  if (reduced) {
    return (
      <span className={cn('block text-gradient', className)} aria-live="polite">
        {current}
      </span>
    );
  }

  return (
    <span
      className={cn('relative block overflow-hidden', className)}
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Invisible spacer keeps height stable across role changes */}
      <span aria-hidden className="invisible block whitespace-pre-wrap">
        {longest}
      </span>

      <AnimatePresence initial={false}>
        <motion.span
          key={current}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 0.9, 0.32, 1],
          }}
          className="absolute inset-0 block will-change-transform"
        >
          {/*
            The gradient lives on this inner span (no transform / no filter
            here) so -webkit-background-clip: text renders reliably.
          */}
          <span className="block text-gradient">{current}</span>
        </motion.span>
      </AnimatePresence>

      {/* Subtle scanning underline */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/70 to-transparent"
      />
    </span>
  );
}
