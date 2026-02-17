
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, interactive = true }) => {
  return (
    <div className={`
      relative overflow-hidden
      bg-card-bg border border-white/5 
      rounded-2xl p-8 transition-all duration-300
      ${interactive ? 'hover:border-primary/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5' : ''}
      ${className}
    `}>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
