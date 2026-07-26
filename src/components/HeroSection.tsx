import React from 'react';
import { TicketButton } from './TicketButton';
import { Magnet } from './Magnet';
import { FadeIn } from './FadeIn';
import { Calendar, MapPin, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenTicketModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTicketModal, onNavigate }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#08090C] text-[#D7E2EA] select-none pb-8">
      
      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <nav className="w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
          {[
            { label: "PROFIL", id: "about" },
            { label: "ACARA", id: "shows" },
            { label: "PANITIA", id: "committee" },
            { label: "SPONSOR", modal: true },
            { label: "KONTAK", id: "footer" }
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => {
                if (item.modal) {
                  onOpenTicketModal();
                } else if (item.id) {
                  onNavigate(item.id);
                }
              }}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.3rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </FadeIn>

      {/* Tagline & Motto Banner */}
      <div className="w-full flex flex-col items-center justify-center pt-6 px-4 z-10">
        <FadeIn delay={0.1} y={20} className="flex flex-col items-center text-center gap-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7209B7]/20 border border-[#7209B7]/50 text-[#F72585] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> TAGLINE: "NALURI DAN NURANI"
          </div>
          <p className="text-xs sm:text-sm md:text-base font-semibold text-[#A3C7E6] max-w-2xl italic">
            "Sadar akan nilai perjuangan, tumbuhkan semangat kebersamaan"
          </p>
        </FadeIn>
      </div>

      {/* 2. Massive Hero Heading */}
      <div className="w-full overflow-hidden flex flex-col justify-center items-center relative z-0 my-4 sm:my-2">
        <FadeIn delay={0.15} y={40} className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[5.5vw] sm:text-[6.5vw] md:text-[7.2vw] lg:text-[8vw]">
            DRAMA ARENA 5102
          </h1>
        </FadeIn>
        <p className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-widest text-[#D7E2EA]/80 mt-2">
          Pondok Modern Darussalam Gontor
        </p>
      </div>

      {/* 3. Hero Centerpiece */}
      <div className="relative left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[480px] pointer-events-auto flex justify-center items-end my-2">
        <FadeIn delay={0.3} y={30} className="w-full flex justify-center">
          <Magnet
            padding={150}
            strength={3}
            className="w-full cursor-pointer"
          >
            <div className="relative group rounded-[30px] sm:rounded-[40px] overflow-hidden border-2 border-[#53627A]/40 shadow-[0_0_50px_rgba(163,199,230,0.2)] bg-[#08090C]/80 backdrop-blur-md">
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop"
                alt="Pagelaran Seni Drama Arena 5102"
                className="w-full h-[200px] sm:h-[260px] md:h-[320px] lg:h-[360px] object-cover object-center filter brightness-90 contrast-110 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-transparent opacity-80" />
              
              {/* Overlay Text */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F72585] block">
                  KULLIYATU-L-MU'ALLIMIN AL-ISLAMIYAH
                </span>
                <span className="text-xs sm:text-sm font-bold text-white uppercase">
                  Tahun Ajaran 1447-1448 / 2026-2027
                </span>
              </div>
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. Bottom Bar */}
      <div className="w-full flex flex-col sm:flex-row items-center sm:items-end justify-between pt-4 px-6 md:px-10 z-20 gap-4">
        <FadeIn delay={0.35} y={20}>
          <div className="flex flex-col gap-1 text-[#D7E2EA] text-xs sm:text-sm">
            <span className="flex items-center gap-2 font-semibold text-[#A3C7E6]">
              <Calendar className="w-4 h-4 text-[#F72585]" /> Kamis, 20 Dzulqo'dah 1447 / 7 Mei 2026
            </span>
            <span className="flex items-center gap-2 font-medium text-[#D7E2EA]/80">
              <MapPin className="w-4 h-4 text-[#0077B6]" /> PMDG Kampus Pusat (19.30 WIB - Selesai)
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <TicketButton onClick={onOpenTicketModal} label="PROPOSOL SPONSORSHIP" />
        </FadeIn>
      </div>

    </section>
  );
};
