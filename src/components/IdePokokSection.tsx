import React from 'react';
import { FadeIn } from './FadeIn';
import { FleuronDivider } from './HeroSection';
import { Sparkles, Building2 } from 'lucide-react';
import { importImage } from '../utils/assetHelpers';

export const IdePokokSection: React.FC = () => {
  return (
    <section id="ide-pokok" className="da-ide-section relative overflow-hidden px-4 py-24 sm:px-6 md:px-12 lg:py-32">
      <div className="da-section-grain" aria-hidden="true" />
      <div className="da-section-frame" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn className="mb-14 grid items-end gap-6 border-b border-[#D4A853]/30 pb-8 md:grid-cols-[1fr_auto]">
          <div>
            <span className="da-kicker"><span className="da-kicker-dot" /> FOLIO 02 / IDE POKOK</span>
            <h2 className="mt-5 max-w-3xl font-mileast text-4xl leading-[.98] tracking-tight text-[#F4EEE4] sm:text-6xl lg:text-7xl">
              Nilai Keinsyafan <em className="text-[#D4A853]">&</em> Pengorbanan
            </h2>
          </div>
          <p className="max-w-xs pb-1 font-cormorant-sc text-xs uppercase leading-6 tracking-[.19em] text-[#EDE8E2]/65 md:text-right">
            Falsafah pendidikan karakter<br />Pondok Modern Darussalam Gontor
          </p>
        </FadeIn>

        <div className="grid items-stretch gap-7 lg:grid-cols-[1.45fr_.8fr]">
          <FadeIn delay={0.08}>
            <article className="da-parchment-sheet relative flex h-full flex-col justify-between overflow-hidden p-7 sm:p-10 lg:p-12">
              <span className="da-paper-index">02</span>
              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#192E41]/15 pb-4">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[#325956]">Ide pokok perhelatan DA 5102</span>
                  <span className="font-mono text-[10px] text-[#8E6B28]">PMDG · 1447 / 2026</span>
                </div>
                <h3 className="mt-8 max-w-2xl font-mileast text-3xl font-bold leading-[1.08] text-[#325956] sm:text-5xl">
                  “Sebesar keinsyafanmu, sebesar itu pula keuntunganmu.”
                </h3>
                <div className="my-8 max-w-2xl space-y-4 border-l border-[#B58A3C] pl-5 font-alverata text-sm leading-[1.9] text-[#192E41]/85 sm:pl-7 sm:text-base">
                  <p><strong className="text-[#325956]">Keinsyafan atau Kesadaran</strong> adalah dasar perjuangan, dan perjuangan adalah jalan menuju keberhasilan. Maksudnya, besarnya hasil yang diperoleh seseorang bergantung pada kedalaman kesadarannya dalam memahami nilai, tujuan, dan tanggung jawab dari setiap perjuangan.</p>
                  <p>Sebab, seseorang yang berjuang tanpa kesadaran hanya akan melihat perjuangan sebagai beban. Sebaliknya, santri yang berjuang dengan penuh keinsyafan akan memahami bahwa setiap kesulitan merupakan proses bernilai pembelajaran tinggi.</p>
                  <p className="font-semibold italic text-[#325956]">Keuntungan yang dimaksud bukan cuma keberhasilan lahiriah, melainkan bertambahnya ilmu, kekayaan pengalaman, dan pendewasaan diri yang sejati.</p>
                </div>
              </div>

              <div className="da-mahfudzot relative mt-5 border-t border-[#192E41]/15 pt-7 text-center">
                <img src={importImage('wax-seal-teal.png')} alt="" aria-hidden="true" className="absolute -right-1 -top-5 h-12 w-12 object-contain" />
                <p className="font-arabic text-3xl font-bold leading-loose text-[#325956] sm:text-5xl" dir="rtl">بِقَدْرِ الْكَدِّ تُكْتَسَبُ الْمَعَالِي</p>
                <p className="mt-2 font-mileast text-base font-bold text-[#192E41]">Biqadril Kaddi Tuktasabul Ma'aaliy</p>
                <p className="mx-auto mt-3 max-w-xl font-cormorant-sc text-xs font-semibold leading-6 tracking-wide text-[#325956]">“Sadar untuk berjuang, berjuang untuk berhasil. Jika sudah berhasil maka kemuliaan akan datang — Jer Basuki Mawa Beya (Setiap keberhasilan membutuhkan pengorbanan).”</p>
              </div>
              <span className="da-paper-corner da-paper-corner-tl" aria-hidden="true" />
              <span className="da-paper-corner da-paper-corner-br" aria-hidden="true" />
            </article>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <FadeIn delay={0.16}>
              <article className="da-archive-photo group relative min-h-[270px] overflow-hidden">
                <img src={importImage('building.png')} alt="Balai Pertemuan Pondok Modern Darussalam Gontor" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B151F] via-[#0B151F]/25 to-transparent" />
                <span className="absolute left-5 top-5 font-mono text-[9px] uppercase tracking-[.2em] text-[#F3E1B8]">Arsip historis / 01</span>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="mb-2 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.18em] text-[#D4A853]"><Building2 size={13} /> Tempat bersejarah</span>
                  <h3 className="font-mileast text-2xl text-[#F4EEE4]">Balai Pertemuan Utama Gontor</h3>
                  <p className="mt-2 font-alverata text-xs leading-6 text-[#EDE8E2]/75">Pusat perhelatan akbar tempat nilai perjuangan ditransmisikan dari generasi ke generasi sejak tahun 1926.</p>
                </div>
              </article>
            </FadeIn>

            <FadeIn delay={0.24}>
              <article className="da-dimensions-panel flex h-full flex-col justify-between p-6 sm:p-7">
                <div>
                  <span className="da-kicker"><Sparkles size={13} /> Tiga dimensi kesadaran santri</span>
                  <ol className="mt-7 space-y-5">
                    <li className="flex gap-4"><span className="da-number">01</span><p className="font-alverata text-sm leading-6 text-[#EDE8E2]/85"><strong className="font-bold text-[#F3E1B8]">Sadar Nilai:</strong> Menyelami tujuan suci di balik setiap denyut amanah pondok.</p></li>
                    <li className="flex gap-4"><span className="da-number">02</span><p className="font-alverata text-sm leading-6 text-[#EDE8E2]/85"><strong className="font-bold text-[#F3E1B8]">Sadar Proses:</strong> Menikmati setiap jerih payah latihan sebagai kawah candradimuka.</p></li>
                    <li className="flex gap-4"><span className="da-number">03</span><p className="font-alverata text-sm leading-6 text-[#EDE8E2]/85"><strong className="font-bold text-[#F3E1B8]">Sadar Ukhuwah:</strong> Meleburkan ego pribadi demi keutuhan barisan 5102.</p></li>
                  </ol>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-4 font-mono text-[9px] tracking-[.16em] text-[#EDE8E2]/45"><span>FALSAFAH 5102</span><span className="text-[#D4A853]">KMI PMDG</span></div>
              </article>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdePokokSection;
