import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ThemeSection } from './components/ThemeSection';
import { IndonesiaMap3D } from './components/IndonesiaMap3D';
import { ShowsSection } from './components/ShowsSection';
import { CommitteeSection } from './components/CommitteeSection';
import { TicketModal } from './components/TicketModal';
import { TrailerModal } from './components/TrailerModal';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';
export function App() {
    const [isSponsorshipModalOpen, setIsSponsorshipModalOpen] = useState(false);
    const [activeShow, setActiveShow] = useState(null);
    const handleNavigate = (sectionId) => {
        if (sectionId === 'root') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (React.createElement("div", { className: "main-wrapper min-h-screen bg-[#F4F1EB] text-[#062B4A] font-alverata select-none" },
        React.createElement(HeroSection, { onOpenSponsorshipModal: () => setIsSponsorshipModalOpen(true), onNavigate: handleNavigate }),
        React.createElement(MarqueeSection, null),
        React.createElement(AboutSection, null),
        React.createElement(ThemeSection, null),
        React.createElement(IndonesiaMap3D, null),
        React.createElement(ShowsSection, { onOpenTrailer: (show) => setActiveShow(show) }),
        React.createElement(CommitteeSection, null),
        React.createElement(Footer, { onOpenSponsorshipModal: () => setIsSponsorshipModalOpen(true), onNavigate: handleNavigate }),
        React.createElement(TicketModal, { isOpen: isSponsorshipModalOpen, onClose: () => setIsSponsorshipModalOpen(false) }),
        React.createElement(TrailerModal, { show: activeShow, onClose: () => setActiveShow(null) }),
        React.createElement(AudioPlayer, null)));
}
export default App;
