import React from 'react';
import { importImage, importRef } from '../utils/assetHelpers';

const marqueeImages = [
  importImage('photo 1.png'),
  importImage('photo 2.png'),
  importImage('building.png'),
  importImage('workshirt.png'),
  importRef('slide-04-moto.jpg'),
  importRef('slide-06-logo.jpg'),
  importRef('slide-10-color-palette.jpg'),
  importRef('slide-12-key-visual.jpg'),
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=600&auto=format&fit=crop",
];

export const MarqueeSection: React.FC = () => {
  const row1 = [...marqueeImages, ...marqueeImages];
  const row2 = [...marqueeImages.slice(6), ...marqueeImages.slice(0, 6), ...marqueeImages.slice(6), ...marqueeImages.slice(0, 6)];

  return (
    <div className="relative overflow-hidden py-10" style={{ background: '#192E41' }}>
      <div
        className="perforated-top absolute top-0 left-0 right-0 z-10"
        style={{ background: 'radial-gradient(circle at 50% 0%, #EDE8E2 9px, transparent 9px) top center / 20px 12px repeat-x' }}
      />
      <div className="flex flex-col gap-3 select-none">
        <div className="marquee-left flex gap-3 w-max">
          {row1.map((src, i) => (
            <div
              key={`r1-${i}`}
              className="w-[280px] h-[170px] flex-shrink-0 rounded-xl overflow-hidden border-2 border-[#B58A3C]/40 shadow-lg bg-[#101D2A]"
            >
              <img src={src} alt="Drama Arena Showcase" loading="lazy" className="w-full h-full object-cover filter contrast-105" />
            </div>
          ))}
        </div>
        <div className="marquee-right flex gap-3 w-max">
          {row2.map((src, i) => (
            <div
              key={`r2-${i}`}
              className="w-[280px] h-[170px] flex-shrink-0 rounded-xl overflow-hidden border-2 border-[#B58A3C]/40 shadow-lg bg-[#101D2A]"
            >
              <img src={src} alt="Drama Arena Showcase" loading="lazy" className="w-full h-full object-cover filter contrast-105" />
            </div>
          ))}
        </div>
      </div>
      <div
        className="perforated-bottom absolute bottom-0 left-0 right-0 z-10"
        style={{ background: 'radial-gradient(circle at 50% 100%, #EDE8E2 9px, transparent 9px) bottom center / 20px 12px repeat-x' }}
      />
    </div>
  );
};
export default MarqueeSection;
