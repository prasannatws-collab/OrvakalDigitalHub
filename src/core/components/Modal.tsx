import React from 'react';
import type { ReactNode } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: ReactNode;
  children: ReactNode;
  backdropFilter?: boolean;
  innerStyle?: React.CSSProperties;
  innerClassName?: string;
  closeButtonClassName?: string;
  closeButtonIconColor?: string;
  closeButtonStyle?: React.CSSProperties;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  backdropFilter = false,
  innerStyle = {},
  innerClassName = '',
  closeButtonClassName = '',
  closeButtonIconColor = 'hsl(var(--foreground))',
  closeButtonStyle = {}
}: ModalProps) => {
  if (!isOpen) return null;

  const backdropStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: backdropFilter ? 'rgba(15, 23, 42, 0.65)' : 'rgba(0,0,0,0.5)',
    backdropFilter: backdropFilter ? 'blur(8px)' : 'none',
    WebkitBackdropFilter: backdropFilter ? 'blur(8px)' : 'none',
    zIndex: backdropFilter ? 2000 : 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: backdropFilter ? '24px' : '20px'
  };

  return (
    <div style={backdropStyle} onClick={onClose}>
      <div
        className={`card fade-in ${innerClassName}`}
        style={{ width: '100%', backgroundColor: 'hsl(var(--card))', ...innerStyle }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {typeof title === 'string' ? (
            <h3 style={{ fontSize: '1rem', color: 'hsl(var(--primary))', margin: 0 }}>{title}</h3>
          ) : (
            title
          )}
          <button
            className={`icon-btn ${closeButtonClassName}`}
            onClick={onClose}
            style={{ width: '24px', height: '24px', ...closeButtonStyle }}
            aria-label="Close modal"
          >
            <X size={12} color={closeButtonIconColor} />
          </button>
        </div>
        <div style={{ marginTop: '8px' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
