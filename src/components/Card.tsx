import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <div className="group relative bg-slate-900/60 backdrop-blur-2xl border border-slate-800 rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden ring-1 ring-slate-800">
      <div className="absolute -right-20 -top-20 w-56 h-56 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-700 pointer-events-none"></div>
      
      <h2 className="relative z-10 text-2xl md:text-3xl font-black text-white mb-8 tracking-tight">{title}</h2>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
