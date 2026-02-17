
import React from 'react';

interface TagProps {
  text: string;
  className?: string;
  color?: 'primary' | 'accent' | 'secondary'; // Add more as needed
}

export const Tag: React.FC<TagProps> = ({ text, className, color = 'primary' }) => {
  const colorClasses = {
    primary: 'bg-primary/20 text-primary hover:bg-primary/30', // Cyan based
    accent: 'bg-accent/20 text-accent hover:bg-accent/30',    // Lighter Cyan based
    secondary: 'bg-secondary/20 text-text-light hover:bg-secondary/30', // Gray based
  };
  return (
    <span className={`inline-block text-xs font-medium mr-2 mb-2 px-3 py-1 rounded-full transition-colors duration-200 ${colorClasses[color]} ${className}`}>
      {text}
    </span>
  );
};
