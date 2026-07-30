import React from 'react';
import { FadeIn } from './FadeIn';
import { SectionLabel, FleuronDivider } from './HeroSection';

const sadarPillars = [
  "Sadar akan adab sebelum ilmu.",
  "Sadar akan nilai-nilai Islam.",
  "Sadar akan amanah sebelum kedudukan.",
  "Sadar akan perjuangan sebelum keberhasilan.",
  "Sadar bahwa setiap proses di pondok membentuk karakter dan jati diri."
];

export const ThemeSection: React.FC = () => {
  return (
    <section id="theme" className="py-24 px-5 sm:px-8 md:px-12">
      <div className="max-w-4xl mx-auto">
        <FadeIn delay={0} className="text-center mb-14">
          <SectionLabel text="TEMA & FILOSOFI" />
          <h2
            className="font-mileast italic font-bold mt-3 leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 60px)', color: '#062B4A' }}
          >
            "Sadar akan Nilai-Nilai<br />Perjuangan, Tumbuhkan<br />Semangat Kebersamaan."
          </h2>
          <FleuronDivider />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="classic-card rounded-3xl p-8 sm:p-12 mb-10">
            <p className="font-baskerville text-sm sm:text-base leading-loose mb-6" style={{ color: '#062B4A', opacity: 0.85, textIndent: '2em' }}>
              Setiap santri menjalani perjalanan yang berbeda di setiap jenjang kehidupannya di pondok. Dari langkah pertama sebagai santri baru hingga menjadi santri kelas lima, setiap fase membawa amanah, tantangan, dan pelajaran yang berbeda.
            </p>
            <p className="font-baskerville text-sm sm:text-base leading-loose mb-6" style={{ color: '#062B4A', opacity: 0.85, textIndent: '2em' }}>
              Drama Arena 5102 mengangkat perjalanan tersebut sebagai sebuah proses penyadaran — bukan sekadar perjalanan bertambahnya usia atau naiknya kelas, melainkan perjalanan memahami siapa diri kita sebagai santri.
            </p>
            <hr className="gold-rule my-6" />
            <div className="font-cormorant-sc text-xs tracking-widest uppercase mb-4" style={{ color: '#D69103' }}>Lima Kesadaran Santri</div>
            <div className="flex flex-col gap-3">
              {sadarPillars.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-mileast font-bold text-lg flex-shrink-0 gold-text">{i + 1}.</span>
                  <span className="font-baskerville text-sm leading-relaxed" style={{ color: '#062B4A' }}>{item}</span>
                </div>
              ))}
            </div>
            <hr className="gold-rule my-6" />
            <p className="font-baskerville italic text-sm leading-relaxed" style={{ color: '#062B4A', opacity: 0.8 }}>
              Ketika kesadaran itu tumbuh, lahirlah rasa memiliki terhadap pondok, tumbuh semangat kebersamaan, dan muncul keinginan untuk menjaga nilai-nilai yang diwariskan oleh para pendahulu agar tetap hidup di generasi berikutnya.
            </p>
          </div>
        </FadeIn>

        {/* Arabic Quote */}
        <FadeIn delay={0.2}>
          <div
            className="classic-card rounded-3xl p-8 sm:p-12 text-center"
            style={{ background: '#062B4A', border: '2px solid rgba(214,145,3,0.4)' }}
          >
            <div className="font-cormorant-sc text-xs tracking-widest uppercase mb-6" style={{ color: '#D69103' }}>
              ✦ KUTIPAN ACARA ✦
            </div>
            <div className="font-mileast italic font-bold leading-snug mb-4" style={{ fontSize: 'clamp(1.1rem, 3vw, 2rem)', color: '#D69103' }}>
              "Innama-d-dunya haditsun ba'dahu,
            </div>
            <div className="font-mileast italic font-bold leading-snug mb-6" style={{ fontSize: 'clamp(1.1rem, 3vw, 2rem)', color: '#F4F1EB' }}>
              fakun haditsan hasanan liman wa'a."
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
