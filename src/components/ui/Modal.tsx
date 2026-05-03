import { useEffect, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/cn';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  eyebrow?: ReactNode;
  size?: 'md' | 'lg' | 'xl';
  children: ReactNode;
  footer?: ReactNode;
  /**
   * Optional gradient stripe shown across the dialog header. Pass a Tailwind
   * `from-... to-...` chain to match the calling card's accent.
   */
  accentClass?: string;
}

const SIZE_CLASS: Record<NonNullable<ModalProps['size']>, string> = {
  md: 'max-w-2xl',
  lg: 'max-w-4xl',
  xl: 'max-w-6xl',
};

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Accessible animated dialog.
 *
 * Renders into document.body via a portal, locks page scroll while open,
 * traps focus within the panel, and restores focus to whichever element
 * triggered it once dismissed. Honors prefers-reduced-motion by collapsing
 * the open/close animation to an instantaneous opacity swap.
 */
export function Modal({
  open,
  onClose,
  title,
  eyebrow,
  size = 'lg',
  children,
  footer,
  accentClass,
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Move focus into the dialog on open. Defer one frame so the
    // animated panel is in the DOM and visible.
    const focusFrame = requestAnimationFrame(() => {
      const first = panelRef.current?.querySelector<HTMLElement>(FOCUSABLE);
      first?.focus();
    });

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
        if (focusables.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener('keydown', handleKey);

    return () => {
      cancelAnimationFrame(focusFrame);
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [open, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
          initial={reduced ? { opacity: 0 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.18 }}
          aria-hidden={false}
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close dialog"
            onClick={onClose}
            className="absolute inset-0 bg-ink-950/70 backdrop-blur-md"
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? 'modal-title' : undefined}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: reduced ? 0 : 0.22, ease: [0.22, 0.9, 0.32, 1] }}
            className={cn(
              'relative mx-2 mb-2 flex max-h-[92svh] w-full flex-col overflow-hidden rounded-3xl border border-ink-200/70 bg-white/95 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] dark:border-ink-700/60 dark:bg-ink-950/95 sm:mx-4 sm:mb-0',
              SIZE_CLASS[size]
            )}
          >
            {/* Accent stripe */}
            {accentClass && (
              <div
                aria-hidden
                className={cn(
                  'h-1 w-full bg-gradient-to-r',
                  accentClass
                )}
              />
            )}

            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-ink-200/70 px-5 py-4 dark:border-ink-800/70 sm:px-7 sm:py-5">
              <div className="min-w-0">
                {eyebrow && (
                  <p className="font-mono text-[11px] uppercase tracking-wider text-brand-700 dark:text-brand-300">
                    {eyebrow}
                  </p>
                )}
                {title && (
                  <h2
                    id="modal-title"
                    className="mt-0.5 truncate text-base font-semibold text-ink-900 dark:text-white sm:text-lg"
                  >
                    {title}
                  </h2>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-ink-200 bg-white/80 text-ink-700 transition-colors hover:border-brand-400 hover:text-brand-700 dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-200 dark:hover:border-brand-400 dark:hover:text-brand-300 focus-ring sm:h-10 sm:w-10"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
              {children}
            </div>

            {/* Footer */}
            {footer && (
              <div className="border-t border-ink-200/70 bg-white/80 px-5 py-3 dark:border-ink-800/70 dark:bg-ink-950/80 sm:px-7 sm:py-4">
                {footer}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
