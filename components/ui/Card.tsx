// components/ui/Card.tsx

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddings = {
  none: '',
  sm: 'p-5',
  md: 'p-6 md:p-7',
  lg: 'p-8 md:p-10',
};

export const Card: React.FC<CardProps> = ({ children, className, hover = false, padding = 'md' }) => (
  <div
    className={cn(
      'rounded-2xl border border-white/10 bg-white/3',
      paddings[padding],
      hover &&
        'transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/5 hover:shadow-xl hover:shadow-indigo-500/5',
      className
    )}
  >
    {children}
  </div>
);

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => <div className={cn('mb-4', className)}>{children}</div>;

export const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => <h3 className={cn('text-xl font-semibold tracking-tight text-white', className)}>{children}</h3>;

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => <div className={cn('text-zinc-400', className)}>{children}</div>;

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => <div className={cn('mt-5 border-t border-white/10 pt-5', className)}>{children}</div>;
