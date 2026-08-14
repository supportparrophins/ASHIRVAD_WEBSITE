import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#0D2A45] hover:bg-[#133A61] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 border border-white/20 animate-fade-in group cursor-pointer"
    >
      <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform text-amber-400" />
    </button>
  );
}
