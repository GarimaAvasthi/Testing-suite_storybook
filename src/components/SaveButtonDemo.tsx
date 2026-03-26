'use client';

import React, { useState } from 'react';
import { Button } from './Button';

export function SaveButtonDemo() {
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  const handleSave = () => {
    if (status !== 'idle') return;
    
    setStatus('saving');
    // Simulate a fake network request duration
    setTimeout(() => {
      setStatus('saved');
      
      // Reset button text after 2.5 seconds
      setTimeout(() => setStatus('idle'), 2500);
    }, 1500);
  };

  return (
    <Button 
      onClick={handleSave} 
      disabled={status === 'saving'}
      className={`w-full text-lg py-4 transition-all duration-300 ${
        status === 'saved' ? '!bg-emerald-500 hover:!bg-emerald-400 focus:!ring-emerald-500/30 !shadow-emerald-500/20' : 
        status === 'saving' ? '!bg-indigo-600/70 cursor-wait' : '!bg-indigo-500 hover:!bg-indigo-400'
      }`}
    >
      {status === 'idle' && 'Save Configuration'}
      
      {status === 'saving' && (
        <span className="flex items-center gap-3">
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Saving...
        </span>
      )}
      
      {status === 'saved' && (
        <span className="flex items-center gap-2 animate-in slide-in-from-bottom-2 fade-in duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
          Saved Successfully!
        </span>
      )}
    </Button>
  );
}
