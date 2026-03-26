import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`relative inline-flex items-center justify-center px-6 py-3 font-bold text-white transition-all duration-300 ease-out bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 hover:shadow-indigo-500/50 hover:-translate-y-1 active:scale-95 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 overflow-hidden group ${className}`}
      {...props}
    >
      {/* Shine effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
      
      <span className="relative z-10 drop-shadow-sm">{children}</span>
    </button>
  );
}
