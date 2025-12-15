import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
  pulse?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  pulse = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative overflow-hidden font-bold py-4 px-6 rounded-xl transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 text-lg shadow-lg";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-primary/20 hover:shadow-primary/40 border border-transparent",
    outline: "bg-transparent text-primary border-2 border-primary hover:bg-primary/5",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const pulseClass = pulse ? "animate-pulse" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${pulseClass} ${className} group`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {variant === 'primary' && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
      </span>
      {/* Subtle overlay for material feel on hover */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-200" />
    </button>
  );
};