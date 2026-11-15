import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ChapterNavigatorProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const chapters = [
  { id: 'hero', number: '00', title: 'Pembuka', detail: 'Identitas Drama Arena 5102' },
  { id: 'ide-pokok', number: '01', title: 'Fondasi', detail: 'Ide pokok & mahfudzot' },
  { id: 'theme', number: '02', title: 'Filosofi', detail: 'Tema & moto acara' },
  { id: 'about', number: '03', title: 'Identitas', detail: 'Filosofi visual' },
  { id: 'map-3d', number: '04', title: 'Kebersamaan', detail: 'Peta kampus' },
  { id: 'shows', number: '05', title: 'Pertunjukan', detail: 'Ragam pagelaran' },
  { id: 'committee', number: '06', title: 'Di Balik Layar', detail: 'Panitia & produksi' },
  { id: 'media-showcase', number: '07', title: 'Arsip', detail: 'Dokumentasi media' },
];

export const ChapterNavigator: React.FC<ChapterNavigatorProps> = ({ activeSection, onNavigate }) => {
  const activeIndex = Math.max(0, chapters.findIndex((chapter) => chapter.id === activeSection));

  return (
    <nav className="da-chapter-navigator" aria-label="Navigasi bab editorial">
      <div className="da-chapter-navigator-heading">
        <span>THE JOURNEY</span>
        <strong>{chapters[activeIndex].number} / 07</strong>
      </div>
      <div className="da-chapter-navigator-track" aria-hidden="true">
        <span style={{ transform: `scaleY(${activeIndex / (chapters.length - 1)})` }} />
      </div>
      <ol>
        {chapters.map((chapter, index) => {
          const isActive = chapter.id === activeSection;
          const isVisited = index < activeIndex;
          return (
            <li key={chapter.id}>
              <button
                type="button"
                className={`da-chapter-stop ${isActive ? 'is-active' : ''} ${isVisited ? 'is-visited' : ''}`}
                onClick={() => onNavigate(chapter.id)}
                aria-current={isActive ? 'location' : undefined}
                aria-label={`Bab ${chapter.number}: ${chapter.title}. ${chapter.detail}`}
                title={chapter.detail}
              >
                <span className="da-chapter-stop-number">{chapter.number}</span>
                <span className="da-chapter-stop-dot" aria-hidden="true" />
                <span className="da-chapter-stop-copy">
                  <strong>{chapter.title}</strong>
                  <small>{chapter.detail}</small>
                </span>
                {isActive && <ArrowUpRight size={13} aria-hidden="true" />}
              </button>
            </li>
          );
        })}
      </ol>
      <div className="da-chapter-navigator-foot">AN ARCHIVE OF TOGETHERNESS</div>
    </nav>
  );
};

export default ChapterNavigator;
