'use client';

import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';

export function Form() {
  const [formData, setFormData] = useState({ username: '', email: '' });
  const [submittedMessage, setSubmittedMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedMessage(`Welcome, ${formData.username}!`);
    setFormData({ username: '', email: '' });
    
    // Auto-hide success message after 4 seconds
    setTimeout(() => setSubmittedMessage(''), 4000);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6 w-full relative">
      <Input
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder=" "
        required
      />
      <Input
        label="Email Address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder=" "
        required
      />
      <div className="pt-4">
        <Button type="submit" className="w-full text-lg py-4 !bg-indigo-500 hover:!bg-indigo-400 focus:!ring-indigo-500/40">Submit</Button>
      </div>
      
      {submittedMessage && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[105%] p-6 bg-slate-800/95 backdrop-blur-xl border-2 border-emerald-500/50 text-emerald-400 text-base font-bold rounded-3xl text-center shadow-[0_20px_50px_rgba(16,185,129,0.15)] animate-in fade-in zoom-in-75 slide-in-from-bottom-5 duration-500">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            {submittedMessage}
          </div>
        </div>
      )}
    </form>
  );
}
