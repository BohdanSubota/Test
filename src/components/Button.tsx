import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-sm transition-colors';
  
  const variants = {
    primary: 'bg-rk-green text-white hover:bg-rk-green/90',
    secondary: 'bg-white text-ink border border-chip-border hover:bg-tint',
  };
  
  const sizes = {
    md: 'px-4 py-2 text-[16px]',
    lg: 'px-6 py-3 text-[17px]',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
