import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function Card({ children, className, variant = 'default' }) {
  return (
    <div className={cn(
      "rounded-3xl p-6 transition-all duration-300",
      variant === 'default' && "bg-[#0c1b35] border border-white/5",
      variant === 'premium' && "bg-gradient-to-br from-[#1a2b4b] to-[#0c1b35] border border-white/10 shadow-xl",
      variant === 'insight' && "bg-[#1e2a3b] border-l-4 border-l-gold shadow-lg",
      className
    )}>
      {children}
    </div>
  );
}
