'use client';

import React, { useState } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, {
  background: string;
  hoverBackground: string;
  color: string;
  border: string;
  shadow: string;
  hoverShadow: string;
}> = {
  primary: {
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)',
    hoverBackground: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #8b5cf6 100%)',
    color: '#ffffff',
    border: 'none',
    shadow: '0 4px 14px rgba(99, 102, 241, 0.35), 0 1px 3px rgba(0,0,0,0.08)',
    hoverShadow: '0 8px 25px rgba(99, 102, 241, 0.45), 0 2px 6px rgba(0,0,0,0.1)',
  },
  secondary: {
    background: 'var(--btn-secondary-bg)',
    hoverBackground: 'var(--btn-secondary-bg)',
    color: 'var(--btn-secondary-color)',
    border: '1.5px solid var(--btn-secondary-border)',
    shadow: '0 2px 8px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
    hoverShadow: '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.06)',
  },
  danger: {
    background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%)',
    hoverBackground: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)',
    color: '#ffffff',
    border: 'none',
    shadow: '0 4px 14px rgba(239, 68, 68, 0.3), 0 1px 3px rgba(0,0,0,0.08)',
    hoverShadow: '0 8px 25px rgba(239, 68, 68, 0.4), 0 2px 6px rgba(0,0,0,0.1)',
  },
};

const sizeStyles = {
  sm: { padding: '8px 18px', fontSize: '13px', borderRadius: '10px' },
  md: { padding: '11px 26px', fontSize: '14.5px', borderRadius: '12px' },
  lg: { padding: '14px 34px', fontSize: '16px', borderRadius: '14px' },
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  disabled = false,
  className = '',
  style: externalStyle,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const v = variantStyles[variant];
  const s = sizeStyles[size];

  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontWeight: 600,
    letterSpacing: '-0.01em',
    lineHeight: '1',
    cursor: disabled ? 'not-allowed' : 'pointer',
    userSelect: 'none',
    border: v.border,
    outline: 'none',
    background: disabled
      ? 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)'
      : isHovered
        ? v.hoverBackground
        : v.background,
    color: disabled ? '#94a3b8' : v.color,
    boxShadow: disabled
      ? '0 1px 2px rgba(0,0,0,0.04)'
      : isHovered
        ? v.hoverShadow
        : v.shadow,
    opacity: disabled ? 0.65 : 1,
    transform: isPressed && !disabled
      ? 'scale(0.96) translateY(1px)'
      : isHovered && !disabled
        ? 'translateY(-1px)'
        : 'translateY(0)',
    transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    ...s,
    ...externalStyle,
  };

  return (
    <button
      className={className}
      style={baseStyle}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsPressed(false); }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
