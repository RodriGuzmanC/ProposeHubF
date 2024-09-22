import Link from 'next/link'

import React from 'react';

const Button = ({ children, onClick, variant = 'primary' , href = '', disabled}) => {
  const baseClasses = 'h-fit flex items-center px-6 py-3 rounded-md font-semibold transition-colors text-sm';
  const variantClasses = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    purple: 'bg-principal text-white'
  };

  return (
    disabled ? (
      <div className={`${baseClasses} ${variantClasses[variant]} opacity-50 cursor-not-allowed`}>
        {children}
      </div>
    ) : (
      <Link className={`${baseClasses} ${variantClasses[variant]}`} onClick={onClick} href={href}>
        {children}
      </Link>
    )
  );
};

export default Button;