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
      className={`fixed bottom-8 right-8 p-2 rounded-full bg-indigo-500 text-white shadow-md transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      aria-label="Scroll to top"
    >
      <FaChevronUp size={20} />
    </button>
  );
};

export default ScrollToTop;