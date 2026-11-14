import React, { useState } from 'react';
import { SectionLabel, GoldButton } from './HeroSection';
import { importImage } from '../utils/assetHelpers';
import { TypographyDecor } from './TypographyDecor';
import { Sparkles, Shield, HeartHandshake, Copy, Check } from 'lucide-react';

interface FooterProps {
  onOpenSponsorshipModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSponsorshipModal, onNavigate }) => {
  const [copiedBank, setCopiedBank] = useState(false);
  const bankNumber = '0070-01-000315-56-7';

  const handleCopyBank = () => {
    navigator.clipboard.writeText(bankNumber.replace(/-/g, ''));
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2000);
  };

  const logoFiles = [
    { file: 'logo-da-wave-transparent.png', alt: 'Ornamen Ombak DA', label: 'Lambang Utama' },
    { file: 'logo-da-monogram-transparent.png', alt: 'Monogram Interlocking DA', label: 'Monogram' },
    { file: 'typography-drama-arena-main.png', alt: 'Typography Est.2027', label: 'Tipografi' },
    { file: 'wax-seal-gold.png', alt: 'Wax Seal DA5102', label: 'Segel Lilin' },
  ];

  return (
    <footer id="footer" className="relative overflow-hidden" style={{ background: '#101D2A', color: '#EDE8E2' }}>
      {/* Arabesque bottom ribbon accent */}
      <div
        className="absolute top-0 left-0 right-0 h-4 bg-repeat-x opacity-70 pointer-events-none"
        style={{ backgroundImage: `url("${importImage('ornament-arabesque-strip.png')}")`, backgroundSize: 'auto 16px' }}
      />

      {/* CTA Banner */}
      <div className="px-4 sm:px-8 md:px-12 py-20 border-b border-[#B58A3C]/25 relative z-10 overflow-hidden">
        {/* Ambient radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#B58A3C]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <SectionLabel text="KEMITRAAN & SPONSORSHIP" />
          <h2
            className="font-serif italic font-bold mt-4 leading-tight text-white drop-shadow-md"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 60px)' }}
          >
            Sadar Dalam Perjuangan,<br />
            <span className="text-[#D4AF37]">Utuh Dalam Kebersamaan</span>
          </h2>
          <p className="font-sans text-sm mt-4 mb-8 max-w-xl mx-auto text-[#EDE8E2]/80 leading-relaxed">
            Sambut peluang kemitraan bersejarah dan berkontribusi langsung menyukseskan perhelatan seni akbar tahunan termegah siswa kelas 5 KMI Pondok Modern Darussalam Gontor.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <GoldButton onClick={onOpenSponsorshipModal} label="AJUKAN PROPOSAL SPONSORSHIP" />
            <button
              onClick={() => onNavigate('media-showcase')}
              className="px-6 py-3 rounded-xl border border-[#B58A3C] text-[#B58A3C] hover:bg-[#B58A3C] hover:text-[#192E41] transition-all duration-300 font-mono text-xs tracking-widest uppercase flex items-center gap-2 cursor-pointer font-bold shadow hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Arsip Media Showcase
            </button>
          </div>
        </div>
      </div>

      {/* Official Brand Stamp Showcase Strip */}
      <div className="py-8 px-4 sm:px-8 border-b border-[#B58A3C]/20 bg-[#192E41]/60 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="font-cormorant-sc text-xs tracking-[0.25em] uppercase text-[#B58A3C] font-bold block">
              IDENTITAS VISUAL RESMI DA 5102
            </span>
            <span className="font-alverata text-xs text-[#EDE8E2]/70">
              Koleksi lambang prangko, monogram, dan segel lilin autentik Drama Arena 5102
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            {logoFiles.map((logo) => (
              <button
                key={logo.file}
                onClick={() => onNavigate('media-showcase')}
                className="group flex flex-col items-center gap-1.5 p-2 rounded-xl bg-white/5 hover:bg-[#B58A3C]/20 border border-white/10 hover:border-[#B58A3C]/60 transition-all duration-300"
                title={`${logo.label} — Lihat di Media Showcase`}
              >
                <img
                  src={importImage(logo.file)}
                  alt={logo.alt}
                  className="h-10 w-auto object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform"
                />
                <span className="font-cormorant-sc text-[9px] text-[#EDE8E2]/70 group-hover:text-[#B58A3C] uppercase tracking-wider font-bold">
                  {logo.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Navigation Columns */}
      <div className="px-4 sm:px-8 md:px-12 py-14 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="font-mileast italic text-3xl font-bold gold-text mb-2">Drama Arena</div>
            <div className="font-cormorant-sc text-xs tracking-widest uppercase mb-3 text-[#B58A3C] font-bold">
              DA 5102 · KMI PMDG
            </div>
            <p className="font-alverata text-xs leading-relaxed text-[#EDE8E2]/70">
              “Sadar dalam perjuangan, Utuh dalam kebersamaan.” Pagelaran seni akbar persembahan siswa kelas 5 KMI Pondok Modern Darussalam Gontor.
            </p>
          </div>

          <div>
            <div className="font-cormorant-sc text-xs tracking-widest uppercase mb-4 text-[#B58A3C] font-bold">
              Struktur Navigasi
            </div>
            <ul className="flex flex-col gap-2 font-cormorant-sc text-xs tracking-wide">
              {[
                ['01. Konsep Utama', 'hero'],
                ['02. Ide Pokok & Mahfudzot', 'ide-pokok'],
                ['03. Tema & Tiga Moto', 'theme'],
                ['04. Filosofi & Palet Warna', 'about'],
                ['05. Acara & Panggung', 'shows'],
                ['06. Panitia & Anggaran', 'committee'],
                ['07. Media Showcase', 'media-showcase'],
              ].map(([label, id]) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(id)}
                    className="hover:text-[#B58A3C] transition-colors cursor-pointer text-left text-[#EDE8E2]/75"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-cormorant-sc text-xs tracking-widest uppercase mb-4 text-[#B58A3C] font-bold">
              Lokasi & Perhelatan
            </div>
            <p className="font-alverata text-xs leading-relaxed text-[#EDE8E2]/75">
              Pondok Modern Darussalam Gontor<br />
              Kampus Pusat Ponorogo<br />
              Jawa Timur 63472, Indonesia<br />
              www.gontor.ac.id
            </p>
          </div>

          <div>
            <div className="font-cormorant-sc text-xs tracking-widest uppercase mb-4 text-[#B58A3C] font-bold">
              Sekretariat & Donasi
            </div>
            <div className="flex flex-col gap-2 font-alverata text-xs text-[#EDE8E2]/75">
              <p>Ahmad Nur Fajar Dwi Prakosa<br />0813-9850-7876</p>
              <p className="font-mono text-xs text-[#EDE8E2]/90">dramaarena5102@gontor.ac.id</p>
              <div className="mt-2 p-2.5 rounded-xl bg-white/5 border border-[#B58A3C]/30 flex items-center justify-between gap-2">
                <div>
                  <div className="font-mono font-bold text-xs text-[#D4A853]">BRI: 0070-01-000315-56-7</div>
                  <div className="text-[10px] text-[#EDE8E2]/60">a.n. Panitia Drama Arena 5102</div>
                </div>
                <button
                  onClick={handleCopyBank}
                  className="p-1.5 rounded-lg bg-[#B58A3C] text-[#192E41] hover:bg-[#D4A853] transition-colors cursor-pointer flex items-center gap-1 text-[10px] font-bold font-mono"
                  title="Salin Nomor Rekening"
                >
                  {copiedBank ? <Check className="w-3.5 h-3.5 text-[#192E41]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mahfudzot Footer Quote (Ref: Slide 02) */}
      <div className="px-4 sm:px-8 py-10 text-center relative z-10 border-t border-[#B58A3C]/25 bg-[#0B151F]">
        <div className="max-w-2xl mx-auto">
          <div className="font-arabic font-bold text-2xl sm:text-3xl text-[#B58A3C] mb-2 leading-relaxed" dir="rtl">
            بِقَدْرِ الْكَدِّ تُكْتَسَبُ الْمَعَالِي
          </div>
          <p className="font-mileast italic text-base sm:text-lg leading-relaxed text-[#EDE8E2] mb-2">
            “Biqadril Kaddi Tuktasabul Ma'aaliy — Sebesar keinsyafanmu, sebesar itu pula keuntunganmu.”
          </p>
          <p className="font-cormorant-sc text-xs tracking-[0.2em] uppercase text-[#325956] font-bold">
            Jer Basuki Mawa Beya · Setiap Keberhasilan Membutuhkan Pengorbanan
          </p>
          <div className="w-12 h-0.5 mx-auto my-4 bg-[#B58A3C]/40" />
        </div>
        <p className="text-[11px] tracking-widest uppercase font-cormorant-sc text-[#EDE8E2]/40">
          © 2026 Drama Arena 5102 · KMI Pondok Modern Darussalam Gontor
        </p>
      </div>
    </footer>
  );
};
export default Footer;
