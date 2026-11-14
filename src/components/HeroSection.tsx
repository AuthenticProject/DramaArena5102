import React, { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { Calendar, MapPin, ArrowRight, ShieldCheck, Sparkles, Building2, Layers } from 'lucide-react';
import { importImage } from '../utils/assetHelpers';

interface HeroSectionProps {
  onOpenSponsorshipModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const FleuronDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center gap-3 my-3 w-full max-w-xs mx-auto ${className}`}>
    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#B58A3C]/60" />
    <span className="text-[#D4AF37] text-xs font-serif">✦</span>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#B58A3C]/60" />
  </div>
);

export const SectionLabel: React.FC<{ text: string }> = ({ text }) => (
  <span className="font-mono text-[11px] tracking-[0.28em] uppercase font-bold text-[#D4AF37]">
    ✦ {text} ✦
  </span>
);

export const GoldButton: React.FC<{ onClick?: () => void; label: string; outline?: boolean }> = ({
  onClick,
  label,
  outline = false
}) => (
  <button
    onClick={onClick}
    className="group relative px-7 py-3 font-mono font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-md rounded-xl"
    style={{
      background: outline ? 'transparent' : 'linear-gradient(135deg, #F3E1B8 0%, #D4A853 50%, #B58A3C 100%)',
      color: outline ? '#EDE8E2' : '#192E41',
      border: outline ? '1.5px solid rgba(181, 138, 60, 0.5)' : '1.5px solid #D4AF37',
      letterSpacing: '0.14em'
    }}
  >
    {label} <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
  </button>
);

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSponsorshipModal, onNavigate }) => {
  const [activeHeroTab, setActiveHeroTab] = useState<'wave' | 'monogram'>('wave');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date('2026-05-07T19:30:00+07:00').getTime();
    const update = () => {
      const diff = target - new Date().getTime();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center pt-36 sm:pt-40 pb-16 px-4 sm:px-6 md:px-12 overflow-hidden bg-gradient-to-b from-[#070D13] via-[#0E1A26] to-[#192E41] text-[#EDE8E2] font-jakarta"
    >
      {/* Background Architectural Grid & Subtle Radial Spotlight */}
      <div className="absolute inset-0 aluro-bg-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-[#B58A3C]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Orbit Rings Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] pointer-events-none opacity-20">
        <div className="absolute inset-0 border border-[#B58A3C]/20 rounded-full animate-orbit" />
        <div className="absolute inset-24 border border-[#B58A3C]/15 rounded-full animate-orbit-reverse" />
      </div>

      {/* ── CHAPTER 1: THE MASTER EDITORIAL STAGE (Top Chapter) ── */}
      <div className="relative max-w-4xl mx-auto w-full z-10 text-center flex flex-col items-center">
        
        {/* 1. Official Eyebrow Badge */}
        <FadeIn delay={0} y={-8} className="mb-5">
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-[#101D2A]/90 border border-[#B58A3C]/40 text-xs font-semibold tracking-wider text-[#F3E1B8] shadow-2xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-bold">
              KULLIYATU-L-MU'ALLIMIN AL-ISLAMIYAH · GONTOR 2026
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#325956] text-[#F3E1B8] font-mono text-[9px] font-bold">
              1447H
            </span>
          </div>
        </FadeIn>

        {/* 2. Grand Display Headline */}
        <FadeIn delay={0.08} y={0} className="w-full">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-[1.05] font-instrument italic drop-shadow-md">
            Drama Arena 5102
          </h1>
          <div className="mt-2.5 sm:mt-3.5 font-mileast text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#F3E1B8] via-[#D4A853] to-[#B58A3C] bg-clip-text text-transparent">
            Sadar dalam Perjuangan, Utuh dalam Kebersamaan
          </div>
        </FadeIn>

        {/* 3. Refined Synopsis Paragraph */}
        <FadeIn delay={0.16} className="mt-5 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm md:text-base text-[#EDE8E2]/85 leading-relaxed font-dm">
            Pagelaran seni akbar tahunan termegah karya 648 santri kelas 5 KMI Pondok Modern Darussalam Gontor, memadukan kematangan spiritual, kedisiplinan kepemimpinan, dan estetika seni Islam sejati.
          </p>
        </FadeIn>

        {/* 4. Action Trigger Buttons & Event Pill */}
        <FadeIn delay={0.24} className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full">
          <button
            onClick={onOpenSponsorshipModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-[#192E41] bg-gradient-to-r from-[#F3E1B8] via-[#D4A853] to-[#B58A3C] hover:from-[#D4A853] hover:to-[#B58A3C] shadow-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer font-jakarta"
          >
            <span>Ajukan Proposal Kemitraan</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
          
          <button
            onClick={() => onNavigate('ide-pokok')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-[#EDE8E2] bg-[#101D2A]/80 hover:bg-[#192E41] border border-[#B58A3C]/40 hover:border-[#D4AF37] hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-md cursor-pointer font-jakarta"
          >
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            <span>Jelajahi Falsafah Luhur</span>
          </button>

          <div className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono text-[#EDE8E2]/80 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
            <span>Kamis, 7 Mei 2026 · Ponorogo</span>
          </div>
        </FadeIn>
      </div>

      {/* ── CHAPTER 2: THE 3-CARD BENTO HERO PEDESTAL (Clean, Symmetrical, Award-Winning Studio Layout) ── */}
      <div className="relative max-w-6xl mx-auto w-full z-10 mt-14">
        <FadeIn delay={0.32}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            
            {/* ── CARD 1 (Left): LOKASI & HISTORIS (4 cols) ── */}
            <div className="md:col-span-4 rounded-3xl bg-[#101D2A]/85 border border-[#B58A3C]/35 p-6 flex flex-col justify-between shadow-2xl backdrop-blur-md interactive-card group">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#D4AF37]" />
                    <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-[#D4AF37]">
                      LOKASI & HISTORIS
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#F3E1B8] border border-white/10">
                    EST. 1926
                  </span>
                </div>

                <div className="w-full h-36 rounded-2xl overflow-hidden border border-[#B58A3C]/25 relative mb-4 group-hover:border-[#D4AF37] transition-colors">
                  <img
                    src={importImage('building.png')}
                    alt="Balai Pertemuan PMDG"
                    className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 text-left">
                    <span className="text-white font-bold text-xs block font-sans">Balai Pertemuan Gontor</span>
                    <span className="text-[10px] text-[#D4AF37] font-mono">Panggung Utama DA 5102</span>
                  </div>
                </div>

                <div className="text-left space-y-1">
                  <h3 className="font-mileast font-bold text-lg text-white">Kampus Pusat Ponorogo</h3>
                  <p className="text-xs text-[#EDE8E2]/70 leading-relaxed font-sans">
                    Pondok Modern Darussalam Gontor, Desa Gontor, Ponorogo, Jawa Timur 63472.
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#D4AF37]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>7.87° S, 111.49° E</span>
                </div>
                <span className="text-[#EDE8E2]/50 text-[10px]">100 Th Gontor</span>
              </div>
            </div>

            {/* ── CARD 2 (Center): HERO MONUMENT - IDENTITAS RESMI (4 cols) ── */}
            <div className="md:col-span-4 rounded-3xl bg-gradient-to-b from-[#192E41] via-[#101D2A] to-[#0A121A] border-2 border-[#D4AF37]/60 p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md interactive-card group relative overflow-hidden">
              {/* Subtle Ambient Radial Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#B58A3C]/30 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                    <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-[#F3E1B8]">
                      LAMBANG RESMI DA 5102
                    </span>
                  </div>
                  {/* Toggle Selector Buttons */}
                  <div className="flex items-center gap-1 bg-[#101D2A] p-0.5 rounded-lg border border-white/10">
                    <button
                      onClick={() => setActiveHeroTab('wave')}
                      className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold transition-all ${
                        activeHeroTab === 'wave'
                          ? 'bg-[#B58A3C] text-[#192E41]'
                          : 'text-[#EDE8E2]/60 hover:text-white'
                      }`}
                    >
                      OMBAK
                    </button>
                    <button
                      onClick={() => setActiveHeroTab('monogram')}
                      className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold transition-all ${
                        activeHeroTab === 'monogram'
                          ? 'bg-[#B58A3C] text-[#192E41]'
                          : 'text-[#EDE8E2]/60 hover:text-white'
                      }`}
                    >
                      MONOGRAM
                    </button>
                  </div>
                </div>

                {/* Display Area for Active Emblem */}
                <div className="relative w-44 h-44 mx-auto my-2 flex items-center justify-center p-3 group-hover:scale-105 transition-transform duration-500">
                  {activeHeroTab === 'wave' ? (
                    <img
                      src={importImage('logo-da-wave-transparent.png')}
                      alt="Lambang Utama DA 5102"
                      className="w-full h-full object-contain filter drop-shadow-[0_8px_20px_rgba(212,175,55,0.35)]"
                    />
                  ) : (
                    <img
                      src={importImage('logo-da-monogram-transparent.png')}
                      alt="Monogram DA 5102"
                      className="w-full h-full object-contain filter drop-shadow-[0_8px_20px_rgba(212,175,55,0.35)]"
                    />
                  )}
                  {/* Wax Seal Overlay Badge */}
                  <div className="absolute -bottom-1 -right-1 w-10 h-10 drop-shadow-lg pointer-events-none">
                    <img
                      src={importImage('wax-seal-gold.png')}
                      alt="Wax Seal Gold"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="text-center mt-3">
                  <h3 className="font-mileast font-bold text-lg text-white">
                    {activeHeroTab === 'wave' ? 'The Great Wave of Kanagawa' : 'Interlocking Monogram DA'}
                  </h3>
                  <p className="text-xs text-[#D4AF37] font-sans mt-0.5">
                    {activeHeroTab === 'wave' ? 'Simbol Resiliensi & Keinsyafan Santri' : 'Tipografi Autentik Kelas 5 KMI PMDG'}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-[#B58A3C]/30 flex items-center justify-between text-[10px] font-mono text-[#EDE8E2]/75">
                <span className="flex items-center gap-1 text-[#D4AF37]">
                  <Sparkles className="w-3 h-3" />
                  <span>SK PMDG 1447 H</span>
                </span>
                <span>Klik tombol tab untuk ganti logo</span>
              </div>
            </div>

            {/* ── CARD 3 (Right): COUNTDOWN & SKALA PERHELATAN (4 cols) ── */}
            <div className="md:col-span-4 rounded-3xl bg-[#101D2A]/85 border border-[#B58A3C]/35 p-6 flex flex-col justify-between shadow-2xl backdrop-blur-md interactive-card group">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#D4AF37]" />
                    <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-[#D4AF37]">
                      HITUNG MUNDUR PENTAS
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#B58A3C]/20 text-[#D4AF37] border border-[#D4AF37]/40 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
                    <span>LIVE</span>
                  </span>
                </div>

                {/* 4-Box Digital Clock */}
                <div className="grid grid-cols-4 gap-2 my-2 text-center">
                  {[
                    { label: 'HARI', val: timeLeft.days },
                    { label: 'JAM', val: timeLeft.hours },
                    { label: 'MENIT', val: timeLeft.minutes },
                    { label: 'DETIK', val: timeLeft.seconds },
                  ].map(({ label, val }) => (
                    <div key={label} className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="font-mono font-bold text-xl sm:text-2xl text-white tabular-nums">
                        {String(val).padStart(2, '0')}
                      </div>
                      <div className="text-[9px] font-mono text-[#D4AF37] mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>

                {/* Event Scale Metrics */}
                <div className="space-y-2 mt-4 pt-3 border-t border-white/10 text-left">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#EDE8E2]/70 font-sans">Koordinator Utama:</span>
                    <span className="font-mono font-bold text-white">648 Santri Mandiri</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#EDE8E2]/70 font-sans">Jangkauan Cabang:</span>
                    <span className="font-mono font-bold text-[#D4AF37]">20 Kampus Pondok</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#EDE8E2]/70 font-sans">Malam Pertunjukan:</span>
                    <span className="font-mono font-bold text-white">1 Malam · 4 Babak Seni</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#D4AF37]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>KMI PMDG 1447H</span>
                </div>
                <span className="text-[#EDE8E2]/60 text-[10px]">19.30 WIB</span>
              </div>
            </div>

          </div>
        </FadeIn>
      </div>

      {/* ── SEAMLESS TRANSITION BAR LEADING DIRECTLY INTO MARQUEE FILMSTRIP ── */}
      <div className="w-full max-w-4xl mx-auto mt-14 z-10 flex flex-col items-center">
        <div className="flex items-center gap-3 w-full max-w-md mx-auto mb-2 opacity-60">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
            DOKUMENTASI & FILMSTRIP ARSIP
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>
      </div>

    </section>
  );
};
export default HeroSection;
