import React from 'react';
import { importImage, importRef } from '../utils/assetHelpers';
import { Camera, Sparkles } from 'lucide-react';

const marqueeItems = [
  { src: importImage('photo 1.png'), tag: 'Konsolidasi Santri', role: 'Dokumentasi' },
  { src: importImage('photo 2.png'), tag: 'Koreografi Panggung', role: 'Artistik' },
  { src: importImage('building.png'), tag: 'Kampus Pusat Darussalam', role: 'Lokasi' },
  { src: importImage('workshirt.png'), tag: 'Workshirt Resmi DA 5102', role: 'Merchandise' },
  { src: importRef('slide-04-moto.jpg'), tag: 'Tiga Moto & Visi', role: 'Arsip Slide 04' },
  { src: importRef('slide-06-logo.jpg'), tag: 'Anatomi Lambang Resmi', role: 'Arsip Slide 06' },
  { src: importRef('slide-10-color-palette.jpg'), tag: 'Palet Warna DA 5102', role: 'Arsip Slide 10' },
  { src: importRef('slide-12-key-visual.jpg'), tag: 'Key Visual & Elemen Grafis', role: 'Arsip Slide 12' },
  { src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop", tag: 'Lighting & Tata Cahaya', role: 'Panggung Akbar' },
  { src: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=600&auto=format&fit=crop", tag: 'Koreografi Tari Kolosal', role: 'Persembahan' },
  { src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop", tag: 'Harmoni Orkestra Santri', role: 'Musik Akustik' },
  { src: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=600&auto=format&fit=crop", tag: 'Kepanitiaan & Tim Kreatif', role: 'Organisasi' },
];

export const MarqueeSection: React.FC = () => {
  const row1 = [...marqueeItems, ...marqueeItems];
  const row2 = [...marqueeItems.slice(6), ...marqueeItems.slice(0, 6), ...marqueeItems.slice(6), ...marqueeItems.slice(0, 6)];

  return (
    <div className="relative overflow-hidden py-14" style={{ background: '#192E41' }}>
      {/* Perforated filmstrip edges */}
      <div
        className="perforated-top absolute top-0 left-0 right-0 z-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 0%, #EDE8E2 9px, transparent 9px) top center / 20px 12px repeat-x' }}
      />

      {/* Header bar */}
      <div className="max-w-6xl mx-auto px-6 mb-8 flex flex-wrap items-center justify-between gap-4 relative z-20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#B58A3C]/20 border border-[#B58A3C] flex items-center justify-center text-[#D4AF37]">
            <Camera className="w-4 h-4" />
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-bold flex items-center gap-2">
              <span>ROLL DOKUMENTASI VISUAL</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
            </div>
            <h3 className="font-serif italic text-lg sm:text-xl text-[#EDE8E2] font-semibold">
              Filmstrip Galeri & Eksplorasi Artistik Drama Arena 5102
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#EDE8E2]/60 bg-[#101D2A]/80 px-3 py-1.5 rounded-full border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Hover kartu untuk pause & zoom detail</span>
        </div>
      </div>

      {/* Edge gradient masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#192E41] via-[#192E41]/80 to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#192E41] via-[#192E41]/80 to-transparent z-20" />

      {/* Rows */}
      <div className="flex flex-col gap-4 select-none relative z-10 group/marquee">
        {/* Row 1 */}
        <div className="marquee-left flex gap-4 w-max group-hover/marquee:[animation-play-state:paused]">
          {row1.map((item, i) => (
            <div
              key={`r1-${i}`}
              className="group relative w-[300px] h-[190px] flex-shrink-0 rounded-xl overflow-hidden border border-[#B58A3C]/40 shadow-xl bg-[#101D2A] transition-all duration-300 hover:scale-[1.04] hover:border-[#D4AF37] hover:shadow-2xl hover:z-30 cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.tag}
                loading="lazy"
                className="w-full h-full object-cover filter contrast-105 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                <div>
                  <span className="font-mono text-[9px] tracking-wider uppercase text-[#D4AF37] font-semibold block">
                    {item.role}
                  </span>
                  <span className="font-sans text-xs font-bold text-white leading-snug line-clamp-1">
                    {item.tag}
                  </span>
                </div>
                <span className="font-mono text-[9px] text-white/50 bg-black/40 px-1.5 py-0.5 rounded border border-white/10">
                  #{(i % marqueeItems.length) + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="marquee-right flex gap-4 w-max group-hover/marquee:[animation-play-state:paused]">
          {row2.map((item, i) => (
            <div
              key={`r2-${i}`}
              className="group relative w-[300px] h-[190px] flex-shrink-0 rounded-xl overflow-hidden border border-[#B58A3C]/40 shadow-xl bg-[#101D2A] transition-all duration-300 hover:scale-[1.04] hover:border-[#D4AF37] hover:shadow-2xl hover:z-30 cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.tag}
                loading="lazy"
                className="w-full h-full object-cover filter contrast-105 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                <div>
                  <span className="font-mono text-[9px] tracking-wider uppercase text-[#D4AF37] font-semibold block">
                    {item.role}
                  </span>
                  <span className="font-sans text-xs font-bold text-white leading-snug line-clamp-1">
                    {item.tag}
                  </span>
                </div>
                <span className="font-mono text-[9px] text-white/50 bg-black/40 px-1.5 py-0.5 rounded border border-white/10">
                  #{(i % marqueeItems.length) + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="perforated-bottom absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 100%, #EDE8E2 9px, transparent 9px) bottom center / 20px 12px repeat-x' }}
      />
    </div>
  );
};
export default MarqueeSection;
