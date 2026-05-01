import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface CommonProps {
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 select-none focus-ring disabled:opacity-50 disabled:cursor-not-allowed';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5',
  secondary:
    'bg-ink-900/80 text-white hover:bg-ink-800 dark:bg-white dark:text-ink-900 dark:hover:bg-ink-100',
  outline:
    'border border-ink-200 bg-white/60 text-ink-700 hover:border-brand-400 hover:text-brand-700 dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-100 dark:hover:border-brand-400 dark:hover:text-brand-300',
  ghost:
    'text-ink-700 hover:bg-ink-100 dark:text-ink-100 dark:hover:bg-ink-800/60',
};

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & CommonProps & {
  as?: 'button';
};

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & CommonProps & {
  as: 'a';
};

export type AnyButtonProps = ButtonProps | LinkProps;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, AnyButtonProps>(
  function Button(props, ref) {
    const {
      variant = 'primary',
      size = 'md',
      leftIcon,
      rightIcon,
      className,
      children,
      ...rest
    } = props as AnyButtonProps & { children?: ReactNode };

    const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

    if ((rest as LinkProps).href !== undefined || (props as LinkProps).as === 'a') {
      const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
      const isExternal = anchorProps.href?.startsWith('http');
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          {...anchorProps}
        >
          {leftIcon}
          <span>{children}</span>
          {rightIcon}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {leftIcon}
        <span>{children}</span>
        {rightIcon}
      </button>
    );
  }
);
