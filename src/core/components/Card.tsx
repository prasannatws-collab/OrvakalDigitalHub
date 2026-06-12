import type { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'banner';
}

export const Card = ({ children, variant = 'default', className = '', ...props }: CardProps) => {
  const cardClassName = `card ${variant === 'banner' ? 'banner-card' : ''} ${className}`.trim();
  return (
    <div className={cardClassName} {...props}>
      {children}
    </div>
  );
};
