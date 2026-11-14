import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { SectionLabel, FleuronDivider } from './HeroSection';
import { Waves, Sparkles, Feather, Copy, Check, Type, Bookmark, HelpCircle } from 'lucide-react';
import { importImage } from '../utils/assetHelpers';

const philosophyItems = [
  {
    title: 'The Great Wave of Kanagawa',
    subtitle: 'Kekuatan Alam, Ujian & Resiliensi',
    desc: 'Gelombang raksasa melambangkan kekuatan alam yang berada di luar kendali manusia. Dalam interpretasi filosofis, gelombang tersebut menggambarkan ujian, kesulitan, dan berbagai tantangan kehidupan. Manusia tidak selalu mampu mengendalikan keadaan yang dihadapinya, namun manusia tetap memiliki pilihan luhur untuk menentukan bagaimana ia menghadapi keadaan tersebut dengan kesadaran penuh.',
    icon: Waves,
  },
  {
    title: 'Ornamen Floral Arabesque',
    subtitle: 'Harmoni Seni Islam & Kesinambungan',
    desc: 'Sebagai seni ornamen yang berkembang megah dalam tradisi seni Islam, dengan karakteristik khas berupa sulur tumbuhan, dedaunan, dan pola geometris yang saling terhubung erat serta berulang secara harmonis. Menggambarkan jalinan ukhuwah santri yang tak terputus dan keindahan akhlak yang terus bersemi.',
    icon: Sparkles,
  },
  {
    title: 'Stilisasi Huruf D & A',
    subtitle: 'Simbol Pagelaran Seni Akbar DA',
    desc: 'Sebagai implementasi visual identitas resmi Drama Arena, yaitu perhelatan pagelaran seni akbar tahunan termegah di Pondok Modern Darussalam Gontor yang dikoordinasikan secara mandiri dan penuh dedikasi oleh siswa-siswa kelas 5 KMI demi mempersembahkan karya masterpiece sejati.',
    icon: Bookmark,
  },
];

const colorPalette = [
  {
    name: 'Navy Blue',
    hex: '#192E41',
    rgb: '25, 46, 65',
    cmyk: '62, 29, 0, 75',
    img: importImage('color-card-navy.png'),
    role: 'Warna Primer Kedalaman & Keteguhan',
    sealClass: 'wax-seal-navy',
  },
  {
    name: 'Green Teal',
    hex: '#325956',
    rgb: '50, 89, 86',
    cmyk: '44, 0, 3, 65',
    img: importImage('color-card-teal.png'),
    role: 'Warna Sekunder Ketenangan & Spiritualitas',
    sealClass: 'wax-seal-teal',
  },
  {
    name: 'Bone White',
    hex: '#EDE8E2',
    rgb: '237, 232, 226',
    cmyk: '0, 2, 5, 7',
    img: importImage('color-card-bone.png'),
    role: 'Warna Dasar Kanvas & Kemurnian Hati',
    sealClass: 'wax-seal-bone',
  },
  {
    name: 'Golden Metal',
    hex: '#B58A3C',
    rgb: '181, 138, 60',
    cmyk: '0, 24, 67, 29',
    img: importImage('color-card-gold.png'),
    role: 'Aksen Emas Kemuliaan & Prestise Luhur',
    sealClass: 'wax-seal-gold',
  },
];

export const AboutSection: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [selectedLogo, setSelectedLogo] = useState<'wave' | 'monogram'>('wave');
  const [customFontText, setCustomFontText] = useState<string>('Sadar Dalam Perjuangan');
  const [activePaletteIndex, setActivePaletteIndex] = useState<number>(0);

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <>
      {/* ── 04. LOGO & FILOSOFI RESMI (Ref: Slide 06, 07, 08) ───────────── */}
      <section id="about" className="relative py-24 px-4 sm:px-6 md:px-12 bg-[#EDE8E2] text-[#192E41] overflow-hidden">
        {/* Background arabesque watermark */}
        <div
          className="absolute -top-20 -right-20 w-[500px] h-[500px] opacity-5 bg-contain bg-no-repeat pointer-events-none"
          style={{ backgroundImage: `url("${importImage('logo-da-wave-transparent.png')}")` }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn delay={0} className="text-center mb-16">
            <div className="luggage-tag mb-3">
              <span className="luggage-tag-twine" />
              <span className="font-cormorant-sc text-xs tracking-widest text-[#192E41] font-bold uppercase">
                Philosophy & Logo · DA.5102
              </span>
            </div>
            <SectionLabel text="04. BRAND IDENTITY & FILOSOFI RESMI" />
            <h2
              className="font-mileast italic font-bold mt-2 leading-none uppercase text-[#192E41]"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 68px)' }}
            >
              Makna & Filosofi Lambang
            </h2>
            <FleuronDivider />
            <p className="font-cormorant-sc text-xs sm:text-sm tracking-widest text-[#325956] uppercase max-w-2xl mx-auto mt-2 font-semibold">
              Harmonisasi Gelombang Kanagawa, Ornamen Arabesque, dan Monogram DA
            </p>
          </FadeIn>

          {/* Dual Logo Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Logo 1: Ombak DA (Floral Arabesque) */}
            <FadeIn delay={0.1}>
              <div
                onClick={() => setSelectedLogo('wave')}
                className={`p-8 rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  selectedLogo === 'wave'
                    ? 'bg-[#192E41] text-[#EDE8E2] shadow-2xl border-2 border-[#B58A3C]'
                    : 'bg-[#FAF8F5] text-[#192E41] shadow-lg border border-[#B58A3C]/30 hover:border-[#B58A3C]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-cormorant-sc text-xs tracking-widest uppercase font-bold text-[#B58A3C]">
                    Varian 01 · Lambang Utama
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#B58A3C] flex items-center justify-center">
                    <span className="font-mileast text-xs font-bold text-[#B58A3C]">01</span>
                  </div>
                </div>

                <div className="w-48 h-48 mx-auto my-6 flex items-center justify-center p-4 rounded-xl bg-black/10">
                  <img
                    src={importImage('logo-da-wave-transparent.png')}
                    alt="Logo Ornamen Ombak DA"
                    className="w-full h-full object-contain filter drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>

                <h3 className="font-mileast font-bold text-xl mb-2">
                  Ornamen Bentuk Ombak DA
                </h3>
                <p className={`font-alverata text-xs sm:text-sm leading-relaxed ${selectedLogo === 'wave' ? 'text-[#EDE8E2]/85' : 'text-[#192E41]/80'}`}>
                  Ornamen bentuk ombak simetris yang membentuk stilisasi huruf <strong>D & A</strong>, merepresentasikan kekuatan lautan perjuangan dan keanggunan seni Islam dalam satu segel paripurna.
                </p>
              </div>
            </FadeIn>

            {/* Logo 2: Monogram DA (Gothic / Blackletter) */}
            <FadeIn delay={0.15}>
              <div
                onClick={() => setSelectedLogo('monogram')}
                className={`p-8 rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  selectedLogo === 'monogram'
                    ? 'bg-[#192E41] text-[#EDE8E2] shadow-2xl border-2 border-[#B58A3C]'
                    : 'bg-[#FAF8F5] text-[#192E41] shadow-lg border border-[#B58A3C]/30 hover:border-[#B58A3C]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-cormorant-sc text-xs tracking-widest uppercase font-bold text-[#B58A3C]">
                    Varian 02 · Monogram
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#B58A3C] flex items-center justify-center">
                    <span className="font-mileast text-xs font-bold text-[#B58A3C]">02</span>
                  </div>
                </div>

                <div className="w-48 h-48 mx-auto my-6 flex items-center justify-center p-4 rounded-xl bg-black/10">
                  <img
                    src={importImage('logo-da-monogram-transparent.png')}
                    alt="Logo Monogram DA"
                    className="w-full h-full object-contain filter drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>

                <h3 className="font-mileast font-bold text-xl mb-2">
                  Monogram Interlocking DA
                </h3>
                <p className={`font-alverata text-xs sm:text-sm leading-relaxed ${selectedLogo === 'monogram' ? 'text-[#EDE8E2]/85' : 'text-[#192E41]/80'}`}>
                  Monogram huruf <strong>D</strong> dan <strong>A</strong> yang saling mengunci dengan garis berkarakter tegas dan tekstur vintage, menegaskan nama dan identitas kuat acara Drama Arena.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* 3 Pillars of Philosophy (Ref: Slide 07 & 08) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {philosophyItems.map((item, idx) => {
              const Icon = item.icon;
              const romanNums = ['I', 'II', 'III'];
              return (
                <FadeIn key={item.title} delay={0.1 * (idx + 1)}>
                  <div className="has-registration-marks bg-[#FAF8F5] p-8 rounded-2xl border border-[#B58A3C]/35 shadow-md h-full flex flex-col justify-between hover:shadow-2xl hover:border-[#B58A3C] transition-all group">
                    <span className="reg-mark reg-tl" />
                    <span className="reg-mark reg-tr" />
                    <span className="reg-mark reg-bl" />
                    <span className="reg-mark reg-br" />

                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-[#325956] text-[#EDE8E2] flex items-center justify-center shadow border border-[#B58A3C]/40 group-hover:scale-105 transition-transform">
                          <Icon className="w-6 h-6 text-[#B58A3C]" />
                        </div>
                        <span className="font-mileast text-2xl font-bold text-[#B58A3C]/40">
                          {romanNums[idx]}
                        </span>
                      </div>

                      <span className="font-cormorant-sc text-[10px] tracking-[0.25em] uppercase text-[#B58A3C] font-bold block mb-1">
                        Pilar Filosofis · 0{idx + 1}
                      </span>
                      <h4 className="font-mileast font-bold text-xl text-[#192E41] mb-1.5 leading-snug">
                        {item.title}
                      </h4>
                      <div className="font-cormorant-sc text-xs text-[#325956] font-bold mb-3.5 tracking-wider uppercase">
                        {item.subtitle}
                      </div>
                      <p className="font-alverata text-xs sm:text-sm text-[#192E41]/80 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-6 border-t border-[#192E41]/10 flex items-center justify-between text-xs font-mono text-[#325956]">
                      <span className="font-bold">FILOSOFI 5102</span>
                      <span className="text-[#B58A3C]">✦✦✦</span>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 10. COLOR PALETTE RESMI (Ref: Slide 10) ──────────────────────── */}
      <section className="py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden" style={{ background: '#192E41', color: '#EDE8E2' }}>
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn delay={0} className="text-center mb-16">
            <div className="luggage-tag mb-3 bg-[#FAF8F5] text-[#192E41]">
              <span className="luggage-tag-twine" />
              <span className="font-cormorant-sc text-xs tracking-widest font-bold uppercase">
                Color Palette · DA.5102
              </span>
            </div>
            <SectionLabel text="10. PALET WARNA RESMI" />
            <h2
              className="font-mileast italic font-bold mt-2 leading-none uppercase gold-text"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 64px)' }}
            >
              The Four Official Hues
            </h2>
            <FleuronDivider />
            <p className="font-cormorant-sc text-xs sm:text-sm tracking-widest text-[#EDE8E2]/75 uppercase max-w-xl mx-auto mt-2">
              Empat Pilar Spektrum Warna Resmi Berdasarkan Panduan Identitas Visual
            </p>
          </FadeIn>

          {/* Color Swatch Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {colorPalette.map((c, idx) => (
              <FadeIn key={c.name} delay={0.1 * (idx + 1)}>
                <div className="bg-[#FAF8F5] text-[#192E41] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#B58A3C]/40 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300">
                  {/* Top Solid Color Swatch Bar */}
                  <div
                    className="h-3 w-full border-b border-[#B58A3C]/40"
                    style={{ background: c.hex }}
                  />

                  {/* Wax Seal Card Image Header */}
                  <div className="p-4 bg-[#EDE8E2] border-b border-[#B58A3C]/20 flex items-center justify-center">
                    <img
                      src={c.img}
                      alt={c.name}
                      className="w-full max-h-56 object-contain filter drop-shadow-md rounded group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Color Details & Specs */}
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-mileast font-bold text-lg text-[#192E41]">
                          {c.name}
                        </h4>
                        <button
                          onClick={() => copyHex(c.hex)}
                          className="px-2 py-1 rounded-md text-[11px] font-mono font-bold bg-[#192E41]/10 hover:bg-[#B58A3C] hover:text-[#192E41] text-[#325956] transition-colors cursor-pointer flex items-center gap-1"
                          title="Klik untuk salin kode HEX"
                        >
                          {copiedHex === c.hex ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-700 font-bold">Tersalin!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Salin</span>
                            </>
                          )}
                        </button>
                      </div>
                      <div className="text-xs font-mono font-bold text-[#B58A3C] mb-3 flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full border border-black/20" style={{ background: c.hex }} />
                        <span>{c.hex}</span>
                      </div>
                      <div className="space-y-1 font-mono text-[11px] text-[#192E41]/75 bg-[#EDE8E2] p-2.5 rounded-lg border border-[#B58A3C]/20">
                        <div>RGB: {c.rgb}</div>
                        <div>CMYK: {c.cmyk}</div>
                      </div>
                      <p className="font-alverata text-xs text-[#325956] mt-3 italic font-semibold">
                        {c.role}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Hanging Gold Phone & Archival Note (Ref: Slide 10) */}
          <FadeIn delay={0.4}>
            <div className="p-6 rounded-xl bg-[#325956]/40 border border-[#B58A3C]/40 text-center max-w-2xl mx-auto backdrop-blur">
              <span className="font-cormorant-sc text-xs tracking-widest text-[#B58A3C] uppercase font-bold block mb-1">
                ✦ Ketentuan Penggunaan Warna ✦
              </span>
              <p className="font-alverata text-xs sm:text-sm text-[#EDE8E2]/85 leading-relaxed">
                Kombinasi Navy Blue dan Green Teal menjadi pondasi kedalaman spiritual & institusional, sementara Bone White menghadirkan tekstur kanvas kertas tua yang hangat dan Golden Metal memberikan sentuhan kehormatan mahakarya.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 11. TIPOGRAFI & SISTEM FONT RESMI (Ref: Slide 11) ─────────────── */}
      <section className="py-24 px-4 sm:px-6 md:px-12 bg-[#EDE8E2] text-[#192E41] relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn delay={0} className="text-center mb-16">
            <div className="luggage-tag mb-3 bg-[#FAF8F5]">
              <span className="luggage-tag-twine" />
              <span className="font-cormorant-sc text-xs tracking-widest font-bold uppercase">
                Typography System · DA.5102
              </span>
            </div>
            <SectionLabel text="11. SISTEM TIPOGRAFI & FONT RESMI" />
            <h2
              className="font-mileast italic font-bold mt-2 leading-none uppercase text-[#192E41]"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 68px)' }}
            >
              Pedoman Tipografi Resmi
            </h2>
            <FleuronDivider />
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
            {/* 1. Arabic Font: Naveid */}
            <FadeIn delay={0.1}>
              <div className="bg-[#FAF8F5] p-8 rounded-3xl shadow-xl border border-[#B58A3C]/40 flex flex-col justify-between h-full interactive-card shine-card-hover group">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#325956] text-[#EDE8E2] text-[10px] font-cormorant-sc tracking-widest uppercase font-bold mb-4">
                    Arabic Font · Naveid
                  </div>
                  <h3 className="font-mileast font-bold text-2xl text-[#192E41] mb-2 group-hover:text-[#325956] transition-colors">
                    Naveid Calligraphy
                  </h3>
                  <p className="font-alverata text-xs text-[#192E41]/75 mb-6">
                    Font Arab berkarakter tegas dan anggun untuk seluruh teks kalam mutiara Mahfudzot dan ayat suci.
                  </p>
                  <div className="p-6 bg-[#EDE8E2] rounded-2xl border border-[#B58A3C]/30 text-center my-4">
                    <div className="font-arabic font-bold text-3xl sm:text-4xl text-[#325956] leading-loose filter drop-shadow-sm" dir="rtl">
                      {customFontText || "بِقَدْرِ الْكَدِّ تُكْتَسَبُ الْمَعَالِي"}
                    </div>
                  </div>
                </div>
                <div className="text-[11px] font-mono text-[#325956] mt-4 pt-4 border-t border-[#192E41]/10 flex justify-between items-center">
                  <span>Sample: Biqadril Kaddi Tuktasabul Ma'aaliy</span>
                  <span className="text-[#B58A3C]">ARABIC</span>
                </div>
              </div>
            </FadeIn>

            {/* 2. Headline Font: MILEAST */}
            <FadeIn delay={0.15}>
              <div className="bg-[#FAF8F5] p-8 rounded-3xl shadow-xl border-2 border-[#B58A3C] flex flex-col justify-between h-full relative interactive-card shine-card-hover group">
                <div className="absolute top-0 right-0 bg-[#B58A3C] text-[#192E41] text-[9px] font-cormorant-sc uppercase tracking-widest px-3 py-1 rounded-bl-xl font-bold">
                  Official Display
                </div>
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#192E41] text-[#EDE8E2] text-[10px] font-cormorant-sc tracking-widest uppercase font-bold mb-4">
                    Headline Font · MILEAST
                  </div>
                  <h3 className="font-mileast font-bold text-2xl text-[#192E41] mb-2 group-hover:text-[#B58A3C] transition-colors">
                    MILEAST Serif
                  </h3>
                  <p className="font-alverata text-xs text-[#192E41]/75 mb-6">
                    Font serif berbobot historis megah dengan karakter tajam, dipergunakan pada tajuk utama, judul persembahan, dan monogram.
                  </p>
                  <div className="p-6 bg-[#192E41] rounded-2xl border border-[#B58A3C]/40 text-center my-4 text-[#EDE8E2]">
                    <div className="font-mileast font-bold text-2xl sm:text-3xl tracking-wide uppercase gold-text">
                      {customFontText || "DRAMA ARENA"}
                    </div>
                    <div className="font-mileast italic text-lg sm:text-xl text-[#EDE8E2] mt-1">
                      Est. 2027
                    </div>
                  </div>
                </div>
                <div className="text-[11px] font-mono text-[#192E41] mt-4 pt-4 border-t border-[#192E41]/10 flex justify-between items-center">
                  <span>Styles: Regular, Italic, Bold, Display</span>
                  <span className="text-[#D4A853] font-bold">DISPLAY</span>
                </div>
              </div>
            </FadeIn>

            {/* 3. Body Text Font: ALVERATA */}
            <FadeIn delay={0.2}>
              <div className="bg-[#FAF8F5] p-8 rounded-3xl shadow-xl border border-[#B58A3C]/40 flex flex-col justify-between h-full interactive-card shine-card-hover group">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#325956] text-[#EDE8E2] text-[10px] font-cormorant-sc tracking-widest uppercase font-bold mb-4">
                    Body Text Font · ALVERATA
                  </div>
                  <h3 className="font-mileast font-bold text-2xl text-[#192E41] mb-2 group-hover:text-[#325956] transition-colors">
                    ALVERATA
                  </h3>
                  <p className="font-alverata text-xs text-[#192E41]/75 mb-6">
                    Tipografi teks tubuh buku klasik dengan tingkat keterbacaan tinggi yang terinspirasi dari epigrafi abad pertengahan.
                  </p>
                  <div className="p-6 bg-[#EDE8E2] rounded-2xl border border-[#B58A3C]/30 my-4 text-[#192E41]">
                    <p className="font-alverata text-sm font-semibold leading-relaxed">
                      "{customFontText || "Sadar, dalam perjuangan. Sadar, akan nilai-nilai Islami. Utuh dalam kebersamaan. Drama Arena 5102."}"
                    </p>
                  </div>
                </div>
                <div className="text-[11px] font-mono text-[#325956] mt-4 pt-4 border-t border-[#192E41]/10 flex justify-between items-center">
                  <span>Styles: Alverata Lt, Regular, 300, 400</span>
                  <span className="text-[#325956] font-bold">BODY</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Interactive Font Live Preview Input Bar */}
          <FadeIn delay={0.25}>
            <div className="max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border-2 border-[#B58A3C]/40 shadow-xl flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#325956] font-bold flex-shrink-0">
                <Type className="w-4 h-4 text-[#B58A3C]" />
                <span>UJI COBA FONT LANGSUNG:</span>
              </div>
              <input
                type="text"
                value={customFontText}
                onChange={(e) => setCustomFontText(e.target.value)}
                placeholder="Ketik teks kustom di sini untuk menguji ketiga font..."
                className="w-full px-4 py-2 rounded-xl bg-white border border-[#B58A3C]/30 text-xs sm:text-sm text-[#192E41] placeholder-gray-400 focus:outline-none focus:border-[#B58A3C] shadow-inner font-dm"
              />
              <button
                onClick={() => setCustomFontText('Sadar Dalam Perjuangan, Utuh Dalam Kebersamaan')}
                className="px-3 py-2 rounded-xl bg-[#192E41] text-[#EDE8E2] hover:bg-[#B58A3C] hover:text-[#192E41] text-[11px] font-mono font-bold transition-colors cursor-pointer flex-shrink-0"
              >
                Reset
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};
export default AboutSection;
