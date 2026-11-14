import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { IdePokokSection } from './components/IdePokokSection';
import { ThemeSection } from './components/ThemeSection';
import { AboutSection } from './components/AboutSection';
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
  // Show animated loading screen with spinning logo on load
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [isSponsorshipModalOpen, setIsSponsorshipModalOpen] = useState<boolean>(false);
  const [activeShow, setActiveShow] = useState<ShowCategoryData | null>(null);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

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
    const sectionIds = ['hero', 'ide-pokok', 'theme', 'about', 'map-3d', 'shows', 'committee', 'media-showcase'];
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setShowBackToTop(window.scrollY > 640);
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
    handleScroll();
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
    <div className="main-wrapper min-h-screen bg-[#EDE8E2] text-[#192E41] font-dm relative">
      {/* Aluro Signature Architectural Grid Guidelines */}
      <div className="aluro-bg-grid" aria-hidden="true">
        <div className="aluro-grid-line" />
        <div className="aluro-grid-line hidden sm:block" />
        <div className="aluro-grid-line hidden md:block" />
        <div className="aluro-grid-line hidden lg:block" />
        <div className="aluro-grid-line" />
      </div>

      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <a className="da-skip-link" href="#main-content">Lewati ke konten utama</a>

      {/* 1. Global Navigation Header */}
      <Header
        currentView={activeSection}
        onOpenSponsorshipModal={() => setIsSponsorshipModalOpen(true)}
        onNavigate={handleNavigate}
      />

      <div className="da-reading-progress" role="progressbar" aria-label="Progress membaca halaman" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(scrollProgress)}>
        <span style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      </div>

      {/* 2. Main Single-Page Scroll Content */}
      <main id="main-content" tabIndex={-1}>
        {/* 01. Hero Section & Main Concept */}
        <HeroSection
          onOpenSponsorshipModal={() => setIsSponsorshipModalOpen(true)}
          onNavigate={handleNavigate}
        />

        {/* Marquee Photo Banner Section */}
        <MarqueeSection />

        {/* 02. Ide Pokok & Mahfudzot Section */}
        <IdePokokSection />

        {/* 03. Tema & 04. Tiga Moto Acara Section */}
        <ThemeSection />

        {/* 04. Filosofi Logo & Palet Warna & Tipografi */}
        <AboutSection />

        {/* 3D Map of Indonesia Section */}
        <IndonesiaMap3D />

        {/* 05. Shows & Stage Concept Section */}
        <ShowsSection
          onOpenTrailer={(show: ShowCategoryData) => setActiveShow(show)}
        />

        {/* 06. Committee & Budget Section */}
        <CommitteeSection onNavigate={handleNavigate} />

        {/* 07. Media Showcase Section */}
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

      {showBackToTop && (
        <button className="da-back-to-top" type="button" onClick={() => handleNavigate('hero')} aria-label="Kembali ke bagian atas">
          <span aria-hidden="true">↑</span>
          <small>TOP</small>
        </button>
      )}

      {/* Floating OST Music Player Widget */}
      <AudioPlayer />
    </div>
  );
}

export default App;
