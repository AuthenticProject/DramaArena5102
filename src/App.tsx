import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ActsSection } from './components/ActsSection';
import { ShowsSection, ShowCategoryData } from './components/ShowsSection';
import { CommitteeSection } from './components/CommitteeSection';
import { TicketModal } from './components/TicketModal';
import { TrailerModal } from './components/TrailerModal';
import { Footer } from './components/Footer';

export function App() {
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [activeTrailerShow, setActiveTrailerShow] = useState<ShowCategoryData | null>(null);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="main-wrapper min-h-screen bg-[#08090C] text-[#D7E2EA] font-kanit">
      {/* 1. Hero Section */}
      <HeroSection 
        onOpenTicketModal={() => setIsTicketModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section (Profil Singkat PMDG & Maksud Tujuan) */}
      <AboutSection />

      {/* 4. Acts Section (4 Unsur Pertunjukan) */}
      <ActsSection />

      {/* 5. Shows Section (Ragam Acara & Konsep Panggung) */}
      <ShowsSection 
        onOpenTrailer={(show) => setActiveTrailerShow(show as any)}
      />

      {/* 6. Committee Section (Susunan Panitia & Anggaran Kepanitiaan) */}
      <CommitteeSection />

      {/* 7. Footer */}
      <Footer 
        onOpenTicketModal={() => setIsTicketModalOpen(true)}
      />

      {/* Interactive Sponsorship Modal */}
      <TicketModal 
        isOpen={isTicketModalOpen}
        onClose={() => setIsTicketModalOpen(false)}
      />

      {/* Trailer/Preview Modal */}
      <TrailerModal 
        show={activeTrailerShow as any}
        onClose={() => setActiveTrailerShow(null)}
      />
    </div>
  );
}

export default App;
