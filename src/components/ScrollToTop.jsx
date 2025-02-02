import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full 
        bg-gray-100 dark:bg-gray-800 
        text-gray-600 dark:text-gray-300 
        hover:bg-gray-200 dark:hover:bg-gray-700
        shadow-lg hover:shadow-xl
        border border-gray-200 dark:border-gray-700
        transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        group
      `}
      style={{
        zIndex: 9999,
      }}
      aria-label="Scroll to top"
    >
      <FaChevronUp 
        size={20} 
        className="transform group-hover:-translate-y-1 transition-transform duration-300"
      />
    </button>
  );
};

export default ScrollToTop;