import React from 'react';
import { FadeIn } from './FadeIn';
import { SectionLabel, FleuronDivider } from './HeroSection';
import { Film, Camera, ArrowRight } from 'lucide-react';
import { importImage } from '../utils/assetHelpers';

const motos = [
  {
    num: '01',
    headline: 'Sadar dalam perjuangan, Utuh dalam kebersamaan',
    desc: 'Kesadaran batin yang utuh bahwa perjuangan bukan semata panggung pertunjukan, melainkan peleburan ego demi ukhuwah Islamiyah.',
    barcode: 'DA5102-01',
    date: 'Est. 2027',
  },
  {
    num: '02',
    headline: 'Teguh dalam perjuangan, Utuh dalam kebersamaan',
    desc: 'Keteguhan komitmen dan ketahanan mental santri saat menghadapi setiap rintangan menuju persembahan mahakarya terbaik.',
    barcode: 'DA5102-02',
    date: 'Est. 2027',
  },
  {
    num: '03',
    headline: 'Sadar akan nilai kebersamaan, tumbuhkan semangat perjuangan',
    desc: 'Menumbuhkan kobaran api semangat perjuangan yang berakar dari persaudaraan suci dan keikhlasan beramal tanpa pamrih.',
    barcode: 'DA5102-03',
    date: 'Est. 2027',
  },
];

export const ThemeSection: React.FC = () => {
  return (
    <section
      id="theme"
      className="relative py-28 px-4 sm:px-6 md:px-12 overflow-hidden bg-gradient-to-b from-[#0B151F] via-[#101D2A] to-[#192E41] text-[#EDE8E2]"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4A853]/30 via-transparent to-transparent" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#325956]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <FadeIn delay={0} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#325956]/60 border border-[#B58A3C]/40 text-xs font-mono tracking-widest text-[#D4A853] uppercase mb-4 shadow-lg backdrop-blur-md">
            <span>FOLIO 03 · TEMA UTAMA & TIGA MOTO</span>
          </div>
          <h2
            className="font-mileast italic font-bold mt-2 leading-tight gold-text tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 64px)' }}
          >
            Sadar, Ke Pondok Apa Yang Kau Cari?
          </h2>
          <FleuronDivider />
          <p className="font-cormorant-sc text-xs sm:text-sm tracking-[0.25em] text-[#EDE8E2]/85 uppercase max-w-2xl mx-auto mt-2 font-semibold">
            Penyadaran Hakiki Akan Nilai-Nilai Luhur dan Keutuhan Barisan Santri
          </p>
        </FadeIn>

        {/* ── PART 1: THEME EDITORIAL MANIFESTO (Ref: Slide 03) ── */}
        <FadeIn delay={0.1} className="mb-20">
          <div className="has-registration-marks relative max-w-4xl mx-auto bg-[#FAF8F5] text-[#192E41] p-8 sm:p-14 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] border-2 border-[#B58A3C]/40">
            <span className="reg-mark reg-tl" />
            <span className="reg-mark reg-tr" />
            <span className="reg-mark reg-bl" />
            <span className="reg-mark reg-br" />

            {/* Header Folio */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#192E41]/10 text-xs font-mono text-[#325956]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B58A3C]" />
                <span className="font-bold tracking-wider">TEMA PERHELATAN · DOKUMEN RESMI 03</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#192E41] text-[#D4A853] font-bold">DA 5102</span>
            </div>

            {/* The 3 Core Questions */}
            <div className="text-center my-8 space-y-7">
              <h3
                className="font-mileast font-bold text-[#192E41] leading-tight tracking-tight"
                style={{ fontSize: 'clamp(1.7rem, 4vw, 40px)' }}
              >
                Sadar, Ke Pondok apa yang kau cari ?
              </h3>
              <div className="flex items-center justify-center gap-3 opacity-60">
                <span className="w-16 h-px bg-[#B58A3C]" />
                <span className="text-xs font-serif text-[#B58A3C]">✦</span>
                <span className="w-16 h-px bg-[#B58A3C]" />
              </div>
              <h3
                className="font-mileast font-bold text-[#325956] leading-tight tracking-tight"
                style={{ fontSize: 'clamp(1.7rem, 4vw, 40px)' }}
              >
                Sadar, akan nilai-nilai perjuangan
              </h3>
              <div className="flex items-center justify-center gap-3 opacity-60">
                <span className="w-16 h-px bg-[#B58A3C]" />
                <span className="text-xs font-serif text-[#B58A3C]">✦</span>
                <span className="w-16 h-px bg-[#B58A3C]" />
              </div>
              <h3
                className="font-mileast font-bold text-[#B58A3C] leading-tight tracking-tight"
                style={{ fontSize: 'clamp(1.7rem, 4vw, 40px)' }}
              >
                Sadar, dan utuh dalam kebersamaan
              </h3>
            </div>

            {/* Footer Metadata */}
            <div className="mt-8 pt-4 border-t border-[#192E41]/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#192E41]/70">
              <span className="font-semibold">PENYELENGGARA: KELAS 5 KMI PMDG</span>
              <span>TAHUN AJARAN 1447-1448 H / 2026-2027 M</span>
            </div>
          </div>
        </FadeIn>

        {/* ── PART 2: THE 3 OFFICIAL MOTOS AS ADMISSION TICKETS (Ref: Slide 04) ── */}
        <div className="relative">
          <div className="text-center mb-10">
            <span className="font-cormorant-sc text-xs tracking-[0.35em] text-[#D4A853] uppercase font-bold">
              ✦ TIGA PILIHAN MOTO PERJUANGAN (REF. 04) ✦
            </span>
            <h3 className="font-mileast text-2xl sm:text-3xl text-[#EDE8E2] mt-2 tracking-tight">
              Tiket Kehormatan Angkatan 5102
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {motos.map((m, index) => (
              <FadeIn key={m.num} delay={0.1 * (index + 1)}>
                <div className="ticket-stub rounded-3xl p-7 flex flex-col justify-between h-full bg-[#FAF8F5] text-[#192E41] relative group overflow-hidden border border-[#B58A3C]/40 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                  {/* Punch notches on left & right perforation */}
                  <span className="ticket-notch ticket-notch-l" />
                  <span className="ticket-notch ticket-notch-r" />

                  <div>
                    {/* Top Ticket Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#192E41]/10 mb-4 text-xs font-mono">
                      <span className="text-[#325956] font-bold">№ 005102-0{index + 1}</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#192E41]/10 text-[#B58A3C] font-bold text-[11px]">{m.date}</span>
                    </div>

                    {/* Number Badge & Headline */}
                    <div className="flex items-start gap-3.5 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#192E41] text-[#EDE8E2] font-mono font-bold text-base flex items-center justify-center flex-shrink-0 shadow-md border border-[#B58A3C]/40 group-hover:scale-105 transition-transform">
                        {m.num}
                      </div>
                      <h4 className="font-mileast font-bold text-base sm:text-lg leading-snug text-[#192E41] group-hover:text-[#325956] transition-colors">
                        {m.headline}
                      </h4>
                    </div>

                    <p className="font-alverata text-xs text-[#192E41]/80 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>

                  {/* Bottom Ticket Perforation with Barcode & Seal */}
                  <div className="pt-4 mt-6 border-t-2 border-dashed border-[#192E41]/20 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-0.5 h-6">
                        <div className="w-1 h-full bg-[#192E41]" />
                        <div className="w-0.5 h-full bg-[#192E41]" />
                        <div className="w-1.5 h-full bg-[#192E41]" />
                        <div className="w-0.5 h-full bg-[#192E41]" />
                        <div className="w-2 h-full bg-[#192E41]" />
                        <div className="w-0.5 h-full bg-[#192E41]" />
                        <div className="w-1 h-full bg-[#192E41]" />
                        <div className="w-2.5 h-full bg-[#192E41]" />
                        <div className="w-1 h-full bg-[#192E41]" />
                      </div>
                      <span className="font-mono text-[9px] tracking-wider text-[#192E41] font-bold mt-1 block">
                        {m.barcode}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-cormorant-sc text-[9px] uppercase tracking-widest text-[#325956] font-bold hidden sm:inline">
                        ADMIT ONE
                      </span>
                      <div className="w-9 h-9 rounded-full bg-[#325956] border border-[#B58A3C] flex items-center justify-center text-[#EDE8E2] font-mono text-[10px] font-bold shadow-md">
                        5102
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ThemeSection;
