import React from 'react';
import { FadeIn } from './FadeIn';
import { SectionLabel, FleuronDivider } from './HeroSection';
import type { ShowCategoryData } from '../types';
import { TypographyDecor } from './TypographyDecor';
import { importImage } from '../utils/assetHelpers';

export type { ShowCategoryData };

const showsData: ShowCategoryData[] = [
  {
    id: "show-musik", number: "01", category: "SENI MUSIK",
    title: "Harmoni Musikal 5102",
    items: ["Hadrah", "Nasyid", "Paduan Suara", "Gema Shalawat", "Akustik", "Band 5102"],
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "show-teater", number: "02", category: "SENI TEATER",
    title: "Pementasan Drama Utama",
    items: ["Drama 5102", "Pantomim", "Teatrikal Puisi"],
    img: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "show-tari", number: "03", category: "SENI TARI",
    title: "Koreografi Nusantara & Modern",
    items: ["Tari Saman Atjeh", "Tari Campur Sari", "Tari Singa Depok", "Tari Timur", "Tari Dayak", "Tari Zapin", "Tari India", "Tari Modern"],
    img: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "show-rupa", number: "04", category: "SENI RUPA & MULTIMEDIA",
    title: "Visual Art & Multimedia",
    items: ["Grand Opening", "Iklan Pendidikan", "Video Motivasi", "Trailer DA 5102", "Grand Closing"],
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop"
  }
];

interface ShowsSectionProps {
  onOpenTrailer: (show: ShowCategoryData) => void;
}

export const ShowsSection: React.FC<ShowsSectionProps> = ({ onOpenTrailer }) => {
  return (
    <section id="shows" className="py-24 px-5 sm:px-8 md:px-12 bg-aged relative overflow-hidden">
      {/* Background Typography Pattern */}
      <TypographyDecor
        sectionId="shows"
        variant="4"
        mode="corner-ornament"
        position="top-left"
        opacity={0.06}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn delay={0} className="text-center mb-16">
          <SectionLabel text="RAGAM PERTUNJUKAN" />
          <h2 className="font-mileast italic font-bold mt-3 leading-none uppercase" style={{ fontSize: 'clamp(2rem, 6vw, 72px)', color: '#062B4A' }}>
            Acara Utama
          </h2>
          <FleuronDivider />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {showsData.map((show, i) => (
            <FadeIn key={show.id} delay={i * 0.1}>
              <div
                className="classic-card rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => onOpenTrailer(show)}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={show.img}
                    alt={show.title}
                    className="w-full h-full object-cover filter sepia-[0.2] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(6,43,74,0.8) 0%, transparent 60%)' }} />
                  <div className="absolute top-4 left-4 font-mileast font-bold text-5xl gold-text opacity-40">{show.number}</div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-cormorant-sc text-xs tracking-widest uppercase mb-1" style={{ color: '#D69103' }}>{show.category}</div>
                    <h3 className="font-playfair font-bold text-xl text-white">{show.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {show.items.map(item => (
                      <span
                        key={item}
                        className="font-cormorant-sc text-xs px-3 py-1 rounded-full"
                        style={{ background: 'rgba(214,145,3,0.1)', border: '1px solid rgba(214,145,3,0.3)', color: '#062B4A' }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Divider Banner */}
        <TypographyDecor variant="4" mode="divider-banner" className="my-12" />

        {/* Stage Concept with building.png background integration */}
        <FadeIn delay={0.3} className="mt-4">
          <div className="classic-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            {/* Architectural Building backdrop accent */}
            <div
              className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none bg-cover bg-no-repeat bg-right-bottom"
              style={{
                backgroundImage: `url("${importImage('building.png')}")`,
              }}
              aria-hidden="true"
            />

            <div className="text-center mb-8 relative z-10">
              <SectionLabel text="KONSEP PANGGUNG" />
              <h3 className="font-playfair font-bold text-2xl mt-2" style={{ color: '#062B4A' }}>Arsitektur Latar Klasik Nusantara</h3>
              <p className="font-baskerville text-sm mt-2 max-w-2xl mx-auto leading-relaxed" style={{ color: '#062B4A', opacity: 0.8 }}>
                Latar bangunan klasik Nusantara yang menggabungkan keanekaragaman arsitektur daerah — mencerminkan akar budaya bangsa dan semangat Gontor sebagai "Guru Kebangsaan".
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center relative z-10">
              {[
                ['12 × 26.84 m', 'Panggung Utama'],
                ['48 Beam', 'Tata Cahaya Beam'],
                ['37 Par LED', 'Par LED Lights'],
                ['2 Follow Spot', 'Follow Spotlight'],
                ['LED 3×6 m', 'Layar LED'],
                ['1.5×7.32×24.4 m', 'Elevated Stage'],
                ['Special Effects', 'Efek Khusus'],
                ['Pyro & Confetti', 'Grand Opening']
              ].map(([val, label]) => (
                <div key={label} className="p-4 rounded-xl backdrop-blur-sm" style={{ background: 'rgba(6,43,74,0.05)', border: '1px solid rgba(214,145,3,0.2)' }}>
                  <div className="font-mileast font-bold text-base gold-text">{val}</div>
                  <div className="font-cormorant-sc text-xs mt-1 opacity-70" style={{ color: '#062B4A' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
