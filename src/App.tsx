import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ThemeSection } from './components/ThemeSection';
import { IndonesiaMap3D } from './components/IndonesiaMap3D';
import { ShowsSection } from './components/ShowsSection';
import type { ShowCategoryData } from './types';
import { CommitteeSection } from './components/CommitteeSection';
import { TicketModal } from './components/TicketModal';
import { TrailerModal } from './components/TrailerModal';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';
import { MediaShowcase } from './pages/MediaShowcase';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isSponsorshipModalOpen, setIsSponsorshipModalOpen] = useState<boolean>(false);
  const [activeShow, setActiveShow] = useState<ShowCategoryData | null>(null);

  // Sync with window hash on load and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash && hash !== 'root') {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Track active section on scroll for header nav indicator
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'theme', 'map-3d', 'shows', 'committee', 'media-showcase'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (targetId: string) => {
    if (targetId === 'root' || targetId === 'hero') {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero');
      return;
    }

    window.location.hash = targetId;
    setActiveSection(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="main-wrapper min-h-screen bg-[#F4F1EB] text-[#062B4A] font-alverata select-none">
      {/* 1. Global Navigation Header */}
      <Header
        currentView={activeSection}
        onOpenSponsorshipModal={() => setIsSponsorshipModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* 2. Main Single-Page Scroll Content */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onOpenSponsorshipModal={() => setIsSponsorshipModalOpen(true)}
          onNavigate={handleNavigate}
        />

        {/* Marquee Photo Banner Section */}
        <MarqueeSection />

        {/* About Section */}
        <AboutSection />

        {/* Theme Section */}
        <ThemeSection />

        {/* 3D Map of Indonesia Section */}
        <IndonesiaMap3D />

        {/* Shows Section */}
        <ShowsSection
          onOpenTrailer={(show: ShowCategoryData) => setActiveShow(show)}
        />

        {/* Committee Section */}
        <CommitteeSection onNavigate={handleNavigate} />

        {/* Media Showcase Section — Integrated directly on the same page */}
        <MediaShowcase
          onBackToHome={() => handleNavigate('hero')}
          onOpenSponsorshipModal={() => setIsSponsorshipModalOpen(true)}
        />
      </main>

      {/* Footer & Kemitraan CTA */}
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
