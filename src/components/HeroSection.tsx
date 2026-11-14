import React, { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { Calendar, MapPin, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
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
  const [activeStackIndex, setActiveStackIndex] = useState<number>(0);
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

  const cycleStack = () => {
    setActiveStackIndex((prev) => (prev + 1) % 3);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-36 sm:pt-40 pb-20 px-4 sm:px-6 md:px-12 overflow-hidden bg-gradient-to-b from-[#0B151F] via-[#101D2A] to-[#192E41] text-[#EDE8E2] font-jakarta"
    >
      {/* Background Architectural Grid & Subtle Radial Spotlight */}
      <div className="absolute inset-0 aluro-bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#B58A3C]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Orbit Rings Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] pointer-events-none opacity-20">
        <div className="absolute inset-0 border border-[#B58A3C]/20 rounded-full animate-orbit" />
        <div className="absolute inset-20 border border-[#B58A3C]/15 rounded-full animate-orbit-reverse" />
      </div>

      {/* Hero Master Container */}
      <div className="relative max-w-5xl mx-auto w-full z-10 text-center flex flex-col items-center">
        
        {/* 1. Official Eyebrow Pill Badge */}
        <FadeIn delay={0} y={-10} className="mb-6">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#101D2A]/90 border border-[#B58A3C]/50 text-xs font-semibold tracking-wider text-[#F3E1B8] shadow-2xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] font-bold">
              KULLIYATU-L-MU'ALLIMIN AL-ISLAMIYAH · GONTOR 2026
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#325956] text-[#F3E1B8] font-mono text-[9px] font-bold">
              1447H
            </span>
          </div>
        </FadeIn>

        {/* 2. Grand Display Editorial Headline */}
        <FadeIn delay={0.1} y={0} className="w-full">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-[1.05] font-instrument italic drop-shadow-md">
            Drama Arena 5102
          </h1>
          <div className="mt-2 sm:mt-3 font-mileast text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#F3E1B8] via-[#D4A853] to-[#B58A3C] bg-clip-text text-transparent">
            Sadar dalam Perjuangan, Utuh dalam Kebersamaan
          </div>
        </FadeIn>

        {/* 3. Theme Blockquote Callout */}
        <FadeIn delay={0.18} className="mt-5 max-w-2xl mx-auto w-full">
          <blockquote className="text-xs sm:text-sm md:text-base font-medium text-[#F3E1B8] italic px-6 py-3.5 border border-[#B58A3C]/35 bg-[#101D2A]/85 rounded-2xl backdrop-blur-md shadow-xl card-glow-pulse font-instrument">
            “Sadar, Ke Pondok apa yang kau cari? Sadar akan nilai-nilai perjuangan, Sadar dan utuh dalam kebersamaan.”
          </blockquote>
        </FadeIn>

        {/* 4. Subheadline Overview */}
        <FadeIn delay={0.24} className="mt-4 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-[#EDE8E2]/80 leading-relaxed font-dm">
            Pagelaran seni akbar tahunan termegah karya 648 santri kelas 5 KMI di Pondok Modern Darussalam Gontor, memadukan kematangan spiritual, kedisiplinan kepemimpinan, dan estetika seni Islam sejati.
          </p>
        </FadeIn>

        {/* 5. Dual CTA Action Buttons */}
        <FadeIn delay={0.3} className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
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
        </FadeIn>

        {/* 6. Centerpiece Pedestal: Symmetrical Exhibition of 3D Stack + Credential Cards */}
        <FadeIn delay={0.36} className="mt-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Credentials Box */}
            <div className="hidden lg:flex lg:col-span-3 flex-col gap-3 text-left">
              <div className="p-4 rounded-2xl bg-[#101D2A]/80 border border-[#B58A3C]/30 shadow-lg backdrop-blur-md interactive-card">
                <div className="flex items-center gap-2 text-[#D4AF37] font-mono text-[10px] uppercase font-bold mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
                  <span>Kampus Pusat PMDG</span>
                </div>
                <div className="font-mileast font-bold text-base text-white">Ponorogo, Jatim</div>
                <div className="text-[11px] font-mono text-[#EDE8E2]/60 mt-1">7.87° S, 111.49° E</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#101D2A]/80 border border-[#B58A3C]/30 shadow-lg backdrop-blur-md interactive-card">
                <div className="flex items-center gap-2 text-[#D4AF37] font-mono text-[10px] uppercase font-bold mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Legalitas Acara</span>
                </div>
                <div className="font-mileast font-bold text-base text-white">SK PMDG 1447 H</div>
                <div className="text-[11px] font-mono text-[#EDE8E2]/60 mt-1">Siswa Kelas 5 KMI Mandiri</div>
              </div>
            </div>

            {/* Center: Interactive 3-Card Stack */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div
                onClick={cycleStack}
                className="aluro-hero-stack cursor-pointer group select-none"
                title="Klik untuk memutar kartu 3D"
              >
                {/* Card 1: Monogram */}
                <div
                  className={`aluro-stack-card bg-[#101D2A] border-2 border-[#B58A3C]/40 shadow-2xl p-5 flex flex-col justify-between overflow-hidden shine-card-hover ${
                    activeStackIndex === 1
                      ? 'aluro-stack-card-3 border-[#D4AF37]'
                      : activeStackIndex === 2
                      ? 'aluro-stack-card-2'
                      : 'aluro-stack-card-1'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#D4AF37]">
                    <span className="font-bold">MARK II</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/10 text-[#F3E1B8]">MONOGRAM</span>
                  </div>
                  <div className="w-32 h-32 mx-auto flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                    <img
                      src={importImage('logo-da-monogram-transparent.png')}
                      alt="Monogram DA"
                      className="w-full h-full object-contain filter drop-shadow"
                    />
                  </div>
                  <div className="text-left border-t border-[#B58A3C]/20 pt-2 text-[11px] font-dm text-[#EDE8E2]/85 flex justify-between items-center">
                    <span>Interlocking DA 5102</span>
                    <span className="text-[10px] text-[#B58A3C] font-mono">KMI</span>
                  </div>
                </div>

                {/* Card 2: Balai Pertemuan Historical Building */}
                <div
                  className={`aluro-stack-card bg-[#101D2A] border-2 border-[#B58A3C]/40 shadow-2xl p-5 flex flex-col justify-between overflow-hidden shine-card-hover ${
                    activeStackIndex === 2
                      ? 'aluro-stack-card-3 border-[#D4AF37]'
                      : activeStackIndex === 0
                      ? 'aluro-stack-card-2'
                      : 'aluro-stack-card-1'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#D4AF37]">
                    <span className="font-bold">ARSIP HISTORIS</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/10 text-[#F3E1B8]">EST. 1926</span>
                  </div>
                  <div className="w-36 h-28 mx-auto rounded-xl overflow-hidden my-2 border border-[#B58A3C]/30 relative group-hover:scale-105 transition-transform">
                    <img
                      src={importImage('building.png')}
                      alt="Balai Pertemuan Gontor"
                      className="w-full h-full object-cover filter contrast-110"
                    />
                  </div>
                  <div className="text-left border-t border-[#B58A3C]/20 pt-2 text-[11px] font-dm text-[#EDE8E2]/85 flex justify-between items-center">
                    <span>Balai Pertemuan PMDG</span>
                    <span className="text-[10px] text-[#B58A3C] font-mono">PUSAT</span>
                  </div>
                </div>

                {/* Card 3: The Great Wave Arabesque Medallion */}
                <div
                  className={`aluro-stack-card bg-gradient-to-br from-[#192E41] via-[#101D2A] to-[#0B151F] border-2 shadow-[0_25px_60px_rgba(0,0,0,0.6)] p-6 flex flex-col justify-between overflow-hidden shine-card-hover ${
                    activeStackIndex === 0
                      ? 'aluro-stack-card-3 border-[#D4AF37]'
                      : activeStackIndex === 1
                      ? 'aluro-stack-card-2 border-[#B58A3C]/50'
                      : 'aluro-stack-card-1 border-[#B58A3C]/40'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#D4AF37]">
                    <span className="font-bold">LAMBANG UTAMA</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#325956] text-[#F3E1B8] font-bold">5102</span>
                  </div>
                  <div className="w-36 h-36 mx-auto flex items-center justify-center p-3 group-hover:scale-105 transition-transform">
                    <img
                      src={importImage('logo-da-wave-transparent.png')}
                      alt="Ombak Kanagawa & Arabesque DA"
                      className="w-full h-full object-contain filter drop-shadow-lg"
                    />
                  </div>
                  <div className="text-center border-t border-[#B58A3C]/30 pt-2.5">
                    <div className="font-mileast font-bold text-sm text-[#EDE8E2]">The Great Wave of Kanagawa</div>
                    <div className="text-[10px] font-dm text-[#D4A853] mt-0.5">Simbol Resiliensi & Keinsyafan</div>
                  </div>
                </div>
              </div>

              {/* Click to Cycle Hint */}
              <div className="text-[10px] font-mono text-[#D4AF37] mt-4 tracking-wider flex items-center justify-center gap-2 select-none">
                <span className="animate-pulse">✦</span>
                <span>KLIK KARTU UNTUK MEMUTAR STACK · HOVER UNTUK MEMBUKA FAN-OUT</span>
                <span className="animate-pulse">✦</span>
              </div>
            </div>

            {/* Right Credentials Box */}
            <div className="hidden lg:flex lg:col-span-3 flex-col gap-3 text-right">
              <div className="p-4 rounded-2xl bg-[#101D2A]/80 border border-[#B58A3C]/30 shadow-lg backdrop-blur-md interactive-card">
                <div className="flex items-center justify-end gap-2 text-[#D4AF37] font-mono text-[10px] uppercase font-bold mb-1">
                  <span>Menuju 1 Abad</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
                <div className="font-mileast font-bold text-base text-white">100 Tahun Gontor</div>
                <div className="text-[11px] font-mono text-[#EDE8E2]/60 mt-1">1926 — 2026 Masehi</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#101D2A]/80 border border-[#B58A3C]/30 shadow-lg backdrop-blur-md interactive-card">
                <div className="flex items-center justify-end gap-2 text-[#D4AF37] font-mono text-[10px] uppercase font-bold mb-1">
                  <span>Konsep Panggung</span>
                  <span className="text-xs">🎭</span>
                </div>
                <div className="font-mileast font-bold text-base text-white">4 Babak Seni Akbar</div>
                <div className="text-[11px] font-mono text-[#EDE8E2]/60 mt-1">1 Malam Spektakuler</div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 7. Horological & Scope Bento Grid (4 Clean Metric Cards) */}
        <FadeIn delay={0.42} className="mt-12 w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto w-full">
            {/* Card 1: Horological Countdown */}
            <div className="glass-panel-dark p-4 sm:p-5 rounded-2xl border border-[#B58A3C]/35 text-left flex flex-col justify-between shadow-xl interactive-card shine-card-hover group">
              <div className="flex items-center justify-between text-xs text-[#B58A3C] font-semibold mb-2">
                <span className="uppercase tracking-wider text-[10px] font-bold">Waktu Menuju Pentas</span>
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              </div>
              <div className="font-mileast font-bold text-2xl sm:text-3xl text-white">
                {timeLeft.days} <span className="text-xs font-mono font-normal text-[#F3E1B8]">Hari Lagi</span>
              </div>
              <div className="text-[11px] text-[#EDE8E2]/70 font-mono mt-2 pt-2 border-t border-white/10 flex items-center justify-between">
                <span>{String(timeLeft.hours).padStart(2, '0')}j : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}d</span>
                <span className="text-[#D4AF37] font-bold">LIVE</span>
              </div>
            </div>

            {/* Card 2: 648 Santri Mandiri */}
            <div className="glass-panel-dark p-4 sm:p-5 rounded-2xl border border-[#B58A3C]/35 text-left flex flex-col justify-between shadow-xl interactive-card shine-card-hover group">
              <div className="flex items-center justify-between text-xs text-[#B58A3C] font-semibold mb-2">
                <span className="uppercase tracking-wider text-[10px] font-bold">Koordinator Utama</span>
                <span className="text-xs group-hover:rotate-45 transition-transform inline-block text-[#D4AF37]">✦</span>
              </div>
              <div className="font-mileast font-bold text-2xl sm:text-3xl text-white">
                648 <span className="text-xs font-mono font-normal text-[#F3E1B8]">Santri</span>
              </div>
              <div className="text-[11px] text-[#EDE8E2]/70 mt-2 pt-2 border-t border-white/10 flex items-center justify-between">
                <span>Siswa Kelas 5 KMI</span>
                <span className="text-[#D4AF37] font-bold">MANDIRI</span>
              </div>
            </div>

            {/* Card 3: 20 Kampus Pondok */}
            <div className="glass-panel-dark p-4 sm:p-5 rounded-2xl border border-[#B58A3C]/35 text-left flex flex-col justify-between shadow-xl interactive-card shine-card-hover group">
              <div className="flex items-center justify-between text-xs text-[#B58A3C] font-semibold mb-2">
                <span className="uppercase tracking-wider text-[10px] font-bold">Jangkauan Cabang</span>
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              </div>
              <div className="font-mileast font-bold text-2xl sm:text-3xl text-white">
                20 <span className="text-xs font-mono font-normal text-[#F3E1B8]">Kampus</span>
              </div>
              <div className="text-[11px] text-[#EDE8E2]/70 mt-2 pt-2 border-t border-white/10 flex items-center justify-between">
                <span>Pondok Se-Nusantara</span>
                <span className="text-[#D4AF37] font-bold">3D MAP</span>
              </div>
            </div>

            {/* Card 4: 1 Panggung Akbar */}
            <div className="glass-panel-dark p-4 sm:p-5 rounded-2xl border border-[#B58A3C]/35 text-left flex flex-col justify-between shadow-xl interactive-card shine-card-hover group">
              <div className="flex items-center justify-between text-xs text-[#B58A3C] font-semibold mb-2">
                <span className="uppercase tracking-wider text-[10px] font-bold">Agenda Tahunan</span>
                <span className="text-xs">👑</span>
              </div>
              <div className="font-mileast font-bold text-2xl sm:text-3xl text-white">
                1 <span className="text-xs font-mono font-normal text-[#F3E1B8]">Masterpiece</span>
              </div>
              <div className="text-[11px] text-[#EDE8E2]/70 mt-2 pt-2 border-t border-white/10 flex items-center justify-between">
                <span>Kamis, 7 Mei 2026</span>
                <span className="text-[#D4AF37] font-bold">19.30 WIB</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 8. Section Fast-Jump Tabs Bar */}
        <div className="w-full max-w-3xl mx-auto mt-10">
          <div className="flex items-center justify-center gap-1.5 flex-wrap p-1.5 rounded-2xl bg-[#0B151F]/70 border border-white/10 backdrop-blur-md">
            {[
              { id: 'hero', label: '01. Konsep' },
              { id: 'ide-pokok', label: '02. Ide Pokok' },
              { id: 'theme', label: '03. Tema & Moto' },
              { id: 'about', label: '04. Filosofi & Logo' },
              { id: 'shows', label: '05. Pagelaran' },
              { id: 'committee', label: '06. Panitia' },
            ].map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => onNavigate(tab.id)}
                className={`px-3 py-1.5 rounded-xl font-mono text-[11px] font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                  idx === 0
                    ? 'bg-[#192E41] text-[#F3E1B8] border border-[#B58A3C]/50 shadow'
                    : 'text-[#EDE8E2]/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
export default HeroSection;
