import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { WatchTrailerButton } from './WatchTrailerButton';
import { FadeIn } from './FadeIn';
import { Music, Drama, Sparkles, Layers, Sliders, Zap } from 'lucide-react';

export interface ShowCategoryData {
  id: string;
  number: string;
  category: string;
  title: string;
  items: string[];
  description: string;
  trailerUrl: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
}

const showsData: ShowCategoryData[] = [
  {
    id: "show-musik",
    number: "01",
    category: "SENI MUSIK",
    title: "Harmoni Musikal 5102",
    items: ["Hadrah", "Nasyid", "Paduan Suara", "Gema Shalawat", "Akustik", "Band 5102"],
    description: "Perpaduan irama tradisional, keagamaan, dan aransemen musik modern yang membakar semangat kebersamaan.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    col1Img1: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
    col1Img2: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1000&auto=format&fit=crop",
    col2Img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "show-teater",
    number: "02",
    category: "SENI TEATER",
    title: "Pementasan Drama Utama",
    items: ["Drama 5102", "Pantomim", "Teatrikal Puisi"],
    description: "Pengadegan intensis yang menyampaikan pesan moral mendalam, humor bernas, serta drama kolosal bernuansa islami.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    col1Img1: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1000&auto=format&fit=crop",
    col1Img2: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=1000&auto=format&fit=crop",
    col2Img: "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "show-tari",
    number: "03",
    category: "SENI TARI",
    title: "Koreografi Nusantara & Modern",
    items: ["Tari Saman Atjeh", "Tari Campur Sari", "Tari Singa Depok", "Tari Timur", "Tari Dayak", "Tari Zapin", "Tari India", "Tari Modern"],
    description: "Ragam gerak kekayaan budaya Nusantara dan mancanegara yang dikoreografikan dengan dinamis, enerjik, dan profesional.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    col1Img1: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1000&auto=format&fit=crop",
    col1Img2: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop",
    col2Img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "show-rupa",
    number: "04",
    category: "SENI RUPA & VISUAL",
    title: "Multimedia & Visual Art",
    items: ["Grand Opening", "Iklan Pendidikan", "Video Motivasi", "Trailer DA 5102", "Grand Closing"],
    description: "Sajian visual resolusi tinggi, tata artistik layar, video sinematik, serta persembahan pembuka dan penutup yang spektakuler.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    col1Img1: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
    col1Img2: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop",
    col2Img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop"
  }
];

interface ShowsSectionProps {
  onOpenTrailer: (show: ShowCategoryData) => void;
}

export const ShowsSection: React.FC<ShowsSectionProps> = ({ onOpenTrailer }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section 
      id="shows" 
      ref={containerRef}
      className="w-full bg-[#08090C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-4 sm:px-6 md:px-10 pt-20 pb-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <FadeIn delay={0} y={30} className="mb-16 sm:mb-20 text-center">
          <span className="text-[#F72585] text-xs font-bold uppercase tracking-widest block mb-2">
            ✦ RAGAM ACARA & PERTUNJUKAN EKSKLUSIF
          </span>
          <h2 
            className="hero-heading font-black uppercase tracking-tight leading-none text-center"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 120px)' }}
          >
            RAGAM PERTUNJUKAN
          </h2>
          <p className="text-sm sm:text-base text-[#D7E2EA]/70 max-w-2xl mx-auto mt-4">
            Apresiasi seni budaya spektakuler didukung latar panggung megah dan tatanan panggung yang memanjakan mata.
          </p>
        </FadeIn>

        {/* Sticky Stacking Cards for Categories */}
        <div className="w-full flex flex-col gap-10">
          {showsData.map((show, index) => {
            const targetScale = 1 - (showsData.length - 1 - index) * 0.03;
            const topOffset = index * 28;

            return (
              <Card
                key={show.id}
                show={show}
                index={index}
                totalCards={showsData.length}
                targetScale={targetScale}
                topOffset={topOffset}
                progress={scrollYProgress}
                onOpenTrailer={() => onOpenTrailer(show)}
              />
            );
          })}
        </div>

        {/* Konsep & Spesifikasi Panggung Box (PDF Page 30) */}
        <FadeIn delay={0.2} y={40} className="w-full mt-24">
          <div className="w-full rounded-[36px] bg-[#11141B] border border-[#53627A]/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0077B6]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-[#53627A]/30 gap-4">
              <div>
                <span className="text-xs font-extrabold text-[#F72585] uppercase tracking-widest block mb-1">
                  SPESIFIKASI ARSITEKTUR
                </span>
                <h3 className="text-2xl sm:text-4xl font-black uppercase text-white">
                  KONSEP TATA PANGGUNG
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-4 py-2 rounded-full bg-[#0077B6]/20 border border-[#0077B6]/50 text-[#A3C7E6] text-xs font-bold uppercase">
                  LEBAR: 26,84 M
                </span>
                <span className="px-4 py-2 rounded-full bg-[#7209B7]/20 border border-[#7209B7]/50 text-[#F72585] text-xs font-bold uppercase">
                  TINGGI: 12 M
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Box 1: Ukuran Panggung */}
              <div className="p-6 rounded-2xl bg-[#08090C]/80 border border-[#53627A]/30">
                <div className="flex items-center gap-2 text-[#0077B6] font-bold text-xs uppercase mb-3">
                  <Layers className="w-4 h-4" /> Dimensi Panggung Utama
                </div>
                <ul className="text-xs sm:text-sm text-[#D7E2EA]/90 flex flex-col gap-2 font-medium">
                  <li><strong>Tinggi Latar:</strong> 12 Meter</li>
                  <li><strong>Lebar Latar:</strong> 26,84 Meter</li>
                  <li><strong>Panggung Utama:</strong> 1,5m x 7,32m x 24,4m</li>
                </ul>
              </div>

              {/* Box 2: System Lighting */}
              <div className="p-6 rounded-2xl bg-[#08090C]/80 border border-[#53627A]/30">
                <div className="flex items-center gap-2 text-[#F72585] font-bold text-xs uppercase mb-3">
                  <Zap className="w-4 h-4" /> Lighting & Tata Cahaya
                </div>
                <ul className="text-xs sm:text-sm text-[#D7E2EA]/90 flex flex-col gap-2 font-medium">
                  <li><strong>Lampu Beam:</strong> 48 Buah</li>
                  <li><strong>Lampu Par LED:</strong> 37 Buah</li>
                  <li><strong>Follow Spot:</strong> 2 Buah</li>
                </ul>
              </div>

              {/* Box 3: Visualisasi LED */}
              <div className="p-6 rounded-2xl bg-[#08090C]/80 border border-[#53627A]/30">
                <div className="flex items-center gap-2 text-[#A3C7E6] font-bold text-xs uppercase mb-3">
                  <Sliders className="w-4 h-4" /> Visualisasi Digital
                </div>
                <ul className="text-xs sm:text-sm text-[#D7E2EA]/90 flex flex-col gap-2 font-medium">
                  <li><strong>LED (3x6 Meter):</strong> 3 Set</li>
                  <li><strong>Rigging LED:</strong> 2 Set</li>
                  <li><strong>Video Wall Control:</strong> Multi-layer</li>
                </ul>
              </div>

              {/* Box 4: Special Effects */}
              <div className="p-6 rounded-2xl bg-[#08090C]/80 border border-[#53627A]/30">
                <div className="flex items-center gap-2 text-[#7209B7] font-bold text-xs uppercase mb-3">
                  <Sparkles className="w-4 h-4" /> Spesial Efek Panggung
                </div>
                <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-[#D7E2EA]">
                  {["Smoker", "Barricade", "Dry Ice", "Bubble", "Confetti", "Fire Machine"].map((fx) => (
                    <span key={fx} className="px-2.5 py-1 rounded-lg bg-[#53627A]/20 border border-[#53627A]/40">
                      {fx}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};

interface CardProps {
  show: ShowCategoryData;
  index: number;
  totalCards: number;
  targetScale: number;
  topOffset: number;
  progress: MotionValue<number>;
  onOpenTrailer: () => void;
}

const Card: React.FC<CardProps> = ({
  show,
  index,
  totalCards,
  targetScale,
  topOffset,
  progress,
  onOpenTrailer
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const scale = useTransform(
    progress,
    [index / totalCards, 1],
    [1, targetScale]
  );

  return (
    <div 
      ref={cardRef}
      className="sticky top-24 md:top-32 min-h-[560px] w-full flex items-center justify-center"
      style={{ top: `${96 + topOffset}px` }}
    >
      <motion.div 
        style={{ scale }}
        className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#08090C] p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        
        {/* Top Row: Number, Category, Title, Items Badges */}
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#D7E2EA]/20">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
              <span className="font-black text-3xl sm:text-5xl md:text-6xl text-[#D7E2EA]">
                {show.number}
              </span>
              <span className="px-4 py-1.5 rounded-full border border-[#F72585]/50 bg-[#F72585]/20 text-[#F72585] text-xs sm:text-sm font-semibold uppercase tracking-wider">
                {show.category}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#D7E2EA] uppercase tracking-wide">
                {show.title}
              </h3>
            </div>
            {/* List of Performance Items */}
            <div className="flex flex-wrap gap-2 mt-1">
              {show.items.map((item) => (
                <span key={item} className="px-3 py-1 rounded-full bg-[#11141B] border border-[#53627A]/40 text-xs font-semibold text-[#A3C7E6]">
                  ✦ {item}
                </span>
              ))}
            </div>
          </div>

          <div className="self-start md:self-auto shrink-0">
            <WatchTrailerButton onClick={onOpenTrailer} label="PRINJAU TAMPILAN" />
          </div>
        </div>

        {/* Bottom Row: Visual Grid */}
        <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 mt-6 overflow-hidden rounded-[30px] sm:rounded-[40px]">
          
          <div className="md:col-span-5 flex flex-col gap-4 h-[260px] md:h-full">
            <div className="h-1/2 w-full rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#53627A]/30">
              <img
                src={show.col1Img1}
                alt={`${show.title} visual 1`}
                className="w-full h-full object-cover filter brightness-90 hover:brightness-105 transition-all duration-500 hover:scale-105"
              />
            </div>
            <div className="h-1/2 w-full rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#53627A]/30">
              <img
                src={show.col1Img2}
                alt={`${show.title} visual 2`}
                className="w-full h-full object-cover filter brightness-90 hover:brightness-105 transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="md:col-span-7 h-[260px] md:h-full rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#53627A]/30">
            <img
              src={show.col2Img}
              alt={`${show.title} main visual`}
              className="w-full h-full object-cover filter brightness-95 hover:brightness-110 transition-all duration-500 hover:scale-105"
            />
          </div>

        </div>

      </motion.div>
    </div>
  );
};
