import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { SectionLabel, FleuronDivider } from './HeroSection';
import { Waves, Sparkles, Copy, Check, Type, Bookmark } from 'lucide-react';
import { importImage } from '../utils/assetHelpers';

const philosophyItems = [
  { title: 'The Great Wave of Kanagawa', subtitle: 'Kekuatan Alam, Ujian & Resiliensi', desc: 'Gelombang raksasa melambangkan kekuatan alam yang berada di luar kendali manusia. Dalam interpretasi filosofis, gelombang tersebut menggambarkan ujian, kesulitan, dan berbagai tantangan kehidupan. Manusia tidak selalu mampu mengendalikan keadaan yang dihadapinya, namun manusia tetap memiliki pilihan luhur untuk menentukan bagaimana ia menghadapi keadaan tersebut dengan kesadaran penuh.', icon: Waves },
  { title: 'Ornamen Floral Arabesque', subtitle: 'Harmoni Seni Islam & Kesinambungan', desc: 'Sebagai seni ornamen yang berkembang megah dalam tradisi seni Islam, dengan karakteristik khas berupa sulur tumbuhan, dedaunan, dan pola geometris yang saling terhubung erat serta berulang secara harmonis. Menggambarkan jalinan ukhuwah santri yang tak terputus dan keindahan akhlak yang terus bersemi.', icon: Sparkles },
  { title: 'Stilisasi Huruf D & A', subtitle: 'Simbol Pagelaran Seni Akbar DA', desc: 'Sebagai implementasi visual identitas resmi Drama Arena, yaitu perhelatan pagelaran seni akbar tahunan termegah di Pondok Modern Darussalam Gontor yang dikoordinasikan secara mandiri dan penuh dedikasi oleh siswa-siswa kelas 5 KMI demi mempersembahkan karya masterpiece sejati.', icon: Bookmark },
];

const colorPalette = [
  { name: 'Navy Blue', hex: '#192E41', rgb: '25, 46, 65', cmyk: '62, 29, 0, 75', img: importImage('color-card-navy.png'), role: 'Warna Primer Kedalaman & Keteguhan' },
  { name: 'Green Teal', hex: '#325956', rgb: '50, 89, 86', cmyk: '44, 0, 3, 65', img: importImage('color-card-teal.png'), role: 'Warna Sekunder Ketenangan & Spiritualitas' },
  { name: 'Bone White', hex: '#EDE8E2', rgb: '237, 232, 226', cmyk: '0, 2, 5, 7', img: importImage('color-card-bone.png'), role: 'Warna Dasar Kanvas & Kemurnian Hati' },
  { name: 'Golden Metal', hex: '#B58A3C', rgb: '181, 138, 60', cmyk: '0, 24, 67, 29', img: importImage('color-card-gold.png'), role: 'Aksen Emas Kemuliaan & Prestise Luhur' },
];

export const AboutSection: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [selectedLogo, setSelectedLogo] = useState<'wave' | 'monogram'>('wave');
  const [customFontText, setCustomFontText] = useState('Sadar Dalam Perjuangan');
  const [activePaletteIndex, setActivePaletteIndex] = useState(0);

  const copyHex = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      window.setTimeout(() => setCopiedHex(null), 1800);
    } catch {
      setCopiedHex(null);
    }
  };

  const activeColor = colorPalette[activePaletteIndex];

  return (
    <>
      <section id="about" className="da-identity-section relative overflow-hidden px-4 py-24 text-[#192E41] sm:px-6 md:px-12 lg:py-32">
        <div className="da-identity-watermark" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <FadeIn className="mb-14 border-b border-[#192E41]/15 pb-8 text-center">
            <span className="da-kicker da-kicker-dark justify-center"><span className="da-kicker-dot" /> FOLIO 04 / BRAND IDENTITY</span>
            <h2 className="mt-5 font-mileast text-4xl leading-none tracking-tight sm:text-6xl lg:text-7xl">Makna <em className="text-[#8E6B28]">&</em> Filosofi Lambang</h2>
            <FleuronDivider />
            <p className="font-cormorant-sc text-xs uppercase tracking-[.2em] text-[#325956]">Harmonisasi Gelombang Kanagawa, Ornamen Arabesque, dan Monogram DA</p>
          </FadeIn>

          <div className="mb-16 grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
            <FadeIn>
              <div className="da-logo-hero relative flex min-h-[430px] flex-col justify-between overflow-hidden p-7 sm:p-9">
                <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[.18em] text-[#D4A853]"><span>Official emblem / 5102</span><span>0{selectedLogo === 'wave' ? 1 : 2}</span></div>
                <div className="relative mx-auto flex h-64 w-full max-w-sm items-center justify-center">
                  <img key={selectedLogo} src={importImage(selectedLogo === 'wave' ? 'logo-da-wave-transparent.png' : 'logo-da-monogram-transparent.png')} alt={selectedLogo === 'wave' ? 'Logo Ornamen Ombak DA' : 'Logo Monogram DA'} className="da-logo-main-image h-full w-full object-contain drop-shadow-2xl" />
                </div>
                <div className="border-t border-[#D4A853]/25 pt-5">
                  <p className="font-cormorant-sc text-[9px] uppercase tracking-[.22em] text-[#D4A853]">{selectedLogo === 'wave' ? 'Varian 01 · Lambang Utama' : 'Varian 02 · Monogram'}</p>
                  <h3 className="mt-2 font-mileast text-2xl text-[#F4EEE4]">{selectedLogo === 'wave' ? 'Ornamen Bentuk Ombak DA' : 'Monogram Interlocking DA'}</h3>
                  <p className="mt-2 max-w-lg font-alverata text-sm leading-6 text-[#EDE8E2]/70">{selectedLogo === 'wave' ? 'Ornamen bentuk ombak simetris yang membentuk stilisasi huruf D & A, merepresentasikan kekuatan lautan perjuangan dan keanggunan seni Islam dalam satu segel paripurna.' : 'Monogram huruf D dan A yang saling mengunci dengan garis berkarakter tegas dan tekstur vintage, menegaskan nama dan identitas kuat acara Drama Arena.'}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="flex h-full flex-col justify-between border-y border-[#192E41]/20 py-6 lg:py-8">
                <div>
                  <span className="da-kicker da-kicker-dark">Pilih varian lambang</span>
                  <div className="mt-5 grid grid-cols-2 gap-3" role="group" aria-label="Pilih varian lambang">
                    <button type="button" aria-pressed={selectedLogo === 'wave'} onClick={() => setSelectedLogo('wave')} className={`da-logo-choice ${selectedLogo === 'wave' ? 'is-active' : ''}`}>
                      <img src={importImage('logo-da-wave-transparent.png')} alt="" aria-hidden="true" />
                      <span><small>VARIAN 01</small><strong>Wave Emblem</strong></span>
                    </button>
                    <button type="button" aria-pressed={selectedLogo === 'monogram'} onClick={() => setSelectedLogo('monogram')} className={`da-logo-choice ${selectedLogo === 'monogram' ? 'is-active' : ''}`}>
                      <img src={importImage('logo-da-monogram-transparent.png')} alt="" aria-hidden="true" />
                      <span><small>VARIAN 02</small><strong>DA Monogram</strong></span>
                    </button>
                  </div>
                </div>
                <div className="mt-10">
                  <span className="da-kicker da-kicker-dark">Anatomi identitas visual</span>
                  <div className="mt-5 space-y-0">
                    {philosophyItems.map((item, index) => {
                      const Icon = item.icon;
                      return <article key={item.title} className="da-philosophy-row group">
                        <div className="flex items-center gap-4">
                          <span className="da-philosophy-index">0{index + 1}</span>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-mileast text-lg leading-tight text-[#192E41]">{item.title}</h3>
                            <p className="mt-1 font-cormorant-sc text-[9px] font-bold uppercase tracking-[.13em] text-[#8E6B28]">{item.subtitle}</p>
                          </div>
                          <Icon size={19} strokeWidth={1.4} className="text-[#8E6B28] transition-transform group-hover:rotate-[-8deg]" />
                        </div>
                        <p className="mt-3 pl-12 font-alverata text-xs leading-6 text-[#192E41]/70">{item.desc}</p>
                      </article>;
                    })}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="da-palette-section relative overflow-hidden px-4 py-24 text-[#EDE8E2] sm:px-6 md:px-12 lg:py-32">
        <div className="relative z-10 mx-auto max-w-7xl">
          <FadeIn className="mb-12 grid items-end gap-5 border-b border-[#D4A853]/25 pb-7 md:grid-cols-[1fr_auto]">
            <div><span className="da-kicker"><span className="da-kicker-dot" /> FOLIO 05 / COLOR PALETTE</span><h2 className="mt-5 font-mileast text-4xl leading-none sm:text-6xl">The Four <em className="text-[#D4A853]">Official Hues</em></h2></div>
            <p className="max-w-xs font-cormorant-sc text-xs uppercase leading-6 tracking-[.16em] text-[#EDE8E2]/55 md:text-right">Empat pilar spektrum warna resmi berdasarkan panduan identitas visual</p>
          </FadeIn>

          <div className="grid gap-7 lg:grid-cols-[.9fr_1.1fr]">
            <FadeIn>
              <div className="da-color-feature">
                <div className="da-color-feature-swatch" style={{ background: activeColor.hex }} />
                <div className="flex items-start justify-between gap-4">
                  <div><span className="font-mono text-[9px] uppercase tracking-[.18em] text-[#D4A853]">Selected color / 0{activePaletteIndex + 1}</span><h3 className="mt-2 font-mileast text-3xl text-[#F4EEE4]">{activeColor.name}</h3></div>
                  <button type="button" onClick={() => copyHex(activeColor.hex)} className="da-copy-button" aria-label={copiedHex === activeColor.hex ? 'Kode warna tersalin' : `Salin kode warna ${activeColor.hex}`}>{copiedHex === activeColor.hex ? <Check size={15} /> : <Copy size={15} />}<span>{copiedHex === activeColor.hex ? 'Tersalin' : 'Salin HEX'}</span></button>
                </div>
                <p className="mt-3 font-alverata text-sm italic text-[#EDE8E2]/65">{activeColor.role}</p>
                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="da-color-spec"><small>HEX</small><strong>{activeColor.hex}</strong></div>
                  <div className="da-color-spec"><small>RGB</small><strong>{activeColor.rgb}</strong></div>
                  <div className="da-color-spec col-span-2"><small>CMYK</small><strong>{activeColor.cmyk}</strong></div>
                </div>
              </div>
            </FadeIn>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {colorPalette.map((color, index) => (
                <FadeIn key={color.name} delay={index * .06}>
                  <button type="button" aria-pressed={activePaletteIndex === index} onClick={() => setActivePaletteIndex(index)} className={`da-color-option ${activePaletteIndex === index ? 'is-active' : ''}`}>
                    <span className="da-color-option-chip" style={{ background: color.hex }} />
                    <span className="mt-4 block font-mileast text-lg text-[#F4EEE4] sm:text-xl">{color.name}</span>
                    <span className="mt-1 block font-mono text-[10px] tracking-wider text-[#D4A853]">{color.hex}</span>
                    <img src={color.img} alt={`Segel warna ${color.name}`} className="mt-3 h-20 w-full object-contain opacity-85 transition-transform duration-300 group-hover:scale-105" />
                  </button>
                </FadeIn>
              ))}
            </div>
          </div>
          <FadeIn delay={0.25}>
            <p className="mx-auto mt-9 max-w-3xl border-l border-[#D4A853]/60 pl-5 font-alverata text-sm leading-7 text-[#EDE8E2]/65">Kombinasi Navy Blue dan Green Teal menjadi pondasi kedalaman spiritual & institusional, sementara Bone White menghadirkan tekstur kanvas kertas tua yang hangat dan Golden Metal memberikan sentuhan kehormatan mahakarya.</p>
          </FadeIn>
        </div>
      </section>

      <section className="da-type-section relative overflow-hidden px-4 py-24 text-[#192E41] sm:px-6 md:px-12 lg:py-32">
        <div className="relative z-10 mx-auto max-w-7xl">
          <FadeIn className="mb-12 text-center">
            <span className="da-kicker da-kicker-dark justify-center"><span className="da-kicker-dot" /> FOLIO 06 / TYPOGRAPHY</span>
            <h2 className="mt-5 font-mileast text-4xl leading-none sm:text-6xl">Pedoman <em className="text-[#8E6B28]">Tipografi Resmi</em></h2>
            <FleuronDivider />
          </FadeIn>

          <div className="grid gap-4 lg:grid-cols-3">
            <FadeIn><article className="da-type-spec"><span>ARABIC FONT / NAVEID</span><h3>Naveid Calligraphy</h3><p>Font Arab berkarakter tegas dan anggun untuk seluruh teks kalam mutiara Mahfudzot dan ayat suci.</p><div className="da-type-sample text-center"><span className="font-arabic text-4xl text-[#325956]" dir="rtl">بِقَدْرِ الْكَدِّ تُكْتَسَبُ الْمَعَالِي</span></div><small>ARABIC SCRIPT</small></article></FadeIn>
            <FadeIn delay={0.08}><article className="da-type-spec da-type-spec-featured"><span>HEADLINE FONT / MILEAST</span><h3>MILEAST Serif</h3><p>Font serif berbobot historis megah dengan karakter tajam, dipergunakan pada tajuk utama, judul persembahan, dan monogram.</p><div className="da-type-sample da-type-sample-dark text-center"><strong className="font-mileast text-3xl text-[#F3E1B8]">{customFontText || 'DRAMA ARENA'}</strong><em className="mt-2 block font-mileast text-lg text-[#EDE8E2]">Est. 2027</em></div><small>OFFICIAL DISPLAY</small></article></FadeIn>
            <FadeIn delay={0.16}><article className="da-type-spec"><span>BODY TEXT FONT / ALVERATA</span><h3>ALVERATA</h3><p>Tipografi teks tubuh buku klasik dengan tingkat keterbacaan tinggi yang terinspirasi dari epigrafi abad pertengahan.</p><div className="da-type-sample"><p className="font-alverata text-sm leading-6">{customFontText || 'Sadar, dalam perjuangan. Utuh dalam kebersamaan.'}</p></div><small>EDITORIAL BODY</small></article></FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="da-type-playground mt-8">
              <label htmlFor="da-font-preview" className="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[.16em] text-[#8E6B28]"><Type size={14} /> Uji coba font langsung</label>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <input id="da-font-preview" type="text" value={customFontText} onChange={(event) => setCustomFontText(event.target.value)} placeholder="Ketik teks untuk melihat preview tipografi..." className="min-w-0 flex-1 border-b border-[#192E41]/25 bg-transparent px-1 py-3 font-alverata text-sm text-[#192E41] outline-none transition-colors placeholder:text-[#192E41]/40 focus:border-[#B58A3C]" />
                <button type="button" onClick={() => setCustomFontText('Sadar Dalam Perjuangan, Utuh Dalam Kebersamaan')} className="da-reset-button">Reset preview</button>
              </div>
              <p className="mt-3 font-cormorant-sc text-[9px] uppercase tracking-[.15em] text-[#192E41]/45">Preview teks pada MILEAST dan ALVERATA diperbarui secara langsung.</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
