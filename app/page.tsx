'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/Button/Button';
import { Input } from '@/components/Input/Input';
import { Card } from '@/components/Card/Card';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<'buttons' | 'inputs' | 'cards'>('buttons');
  const [status, setStatus] = useState('Ready. Click any demo control to see it respond.');
  const [statusBump, setStatusBump] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const storybookUrl = process.env.NEXT_PUBLIC_STORYBOOK_URL;
  const hasStorybook = Boolean(storybookUrl);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToPlayground = () => {
    const section = document.getElementById('playground');
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const openStorybook = () => {
    if (!storybookUrl) return;
    window.open(storybookUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDemoAction = (label: string) => {
    const time = new Date().toLocaleTimeString();
    setStatus(`${time} - ${label}`);
  };

  useEffect(() => {
    setStatusBump(true);
    const t = setTimeout(() => setStatusBump(false), 500);
    return () => clearTimeout(t);
  }, [status]);

  const jumpTo = (hash: string, label: string) => {
    handleDemoAction(label);
    const id = hash.startsWith('#') ? hash.slice(1) : hash;
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.hash = `#${id}`;
    }
  };

  const openTabAndJump = (tab: 'buttons' | 'inputs' | 'cards', label: string) => {
    setActiveTab(tab);
    setTimeout(() => {
      jumpTo('#playground', label);
    }, 0);
  };

  const tabs = [
    { id: 'buttons' as const, label: 'Buttons', count: 6 },
    { id: 'inputs' as const, label: 'Inputs', count: 4 },
    { id: 'cards' as const, label: 'Cards', count: 3 },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--page-bg)',
      transition: 'background 0.3s ease',
    }}>
      <style>{`
        @keyframes status-pop {
          0% { transform: translateY(0) scale(1); box-shadow: 0 0 0 rgba(0,0,0,0); }
          30% { transform: translateY(-1px) scale(1.03); box-shadow: 0 10px 25px rgba(0,0,0,0.12); }
          100% { transform: translateY(0) scale(1); box-shadow: 0 0 0 rgba(0,0,0,0); }
        }
      `}</style>

      {/* Decorative Orbs */}
      <div style={{
        position: 'absolute', top: '-120px', left: '-120px', width: '320px', height: '320px',
        background: isDarkMode ? 'radial-gradient(circle, rgba(99,102,241,0.15), transparent)' : 'radial-gradient(circle, rgba(255,138,101,0.25), transparent)',
        filter: 'blur(40px)', pointerEvents: 'none', transition: 'background 0.5s ease',
      }} />
      <div style={{
        position: 'absolute', top: '120px', right: '-140px', width: '360px', height: '360px',
        background: isDarkMode ? 'radial-gradient(circle, rgba(139,92,246,0.15), transparent)' : 'radial-gradient(circle, rgba(45,212,191,0.2), transparent)',
        filter: 'blur(40px)', pointerEvents: 'none', transition: 'background 0.5s ease',
      }} />

      {/* Nav */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 32px',
        borderBottom: '1px solid var(--border-subtle)',
        background: isDarkMode ? 'rgba(17,24,39,0.8)' : 'rgba(255,255,255,0.82)',
        backdropFilter: 'blur(12px)',
        position: 'sticky', top: 0, zIndex: 50,
        transition: 'background 0.3s ease',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '28px', height: '28px', borderRadius: '8px',
            background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
            display: 'grid', placeItems: 'center',
            color: '#fff', fontSize: '13px', fontWeight: 700,
          }}>T</div>
          <span style={{ fontWeight: 650, fontSize: '15px', color: 'var(--text-strong)', letterSpacing: '-0.02em' }}>
            Testing Suite
          </span>
        </div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          
          {/* Premium Theme Toggle */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: isDarkMode ? 'flex-end' : 'flex-start',
              width: '50px', height: '26px', padding: '3px',
              borderRadius: '99px',
              background: isDarkMode ? 'rgba(99,102,241,0.2)' : 'rgba(15,23,42,0.08)',
              border: `1px solid ${isDarkMode ? 'rgba(99,102,241,0.3)' : 'rgba(15,23,42,0.1)'}`,
              cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            title="Toggle theme"
            aria-label="Toggle dark mode"
          >
            <div style={{
              width: '18px', height: '18px', borderRadius: '50%',
              background: isDarkMode ? '#818cf8' : '#ffffff',
              boxShadow: isDarkMode ? '0 0 10px rgba(129,140,248,0.5)' : '0 1px 3px rgba(0,0,0,0.15)',
              display: 'flex', placeItems: 'center', justifyContent: 'center',
              fontSize: '10px', transition: 'all 0.3s ease',
            }}>
              {isDarkMode ? '🌙' : '☀️'}
            </div>
          </button>
          

        </div>
      </nav>

      {/* Hero */}
      <section style={{
        padding: '80px 32px 60px', textAlign: 'center', maxWidth: '640px', margin: '0 auto',
      }}>
        <div style={{
          display: 'inline-block', padding: '4px 12px',
          fontSize: '11.5px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase',
          color: 'var(--text-strong)', background: 'var(--border-subtle)',
          border: '1px solid var(--card-border)', borderRadius: '999px',
          marginBottom: '20px',
        }}>
          Design System
        </div>
        <h1 style={{
          fontSize: '42px', fontWeight: 750, letterSpacing: '-0.035em', lineHeight: 1.08,
          color: 'var(--text-strong)', margin: '0 0 14px',
        }}>
          Components that<br />
          <span style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>feel alive.</span>
        </h1>
        <p style={{
          fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 32px',
          fontWeight: 400, maxWidth: '460px', marginLeft: 'auto', marginRight: 'auto',
        }}>
          A curated set of React components - interactive, tested, and
          documented with Storybook. Built with Next.js and TypeScript.
        </p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" size="md" onClick={() => { scrollToPlayground(); handleDemoAction('Jumped to Component Playground'); }}>
            Explore Components
          </Button>
          <Button variant="secondary" size="md" onClick={() => { openStorybook(); if (hasStorybook) handleDemoAction('Opened Storybook'); }} disabled={!hasStorybook}>
            View Storybook
          </Button>
        </div>
        <div style={{
          marginTop: '20px', display: 'inline-flex', alignItems: 'center', gap: '10px',
          padding: '10px 18px', borderRadius: '999px',
          background: 'var(--border-subtle)', border: '1px solid var(--card-border)',
          fontSize: '12.5px', color: 'var(--text-strong)', fontWeight: 500,
          animation: statusBump ? 'status-pop 0.5s ease' : 'none',
        }}>
          <span style={{
            width: '8px', height: '8px', borderRadius: '999px',
            background: 'linear-gradient(135deg, #6366f1, #a78bfa)', display: 'inline-block',
          }} />
          {status}
        </div>
      </section>

      {/* Component Playground */}
      <section id="playground" style={{ maxWidth: '960px', margin: '0 auto', padding: '48px 32px 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.025em', color: 'var(--text-strong)', margin: '0 0 8px' }}>
            Component Playground
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: 400, margin: 0 }}>
            Switch between components - hover, click, and interact with them live.
          </p>
        </div>

        {/* Tab Bar */}
        <div
          role="tablist" aria-label="Component types"
          style={{
            display: 'flex', justifyContent: 'center', gap: '4px',
            marginBottom: '32px', padding: '4px',
            background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--card-border)',
            width: 'fit-content', margin: '0 auto 32px', flexWrap: 'wrap',
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id} role="tab" aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '9px 20px', fontSize: '13.5px',
                fontWeight: activeTab === tab.id ? 650 : 500,
                color: activeTab === tab.id ? 'var(--text-strong)' : 'var(--text-muted)',
                background: activeTab === tab.id ? (isDarkMode ? 'rgba(255,255,255,0.08)' : '#ffffff') : 'transparent',
                border: activeTab === tab.id ? `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'transparent'}` : '1px solid transparent',
                borderRadius: '9px', cursor: 'pointer',
                transition: 'all 0.2s ease', fontFamily: 'inherit',
                display: 'flex', alignItems: 'center', gap: '6px',
                boxShadow: activeTab === tab.id ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              {tab.label}
              <span style={{
                fontSize: '11px', fontWeight: 600,
                color: activeTab === tab.id ? '#6366f1' : 'var(--text-muted)',
                background: activeTab === tab.id ? 'rgba(99,102,241,0.08)' : 'var(--border-subtle)',
                padding: '1px 6px', borderRadius: '4px',
              }}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Canvas */}
        <div style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          borderRadius: '20px', padding: '40px', minHeight: '260px',
          boxShadow: isDarkMode ? '0 10px 40px rgba(0,0,0,0.4)' : '0 10px 30px rgba(15,23,42,0.08)',
        }}>
          {activeTab === 'buttons' && (
            <div role="tabpanel">
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '28px' }}>
                <Button variant="primary" onClick={() => handleDemoAction('Primary button clicked')}>Get Started</Button>
                <Button variant="secondary" onClick={() => handleDemoAction('Secondary clicked')}>Learn More</Button>
                <Button variant="danger" onClick={() => handleDemoAction('Danger clicked')}>Delete Account</Button>
              </div>
              <div style={{ height: '1px', background: 'var(--card-border)', margin: '0 0 28px' }} />
              <p style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)', marginBottom: '14px', textTransform: 'uppercase' }}>Sizes</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '28px' }}>
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
              </div>
            </div>
          )}

          {activeTab === 'inputs' && (
            <div role="tabpanel" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              <Input label="Email" placeholder="you@company.com" type="email" />
              <Input label="Password" placeholder="********" type="password" helperText="Min 8 characters" />
              <Input label="Username" placeholder="johndoe" error helperText="Already taken" />
              <Input label="Disabled" placeholder="Can't edit" disabled />
            </div>
          )}

          {activeTab === 'cards' && (
            <div role="tabpanel" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Card
                title="Studio Monitor" description="Professional audio for creators." price={199.99}
                badge="NEW" badgeColor="blue" image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
                actionLabel="Explore" onAction={() => handleDemoAction('Monitor details')}
              />
              <Card
                title="Smart Watch Ultra" description="Health meets premium design." price={449.99}
                badge="POPULAR" badgeColor="green" image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop"
                featured actionLabel="Pre-Order" onAction={() => handleDemoAction('Watch details')}
              />
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" style={{
        textAlign: 'center', padding: '24px 32px', borderTop: '1px solid var(--border-subtle)',
        fontSize: '12.5px', color: 'var(--text-muted)', fontWeight: 400,
      }}>
        Built with Next.js - Documented with Storybook - Tested with Jest
      </footer>
    </div>
  );
};

export default HomePage;
