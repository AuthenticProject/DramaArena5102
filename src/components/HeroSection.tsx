import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { ArrowDownRight, ArrowUpRight, MapPin, CalendarDays, Sparkles } from 'lucide-react';
import { importImage } from '../utils/assetHelpers';

interface HeroSectionProps {
  onOpenSponsorshipModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSponsorshipModal, onNavigate }) => {
  const [activeHeroTab, setActiveHeroTab] = useState<'wave' | 'monogram'>('wave');

  return (
    <section id="hero" className="da-home-hero relative overflow-hidden text-[#EDE8E2]">
      <div className="da-home-hero-grain" aria-hidden="true" />
      <div className="da-home-hero-grid" aria-hidden="true" />

      <div className="da-home-hero-inner">
        <div className="da-home-hero-copy">
          <FadeIn delay={0.04} y={-10}>
            <div className="da-home-kicker">
              <span className="da-home-kicker-mark"><span /></span>
              <span>KULLIYATU-L-MU’ALLIMIN AL-ISLAMIYAH</span>
              <i />
              <span>GONTOR · 1447 H</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="da-home-overline">PAGELARAN SENI AKBAR · KELAS 5 KMI</p>
            <h1 className="da-home-title">
              <span>Drama</span>
              <span className="da-home-title-second">Arena <em>5102</em></span>
            </h1>
            <div className="da-home-title-rule"><span>✳</span></div>
            <p className="da-home-manifesto">
              Sadar dalam Perjuangan,
              <em> Utuh dalam Kebersamaan.</em>
            </p>
            <p className="da-home-description">
              Sebuah panggung pengabdian, tempat gagasan menemukan bentuk dan kebersamaan menjelma karya.
              Persembahan 648 santri kelas 5 KMI Pondok Modern Darussalam Gontor.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="da-home-actions">
              <button type="button" onClick={() => onNavigate('ide-pokok')} className="da-home-primary">
                Jelajahi kisah kami <ArrowUpRight size={17} />
              </button>
              <button type="button" onClick={onOpenSponsorshipModal} className="da-home-secondary">
                Kemitraan <span>↗</span>
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="da-home-meta">
              <div><CalendarDays size={15} /><span>KAMIS, 07 MEI 2026</span></div>
              <i />
              <div><MapPin size={15} /><span>PONOROGO, INDONESIA</span></div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.18} y={18} className="da-home-visual-wrap">
          <div className="da-home-visual">
            <img
              className="da-home-visual-image"
              src={importImage('photo 1.png')}
              alt="Dokumentasi persiapan dan kebersamaan santri Drama Arena 5102"
              fetchPriority="high"
              decoding="async"
            />
            <div className="da-home-visual-shade" />
            <div className="da-home-visual-frame" aria-hidden="true" />
            <div className="da-home-visual-topline">
              <span>DA / 5102</span>
              <span>AN ARCHIVE OF TOGETHERNESS</span>
            </div>

            <div className="da-home-emblem">
              <div className="da-home-emblem-glow" />
              <img
                key={activeHeroTab}
                src={importImage(activeHeroTab === 'wave' ? 'logo-da-wave-transparent.png' : 'logo-da-monogram-transparent.png')}
                alt={activeHeroTab === 'wave' ? 'Lambang ombak resmi Drama Arena 5102' : 'Monogram resmi Drama Arena 5102'}
              />
              <div className="da-home-emblem-seal">
                <img src={importImage('wax-seal-gold.png')} alt="" />
              </div>
            </div>

            <div className="da-home-visual-caption">
              <div>
                <span>THE OFFICIAL EMBLEM</span>
                <strong>{activeHeroTab === 'wave' ? 'The Great Wave' : 'Interlocking Monogram'}</strong>
              </div>
              <div className="da-home-emblem-switch" role="group" aria-label="Pilih variasi lambang resmi">
                <button type="button" aria-pressed={activeHeroTab === 'wave'} onClick={() => setActiveHeroTab('wave')}>01</button>
                <button type="button" aria-pressed={activeHeroTab === 'monogram'} onClick={() => setActiveHeroTab('monogram')}>02</button>
              </div>
            </div>
            <div className="da-home-visual-index">FIG. 01 <span>IDENTITAS VISUAL</span></div>
          </div>
        </FadeIn>
      </div>

      <div className="da-home-bottom">
        <div className="da-home-bottom-note"><Sparkles size={14} /><span>648 SANTRI · SATU PANGGUNG · SATU PERJUANGAN</span></div>
        <button type="button" onClick={() => onNavigate('ide-pokok')} className="da-home-scroll">
          <span>SCROLL TO EXPLORE</span><ArrowDownRight size={17} />
        </button>
        <span className="da-home-edition">PONDOK MODERN DARUSSALAM GONTOR <b>—</b> 2026</span>
      </div>
    </section>
  );
};

export default HeroSection;
