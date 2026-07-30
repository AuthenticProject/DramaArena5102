import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ThemeSection } from './components/ThemeSection';
import { IndonesiaMap3D } from './components/IndonesiaMap3D';
import { ShowsSection, ShowCategoryData } from './components/ShowsSection';
import { CommitteeSection } from './components/CommitteeSection';
import { TicketModal } from './components/TicketModal';
import { TrailerModal } from './components/TrailerModal';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';

export function App() {
  const [isSponsorshipModalOpen, setIsSponsorshipModalOpen] = useState<boolean>(false);
  const [activeShow, setActiveShow] = useState<ShowCategoryData | null>(null);

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'root') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="main-wrapper min-h-screen bg-[#F4F1EB] text-[#062B4A] font-alverata select-none">
      {/* 1. Hero Section & Header Nav */}
      <HeroSection
        onOpenSponsorshipModal={() => setIsSponsorshipModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* 2. Marquee Photo Banner Section */}
      <MarqueeSection />

      {/* 3. About Section (Profil Singkat PMDG, Maksud & Tujuan, Brand Identity) */}
      <AboutSection />

      {/* 4. Theme Section (Tema & Filosofi, 5 Kesadaran Santri, Arabic Quote) */}
      <ThemeSection />

      {/* 5. 3D Map of Indonesia Section (Peta 3D Nusantara PMDG & Sebaran Santri) */}
      <IndonesiaMap3D />

      {/* 6. Shows Section (Ragam Acara & Konsep Panggung) */}
      <ShowsSection
        onOpenTrailer={(show: ShowCategoryData) => setActiveShow(show)}
      />

      {/* 7. Committee Section (Susunan Panitia & Anggaran Kepanitiaan) */}
      <CommitteeSection />

      {/* 8. Footer & Kemitraan CTA */}
      <Footer
        onOpenSponsorshipModal={() => setIsSponsorshipModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Sponsorship Proposal Modal */}
      <TicketModal
        isOpen={isSponsorshipModalOpen}
        onClose={() => setIsSponsorshipModalOpen(false)}
      />

      {/* Show Details Modal */}
      <TrailerModal
        show={activeShow}
        onClose={() => setActiveShow(null)}
      />

      {/* Floating OST Music Player Widget */}
      <AudioPlayer />
    </div>
  );
}

export default App;
