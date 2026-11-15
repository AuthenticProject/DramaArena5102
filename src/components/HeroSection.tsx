import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { ArrowRight, ArrowUpRight, MapPin, Calendar, Sparkles } from 'lucide-react';
import { importImage } from '../utils/assetHelpers';

interface HeroSectionProps {
  onOpenSponsorshipModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const FleuronDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center gap-3 my-3 w-full max-w-xs mx-auto ${className}`}>
    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#B58A3C]/60" />
    <span className="text-[#D4AF37] text-xs font-serif">✦</span>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#B58A3C]/60" />
  </div>
);

export const SectionLabel: React.FC<{ text: string }> = ({ text }) => (
  <span className="font-mono text-[11px] tracking-[0.28em] uppercase font-bold text-[#D4AF37]">
    ✦ {text} ✦
  </span>
);

export const GoldButton: React.FC<{ onClick?: () => void; label: string; outline?: boolean }> = ({
  onClick, label, outline = false
}) => (
  <button
    type="button"
    onClick={onClick}
    className="group relative px-7 py-3 font-mono font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-md rounded-xl"
    style={{
      background: outline ? 'transparent' : 'linear-gradient(135deg, #F3E1B8 0%, #D4A853 50%, #B58A3C 100%)',
      color: outline ? '#EDE8E2' : '#192E41',
      border: outline ? '1.5px solid rgba(181, 138, 60, 0.5)' : '1.5px solid #D4AF37',
      letterSpacing: '0.14em'
    }}
  >
    {label} <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
  </button>
);

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
                Jelajahi kisah kami <ArrowRight size={17} />
              </button>
              <button type="button" onClick={onOpenSponsorshipModal} className="da-home-secondary">
                Kemitraan <span>↗</span>
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="da-home-meta">
              <div><Calendar size={15} /><span>KAMIS, 07 MEI 2026</span></div>
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

            <div id="hero-emblem-display" className="da-home-emblem" aria-live="polite">
              <div className="da-home-emblem-glow" />
              <img
                key={activeHeroTab}
                src={importImage(activeHeroTab === 'wave' ? 'logo-da-wave-transparent.png' : 'logo-da-monogram-transparent.png')}
                alt={activeHeroTab === 'wave' ? 'Lambang ombak resmi Drama Arena 5102' : 'Monogram DA resmi Drama Arena 5102'}
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
                <button type="button" aria-controls="hero-emblem-display" aria-pressed={activeHeroTab === 'wave'} onClick={() => setActiveHeroTab('wave')}>01</button>
                <button type="button" aria-controls="hero-emblem-display" aria-pressed={activeHeroTab === 'monogram'} onClick={() => setActiveHeroTab('monogram')}>02</button>
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
