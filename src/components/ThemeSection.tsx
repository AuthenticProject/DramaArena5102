import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { FleuronDivider } from './HeroSection';
import { ArrowUpRight } from 'lucide-react';

const motos = [
  { num: '01', headline: 'Sadar dalam perjuangan, Utuh dalam kebersamaan', desc: 'Kesadaran batin yang utuh bahwa perjuangan bukan semata panggung pertunjukan, melainkan peleburan ego demi ukhuwah Islamiyah.', barcode: 'DA5102-01', date: 'Est. 2027' },
  { num: '02', headline: 'Teguh dalam perjuangan, Utuh dalam kebersamaan', desc: 'Keteguhan komitmen dan ketahanan mental santri saat menghadapi setiap rintangan menuju persembahan mahakarya terbaik.', barcode: 'DA5102-02', date: 'Est. 2027' },
  { num: '03', headline: 'Sadar akan nilai kebersamaan, tumbuhkan semangat perjuangan', desc: 'Menumbuhkan kobaran api semangat perjuangan yang berakar dari persaudaraan suci dan keikhlasan beramal tanpa pamrih.', barcode: 'DA5102-03', date: 'Est. 2027' },
];

export const ThemeSection: React.FC = () => {
  const [activeMoto, setActiveMoto] = useState(0);

  return (
    <section id="theme" className="da-theme-section relative overflow-hidden px-4 py-24 sm:px-6 md:px-12 lg:py-32">
      <div className="da-section-frame da-section-frame-light" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn className="mb-12 text-center">
          <span className="da-kicker justify-center"><span className="da-kicker-dot" /> FOLIO 03 / TEMA & MOTO</span>
          <h2 className="mx-auto mt-6 max-w-5xl font-mileast text-4xl leading-[.98] tracking-tight text-[#F4EEE4] sm:text-6xl lg:text-7xl">
            Sadar, Ke Pondok Apa <em className="text-[#D4A853]">Yang Kau Cari?</em>
          </h2>
          <FleuronDivider className="my-6" />
          <p className="mx-auto max-w-xl font-cormorant-sc text-xs uppercase leading-6 tracking-[.2em] text-[#EDE8E2]/60">
            Penyadaran hakiki akan nilai-nilai luhur dan keutuhan barisan santri
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <article className="da-theme-manifesto relative mx-auto max-w-6xl overflow-hidden p-7 sm:p-12 lg:p-16">
            <div className="flex items-center justify-between gap-4 border-b border-[#192E41]/15 pb-4 font-mono text-[9px] uppercase tracking-[.16em] text-[#325956] sm:text-[10px]">
              <span>Dokumen tema perhelatan / 03</span><span>DA 5102 · 1447—1448 H</span>
            </div>
            <div className="relative py-10 text-center sm:py-14">
              <span className="da-manifesto-watermark" aria-hidden="true">SADAR</span>
              <p className="relative z-10 font-mileast text-3xl leading-tight text-[#192E41] sm:text-5xl lg:text-6xl">Sadar, ke pondok apa yang kau cari?</p>
              <div className="da-manifesto-divider"><span>✦</span></div>
              <p className="relative z-10 font-mileast text-3xl leading-tight text-[#325956] sm:text-5xl lg:text-6xl">Sadar, akan nilai-nilai perjuangan</p>
              <div className="da-manifesto-divider"><span>✦</span></div>
              <p className="relative z-10 font-mileast text-3xl leading-tight text-[#8E6B28] sm:text-5xl lg:text-6xl">Sadar, dan utuh dalam kebersamaan</p>
            </div>
            <div className="flex flex-col justify-between gap-2 border-t border-[#192E41]/15 pt-4 font-mono text-[9px] uppercase tracking-[.12em] text-[#192E41]/60 sm:flex-row sm:text-[10px]">
              <span>Penyelenggara: Kelas 5 KMI PMDG</span><span>Tahun Ajaran 1447–1448 H / 2026–2027 M</span>
            </div>
          </article>
        </FadeIn>

        <div className="mt-20 grid items-start gap-8 lg:grid-cols-[.7fr_1.3fr]">
          <FadeIn delay={0.16}>
            <div className="max-w-md">
              <span className="da-kicker"><span className="da-kicker-dot" /> TIGA MOTO PERJUANGAN</span>
              <h3 className="mt-5 font-mileast text-4xl leading-none text-[#F4EEE4] sm:text-5xl">Tiket Kehormatan<br /><em className="text-[#D4A853]">Angkatan 5102</em></h3>
              <p className="mt-5 font-alverata text-sm leading-7 text-[#EDE8E2]/65">Pilih satu moto untuk membuka catatan perjuangannya. Ketiganya menjadi bagian dari arsip nilai perhelatan.</p>
              <div className="mt-8 flex gap-2" role="tablist" aria-label="Pilih moto perjuangan">
                {motos.map((m, index) => (
                  <button key={m.num} type="button" role="tab" aria-selected={activeMoto === index} onClick={() => setActiveMoto(index)} className={`da-moto-tab ${activeMoto === index ? 'is-active' : ''}`}>
                    <span>{m.num}</span>
                  </button>
                ))}
              </div>
              <p className="mt-3 font-mono text-[9px] uppercase tracking-[.16em] text-[#D4A853]/65">Pilih nomor 01 — 03</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="da-ticket-feature" role="tabpanel">
              <div className="da-ticket-perforation" aria-hidden="true" />
              <div className="flex items-center justify-between border-b border-[#192E41]/15 pb-4 font-mono text-[9px] uppercase tracking-[.15em] text-[#325956]">
                <span>№ 005102-0{activeMoto + 1}</span><span>{motos[activeMoto].date}</span>
              </div>
              <div className="grid gap-6 py-8 sm:grid-cols-[auto_1fr] sm:items-start">
                <div className="da-ticket-number">{motos[activeMoto].num}</div>
                <div>
                  <h4 className="font-mileast text-3xl leading-tight text-[#192E41] sm:text-4xl">{motos[activeMoto].headline}</h4>
                  <p className="mt-5 max-w-xl font-alverata text-sm leading-7 text-[#192E41]/75">{motos[activeMoto].desc}</p>
                </div>
              </div>
              <div className="flex items-end justify-between border-t border-dashed border-[#192E41]/25 pt-5">
                <div className="font-mono text-[9px] font-bold tracking-[.18em] text-[#192E41]">{motos[activeMoto].barcode}<div className="da-barcode mt-2" aria-hidden="true" /></div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B58A3C] bg-[#325956] font-mono text-[9px] font-bold text-[#F3E1B8]">5102</span>
              </div>
              <div className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-[#192E41]" aria-hidden="true" />
              <div className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-[#192E41]" aria-hidden="true" />
            </div>
          </FadeIn>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-[#D4A853]/20 pt-5 font-mono text-[9px] uppercase tracking-[.16em] text-[#EDE8E2]/35">
          <span>Drama Arena 5102 / Arsip tema</span><span className="flex items-center gap-2">Folio 03 <ArrowUpRight size={12} className="text-[#D4A853]" /></span>
        </div>
      </div>
    </section>
  );
};

export default ThemeSection;
