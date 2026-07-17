// components/ui/Button.tsx

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-white text-zinc-950 hover:bg-zinc-200 shadow-lg shadow-white/5',
  secondary: 'bg-indigo-500 text-white hover:bg-indigo-400 shadow-lg shadow-indigo-500/20',
  outline: 'border border-white/15 text-zinc-200 hover:border-white/30 hover:bg-white/5',
  ghost: 'text-zinc-300 hover:text-white hover:bg-white/5',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm md:text-base',
  lg: 'px-8 py-3.5 text-base',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  href,
  icon,
  iconPosition = 'right',
  disabled = false,
  type = 'button',
  ariaLabel,
}) => {
  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span aria-hidden>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span aria-hidden>{icon}</span>}
    </>
  );

  if (href && !disabled) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    // Static assets (e.g. the CV pdf) should open in a new tab, not client-navigate
    if (isExternal || href.endsWith('.pdf')) {
      return (
        <a
          href={href}
          className={classes}
          aria-label={ariaLabel}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} aria-label={ariaLabel}>
      {content}
    </button>
  );
};
