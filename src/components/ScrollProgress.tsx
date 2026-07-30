import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      if (documentHeight > 0) {
        const currentProgress = (window.scrollY / documentHeight) * 100;
        setScrollPercentage(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-50 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#E63946] via-[#f26571] to-[#E63946] transition-all duration-150 ease-out shadow-[0_0_10px_#E63946]"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};
