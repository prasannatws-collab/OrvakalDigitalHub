import type { ReactNode, HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: 'default' | 'success' | 'info' | 'danger' | 'warning';
}

export const Badge = ({ children, variant = 'default', className = '', ...props }: BadgeProps) => {
  const badgeClassName = `badge ${variant !== 'default' ? `badge-${variant}` : ''} ${className}`.trim();
  return (
    <span className={badgeClassName} {...props}>
      {children}
    </span>
  );
};
