import React from 'react';

const Breadcrumb = ({ items, activeIndex = 0 }) => {
    return (
      <nav className="w-full flex mb-6 gap-2">
        {items.map((item, index) => (
          <button
            key={index}
            className={`px-6 flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
              index === activeIndex
                ? 'bg-principal text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            } ${index === 0 ? 'rounded-tl-lg' : ''} ${
              index === items.length - 1 ? 'rounded-tr-lg' : ''
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    );
  };
  
  export default Breadcrumb;