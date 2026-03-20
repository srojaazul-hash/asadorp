import React from 'react';
export const Button = ({ children, className, variant, size, ...props }) => {
  return (
    <button className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${className}`} {...props}>
      {children}
    </button>
  );
};