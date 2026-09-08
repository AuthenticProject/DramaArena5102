import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { Calendar, MapPin, Menu, X } from 'lucide-react';

interface HeroSectionProps {
  onOpenSponsorshipModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const StampLogo: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" className="float-anim">
    <rect x="10" y="10" width="180" height="180" rx="4" fill="none" stroke="#062B4A" strokeWidth="3"/>
    <rect x="20" y="20" width="160" height="160" rx="2" fill="none" stroke="#D69103" strokeWidth="1.5" strokeDasharray="4,3"/>
    <g transform="translate(100,100)">
      <path d="M-28,-38 L28,-38 L8,-4 L28,4 L-28,4 Z" fill="#D69103" opacity="0.15"/>
      <path d="M-28,38 L28,38 L8,4 L-28,4 Z" fill="#062B4A" opacity="0.12"/>
      <path d="M-28,-38 L28,-38 L8,-4 L28,4 L-28,4 Z" fill="none" stroke="#D69103" strokeWidth="2.5"/>
      <path d="M28,-38 L8,-4 L28,4 L-28,4 L8,38 L-28,38" fill="none" stroke="#062B4A" strokeWidth="2.5"/>
      <line x1="-28" y1="-38" x2="28" y2="-38" stroke="#062B4A" strokeWidth="3"/>
      <line x1="-28" y1="38" x2="28" y2="38" stroke="#062B4A" strokeWidth="3"/>
    </g>
    <text x="100" y="48" textAnchor="middle" fontFamily="'Mileast', serif" fontSize="9" fontWeight="700" fill="#062B4A" letterSpacing="3">DRAMA</text>
    <text x="100" y="165" textAnchor="middle" fontFamily="'Mileast', serif" fontSize="9" fontWeight="700" fill="#D69103" letterSpacing="3">ARENA</text>
    <text x="100" y="178" textAnchor="middle" fontFamily="'Cormorant SC', serif" fontSize="7" fill="#062B4A" letterSpacing="2">5102</text>
    <text x="22" y="32" fontFamily="serif" fontSize="10" fill="#D69103" opacity="0.6">✦</text>
    <text x="172" y="32" fontFamily="serif" fontSize="10" fill="#D69103" opacity="0.6" textAnchor="end">✦</text>
    <text x="22" y="178" fontFamily="serif" fontSize="10" fill="#D69103" opacity="0.6">✦</text>
    <text x="172" y="178" fontFamily="serif" fontSize="10" fill="#D69103" opacity="0.6" textAnchor="end">✦</text>
  </svg>
);

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
  const [timeLeft, setTimeLeft] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  React.useEffect(() => {
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Header Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4"
        style={{ background: 'rgba(244,241,235,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(214,145,3,0.3)' }}
      >
        <div className="font-mileast italic text-base font-bold cursor-pointer" onClick={() => handleNav('root')}>
          <span className="gold-text font-playfair text-lg">Drama Arena</span>
          <span className="ml-1 text-xs font-cormorant-sc" style={{ color: '#D69103' }}>5102</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {[
            ['PROFIL', 'about'],
            ['TEMA', 'theme'],
            ['ACARA', 'shows'],
            ['PANITIA', 'committee']
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className="font-cormorant-sc text-xs tracking-widest uppercase transition-colors hover:text-yellow-700 cursor-pointer"
              style={{ color: '#062B4A' }}
            >
              {label}
            </button>
          ))}
          <GoldButton onClick={onOpenSponsorshipModal} label="SPONSORSHIP" />
        </div>
        <button
          className="md:hidden text-2xl p-1 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ color: '#062B4A' }}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: 'rgba(244,241,235,0.97)' }}
        >
          {[
            ['PROFIL', 'about'],
            ['TEMA', 'theme'],
            ['ACARA', 'shows'],
            ['PANITIA', 'committee']
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className="font-cormorant-sc text-2xl tracking-widest uppercase cursor-pointer"
              style={{ color: '#062B4A' }}
            >
              {label}
            </button>
          ))}
          <GoldButton
            onClick={() => {
              onOpenSponsorshipModal();
              setMobileMenuOpen(false);
            }}
            label="SPONSORSHIP"
          />
        </div>
      )}

      {/* Main Hero Banner */}
      <section id="root" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden section-stamp">
        {/* Background Grid Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, #062B4A 0px, #062B4A 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #062B4A 0px, #062B4A 1px, transparent 1px, transparent 40px)'
          }}
        />

        {/* Decorative Top Label */}
        <FadeIn delay={0} y={-20} className="flex flex-col items-center gap-2 mb-8">
          <SectionLabel text="PAGELARAN SENI AKBAR" />
          <FleuronDivider />
        </FadeIn>

        {/* Central Stamp Logo */}
        <FadeIn delay={0.1} y={0} className="mb-6">
          <StampLogo size={200} />
        </FadeIn>

        {/* Main Title */}
        <FadeIn delay={0.2} y={30} className="text-center">
          <h1
            className="font-mileast italic font-bold leading-none tracking-tight uppercase"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 130px)', color: '#062B4A', lineHeight: 0.9 }}
          >
            Drama<br />
            <span className="gold-text not-italic">Arena</span>
          </h1>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.3} y={20} className="text-center mt-4">
          <div className="font-cormorant-sc tracking-[0.5em] text-sm uppercase mb-3" style={{ color: '#D69103' }}>
            Kelas 5 · 102 · PMDG
          </div>
          <p className="font-mileast italic text-base sm:text-lg max-w-xl mx-auto" style={{ color: '#062B4A', opacity: 0.8 }}>
            "Forever Striving for an Authentic Masterpiece"
          </p>
        </FadeIn>

        <FadeIn delay={0.4} y={20} className="mt-8">
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

        <FadeIn delay={0.5} y={20} className="mt-8 flex gap-4 flex-wrap justify-center">
          <GoldButton onClick={onOpenSponsorshipModal} label="PROPOSAL SPONSORSHIP" />
          <GoldButton onClick={() => handleNav('about')} label="SELENGKAPNYA" outline />
        </FadeIn>
      </section>
    </>
  );
};
