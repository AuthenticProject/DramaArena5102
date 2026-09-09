import React, { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { Calendar, MapPin } from 'lucide-react';
import { importImage } from '../utils/assetHelpers';
import { TypographyDecor } from './TypographyDecor';

interface HeroSectionProps {
  onOpenSponsorshipModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const StampLogo: React.FC<{ size?: number; className?: string }> = ({ size = 200, className = '' }) => {
  const logo2Url = importImage('logo 2.png');
  return (
    <div
      className={`relative flex items-center justify-center float-anim group cursor-pointer ${className}`}
      style={{ width: size, height: 'auto' }}
    >
      <img
        src={logo2Url}
        alt="Logo Resmi Drama Arena 5102"
        className="w-full h-auto object-contain filter drop-shadow-[0_10px_24px_rgba(6,43,74,0.2)] transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_18px_36px_rgba(6,43,74,0.32)]"
        style={{ maxHeight: size }}
      />
    </div>
  );
};

export const FleuronDivider: React.FC = () => (
  <div className="flex items-center gap-3 my-2 w-full max-w-xs mx-auto">
    <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #D69103)' }} />
    <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
      <path d="M20 10 C15 4, 5 4, 2 10 C5 16, 15 16, 20 10Z" fill="#D69103" opacity="0.8"/>
      <path d="M20 10 C25 4, 35 4, 38 10 C35 16, 25 16, 20 10Z" fill="#D69103" opacity="0.8"/>
      <circle cx="20" cy="10" r="2.5" fill="#062B4A"/>
    </svg>
    <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, #D69103)' }} />
  </div>
);

export const SectionLabel: React.FC<{ text: string }> = ({ text }) => (
  <span className="font-cormorant-sc text-xs tracking-[0.4em] uppercase" style={{ color: '#D69103' }}>
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
    className="group relative px-8 py-3 font-cormorant-sc font-semibold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
    style={{
      background: outline ? 'transparent' : 'linear-gradient(135deg, #B8860B 0%, #D69103 50%, #E8A820 100%)',
      color: outline ? '#062B4A' : '#F4F1EB',
      border: '2px solid #D69103',
      boxShadow: outline ? 'none' : '0 4px 20px rgba(214,145,3,0.4)',
      letterSpacing: '0.15em'
    }}
  >
    {label} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
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
    <div className="flex items-center justify-center gap-2 sm:gap-4 mt-6">
      {[
        { label: 'HARI', val: timeLeft.days },
        { label: 'JAM', val: timeLeft.hours },
        { label: 'MENIT', val: timeLeft.minutes },
        { label: 'DETIK', val: timeLeft.seconds },
      ].map(({ label, val }) => (
        <div
          key={label}
          className="flex flex-col items-center px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-xl relative"
          style={{
            background: 'linear-gradient(180deg, #FBF9F5 0%, #EDE7DC 100%)',
            border: '1.5px solid #D69103',
            boxShadow: '0 4px 12px rgba(6,43,74,0.08), inset 0 1px 0 rgba(255,255,255,0.8)'
          }}
        >
          <span className="font-mileast font-bold text-xl sm:text-2xl text-[#062B4A]">
            {String(val).padStart(2, '0')}
          </span>
          <span className="font-cormorant-sc text-[9px] sm:text-[10px] tracking-[0.2em] font-semibold text-[#D69103] mt-0.5">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSponsorshipModal, onNavigate }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buildingUrl = importImage('building.png');
  const logo5102Url = importImage('logo 5102.png');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-4 overflow-hidden section-stamp"
    >
      {/* 1. Hero Background with building.png & Subtle Parallax Effect */}
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-75 ease-out scale-105"
          style={{
            backgroundImage: `url("${buildingUrl}")`,
            transform: `translateY(${scrollY * 0.22}px)`,
            filter: 'contrast(108%) brightness(96%)',
          }}
        />
        {/* Harmonious Parchment & Warm Navy Vignette Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 40%, rgba(244, 241, 235, 0.82) 0%, rgba(244, 241, 235, 0.94) 65%, #F4F1EB 100%)',
          }}
        />
      </div>

      {/* 2. Top-Right Decorative Insignia (logo 5102.png) with Subtle Float & Opacity */}
      <div
        className="absolute top-20 sm:top-24 right-4 sm:right-10 pointer-events-none z-0 max-w-[160px] sm:max-w-[240px] opacity-25 hover:opacity-40 transition-opacity"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
        aria-hidden="true"
      >
        <img
          src={logo5102Url}
          alt="Insignia 5102 Decorative"
          className="w-full h-auto object-contain filter drop-shadow-lg"
        />
      </div>

      {/* 3. Subtle Typography Watermark in Center Background */}
      <TypographyDecor
        sectionId="hero"
        variant="main"
        opacity={0.035}
        className="pointer-events-none"
      />

      {/* 4. Decorative Top Label */}
      <FadeIn delay={0} y={-20} className="flex flex-col items-center gap-2 mb-6 z-10">
        <SectionLabel text="PAGELARAN SENI AKBAR" />
        <FleuronDivider />
      </FadeIn>

      {/* 5. Central Official Logo 2.png */}
      <FadeIn delay={0.1} y={0} className="mb-4 sm:mb-6 flex flex-col items-center z-10">
        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-1.5 mb-6 border border-[#D69103] bg-[#F4F1EB]/90 backdrop-blur-sm shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D69103] flex-shrink-0"></span>
          <span className="font-cormorant-sc text-[10px] uppercase tracking-[0.28em] text-[#062B4A] font-bold">
            Pagelaran Seni Akbar Kelas 5 102
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D69103] flex-shrink-0"></span>
        </div>

        {/* Authentic Official Logo 2.png with original smooth floating & interactive motion */}
        <div className="relative group cursor-pointer float-anim">
          <img
            src={importImage('logo 2.png')}
            alt="Logo Resmi Drama Arena 5102"
            className="w-44 sm:w-52 md:w-60 max-w-[240px] h-auto object-contain transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1 filter drop-shadow-[0_14px_30px_rgba(6,43,74,0.22)] group-hover:drop-shadow-[0_22px_45px_rgba(6,43,74,0.38)] active:scale-95"
          />
        </div>
      </FadeIn>

      {/* 6. Main Title */}
      <FadeIn delay={0.2} y={30} className="text-center mt-4 z-10">
        <h1
          className="font-mileast italic font-bold leading-none tracking-tight uppercase"
          style={{ fontSize: 'clamp(3.2rem, 11vw, 125px)', color: '#062B4A', lineHeight: 0.9 }}
        >
          Drama<br />
          <span className="text-gold-foil not-italic">Arena</span>
        </h1>
      </FadeIn>

      {/* 7. Subtitle */}
      <FadeIn delay={0.3} y={20} className="text-center mt-4 z-10">
        <div className="font-cormorant-sc tracking-[0.5em] text-sm uppercase mb-2" style={{ color: '#D69103' }}>
          Kelas 5 · 102 · PMDG
        </div>
        <p className="font-mileast italic text-base sm:text-lg max-w-xl mx-auto" style={{ color: '#062B4A', opacity: 0.85 }}>
          "Forever Striving for an Authentic Masterpiece"
        </p>
      </FadeIn>

      <FadeIn delay={0.4} y={20} className="mt-6 z-10">
        <FleuronDivider />
        <div className="text-center my-3">
          <p className="font-mileast italic text-base sm:text-lg" style={{ color: '#062B4A' }}>
            “Nyalakan Api Kebersamaan, Wujudkan Idealisme Kehidupan”
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4 text-sm font-cormorant-sc" style={{ color: '#062B4A' }}>
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" style={{ color: '#D69103' }} />
            Kamis, 20 Dzulqo'dah 1447 / 7 Mei 2026
          </span>
          <span className="hidden sm:block" style={{ color: '#D69103' }}>·</span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" style={{ color: '#D69103' }} />
            PMDG Kampus Pusat — 19.30 WIB
          </span>
        </div>

        {/* Vintage Brass Countdown Dials */}
        <HeroCountdown />
      </FadeIn>

      <FadeIn delay={0.5} y={20} className="mt-8 flex gap-4 flex-wrap justify-center z-10">
        <GoldButton onClick={onOpenSponsorshipModal} label="PROPOSAL SPONSORSHIP" />
        <GoldButton onClick={() => onNavigate('media-showcase')} label="MEDIA SHOWCASE" outline />
      </FadeIn>
    </section>
  );
};
