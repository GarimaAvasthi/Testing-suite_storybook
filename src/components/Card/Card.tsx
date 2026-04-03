'use client';

import React, { useState } from 'react';

export interface CardProps {
  title: string;
  description?: string;
  image?: string;
  price?: number;
  badge?: string;
  badgeColor?: 'blue' | 'green' | 'red' | 'yellow';
  onAction?: () => void;
  actionLabel?: string;
  featured?: boolean;
}

const badgeThemes: Record<string, { bg: string; color: string; border: string }> = {
  blue: { bg: 'rgba(99, 102, 241, 0.1)', color: '#4f46e5', border: '1px solid rgba(99, 102, 241, 0.2)' },
  green: { bg: 'rgba(16, 185, 129, 0.1)', color: '#059669', border: '1px solid rgba(16, 185, 129, 0.2)' },
  red: { bg: 'rgba(239, 68, 68, 0.1)', color: '#dc2626', border: '1px solid rgba(239, 68, 68, 0.2)' },
  yellow: { bg: 'rgba(245, 158, 11, 0.1)', color: '#d97706', border: '1px solid rgba(245, 158, 11, 0.2)' },
};

export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  price,
  badge,
  badgeColor = 'blue',
  onAction,
  actionLabel = 'Learn More',
  featured = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const [isBtnPressed, setIsBtnPressed] = useState(false);

  const fontFamily = "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  const bt = badgeThemes[badgeColor] || badgeThemes.blue;

  const cardStyle: React.CSSProperties = {
    position: 'relative',
    width: '320px',
    backgroundColor: 'var(--card-bg)',
    borderRadius: '16px',
    overflow: 'hidden',
    border: featured
      ? '1.5px solid var(--primary-glow, rgba(99, 102, 241, 0.3))'
      : '1px solid var(--card-border)',
    boxShadow: isHovered
      ? featured
        ? '0 20px 40px var(--primary-glow, rgba(99, 102, 241, 0.15)), 0 8px 16px rgba(0,0,0,0.06)'
        : '0 20px 40px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.04)'
      : featured
        ? '0 8px 24px var(--primary-glow, rgba(99, 102, 241, 0.1)), 0 2px 8px rgba(0,0,0,0.04)'
        : '0 4px 12px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.03)',
    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    cursor: 'default',
    fontFamily,
  };

  const imageContainerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '200px',
    backgroundColor: 'var(--border-subtle)',
    overflow: 'hidden',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };

  const badgeStyle: React.CSSProperties = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    padding: '5px 12px',
    fontSize: '11.5px',
    fontWeight: 650,
    letterSpacing: '0.03em',
    textTransform: 'uppercase',
    borderRadius: '8px',
    backgroundColor: bt.bg,
    color: bt.color,
    border: bt.border,
    backdropFilter: 'blur(8px)',
    fontFamily,
    zIndex: 2,
  };

  const bodyStyle: React.CSSProperties = {
    padding: '20px 22px 22px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '17px',
    fontWeight: 650,
    color: 'var(--text-strong)',
    margin: 0,
    letterSpacing: '-0.02em',
    lineHeight: '1.3',
    fontFamily,
  };

  const descStyle: React.CSSProperties = {
    fontSize: '14px',
    color: 'var(--text-muted)',
    margin: 0,
    lineHeight: '1.55',
    fontWeight: 400,
    fontFamily,
  };

  const priceStyle: React.CSSProperties = {
    fontSize: '22px',
    fontWeight: 750,
    color: 'var(--text-strong)',
    margin: '6px 0 2px',
    letterSpacing: '-0.02em',
    fontFamily,
  };

  const btnStyle: React.CSSProperties = {
    width: '100%',
    padding: '11px',
    marginTop: '8px',
    background: isBtnPressed
      ? 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)'
      : isBtnHovered
        ? 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)'
        : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '-0.01em',
    cursor: 'pointer',
    boxShadow: isBtnHovered
      ? '0 6px 20px rgba(99, 102, 241, 0.35)'
      : '0 3px 10px rgba(99, 102, 241, 0.2)',
    transform: isBtnPressed
      ? 'scale(0.97)'
      : isBtnHovered
        ? 'translateY(-1px)'
        : 'translateY(0)',
    transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    fontFamily,
  };

  const featuredGlowStyle: React.CSSProperties = featured ? {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #a78bfa, #8b5cf6, #6366f1)',
    backgroundSize: '200% 100%',
    animation: 'none',
    zIndex: 1,
  } : {};

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {featured && <div style={featuredGlowStyle} />}

      {image && (
        <div style={imageContainerStyle}>
          <img src={image} alt={title} style={imageStyle} />
          {badge && <span style={badgeStyle}>{badge}</span>}
        </div>
      )}

      {!image && badge && <span style={{ ...badgeStyle, position: 'relative', alignSelf: 'flex-start', margin: '16px 0 0 20px' }}>{badge}</span>}

      <div style={bodyStyle}>
        <h3 style={titleStyle}>{title}</h3>
        {description && <p style={descStyle}>{description}</p>}
        {price !== undefined && <div style={priceStyle}>${price.toFixed(2)}</div>}

        {onAction && (
          <button
            onClick={onAction}
            style={btnStyle}
            onMouseEnter={() => setIsBtnHovered(true)}
            onMouseLeave={() => { setIsBtnHovered(false); setIsBtnPressed(false); }}
            onMouseDown={() => setIsBtnPressed(true)}
            onMouseUp={() => setIsBtnPressed(false)}
          >
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
