'use client';

import React, { useState } from 'react';
import { Button } from './Button';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-between p-5 bg-slate-800/50 border border-slate-700 rounded-3xl shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2)] backdrop-blur-xl">
      <div className="flex gap-3">
        <Button 
          onClick={() => setCount(count - 1)} 
          className="!px-5 !py-3 !bg-slate-700 !text-slate-200 hover:!bg-slate-600 focus:!ring-slate-500/40 shadow-none hover:shadow-none"
        >
          <span className="text-xl font-bold">-</span>
        </Button>
        <Button 
          onClick={() => setCount(count + 1)} 
          className="!px-5 !py-3 !bg-indigo-500 hover:!bg-indigo-400 focus:!ring-indigo-500/40"
        >
          <span className="text-xl font-bold">+</span>
        </Button>
      </div>
      <div className="flex flex-col items-end pr-3">
        <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 w-full text-right block leading-none mb-1">Value</span>
        <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-purple-400 leading-none transition-all duration-200 hover:scale-110" data-testid="count-value">
          {count}
        </span>
      </div>
    </div>
  );
}
