import React, { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { Calendar, MapPin, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { importImage } from '../utils/assetHelpers';

interface HeroSectionProps {
  onOpenSponsorshipModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const FleuronDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center gap-3 my-3 w-full max-w-xs mx-auto ${className}`}>
    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#B58A3C]/60" />
    <span className="text-[#B58A3C] text-xs font-serif">✦</span>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#B58A3C]/60" />
  </div>
);

export const SectionLabel: React.FC<{ text: string }> = ({ text }) => (
  <span className="font-cormorant-sc text-[11px] tracking-[0.32em] uppercase font-bold text-[#B58A3C]">
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
    className="group relative px-7 py-3 font-cormorant-sc font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-sm rounded"
    style={{
      background: outline ? 'transparent' : 'linear-gradient(135deg, #101D2A 0%, #192E41 60%, #24415C 100%)',
      color: outline ? '#192E41' : '#EDE8E2',
      border: outline ? '1.5px solid rgba(25, 46, 65, 0.4)' : '1.5px solid #B58A3C',
      letterSpacing: '0.18em'
    }}
  >
    {label} <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
  </button>
);

export const HeroCountdown: React.FC = () => {
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
    <div className="flex items-center justify-center gap-2.5 sm:gap-4 mt-8">
      {[
        { label: 'HARI', val: timeLeft.days, roman: 'DIES' },
        { label: 'JAM', val: timeLeft.hours, roman: 'HORA' },
        { label: 'MENIT', val: timeLeft.minutes, roman: 'MINUTA' },
        { label: 'DETIK', val: timeLeft.seconds, roman: 'SECUNDA' },
      ].map(({ label, val, roman }) => (
        <div
          key={label}
          className="has-registration-marks relative flex flex-col items-center px-4 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-[#FAF8F5] border border-[#B58A3C]/40 shadow-md min-w-[76px] sm:min-w-[92px] group hover:border-[#B58A3C] transition-all"
        >
          <span className="reg-mark reg-tl" />
          <span className="reg-mark reg-tr" />
          <span className="reg-mark reg-bl" />
          <span className="reg-mark reg-br" />

          <span className="font-mileast font-bold text-2xl sm:text-3xl text-[#192E41] tracking-tight tabular-nums">
            {String(val).padStart(2, '0')}
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="font-cormorant-sc text-[9px] sm:text-[10px] tracking-[0.25em] font-bold text-[#B58A3C]">
              {label}
            </span>
            <span className="hidden sm:inline text-[8px] font-mono text-[#325956]/60">· {roman}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSponsorshipModal, onNavigate }) => {
  const [activeLogoTab, setActiveLogoTab] = useState<'wave' | 'monogram'>('wave');
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
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-4 sm:px-6 md:px-12 overflow-hidden bg-gradient-to-br from-[#0B151F] via-[#101D2A] to-[#192E41] text-[#EDE8E2] font-jakarta"
    >
      {/* Background Perspective Grid & Animated Orbit Rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] sm:w-[900px] sm:h-[900px]">
          <div className="absolute inset-0 border border-[#B58A3C]/20 rounded-full animate-orbit" />
          <div className="absolute inset-16 border border-[#B58A3C]/15 rounded-full animate-orbit-reverse" />
          <div className="absolute inset-36 border border-[#B58A3C]/10 rounded-full animate-orbit" />
        </div>
      </div>

      {/* Aluro Signature Background Typographical Marquee Watermark */}
      <div className="absolute top-1/4 left-0 right-0 overflow-hidden pointer-events-none opacity-5 select-none z-0">
        <div className="whitespace-nowrap font-instrument italic text-[120px] sm:text-[180px] md:text-[220px] leading-none text-[#F3E1B8] font-bold tracking-tight">
          DRAMA ARENA 5102 · KULLIYATU-L-MU'ALLIMIN AL-ISLAMIYAH · GONTOR 2026
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-44 hero-perspective-grid pointer-events-none opacity-25" />

      {/* Center Hero Column */}
      <div className="relative max-w-5xl mx-auto w-full z-10 text-center space-y-7">
        {/* 1. Announcement Pill Badge */}
        <FadeIn delay={0} y={-10} className="flex justify-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#101D2A]/90 border border-[#B58A3C]/50 text-xs font-semibold tracking-wide text-[#F3E1B8] shadow-lg shadow-black/40 backdrop-blur-md hover:border-[#D4A853] transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#B58A3C] animate-pulse" />
            <span className="font-bold font-dm">DRAMA ARENA 5102 · KMI PMDG 1447 / 2026</span>
          </div>
        </FadeIn>

        {/* 2. Aluro Signature 3-Card Interactive Stack */}
        <FadeIn delay={0.08} className="py-2">
          <div className="aluro-hero-stack cursor-pointer group">
            {/* Card 1: Monogram (Back Left) */}
            <div className="aluro-stack-card aluro-stack-card-1 bg-[#101D2A] border-2 border-[#B58A3C]/40 shadow-2xl p-5 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#D4A853]">
                <span>MARK II</span>
                <span>MONOGRAM</span>
              </div>
              <div className="w-32 h-32 mx-auto flex items-center justify-center p-2">
                <img
                  src={importImage('logo-da-monogram-transparent.png')}
                  alt="Monogram DA"
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>
              <div className="text-left border-t border-[#B58A3C]/20 pt-2 text-[11px] font-dm text-[#EDE8E2]/80">
                Interlocking DA 5102
              </div>
            </div>

            {/* Card 2: Balai Pertemuan Historical Building (Back Right) */}
            <div className="aluro-stack-card aluro-stack-card-2 bg-[#101D2A] border-2 border-[#B58A3C]/40 shadow-2xl p-5 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#D4A853]">
                <span>ARSIP PMDG</span>
                <span>EST. 1926</span>
              </div>
              <div className="w-36 h-28 mx-auto rounded-xl overflow-hidden my-2 border border-[#B58A3C]/30 relative">
                <img
                  src={importImage('building.png')}
                  alt="Balai Pertemuan Gontor"
                  className="w-full h-full object-cover filter contrast-110"
                />
              </div>
              <div className="text-left border-t border-[#B58A3C]/20 pt-2 text-[11px] font-dm text-[#EDE8E2]/80">
                Balai Pertemuan Utama Gontor
              </div>
            </div>

            {/* Card 3: The Great Wave Arabesque Medallion (Center Front) */}
            <div className="aluro-stack-card aluro-stack-card-3 bg-gradient-to-br from-[#192E41] via-[#101D2A] to-[#0B151F] border-2 border-[#B58A3C] shadow-[0_25px_60px_rgba(0,0,0,0.6)] p-6 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#D4A853]">
                <span className="font-bold">LAMBANG UTAMA</span>
                <span className="px-2 py-0.5 rounded-full bg-[#325956] text-[#F3E1B8]">5102</span>
              </div>
              <div className="w-36 h-36 mx-auto flex items-center justify-center p-3">
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
          <div className="text-[11px] font-mono text-[#EDE8E2]/50 mt-4 tracking-wider">
            ✦ ARAHKAN KURSOR KE KARTU UNTUK MEMBUKA EFEK 3D STACK ALURO ✦
          </div>
        </FadeIn>

        {/* 3. Grand Display Headline */}
        <FadeIn delay={0.15} y={0}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight font-dm drop-shadow-md">
            <span className="block font-instrument italic tracking-wide text-5xl sm:text-7xl md:text-8xl">Drama Arena 5102</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F3E1B8] via-[#D4A853] to-[#B58A3C] drop-shadow-sm mt-1 sm:mt-2 text-2xl sm:text-4xl md:text-5xl font-mileast">
              Sadar dalam Perjuangan, Utuh dalam Kebersamaan
            </span>
          </h1>
        </FadeIn>

        {/* 4. Official Theme Blockquote */}
        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-sm sm:text-lg font-medium text-[#F3E1B8] italic px-6 py-4 border-y border-[#B58A3C]/35 bg-[#101D2A]/85 rounded-2xl backdrop-blur-md shadow-2xl font-instrument">
              “Sadar, Ke Pondok apa yang kau cari? Sadar akan nilai-nilai perjuangan, Sadar dan utuh dalam kebersamaan.”
            </blockquote>
          </div>
        </FadeIn>

        {/* 5. Subheadline */}
        <FadeIn delay={0.25}>
          <p className="text-sm sm:text-base text-[#EDE8E2]/85 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-sm font-dm">
            Mahakarya seni akbar tahunan termegah santri kelas 5 Kulliyatu-l-Mu'allimin Al-Islamiyah (KMI) di Pondok Modern Darussalam Gontor, memadukan kematangan spiritual, kedisiplinan kepemimpinan, dan estetika seni Islam sejati.
          </p>
        </FadeIn>

        {/* 5. Dual CTA Action Buttons */}
        <FadeIn delay={0.25}>
          <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenSponsorshipModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm text-[#192E41] bg-gradient-to-r from-[#F3E1B8] via-[#D4A853] to-[#B58A3C] hover:from-[#D4A853] hover:to-[#B58A3C] shadow-xl shadow-black/40 hover:-translate-y-0.5 transition-all duration-300 shimmer-sweep cursor-pointer font-jakarta"
            >
              <span>Ajukan Proposal Kemitraan</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button
              onClick={() => onNavigate('ide-pokok')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-[#EDE8E2] bg-[#101D2A]/80 hover:bg-[#192E41] border border-[#B58A3C]/40 hover:border-[#B58A3C] hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-md cursor-pointer font-jakarta"
            >
              <Calendar className="w-4 h-4 text-[#B58A3C]" />
              <span>Jelajahi Ide Pokok</span>
            </button>
          </div>
        </FadeIn>

        {/* 6. Four Metric Stat Cards (OGSOreg 4-card grid) */}
        <FadeIn delay={0.3} className="pt-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {/* Card 1: Horological Countdown */}
            <div className="glass-panel-dark p-4 rounded-2xl border border-[#B58A3C]/35 text-left flex flex-col justify-between shadow-lg hover:border-[#B58A3C] transition-all">
              <div className="flex items-center justify-between text-xs text-[#B58A3C] font-semibold mb-2">
                <span className="uppercase tracking-wider text-[10px] font-bold">Waktu Menuju Pentas</span>
                <Calendar className="w-3.5 h-3.5" />
              </div>
              <div className="font-mileast font-bold text-2xl sm:text-3xl text-white">
                {timeLeft.days} <span className="text-xs font-mono font-normal text-[#F3E1B8]">Hari Lagi</span>
              </div>
              <div className="text-[11px] text-[#EDE8E2]/70 font-mono mt-1">
                {String(timeLeft.hours).padStart(2, '0')}j : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}d
              </div>
            </div>

            {/* Card 2: 648 Santri Mandiri */}
            <div className="glass-panel-dark p-4 rounded-2xl border border-[#B58A3C]/35 text-left flex flex-col justify-between shadow-lg hover:border-[#B58A3C] transition-all">
              <div className="flex items-center justify-between text-xs text-[#B58A3C] font-semibold mb-2">
                <span className="uppercase tracking-wider text-[10px] font-bold">Koordinator Utama</span>
                <span className="text-xs">✦</span>
              </div>
              <div className="font-mileast font-bold text-2xl sm:text-3xl text-white">
                648 <span className="text-xs font-mono font-normal text-[#F3E1B8]">Santri</span>
              </div>
              <div className="text-[11px] text-[#EDE8E2]/70 mt-1">
                Siswa Mandiri Kelas 5 KMI
              </div>
            </div>

            {/* Card 3: 20 Kampus Pondok */}
            <div className="glass-panel-dark p-4 rounded-2xl border border-[#B58A3C]/35 text-left flex flex-col justify-between shadow-lg hover:border-[#B58A3C] transition-all">
              <div className="flex items-center justify-between text-xs text-[#B58A3C] font-semibold mb-2">
                <span className="uppercase tracking-wider text-[10px] font-bold">Jangkauan Cabang</span>
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <div className="font-mileast font-bold text-2xl sm:text-3xl text-white">
                20 <span className="text-xs font-mono font-normal text-[#F3E1B8]">Kampus</span>
              </div>
              <div className="text-[11px] text-[#EDE8E2]/70 mt-1">
                Pondok Gontor Se-Nusantara
              </div>
            </div>

            {/* Card 4: 1 Panggung Akbar */}
            <div className="glass-panel-dark p-4 rounded-2xl border border-[#B58A3C]/35 text-left flex flex-col justify-between shadow-lg hover:border-[#B58A3C] transition-all">
              <div className="flex items-center justify-between text-xs text-[#B58A3C] font-semibold mb-2">
                <span className="uppercase tracking-wider text-[10px] font-bold">Agenda Tahunan</span>
                <span className="text-xs">👑</span>
              </div>
              <div className="font-mileast font-bold text-2xl sm:text-3xl text-white">
                1 <span className="text-xs font-mono font-normal text-[#F3E1B8]">Masterpiece</span>
              </div>
              <div className="text-[11px] text-[#EDE8E2]/70 mt-1">
                Kamis, 7 Mei 2026 / 19.30 WIB
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Archival Folder Navigation Tabs Bar (Direct transition to subsequent sections) */}
      <div className="w-full max-w-4xl mx-auto mt-14 z-10">
        <div className="folder-tabs-bar justify-center">
          {[
            { id: 'hero', label: '01. Konsep Utama' },
            { id: 'ide-pokok', label: '02. Ide Pokok' },
            { id: 'theme', label: '03. Tema & Moto' },
            { id: 'about', label: '04. Filosofi & Logo' },
            { id: 'shows', label: '05. Pagelaran' },
            { id: 'committee', label: '06. Panitia' },
          ].map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`folder-tab ${idx === 0 ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
