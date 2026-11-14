import React from 'react';
import { FadeIn } from './FadeIn';
import { SectionLabel, FleuronDivider } from './HeroSection';
import { BookOpen, Sparkles, Building2 } from 'lucide-react';
import { importImage } from '../utils/assetHelpers';

export const IdePokokSection: React.FC = () => {
  return (
    <section
      id="ide-pokok"
      className="relative py-28 px-4 sm:px-6 md:px-12 overflow-hidden bg-gradient-to-b from-[#1E3735] via-[#264442] to-[#1A2E2C] text-[#EDE8E2]"
    >
      {/* Background Subtle Ambience & Radial Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#B58A3C]/40 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 bg-[#B58A3C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#192E41]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <FadeIn delay={0} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101D2A]/80 border border-[#B58A3C]/40 text-xs font-mono tracking-widest text-[#D4A853] uppercase mb-4 shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#B58A3C] animate-pulse" />
            <span>FOLIO 02 · IDE POKOK & FALSAFAH LUHUR</span>
          </div>
          <h2
            className="font-mileast italic font-bold mt-2 leading-tight text-[#EDE8E2] tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 56px)' }}
          >
            Nilai Keinsyafan & Pengorbanan
          </h2>
          <FleuronDivider />
          <p className="font-cormorant-sc text-xs sm:text-sm tracking-[0.25em] text-[#EDE8E2]/85 uppercase max-w-xl mx-auto mt-2 font-semibold">
            Falsafah Pendidikan Karakter Pondok Modern Darussalam Gontor
          </p>
        </FadeIn>

        {/* Editorial Broadsheet Grid (Ref: Slide 02) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Paper Folio - Aluro Bento Style */}
          <FadeIn delay={0.1} className="lg:col-span-8">
            <div className="aluro-bento-card has-registration-marks relative bg-[#FAF8F5] text-[#192E41] p-8 sm:p-12 h-full flex flex-col justify-between overflow-hidden">
              {/* Aluro Watermark number */}
              <div className="aluro-bento-watermark">01</div>

              <span className="reg-mark reg-tl" />
              <span className="reg-mark reg-tr" />
              <span className="reg-mark reg-bl" />
              <span className="reg-mark reg-br" />

              {/* Decorative Vintage Green Binder Clip (Ref: Slide 02) */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
                <div className="w-12 h-6 rounded-t-md bg-[#223C3A] border border-[#B58A3C] shadow-md flex items-center justify-center">
                  <div className="w-8 h-1 rounded-full bg-[#B58A3C]/60" />
                </div>
                <div className="w-16 h-2 bg-[#1A2E2C] border-b border-[#B58A3C]/50 shadow" />
              </div>

              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#192E41]/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#325956]" />
                    <span className="font-mono text-xs uppercase text-[#325956] font-bold tracking-wider">
                      IDE POKOK PERHELATAN DA 5102
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#B58A3C] font-bold">
                    PMDG · 1447 / 2026
                  </span>
                </div>

                {/* Main Headline Quote */}
                <h3
                  className="font-mileast font-bold text-[#325956] leading-tight mb-6 tracking-tight"
                  style={{ fontSize: 'clamp(1.7rem, 3.8vw, 38px)' }}
                >
                  “Sebesar keinsyafanmu, sebesar itu pula keuntunganmu.”
                </h3>

                {/* Body Text Explanation */}
                <div className="space-y-4 font-alverata text-sm sm:text-base leading-relaxed text-[#192E41]/90 border-l-2 border-[#B58A3C] pl-4 sm:pl-6 my-6">
                  <p>
                    <strong className="text-[#325956]">Keinsyafan atau Kesadaran</strong> adalah dasar perjuangan, dan perjuangan adalah jalan menuju keberhasilan.
                    Maksudnya, besarnya hasil yang diperoleh seseorang bergantung pada kedalaman kesadarannya dalam memahami nilai, tujuan, dan tanggung jawab dari setiap perjuangan.
                  </p>
                  <p>
                    Sebab, seseorang yang berjuang tanpa kesadaran hanya akan melihat perjuangan sebagai beban. Sebaliknya, santri yang berjuang dengan penuh keinsyafan akan memahami bahwa setiap kesulitan merupakan proses bernilai pembelajaran tinggi.
                  </p>
                  <p className="text-xs sm:text-sm text-[#325956] italic font-semibold">
                    Keuntungan yang dimaksud bukan cuma keberhasilan lahiriah, melainkan bertambahnya ilmu, kekayaan pengalaman, dan pendewasaan diri yang sejati.
                  </p>
                </div>
              </div>

              {/* Arabic Calligraphy Mahfudzot Block with Wax Seal Accent */}
              <div className="relative mt-6 pt-6 border-t border-[#192E41]/15 text-center bg-[#EDE8E2] p-6 sm:p-8 rounded-xl border border-[#B58A3C]/40 shadow-inner">
                {/* Wax seal ornament in corner */}
                <div className="absolute -top-4 -right-3 w-12 h-12 pointer-events-none drop-shadow-md">
                  <img
                    src={importImage('wax-seal-teal.png')}
                    alt="Segel Lilin Teal"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div
                  className="font-arabic font-bold text-[#325956] text-3xl sm:text-4xl lg:text-5xl my-2 leading-loose filter drop-shadow-sm"
                  dir="rtl"
                >
                  بِقَدْرِ الْكَدِّ تُكْتَسَبُ الْمَعَالِي
                </div>
                <div className="font-mileast text-base text-[#192E41] font-bold mt-1">
                  (Biqadril Kaddi Tuktasabul Ma'aaliy)
                </div>
                <p className="font-cormorant-sc text-xs tracking-wider text-[#325956] font-semibold mt-2 max-w-lg mx-auto">
                  “Sadar untuk berjuang, berjuang untuk berhasil. Jika sudah berhasil maka kemuliaan akan datang — Jer Basuki Mawa Beya (Setiap keberhasilan membutuhkan pengorbanan).”
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Historical Context & Dimensions */}
          <FadeIn delay={0.2} className="lg:col-span-4 flex flex-col gap-6">
            {/* Historical Building Photography Card */}
            <div className="relative bg-[#101D2A]/90 backdrop-blur-md rounded-3xl overflow-hidden border border-[#B58A3C]/40 shadow-2xl group transition-all duration-300 hover:border-[#B58A3C]">
              <div className="aluro-bento-watermark text-white/5 right-2 bottom-12">02</div>
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <img
                  src={importImage('building.png')}
                  alt="Balai Pertemuan Pondok Modern Darussalam Gontor"
                  className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101D2A] via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#101D2A]/85 backdrop-blur-sm text-[10px] font-mono tracking-wider text-[#D4A853] border border-[#B58A3C]/40 font-bold">
                  ARSIP HISTORIS PMDG
                </div>
              </div>
              <div className="p-6 text-left relative z-10">
                <div className="flex items-center gap-2 mb-1.5">
                  <Building2 className="w-4 h-4 text-[#B58A3C]" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#B58A3C] font-bold">
                    TEMPAT BERSEJARAH
                  </span>
                </div>
                <h4 className="font-mileast font-bold text-lg text-[#EDE8E2]">
                  Balai Pertemuan Utama Gontor
                </h4>
                <p className="font-alverata text-xs text-[#EDE8E2]/80 mt-1.5 leading-relaxed">
                  Pusat perhelatan akbar tempat nilai perjuangan ditransmisikan dari generasi ke generasi sejak tahun 1926.
                </p>
              </div>
            </div>

            {/* Three Dimensions of Keinsyafan */}
            <div className="relative p-7 rounded-3xl bg-[#101D2A]/90 backdrop-blur-md border border-[#B58A3C]/40 shadow-2xl text-left flex-1 flex flex-col justify-between group transition-all duration-300 hover:border-[#B58A3C] overflow-hidden">
              <div className="aluro-bento-watermark text-white/5 right-2 bottom-6">03</div>
              <div className="relative z-10">
                <h4 className="font-cormorant-sc text-xs tracking-[0.25em] uppercase text-[#D4A853] font-bold mb-5 flex items-center gap-2 pb-3 border-b border-[#B58A3C]/20">
                  <Sparkles className="w-3.5 h-3.5 text-[#B58A3C]" /> 3 Dimensi Kesadaran Santri
                </h4>
                <ul className="space-y-4 font-alverata text-xs sm:text-sm text-[#EDE8E2]/90">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-[#325956] text-[#D4A853] border border-[#B58A3C]/40 flex items-center justify-center font-mono text-xs font-bold flex-shrink-0">
                      01
                    </span>
                    <span className="leading-relaxed"><strong>Sadar Nilai:</strong> Menyelami tujuan suci di balik setiap denyut amanah pondok.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-[#325956] text-[#D4A853] border border-[#B58A3C]/40 flex items-center justify-center font-mono text-xs font-bold flex-shrink-0">
                      02
                    </span>
                    <span className="leading-relaxed"><strong>Sadar Proses:</strong> Menikmati setiap jerih payah latihan sebagai kawah candradimuka.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-[#325956] text-[#D4A853] border border-[#B58A3C]/40 flex items-center justify-center font-mono text-xs font-bold flex-shrink-0">
                      03
                    </span>
                    <span className="leading-relaxed"><strong>Sadar Ukhuwah:</strong> Meleburkan ego pribadi demi keutuhan barisan 5102.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 text-[10px] font-mono text-[#EDE8E2]/60 flex justify-between items-center relative z-10">
                <span className="tracking-wider">FALSAFAH 5102</span>
                <span className="px-2 py-0.5 rounded bg-[#325956] text-[#D4A853] border border-[#B58A3C]/30 font-bold">KMI PMDG</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
export default IdePokokSection;
