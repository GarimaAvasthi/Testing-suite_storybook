import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, id, className = '', ...props }: InputProps) {
  const inputId = id || label.replace(/\s+/g, '-').toLowerCase();
  
  return (
    <div className="relative w-full mt-2">
      <input
        id={inputId}
        placeholder=" "
        className={`peer w-full border-2 border-slate-700 rounded-2xl px-5 pt-7 pb-2 text-base text-white bg-slate-800/60 backdrop-blur-md focus:bg-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 shadow-sm hover:border-slate-600 ${className}`}
        {...props}
      />
      <label 
        htmlFor={inputId} 
        className="absolute left-5 top-5 text-slate-400 text-base transition-all duration-300 pointer-events-none 
                   peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base 
                   peer-focus:-translate-y-3.5 peer-focus:text-xs peer-focus:text-indigo-400 peer-focus:font-bold
                   -translate-y-3.5 text-xs font-bold"
      >
        {label}
      </label>
    </div>
  );
}
