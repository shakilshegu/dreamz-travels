import React from 'react';

const Container = ({ 
  children, 
  className = '', 
  size = 'default',
  noPadding = false 
}) => {
  const sizeClasses = {
    sm: 'max-w-4xl',
    default: 'max-w-7xl', 
    lg: 'max-w-[1400px]',
    full: 'max-w-full'
  };

  const paddingClasses = noPadding 
    ? '' 
    : 'px-4 sm:px-6 lg:px-8';

  return (
    <div className={`
      mx-auto 
      ${sizeClasses[size]} 
      ${paddingClasses}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Container;