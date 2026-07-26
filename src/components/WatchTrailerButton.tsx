import React from 'react';

interface WatchTrailerButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const WatchTrailerButton: React.FC<WatchTrailerButtonProps> = ({ 
  onClick, 
  className = '',
  label = "Tonton Trailer" 
}) => {
  return (
    <button
      onClick={onClick}
      className={`group rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-all duration-300 hover:bg-[#D7E2EA]/10 hover:border-white hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${className}`}
    >
      <span>{label}</span>
      <span className="inline-block transition-transform duration-300 group-hover:scale-125">▶</span>
    </button>
  );
};
