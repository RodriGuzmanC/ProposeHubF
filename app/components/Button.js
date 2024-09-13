import Link from 'next/link'

import React from 'react';

const Button = ({ children, onClick, variant = 'primary' , href}) => {
  const baseClasses = 'px-8 py-3 rounded-md font-semibold transition-colors';
  const variantClasses = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    purple: 'bg-indigo-700 text-white hover:bg-indigo-800'
  };

  return (
    <Link
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
      href={href}
    >
      {children}
    </Link>
  );
};

export default Button;