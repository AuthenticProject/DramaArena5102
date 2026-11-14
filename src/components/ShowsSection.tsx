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
    <section id="shows" className="py-24 px-4 sm:px-6 md:px-12 bg-[#EDE8E2] text-[#192E41] relative overflow-hidden">
      {/* Background Typography Pattern */}
      <TypographyDecor
        sectionId="shows"
        variant="4"
        mode="corner-ornament"
        position="top-left"
        opacity={0.05}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn delay={0} className="text-center mb-16">
          <SectionLabel text="05. RAGAM PERTUNJUKAN SENI" />
          <h2 className="font-mileast italic font-bold mt-2 leading-none uppercase text-[#192E41]" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 68px)' }}>
            Acara Utama 5102
          </h2>
          <FleuronDivider />
          <p className="font-cormorant-sc text-xs sm:text-sm tracking-widest text-[#325956] uppercase max-w-xl mx-auto mt-2 font-semibold">
            Mahakarya Panggung Spektakuler Santri Kelas 5 KMI
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {showsData.map((show, i) => {
            const romanActs = ['ACT I', 'ACT II', 'ACT III', 'ACT IV'];
            return (
              <FadeIn key={show.id} delay={i * 0.1}>
                <div
                  className="has-registration-marks bg-[#FAF8F5] rounded-3xl overflow-hidden group cursor-pointer border border-[#B58A3C]/40 shadow-xl hover:shadow-2xl hover:border-[#B58A3C] transition-all duration-500 transform hover:-translate-y-2 interactive-card shine-card-hover"
                  onClick={() => onOpenTrailer(show)}
                >
                  <span className="reg-mark reg-tl" />
                  <span className="reg-mark reg-tr" />
                  <span className="reg-mark reg-bl" />
                  <span className="reg-mark reg-br" />

                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={show.img}
                      alt={show.title}
                      className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101D2A] via-[#101D2A]/60 to-transparent" />
                    
                    {/* Act Badge on top right */}
                    <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-[#101D2A]/90 backdrop-blur-md border border-[#B58A3C]/60 text-[10px] font-mono tracking-widest text-[#D4A853] font-bold shadow-lg flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B58A3C] animate-pulse" />
                      <span>{romanActs[i]}</span>
                    </div>

                    <div className="absolute top-4 left-4 font-mileast font-bold text-5xl text-[#B58A3C]/40 select-none">
                      {show.number}
                    </div>

                    {/* Hover Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-[#B58A3C] text-[#192E41] flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <span className="text-xl ml-1 font-bold">▶</span>
                      </div>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="font-cormorant-sc text-xs tracking-[0.25em] uppercase mb-1 text-[#D4A853] font-bold">
                        {show.category}
                      </div>
                      <h3 className="font-mileast font-bold text-2xl text-[#EDE8E2] tracking-wide">
                        {show.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 bg-[#FAF8F5] border-t border-[#B58A3C]/20">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {show.items.map(item => (
                        <span
                          key={item}
                          className="font-cormorant-sc text-xs px-3 py-1 rounded-full bg-[#192E41]/5 border border-[#B58A3C]/30 text-[#192E41] font-bold group-hover:border-[#B58A3C]/60 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3.5 border-t border-[#192E41]/10 flex items-center justify-between text-xs font-cormorant-sc text-[#325956] font-bold uppercase tracking-wider">
                      <span className="flex items-center gap-2">
                        <span className="flex items-end gap-0.5 h-3">
                          <span className="w-0.5 h-full bg-[#B58A3C] animate-pulse" />
                          <span className="w-0.5 h-2 bg-[#B58A3C] animate-pulse" style={{ animationDelay: '0.2s' }} />
                          <span className="w-0.5 h-3 bg-[#B58A3C] animate-pulse" style={{ animationDelay: '0.4s' }} />
                        </span>
                        <span>Rangkaian Pentas 5102</span>
                      </span>
                      <span className="group-hover:text-[#B58A3C] group-hover:translate-x-1.5 transition-all inline-flex items-center gap-1.5 font-bold">
                        Buka Detail Pentas →
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Divider Banner */}
        <TypographyDecor variant="4" mode="divider-banner" className="my-12" />

        {/* Stage Concept with building.png background integration */}
        <FadeIn delay={0.3} className="mt-4">
          <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 relative overflow-hidden border-2 border-[#B58A3C]/35 shadow-xl">
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
              <h3 className="font-mileast font-bold text-2xl sm:text-3xl mt-2 text-[#192E41]">Arsitektur Latar Klasik Nusantara</h3>
              <p className="font-alverata text-sm mt-2 max-w-2xl mx-auto leading-relaxed text-[#192E41]/85">
                Latar panggung klasik berpadu seni ornamen Islam dan Nusantara — mencerminkan akar kebudayaan luhur bangsa serta peranan Gontor sebagai perekat persatuan umat.
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
                <div key={label} className="p-4 rounded-xl bg-[#192E41]/5 border border-[#B58A3C]/25">
                  <div className="font-mileast font-bold text-base gold-text">{val}</div>
                  <div className="font-cormorant-sc text-xs mt-1 text-[#192E41]/75 font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
export default ShowsSection;
