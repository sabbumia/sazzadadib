// components/ui/Badge.tsx

import React from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'neutral' | 'accent' | 'success' | 'warning' | 'info' | 'outline';
type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  neutral: 'bg-white/5 text-zinc-300 border-white/10',
  accent: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/25',
  success: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25',
  warning: 'bg-amber-500/10 text-amber-300 border-amber-500/25',
  info: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/25',
  outline: 'bg-transparent text-zinc-400 border-white/15',
};

const sizes: Record<BadgeSize, string> = {
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'sm',
  className,
}) => (
  <span
    className={cn(
      'inline-flex items-center gap-1 rounded-full border font-medium',
      variants[variant],
      sizes[size],
      className
    )}
  >
    {children}
  </span>
);
