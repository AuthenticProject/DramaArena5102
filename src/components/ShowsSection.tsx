import React, { useMemo, useState } from 'react';
import { FadeIn } from './FadeIn';
import { SectionLabel, FleuronDivider } from './HeroSection';
import type { ShowCategoryData } from '../types';
import { TypographyDecor } from './TypographyDecor';
import { importImage } from '../utils/assetHelpers';

export type { ShowCategoryData };

const showsData: ShowCategoryData[] = [
  {
    id: 'show-musik', number: '01', category: 'SENI MUSIK',
    title: 'Harmoni Musikal 5102',
    items: ['Hadrah', 'Nasyid', 'Paduan Suara', 'Gema Shalawat', 'Akustik', 'Band 5102'],
    img: 'photo 2.png',
    desc: 'Rangkaian pertunjukan musikal yang merangkum harmoni, vokal, dan ragam ekspresi seni suara.'
  },
  {
    id: 'show-teater', number: '02', category: 'SENI TEATER',
    title: 'Pementasan Drama Utama',
    items: ['Drama 5102', 'Pantomim', 'Teatrikal Puisi'],
    img: 'photo 1.png',
    desc: 'Panggung penceritaan melalui akting, gerak, dan kekuatan dramatik sebuah pertunjukan.'
  },
  {
    id: 'show-tari', number: '03', category: 'SENI TARI',
    title: 'Koreografi Nusantara & Modern',
    items: ['Tari Saman Atjeh', 'Tari Campur Sari', 'Tari Singa Depok', 'Tari Timur', 'Tari Dayak', 'Tari Zapin', 'Tari India', 'Tari Modern'],
    img: 'building.png',
    desc: 'Perjumpaan gerak dan tradisi dari berbagai wilayah, disajikan melalui koreografi Nusantara dan modern.'
  },
  {
    id: 'show-rupa', number: '04', category: 'SENI RUPA & MULTIMEDIA',
    title: 'Visual Art & Multimedia',
    items: ['Grand Opening', 'Iklan Pendidikan', 'Video Motivasi', 'Trailer DA 5102', 'Grand Closing'],
    img: 'vintage-typewriter-da5102.png',
    desc: 'Elemen visual dan multimedia yang membangun suasana, memperkuat narasi, serta menghubungkan setiap babak acara.'
  }
];

type ShowFilter = 'SEMUA' | 'SENI MUSIK' | 'SENI TEATER' | 'SENI TARI' | 'MULTIMEDIA';

interface ShowsSectionProps {
  onOpenTrailer: (show: ShowCategoryData) => void;
}

export const ShowsSection: React.FC<ShowsSectionProps> = ({ onOpenTrailer }) => {
  const [activeFilter, setActiveFilter] = useState<ShowFilter>('SEMUA');
  const filters: ShowFilter[] = ['SEMUA', 'SENI MUSIK', 'SENI TEATER', 'SENI TARI', 'MULTIMEDIA'];
  const visibleShows = useMemo(() => showsData.filter((show) => {
    if (activeFilter === 'SEMUA') return true;
    return show.category.includes(activeFilter === 'MULTIMEDIA' ? 'MULTIMEDIA' : activeFilter);
  }), [activeFilter]);

  return (
    <section id="shows" className="da-shows-section relative overflow-hidden py-24 px-4 sm:px-6 md:px-12">
      <div className="da-shows-grain" aria-hidden="true" />
      <TypographyDecor sectionId="shows" variant="4" mode="corner-ornament" position="top-left" opacity={0.05} />
      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn delay={0} className="text-center mb-12">
          <SectionLabel text="05. RAGAM PERTUNJUKAN SENI" />
          <h2 className="font-mileast italic font-bold mt-3 leading-none uppercase text-[#EDE8E2]" style={{ fontSize: 'clamp(2.4rem, 6vw, 76px)' }}>
            Acara Utama 5102
          </h2>
          <FleuronDivider />
          <p className="font-cormorant-sc text-xs sm:text-sm tracking-[.2em] text-[#D4A853] uppercase max-w-xl mx-auto mt-3 font-semibold">
            Mahakarya Panggung Spektakuler Santri Kelas 5 KMI
          </p>
          <p className="font-alverata text-sm text-[#EDE8E2]/65 max-w-2xl mx-auto mt-5 leading-relaxed">
            Empat babak ekspresi seni dalam satu perhelatan. Pilih kategori untuk menelusuri sajian pertunjukan dan membuka catatan setiap pentas. Visual menggunakan aset arsip resmi Drama Arena 5102.
          </p>
        </FadeIn>

        <div className="da-show-index">
          <div className="da-show-index-label">
            <span>INDEKS PERTUNJUKAN</span>
            <span>{String(visibleShows.length).padStart(2, '0')} / 04 KATEGORI</span>
          </div>
          <div className="da-show-filters" role="group" aria-label="Filter kategori pertunjukan" aria-controls="da-show-results">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={activeFilter === filter ? 'is-active' : ''}
              >
                {filter === 'MULTIMEDIA' ? 'SENI RUPA & MULTIMEDIA' : filter}
              </button>
            ))}
          </div>
        </div>

        <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">{visibleShows.length === 4 ? "Menampilkan semua empat kategori pertunjukan." : `Menampilkan ${visibleShows.length} kategori pertunjukan.`}</p>
        <div id="da-show-results" className="da-show-grid" aria-label={`Hasil kategori pertunjukan: ${visibleShows.length} kategori`}>
          {visibleShows.map((show, i) => (
            <FadeIn key={show.id} delay={i * 0.08}>
              <button
                type="button"
                className="da-show-card group"
                onClick={() => onOpenTrailer(show)}
                aria-label={`Buka detail ${show.title}`}
              >
                <span className="da-show-image">
                  <img src={importImage(show.img)} alt="" loading="lazy" decoding="async" fetchPriority="low" />
                  <span className="da-show-image-shade" />
                  <span className="da-show-number">{show.number}</span>
                  <span className="da-show-open"><span>+</span><small>BUKA CATATAN PENTAS</small></span>
                  <span className="da-show-image-caption">
                    <small>{show.category}</small>
                    <strong>{show.title}</strong>
                  </span>
                </span>
                <span className="da-show-card-body">
                  <span className="da-show-card-desc">{show.desc}</span>
                  <span className="da-show-tags">
                    {show.items.slice(0, 4).map((item) => <span key={item}>{item}</span>)}
                    {show.items.length > 4 && <span className="da-show-more">+{show.items.length - 4} lainnya</span>}
                  </span>
                  <span className="da-show-card-foot">
                    <span>ARSIP PERTUNJUKAN · DA 5102</span>
                    <span className="da-show-arrow">↗</span>
                  </span>
                </span>
              </button>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-16">
          <div className="da-stage-archive">
            <div className="da-stage-copy">
              <span className="da-kicker"><span className="da-kicker-dot" /> CATATAN PRODUKSI</span>
              <h3>Arsitektur Latar Klasik Nusantara</h3>
              <p>
                Latar panggung klasik berpadu seni ornamen Islam dan Nusantara — mencerminkan akar kebudayaan luhur bangsa serta peranan Gontor sebagai perekat persatuan umat.
              </p>
            </div>
            <div className="da-stage-image" style={{ backgroundImage: `url("${importImage('building.png')}")` }} aria-hidden="true" />
            <dl className="da-stage-specs">
              {[
                ['12 × 26.84 m', 'Panggung Utama'],
                ['48 Beam', 'Tata Cahaya Beam'],
                ['37 Par LED', 'Par LED Lights'],
                ['2 Follow Spot', 'Follow Spotlight'],
                ['LED 3×6 m', 'Layar LED'],
                ['1.5×7.32×24.4 m', 'Elevated Stage'],
                ['Special Effects', 'Efek Khusus'],
                ['Pyro & Confetti', 'Grand Opening']
              ].map(([value, label]) => (
                <div className="da-stage-spec" key={label}>
                  <dt><strong>{value}</strong></dt>
                  <dd>{label}</dd>
                </div>
              ))}
            </dl>
            <span className="da-stage-index">DA / 5102 — STAGE NOTES</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ShowsSection;
