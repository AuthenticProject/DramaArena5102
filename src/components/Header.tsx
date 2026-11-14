import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { importImage } from '../utils/assetHelpers';

interface HeaderProps {
  onOpenSponsorshipModal: () => void;
  onNavigate: (sectionOrPageId: string) => void;
  currentView?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSponsorshipModal,
  onNavigate,
  currentView = 'hero',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Konsep', id: 'hero' },
    { label: 'Ide Pokok', id: 'ide-pokok' },
    { label: 'Tema & Moto', id: 'theme' },
    { label: 'Filosofi & Warna', id: 'about' },
    { label: 'Pagelaran', id: 'shows' },
    { label: 'Panitia', id: 'committee' },
    { label: 'Arsip Media', id: 'media-showcase', highlight: true },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-jakarta"
        style={{
          background: 'rgba(237, 232, 226, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(25, 46, 65, 0.12)',
        }}
      >
        {/* Top Announcement Bar (OGSOreg pattern) */}
        <div className="hidden md:flex items-center justify-between px-6 lg:px-12 py-1 bg-[#101D2A] text-[#EDE8E2] border-b border-[#B58A3C]/20 text-[11px] font-mono tracking-wider">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#B58A3C] animate-pulse" />
            <span className="font-semibold text-[#F3E1B8]">PORTAL RESMI PAGELARAN SENI AKBAR · KMI PMDG</span>
            <span className="text-[#B58A3C]/40">|</span>
            <span className="text-[#EDE8E2]/70">DRAMA ARENA 5102</span>
          </div>
          <div className="flex items-center gap-3 text-[#EDE8E2]/80">
            <span>Kamis, 7 Mei 2026 · 19.30 WIB</span>
            <span className="text-[#B58A3C]">✦</span>
            <span className="font-bold text-[#D4A853]">Kampus Pusat Ponorogo</span>
          </div>
        </div>

        {/* Main Nav Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-3 flex items-center justify-between">
          {/* Brand Mark */}
          <button
            onClick={() => handleNav('hero')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
            title="Drama Arena 5102"
          >
            <div className="w-10 h-10 rounded-xl bg-[#192E41] p-1.5 border border-[#B58A3C]/40 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#B58A3C] shadow-md">
              <img
                src={importImage('logo-da-wave-transparent.png')}
                alt="Logo DA 5102"
                className="w-full h-full object-contain filter drop-shadow-sm"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-mileast font-bold text-xl leading-none tracking-tight text-[#192E41]">
                  Drama Arena
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#192E41] text-[#F3E1B8] border border-[#B58A3C]/50 text-[10px] font-mono font-bold">
                  5102
                </span>
              </div>
              <span className="text-[10px] tracking-wider uppercase text-[#325956] font-semibold mt-0.5 font-jakarta">
                Pondok Modern Darussalam Gontor
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links (OGSOreg pill style) */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#192E41]/5 p-1 rounded-2xl border border-[#192E41]/10">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#192E41] text-[#EDE8E2] shadow-sm font-bold'
                      : 'text-[#192E41]/80 hover:text-[#192E41] hover:bg-black/5'
                  } ${item.highlight && !isActive ? 'text-[#325956] font-bold' : ''}`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSponsorshipModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-jakarta font-bold text-xs tracking-wide text-[#192E41] bg-gradient-to-r from-[#F3E1B8] via-[#D4A853] to-[#B58A3C] hover:from-[#D4A853] hover:to-[#B58A3C] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer shimmer-sweep"
            >
              <span>Proposal Kemitraan</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#192E41] hover:bg-[#192E41]/10 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#192E41]/15 px-6 py-5 bg-[#EDE8E2] flex flex-col gap-2 shadow-xl font-jakarta">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left py-2.5 text-sm font-semibold tracking-wide text-[#192E41] border-b border-[#192E41]/10 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#B58A3C]">→</span>
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSponsorshipModal();
              }}
              className="w-full mt-3 py-3 rounded-xl bg-gradient-to-r from-[#F3E1B8] via-[#D4A853] to-[#B58A3C] text-[#192E41] font-bold text-xs tracking-wider shadow-md"
            >
              Proposal Kemitraan
            </button>
          </div>
        )}
      </header>
    </>
  );
};
export default Header;
