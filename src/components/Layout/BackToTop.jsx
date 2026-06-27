import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
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
    <div className="fixed bottom-24 right-6 z-40">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-primary dark:bg-accent text-white dark:text-primary-dark flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-primary-light dark:hover:bg-accent-light transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6 animate-pulse" />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
