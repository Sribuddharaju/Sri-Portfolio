import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/cn';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={!isDark}
      className={cn(
        'group relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200 bg-white/70 text-ink-700 transition-colors hover:border-brand-400 hover:text-brand-700 dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-200 dark:hover:border-brand-400 dark:hover:text-brand-300 focus-ring',
        className
      )}
    >
      <Sun
        className={cn(
          'absolute h-5 w-5 transition-all duration-300',
          isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        )}
      />
      <Moon
        className={cn(
          'absolute h-5 w-5 transition-all duration-300',
          isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        )}
      />
    </button>
  );
}
