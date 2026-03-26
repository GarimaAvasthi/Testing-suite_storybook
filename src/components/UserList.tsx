'use client';

import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch users');
        return res.json();
      })
      .then((data) => {
        setUsers(data.slice(0, 5));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="flex flex-col items-center justify-center gap-4 p-16">
      <div className="relative w-12 h-12" aria-hidden="true">
        <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-indigo-500 rounded-full border-t-transparent animate-spin"></div>
      </div>
      <span className="text-sm font-semibold text-slate-400">Loading...</span>
    </div>
  );
  
  if (error) return (
    <div className="p-5 bg-red-500/10 text-red-400 border border-red-500/20 rounded-2xl text-sm font-semibold shadow-inner" role="alert">
      {error}
    </div>
  );

  return (
    <ul className="flex flex-col gap-3 relative">
      <div className="absolute left-6 top-6 bottom-6 w-px bg-slate-700 z-0 hidden sm:block"></div>
      {users.map((user, index) => (
        <li 
          key={user.id} 
          className="relative z-10 flex items-center gap-5 p-4 bg-slate-800/50 rounded-3xl hover:bg-slate-800 transition-all duration-300 border border-slate-700/50 hover:border-slate-600 hover:shadow-lg hover:shadow-black/20 group hover:-translate-y-1"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className="h-14 w-14 min-w-[3.5rem] rounded-full bg-slate-900 overflow-hidden shadow-inner group-hover:scale-110 transition-transform duration-500 border-2 border-slate-700 group-hover:border-indigo-500">
            <img src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(user.name)}`} alt={`${user.name} Avatar`} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-base font-bold text-slate-200 truncate transition-colors group-hover:text-indigo-400">{user.name}</span>
            <span className="text-sm font-medium text-slate-500 truncate">{user.email?.toLowerCase()}</span>
          </div>
          
          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden xs:block">
            <div className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center text-slate-400 group-hover:text-indigo-400 group-hover:bg-indigo-500/10 transition-colors">
               →
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
