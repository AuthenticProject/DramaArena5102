import React from 'react';
import { FadeIn } from './FadeIn';
import { SectionLabel, FleuronDivider, StampLogo } from './HeroSection';
import { Star } from 'lucide-react';
import { TypographyDecor } from './TypographyDecor';
import { importImage } from '../utils/assetHelpers';

const pillarsData = [
  { en: "Educating", id: "Mendidik", desc: "Setiap sajian seni mengandung nilai dan pesan moral Islami yang mendidik jiwa santri." },
  { en: "Entertaining", id: "Menghibur", desc: "Hiburan yang sehat, penuh semangat, dan memberikan pengalaman estetika yang luar biasa." },
  { en: "Elegant", id: "Elegan", desc: "Tampilan artistik yang anggun, berkelas, dan mencerminkan kebudayaan Nusantara." },
  { en: "Enjoyable", id: "Menyenangkan", desc: "Suasana yang hangat dan penuh kegembiraan untuk seluruh sivitas pondok." }
];

export const AboutSection: React.FC = () => {
  return (
    <>
      {/* ── ABOUT / PROFILE ──────────────────────────────────────────── */}
      <section id="about" className="relative py-24 px-5 sm:px-8 md:px-12 max-w-6xl mx-auto overflow-hidden">
        {/* Subtle typography accent */}
        <TypographyDecor
          sectionId="about"
          variant="2"
          mode="corner-ornament"
          position="top-right"
          opacity={0.06}
        />

        <FadeIn delay={0} className="text-center mb-16 relative z-10">
          <SectionLabel text="PROFIL SINGKAT" />
          <h2 className="font-mileast italic font-bold mt-3 leading-none uppercase" style={{ fontSize: 'clamp(2rem, 6vw, 72px)', color: '#062B4A' }}>
            Tentang Acara
          </h2>
          <FleuronDivider />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          <FadeIn delay={0.1}>
            <div className="classic-card rounded-2xl p-8 h-full">
              <div className="font-cormorant-sc text-xs tracking-widest uppercase mb-2" style={{ color: '#D69103' }}>Penyelenggara</div>
              <h3 className="font-playfair font-bold text-2xl mb-4" style={{ color: '#062B4A' }}>Pondok Modern Darussalam Gontor</h3>
              <p className="font-baskerville text-sm leading-relaxed mb-4" style={{ color: '#062B4A', opacity: 0.8 }}>
                PMDG merupakan lembaga pendidikan Islam pesantren modern bertaraf internasional yang kini dipimpin oleh Trimurti: Dr. K.H. Abdullah Syukri Zarkasyi, M.A., K.H. Hasan Abdullah Sahal, dan K.H. Syamsul Hadi Abdan, S.Ag.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  ['32.000+', 'Santri & Asatidz'],
                  ['20', 'Kampus PMDG'],
                  ['441', 'Santri Kelas 5 KMI'],
                  ['5.000+', 'Estimasi Penonton']
                ].map(([num, label]) => (
                  <div key={label} className="text-center p-3 rounded-lg" style={{ background: 'rgba(214,145,3,0.08)', border: '1px solid rgba(214,145,3,0.2)' }}>
                    <div className="font-mileast text-2xl font-bold gold-text">{num}</div>
                    <div className="font-cormorant-sc text-xs tracking-wider" style={{ color: '#062B4A', opacity: 0.7 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="classic-card rounded-2xl p-8 h-full">
              <div className="font-cormorant-sc text-xs tracking-widest uppercase mb-2" style={{ color: '#D69103' }}>Maksud & Tujuan</div>
              <h3 className="font-playfair font-bold text-2xl mb-4" style={{ color: '#062B4A' }}>Drama Arena 5102</h3>
              <p className="font-baskerville text-sm leading-relaxed mb-4" style={{ color: '#062B4A', opacity: 0.8 }}>
                Salah satu rangkaian acara utama dalam Pekan Perkenalan Khutbatu-l-'Arsy yang diselenggarakan oleh siswa kelas 5 KMI PMDG T.A. 1447-1448 / 2026-2027.
              </p>
              <hr className="gold-rule my-4" />
              <div className="font-cormorant-sc text-xs tracking-widest uppercase mb-3" style={{ color: '#D69103' }}>4 Unsur Pertunjukan</div>
              <div className="grid grid-cols-2 gap-3">
                {pillarsData.map(p => (
                  <div key={p.en} className="flex items-center gap-2">
                    <Star className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#D69103' }} />
                    <span className="font-cormorant-sc text-sm font-semibold" style={{ color: '#062B4A' }}>{p.en}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Decorative divider banner */}
        <TypographyDecor variant="4" mode="divider-banner" className="mt-14" />
      </section>

      {/* ── BRAND IDENTITY ───────────────────────────────────────────── */}
      <section className="py-20 px-5 sm:px-8 relative overflow-hidden" style={{ background: '#062B4A' }}>
        {/* Subtle typography pattern */}
        <TypographyDecor
          sectionId="about"
          variant="2"
          mode="repeat-tile"
          opacity={0.03}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn delay={0} className="text-center mb-14">
            <span className="font-cormorant-sc text-xs tracking-[0.4em] uppercase" style={{ color: '#D69103' }}>✦ BRAND IDENTITY ✦</span>
            <h2 className="font-mileast italic font-bold mt-3 leading-none uppercase gold-text" style={{ fontSize: 'clamp(2rem, 5vw, 60px)' }}>
              Drama Arena 5102
            </h2>
            <FleuronDivider />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Color Palette */}
            <FadeIn delay={0.1}>
              <div className="p-6 rounded-2xl h-full backdrop-blur-sm" style={{ border: '1px solid rgba(214,145,3,0.3)', background: 'rgba(244,241,235,0.06)' }}>
                <div className="font-cormorant-sc text-xs tracking-widest uppercase mb-4" style={{ color: '#D69103' }}>Color Palette</div>
                <div className="flex flex-col gap-3">
                  {[
                    { hex: '#062B4A', name: 'Navy Blue', label: '#062b4a' },
                    { hex: '#D69103', name: 'Gold', label: '#d69103' },
                    { hex: '#F4F1EB', name: 'Bone White', label: '#f4f1eb' }
                  ].map(c => (
                    <div key={c.name} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex-shrink-0 border" style={{ background: c.hex, borderColor: 'rgba(214,145,3,0.4)' }} />
                      <div>
                        <div className="font-cormorant-sc text-sm font-bold" style={{ color: '#F4F1EB' }}>{c.name}</div>
                        <div className="font-cormorant-sc text-xs opacity-60" style={{ color: '#F4F1EB' }}>{c.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Branding Theme */}
            <FadeIn delay={0.15}>
              <div className="p-6 rounded-2xl h-full backdrop-blur-sm" style={{ border: '1px solid rgba(214,145,3,0.3)', background: 'rgba(244,241,235,0.06)' }}>
                <div className="font-cormorant-sc text-xs tracking-widest uppercase mb-4" style={{ color: '#D69103' }}>Branding Theme</div>
                {[
                  ['🏛', 'Old Classic', 'Estetika klasik bernilai tinggi'],
                  ['📮', 'Stamp / Prangko', 'Simbol perjalanan & pesan budaya'],
                  ['⏳', 'Jam Pasir', 'Perjalanan waktu yang tak berhenti'],
                  ['🖋', 'Monogram', 'Identitas visual DA yang menyatu']
                ].map(([ic, name, desc]) => (
                  <div key={name} className="flex items-start gap-3 mb-4">
                    <span className="text-2xl">{ic}</span>
                    <div>
                      <div className="font-cormorant-sc text-sm font-bold" style={{ color: '#D69103' }}>{name}</div>
                      <div className="font-cormorant-sc text-xs opacity-70" style={{ color: '#F4F1EB' }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Logo */}
            <FadeIn delay={0.2}>
              <div className="p-6 rounded-2xl h-full flex flex-col items-center justify-center backdrop-blur-sm" style={{ border: '1px solid rgba(214,145,3,0.3)', background: 'rgba(244,241,235,0.06)' }}>
                <div className="font-cormorant-sc text-xs tracking-widest uppercase mb-3" style={{ color: '#D69103' }}>Official Brand Stamp</div>
                <StampLogo size={135} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── THE MEANING OF BRANDING ───────────────────────────────────── */}
      <section className="py-24 px-5 sm:px-8 md:px-12 relative overflow-hidden" style={{ background: '#F4F1EB' }}>
        <TypographyDecor
          sectionId="about"
          variant="5"
          mode="corner-ornament"
          position="bottom-left"
          opacity={0.05}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn delay={0} className="text-center mb-16">
            <SectionLabel text="THE MEANING OF BRANDING" />
            <h2
              className="font-mileast italic font-bold mt-3 uppercase"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 54px)', color: '#062B4A', lineHeight: 1.1 }}
            >
              Makna di Balik Identitas
            </h2>
            <p className="font-cormorant-sc text-xs uppercase tracking-[0.25em] mt-2" style={{ color: '#D69103' }}>
              Old Classic · Stamp · Indonesian Culture · Sand Hour
            </p>
            <FleuronDivider />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Prangko */}
            <FadeIn delay={0.1}>
              <div
                className="p-8 h-full classic-card relative"
                style={{ background: 'white' }}
              >
                <div className="text-[#D69103] font-cormorant-sc text-xs font-bold tracking-widest uppercase mb-3">Elemen 01</div>
                <h3 className="font-mileast italic font-bold text-xl mb-4" style={{ color: '#062B4A' }}>Prangko (Stamp)</h3>
                <hr className="gold-rule mb-4" />
                <p className="font-cormorant-sc text-sm leading-relaxed" style={{ color: '#062B4A', opacity: 0.85 }}>
                  Prangko melambangkan perjalanan, pesan, dan sejarah. Sebagaimana nilai-nilai perjuangan yang diwariskan dari satu generasi ke generasi berikutnya, sejarah selalu memiliki ruang untuk dikenang.
                </p>
                <div className="mt-6 w-8 h-8 flex items-center justify-center rounded-full" style={{ background: 'rgba(214,145,3,0.08)', border: '1px solid rgba(214,145,3,0.3)' }}>
                  <span className="text-lg" style={{ color: '#D69103' }}>📮</span>
                </div>
              </div>
            </FadeIn>

            {/* Jam Pasir — highlighted */}
            <FadeIn delay={0.15}>
              <div
                className="p-8 h-full relative shadow-lg"
                style={{ background: 'white', border: '2px solid #D69103' }}
              >
                <div className="text-[#D69103] font-cormorant-sc text-xs font-bold tracking-widest uppercase mb-3">Elemen 02</div>
                <h3 className="font-mileast italic font-bold text-xl mb-4" style={{ color: '#062B4A' }}>Jam Pasir (Sandglass)</h3>
                <hr className="gold-rule mb-4" />
                <p className="font-cormorant-sc text-sm leading-relaxed" style={{ color: '#062B4A', opacity: 0.85 }}>
                  Simbol perjalanan waktu dan proses yang tidak pernah berhenti. Setiap butiran pasir melambangkan pengalaman dan nilai yang perlahan membentuk karakter santri yang tak ternilai.
                </p>
                <div className="mt-6 w-8 h-8 flex items-center justify-center rounded-full" style={{ background: 'rgba(214,145,3,0.12)', border: '1px solid #D69103' }}>
                  <span className="text-lg" style={{ color: '#D69103' }}>⏳</span>
                </div>
                <div className="absolute top-0 right-0 w-0 h-0" style={{ borderTop: '40px solid #D69103', borderLeft: '40px solid transparent' }} />
              </div>
            </FadeIn>

            {/* Monogram */}
            <FadeIn delay={0.2}>
              <div
                className="p-8 h-full classic-card relative"
                style={{ background: 'white' }}
              >
                <div className="text-[#D69103] font-cormorant-sc text-xs font-bold tracking-widest uppercase mb-3">Elemen 03</div>
                <h3 className="font-mileast italic font-bold text-xl mb-4" style={{ color: '#062B4A' }}>Monogram Huruf D & A</h3>
                <hr className="gold-rule mb-4" />
                <p className="font-cormorant-sc text-sm leading-relaxed" style={{ color: '#062B4A', opacity: 0.85 }}>
                  Stilisasi huruf D dan A yang menyatu di dalam jam pasir sebagai singkatan Drama Arena, mengikat pesan dan identitas visual dalam satu kesatuan harmonis.
                </p>
                <div className="mt-6 w-8 h-8 flex items-center justify-center rounded-full" style={{ background: 'rgba(214,145,3,0.08)', border: '1px solid rgba(214,145,3,0.3)' }}>
                  <span className="font-mileast font-bold text-sm" style={{ color: '#D69103' }}>DA</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
};
