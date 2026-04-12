import React from 'react';
import { cn } from './Card';

export function IconButton({ icon: Icon, label, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center gap-2 group transition-all",
        className
      )}
    >
      <div className="w-16 h-16 rounded-2xl bg-[#0c1b35] border border-white/5 flex items-center justify-center group-hover:bg-[#152747] group-active:scale-95 transition-all">
        <Icon size={24} className="text-primary" />
      </div>
      <span className="text-[10px] uppercase tracking-widest font-bold text-muted group-hover:text-white transition-colors">
        {label}
      </span>
    </button>
  );
}
