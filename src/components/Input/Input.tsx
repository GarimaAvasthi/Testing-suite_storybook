'use client';

import React, { useState } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  error = false,
  fullWidth = false,
  disabled = false,
  type = 'text',
  className = '',
  style: externalStyle,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const fontFamily = "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

  const wrapperStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    width: fullWidth ? '100%' : '320px',
    fontFamily,
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '13.5px',
    fontWeight: 600,
    letterSpacing: '-0.01em',
    color: error ? '#dc2626' : disabled ? 'var(--text-muted)' : 'var(--text-strong)',
    transition: 'color 0.2s ease',
    fontFamily,
  };

  const borderColor = error
    ? '#ef4444'
    : isFocused
      ? 'var(--primary-base, #6366f1)'
      : isHovered && !disabled
        ? '#a5b4fc'
        : 'var(--border-subtle, #d1d5db)';

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '11px 14px',
    fontSize: '14.5px',
    lineHeight: '1.5',
    fontFamily,
    color: disabled ? 'var(--text-muted)' : 'var(--text-strong)',
    backgroundColor: disabled ? 'var(--page-bg)' : 'var(--card-bg)',
    border: `1.5px solid ${borderColor}`,
    borderRadius: '10px',
    outline: 'none',
    boxShadow: isFocused
      ? error
        ? '0 0 0 3px rgba(239, 68, 68, 0.12), 0 1px 3px rgba(0,0,0,0.04)'
        : '0 0 0 3px var(--primary-glow, rgba(99, 102, 241, 0.12)), 0 1px 3px rgba(0,0,0,0.04)'
      : isHovered && !disabled
        ? '0 2px 8px rgba(0,0,0,0.04)'
        : '0 1px 2px rgba(0,0,0,0.04)',
    transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    cursor: disabled ? 'not-allowed' : 'text',
    opacity: disabled ? 0.65 : 1,
    ...externalStyle,
  };

  const helperStyle: React.CSSProperties = {
    fontSize: '12.5px',
    lineHeight: '1.4',
    fontWeight: 450,
    color: error ? '#dc2626' : 'var(--text-muted)',
    margin: 0,
    paddingLeft: '2px',
    fontFamily,
    transition: 'color 0.2s ease',
  };

  return (
    <div style={wrapperStyle}>
      {label && <label style={labelStyle}>{label}</label>}
      <input
        type={type}
        className={className}
        style={inputStyle}
        disabled={disabled}
        onFocus={(e) => { setIsFocused(true); props.onFocus?.(e); }}
        onBlur={(e) => { setIsFocused(false); props.onBlur?.(e); }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      />
      {helperText && <p style={helperStyle}>{helperText}</p>}
    </div>
  );
};

export default Input;
