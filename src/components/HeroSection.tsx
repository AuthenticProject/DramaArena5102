import React from 'react';
import { FadeIn } from './FadeIn';
import { ArrowDown, ArrowUpRight, CalendarDays, MapPin, Play, Sparkles } from 'lucide-react';
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
  <span className="font-mono text-[11px] tracking-[0.28em] uppercase font-bold text-[#D4AF37]">✦ {text} ✦</span>
);

export const GoldButton: React.FC<{ onClick?: () => void; label: string; outline?: boolean }> = ({ onClick, label, outline = false }) => (
  <button onClick={onClick} className={`group inline-flex items-center gap-3 px-6 py-3.5 font-mono font-bold uppercase tracking-[.13em] text-[10px] transition-all duration-300 ${outline ? 'border border-[#D4A853]/50 text-[#F3E1B8] hover:bg-white/5' : 'bg-[#D4A853] text-[#192E41] hover:bg-[#F3E1B8]'}`}>
    {label}<ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
  </button>
);

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSponsorshipModal, onNavigate }) => {
  return (
    <section id="hero" className="da-hero relative isolate overflow-hidden bg-[#0B151F] text-[#EDE8E2]">
      <div className="da-hero-image" aria-hidden="true" />
      <div className="da-hero-vignette" aria-hidden="true" />
      <div className="da-hero-grain" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 pb-14 pt-36 sm:px-8 sm:pt-40 lg:px-14 lg:pb-20">
        <div className="grid min-h-[650px] items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-8">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="da-hero-index">PAGELARAN SENI AKBAR / 5102</span>
                <span className="h-px w-10 bg-[#B58A3C]/70"/>
                <span className="font-mono text-[9px] uppercase tracking-[.2em] text-[#EDE8E2]/55">KMI · PMDG · 1447 H</span>
              </div>
              <p className="mb-4 font-cormorant-sc text-xs uppercase tracking-[.28em] text-[#D4A853] sm:text-sm">Sebuah persembahan dari kelas 5 KMI</p>
              <h1 className="da-hero-title font-mileast text-[clamp(4rem,10vw,9.5rem)] leading-[.78] tracking-[-.055em] text-[#F4EEE4]">
                Drama<br/><em className="ml-[.55em] text-[#D4A853]">Arena</em><span className="da-hero-number">51<span>02</span></span>
              </h1>
              <div className="mt-9 max-w-2xl border-l border-[#B58A3C] pl-5 sm:pl-7">
                <p className="font-mileast text-xl leading-snug text-[#F3E1B8] sm:text-2xl lg:text-3xl">“Sadar dalam Perjuangan, Utuh dalam Kebersamaan”</p>
                <p className="mt-4 max-w-xl font-alverata text-sm leading-7 text-[#EDE8E2]/75 sm:text-base">Pagelaran seni akbar tahunan karya santri kelas 5 KMI Pondok Modern Darussalam Gontor—sebuah pertemuan antara nilai, pengabdian, dan ekspresi seni.</p>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => onNavigate('ide-pokok')} className="group inline-flex items-center justify-center gap-3 bg-[#D4A853] px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-[.13em] text-[#192E41] transition hover:bg-[#F3E1B8]">
                  Jelajahi kisah <ArrowDown size={15} className="transition-transform group-hover:translate-y-1"/>
                </button>
                <button onClick={onOpenSponsorshipModal} className="inline-flex items-center justify-center gap-3 border border-[#EDE8E2]/30 bg-[#0B151F]/35 px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-[.13em] text-[#F3E1B8] transition hover:border-[#D4A853] hover:bg-white/5">
                  Proposal kemitraan <ArrowUpRight size={15}/>
                </button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.16} className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
            <div className="da-hero-emblem-stage">
              <div className="da-hero-orbit da-hero-orbit-one"/>
              <div className="da-hero-orbit da-hero-orbit-two"/>
              <div className="da-hero-emblem-glow"/>
              <img src={importImage('logo-da-wave-transparent.png')} alt="Lambang resmi Drama Arena 5102" className="da-hero-emblem"/>
              <img src={importImage('wax-seal-gold.png')} alt="" aria-hidden="true" className="da-hero-seal"/>
              <span className="da-hero-stage-caption">OFFICIAL EMBLEM · DA 5102</span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="da-hero-meta"><CalendarDays size={15}/><span><small>TANGGAL PERHELATAN</small><strong>7 Mei 2026 · 19.30 WIB</strong></span></div>
              <div className="da-hero-meta"><MapPin size={15}/><span><small>LOKASI</small><strong>Kampus Pusat · Ponorogo</strong></span></div>
            </div>
          </FadeIn>
        </div>

        <div className="da-hero-bottomline">
          <div className="flex items-center gap-3"><span className="da-hero-status-dot"/><span>ARSIP PERHELATAN</span><span className="text-[#EDE8E2]/35">/</span><span className="text-[#EDE8E2]/55">EDISI 1447 H</span></div>
          <button onClick={() => onNavigate('shows')} className="group inline-flex items-center gap-2 transition hover:text-[#D4A853]">TELUSURI PAGELARAN <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></button>
          <span className="hidden sm:block">PONDOK MODERN DARUSSALAM GONTOR</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
