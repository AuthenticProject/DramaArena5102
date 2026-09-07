import React from 'react';

export const Header = ({ onNavigate, logoSrc }) => (
  <header className="sticky top-0 z-20 glass-panel px-6 py-4 flex items-center justify-between backdrop-blur-md">
    <img src={logoSrc} alt="Drama Arena Logo" className="h-12 w-auto cursor-pointer" onClick={() => onNavigate('root')} />
    <nav className="space-x-6">
      <button className="text-sm font-medium hover:text-cyan-400" onClick={() => onNavigate('hero')}>Beranda</button>
      <button className="text-sm font-medium hover:text-cyan-400" onClick={() => onNavigate('timeline')}>Timeline</button>
      <button className="text-sm font-medium hover:text-cyan-400" onClick={() => onNavigate('shows')}>Acara</button>
      <button className="text-sm font-medium hover:text-cyan-400" onClick={() => onNavigate('sponsors')}>Sponsor</button>
    </nav>
  </header>
);
