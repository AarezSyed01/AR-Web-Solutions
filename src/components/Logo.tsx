import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', iconOnly = false, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const iconSize = sizeClasses[size];

  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* Custom AR Geometric Vector Logo */}
      <div className={`relative shrink-0 ${iconSize} flex items-center justify-center rounded-xl bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 p-1.5 shadow-md shadow-red-500/10 group-hover:scale-105 transition-transform duration-300 overflow-hidden`}>
        {/* Geometric subtle background texture lines */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.03)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.03)_50%,rgba(0,0,0,0.03)_75%,transparent_75%,transparent)] dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%,transparent)] [background-size:12px_12px] opacity-70 pointer-events-none" />
        
        <svg
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10"
        >
          <defs>
            <linearGradient id="arRedGradient" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF3B30" />
              <stop offset="100%" stopColor="#E63946" />
            </linearGradient>
          </defs>

          {/* Red "A" Geometric Shape */}
          <path
            d="M 197 80 L 392 420 L 323 420 L 197 200 L 103 360 L 250 360 L 282 420 L 0 420 Z"
            fill="url(#arRedGradient)"
          />

          {/* Dark/White "R" Geometric Shape */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 223 80 L 375 80 C 460 80 495 120 495 167.5 C 495 215 460 255 375 255 L 325 255 L 490 420 L 415 420 L 295 255 L 223 80 Z M 315 135 L 365 135 C 410 135 430 148 430 167.5 C 430 187 410 200 365 200 L 315 200 Z"
            className="fill-zinc-900 dark:fill-white transition-colors duration-200"
          />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-[#111111] dark:text-white leading-none">
            AR <span className="text-[#E63946]">Web Solutions</span>
          </span>
          <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase mt-1">
            Design • Develop • Grow
          </span>
        </div>
      )}
    </div>
  );
};
