import React from 'react';
import { importImage } from '../utils/assetHelpers';

export type TypographyVariant = 'main' | '2' | '3' | '4' | '5' | '6' | 'auto';

interface TypographyDecorProps {
  sectionId?: string;
  variant?: TypographyVariant;
  mode?: 'background-watermark' | 'divider-banner' | 'corner-ornament' | 'repeat-tile';
  opacity?: number;
  className?: string;
  speed?: 'slow' | 'medium' | 'fast' | 'none';
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center';
}

const variantToFileMap: Record<string, string> = {
  main: 'typography.png',
  '1': 'typography.png',
  '2': 'typography 2.png',
  '3': 'typography 3.png',
  '4': 'typography 4.png',
  '5': 'typography 5.png',
  '6': 'typography 6.png',
};

const sectionDefaultVariants: Record<string, TypographyVariant> = {
  hero: 'main',
  about: '2',
  theme: 'main',
  shows: '4',
  committee: '5',
  media: '3',
  footer: '6',
};

export const TypographyDecor: React.FC<TypographyDecorProps> = ({
  sectionId = 'theme',
  variant = 'auto',
  mode = 'background-watermark',
  opacity = 0.05,
  className = '',
  speed = 'slow',
  position = 'center',
}) => {
  const chosenVariant: TypographyVariant =
    variant === 'auto' ? sectionDefaultVariants[sectionId] || 'main' : variant;

  const fileName = variantToFileMap[chosenVariant] || 'typography.png';
  const imgUrl = importImage(fileName);

  if (mode === 'divider-banner') {
    return (
      <div className={`w-full flex items-center justify-center my-6 overflow-hidden select-none pointer-events-none ${className}`}>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D69103]/40 to-transparent" />
        <div className="mx-4 relative group">
          <img
            src={imgUrl}
            alt="Typography Divider"
            className="h-8 md:h-12 w-auto object-contain filter contrast-125 opacity-70 hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D69103]/40 to-transparent" />
      </div>
    );
  }

  if (mode === 'corner-ornament') {
    const posClasses: Record<string, string> = {
      'top-right': 'top-2 right-2 md:top-4 md:right-6',
      'top-left': 'top-2 left-2 md:top-4 md:left-6',
      'bottom-right': 'bottom-2 right-2 md:bottom-4 md:right-6',
      'bottom-left': 'bottom-2 left-2 md:bottom-4 md:left-6',
      center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    };

    return (
      <div
        className={`absolute pointer-events-none select-none z-0 ${posClasses[position]} ${className}`}
        style={{ opacity }}
      >
        <img
          src={imgUrl}
          alt={`Typography Accent ${fileName}`}
          className="w-32 md:w-56 h-auto object-contain filter contrast-150"
          loading="lazy"
        />
      </div>
    );
  }

  if (mode === 'repeat-tile') {
    return (
      <div
        className={`absolute inset-0 pointer-events-none select-none z-0 ${className}`}
        style={{
          backgroundImage: `url("${imgUrl}")`,
          backgroundSize: '240px auto',
          backgroundRepeat: 'repeat',
          opacity,
          mixBlendMode: 'multiply',
        }}
        aria-hidden="true"
      />
    );
  }

  // Default: 'background-watermark'
  const animClass =
    speed === 'none'
      ? ''
      : speed === 'fast'
      ? 'animate-pulse'
      : 'float-anim';

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    >
      <div
        className={`relative w-full max-w-4xl h-full flex items-center justify-center transition-transform duration-1000 ${animClass}`}
        style={{ opacity }}
      >
        <img
          src={imgUrl}
          alt="Typography Background Watermark"
          className="w-4/5 max-h-[85%] object-contain filter drop-shadow-md select-none"
          loading="lazy"
        />
      </div>
    </div>
  );
};
