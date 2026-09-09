import React, { useState } from 'react';
import { Menu, X, Sparkles, Image as ImageIcon } from 'lucide-react';
import { importImage } from '../utils/assetHelpers';
import { GoldButton } from './HeroSection';

interface HeaderProps {
  onOpenSponsorshipModal: () => void;
  onNavigate: (sectionOrPageId: string) => void;
  currentView?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSponsorshipModal,
  onNavigate,
  currentView = 'home',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoFiles = [
    { file: 'logo.png', alt: 'Logo Utama Drama Arena', hint: 'Logo Utama' },
    { file: 'logo 2.png', alt: 'Logo Varian Monogram', hint: 'Monogram' },
    { file: 'logo 3.png', alt: 'Logo Varian Horizontal', hint: 'Lanskap' },
    { file: 'logo 5102.png', alt: 'Insignia 5102', hint: '5102' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'PROFIL', id: 'about' },
    { label: 'TEMA', id: 'theme' },
    { label: 'ACARA', id: 'shows' },
    { label: 'PANITIA', id: 'committee' },
    { label: 'MEDIA SHOWCASE', id: 'media-showcase', highlight: true },
  ];

  return (
    <>
      {/* Fixed Header Bar */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 transition-all duration-300 shadow-sm"
        style={{
          background: 'rgba(244, 241, 235, 0.94)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(214, 145, 3, 0.35)',
        }}
      >
        {/* Subtle Watermark in Header background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035] bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${importImage('logo.png')}")`,
            backgroundSize: '180px auto',
          }}
          aria-hidden="true"
        />

        {/* Left: Brand Identity & Clickable Logo Strip */}
        <div className="flex items-center gap-3 sm:gap-5 z-10">
          <button
            onClick={() => handleNav('root')}
            className="flex items-center gap-2 text-left group cursor-pointer focus:outline-none"
            title="Kembali ke Beranda"
          >
            <div className="relative flex items-center">
              <img
                src={importImage('logo.png')}
                alt="Logo DA 5102"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <div className="font-mileast italic text-base sm:text-lg font-bold leading-tight flex items-center gap-1">
                <span className="gold-text font-playfair">Drama Arena</span>
                <span className="text-[11px] font-cormorant-sc font-bold px-1.5 py-0.2 rounded border border-[#D69103] text-[#D69103] bg-[#062B4A]/5">
                  5102
                </span>
              </div>
              <span className="font-cormorant-sc text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#062B4A]/70 font-semibold">
                Kelas 5 KMI PMDG
              </span>
            </div>
          </button>

          {/* Additional Quick-Access Logo Variants Strip */}
          <div className="hidden xl:flex items-center gap-2 pl-3 border-l border-[#D69103]/30">
            {logoFiles.slice(1).map((item) => (
              <button
                key={item.file}
                onClick={() => handleNav('root')}
                className="group relative p-1 rounded hover:bg-[#D69103]/10 transition-colors"
                title={`${item.hint} — Klik untuk ke Beranda`}
              >
                <img
                  src={importImage(item.file)}
                  alt={item.alt}
                  className="h-7 w-auto object-contain opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 z-10">
          {navItems.map((item) => {
            const isActive = item.id === currentView;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`font-cormorant-sc text-xs tracking-widest uppercase transition-all duration-200 cursor-pointer relative py-1 ${
                  item.highlight
                    ? isActive
                      ? 'font-bold px-3.5 py-1.5 rounded-full bg-[#D69103] text-[#F4F1EB] shadow-md border border-[#B8860B]'
                      : 'font-bold px-3 py-1.5 rounded-full border border-[#D69103] bg-gradient-to-r from-[#D69103]/15 to-[#B8860B]/10 hover:bg-[#D69103] hover:text-[#062B4A] text-[#062B4A]'
                    : isActive
                    ? 'text-[#D69103] font-bold border-b-2 border-[#D69103]'
                    : 'text-[#062B4A] hover:text-[#D69103]'
                }`}
              >
                {item.highlight && <Sparkles className="w-3 h-3 inline mr-1 text-[#D69103]" />}
                {item.label}
              </button>
            );
          })}
          <GoldButton onClick={onOpenSponsorshipModal} label="SPONSORSHIP" />
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 rounded-lg text-[#062B4A] hover:bg-[#D69103]/10 cursor-pointer z-10 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center p-6 bg-[#F4F1EB]/98 backdrop-blur-xl animate-fadeIn"
          style={{
            backgroundImage: `url("${importImage('logo.png')}")`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '280px auto',
          }}
        >
          {/* Logo variant icons strip on mobile */}
          <div className="flex items-center gap-4 mb-8 p-3 rounded-xl bg-white/70 border border-[#D69103]/40 shadow-sm">
            {logoFiles.map((item) => (
              <button
                key={item.file}
                onClick={() => handleNav('root')}
                className="hover:scale-110 transition-transform p-1"
                title={item.hint}
              >
                <img
                  src={importImage(item.file)}
                  alt={item.alt}
                  className="h-9 w-auto object-contain"
                />
              </button>
            ))}
          </div>

          {/* Links list */}
          <div className="flex flex-col items-center gap-5 w-full max-w-xs">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full py-3 text-center font-cormorant-sc tracking-widest text-lg uppercase cursor-pointer rounded-lg transition-all ${
                  item.highlight
                    ? 'bg-gradient-to-r from-[#D69103] to-[#B8860B] text-[#F4F1EB] font-bold shadow-md'
                    : 'text-[#062B4A] hover:bg-[#D69103]/10 font-semibold'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="w-full pt-4 border-t border-[#D69103]/30">
              <GoldButton
                onClick={() => {
                  onOpenSponsorshipModal();
                  setMobileMenuOpen(false);
                }}
                label="AJUKAN SPONSORSHIP"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
