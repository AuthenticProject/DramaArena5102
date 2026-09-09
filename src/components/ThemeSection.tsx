import React from 'react';
import { FadeIn } from './FadeIn';
import { SectionLabel, FleuronDivider } from './HeroSection';
import { TypographyDecor } from './TypographyDecor';

const sadarPillars = [
  {
    num: '01',
    title: 'Adab Sebelum Ilmu',
    desc: 'Memahami rasa hormat dan tata krama sebagai fondasi utama sebelum menerima luasnya cakrawala pengetahuan.',
  },
  {
    num: '02',
    title: 'Nilai-Nilai Islam',
    desc: 'Menjadikan syariat dan keikhlasan sebagai nafas di setiap denyut langkah pergerakan santri.',
  },
  {
    num: '03',
    title: 'Amanah Sebelum Kedudukan',
    desc: 'Tanggung jawab adalah amanah suci yang wajib ditunaikan, bukan sekadar mengejar prestise posisi.',
  },
  {
    num: '04',
    title: 'Perjuangan Sebelum Keberhasilan',
    desc: 'Meyakini bahwa keringat, proses panjang, dan kebersamaan adalah esensi dari kemenangan sejati.',
  },
  {
    num: '05',
    title: 'Proses Membentuk Jati Diri',
    desc: 'Sadar bahwa setiap proses di pondok membentuk karakter dan jati diri yang tak ternilai harganya.',
  },
];

export const ThemeSection: React.FC = () => {
  return (
    <section id="theme" className="relative py-24 px-5 sm:px-8 md:px-12 classic-border overflow-hidden" style={{ background: '#062B4A' }}>
      {/* Subtle Repeating Typography Background Pattern */}
      <TypographyDecor
        sectionId="theme"
        variant="main"
        mode="repeat-tile"
        opacity={0.035}
      />

      {/* Floating typography watermark */}
      <TypographyDecor
        sectionId="theme"
        variant="main"
        mode="background-watermark"
        opacity={0.05}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn delay={0} className="text-center mb-14">
          <SectionLabel text="TEMA & FILOSOFI" />
          <h2
            className="font-mileast italic font-bold mt-3 leading-tight gold-text"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 48px)' }}
          >
            "Sadar akan Nilai-Nilai Perjuangan,<br />Tumbuhkan Semangat Kebersamaan."
          </h2>
          <FleuronDivider />
          <p className="font-cormorant-sc text-sm mt-2 max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(244,241,235,0.72)' }}>
            Setiap santri menjalani perjalanan yang berbeda di setiap jenjang kehidupannya di pondok. Drama Arena 5102
            mengangkat perjalanan tersebut sebagai sebuah proses penyadaran — perjalanan memahami siapa diri kita sebagai santri.
          </p>
        </FadeIn>

        {/* 5-Pillar Grid */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-14">
            {sadarPillars.map((pillar, i) => (
              <div
                key={pillar.num}
                className="p-6 transition-all duration-300 hover:-translate-y-1 group relative rounded-lg overflow-hidden backdrop-blur-sm"
                style={{
                  border: i === 0 ? '1.5px solid #D69103' : '1.5px solid rgba(214,145,3,0.35)',
                  background: 'rgba(3,28,51,0.85)',
                }}
              >
                <span
                  className="font-mileast font-bold text-3xl block mb-3 transition-colors group-hover:text-[#F5D98A]"
                  style={{ color: '#D69103' }}
                >
                  {pillar.num}
                </span>
                <h3 className="font-playfair font-bold text-sm text-white mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="font-cormorant-sc text-xs leading-relaxed" style={{ color: 'rgba(244,241,235,0.72)' }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Ornamental Divider */}
        <TypographyDecor variant="4" mode="divider-banner" className="my-6 opacity-60" />

        {/* Arabic Quote */}
        <FadeIn delay={0.2}>
          <div
            className="p-8 sm:p-12 text-center pulse-glow rounded-xl relative overflow-hidden"
            style={{ background: 'rgba(3,28,51,0.92)', border: '2px solid rgba(214,145,3,0.45)' }}
          >
            <div className="font-cormorant-sc text-xs tracking-widest uppercase mb-6" style={{ color: '#D69103' }}>
              ✦ KUTIPAN ACARA ✦
            </div>
            <div className="font-mileast italic font-bold leading-snug mb-1" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.8rem)', color: '#D69103' }}>
              "Innamad-dunyā ḥadītsun ba'dahū,
            </div>
            <div className="font-mileast italic font-bold leading-snug mb-6" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.8rem)', color: '#F4F1EB' }}>
              fakun ḥadītsan ḥasanan liman wa'ā."
            </div>
            <p className="font-cormorant-sc text-xs tracking-widest" style={{ color: 'rgba(244,241,235,0.6)' }}>
              "Sesungguhnya dunia hanyalah cerita, maka jadilah cerita yang baik bagi yang mendengarnya."
            </p>
            <FleuronDivider />
            <div className="font-mileast text-6xl sm:text-8xl font-bold gold-text mt-2">5102</div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
