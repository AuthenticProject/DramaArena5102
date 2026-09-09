import React from 'react';
import { SectionLabel, GoldButton } from './HeroSection';

interface FooterProps {
  onOpenSponsorshipModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSponsorshipModal, onNavigate }) => {
  return (
    <footer id="footer" style={{ background: '#062B4A' }}>
      {/* CTA Banner */}
      <div className="px-5 sm:px-8 md:px-12 py-16 border-b" style={{ borderColor: 'rgba(214,145,3,0.2)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel text="KEMITRAAN" />
          <h2
            className="font-mileast italic font-bold mt-4 leading-tight gold-text"
            style={{ fontSize: 'clamp(2rem, 5vw, 56px)' }}
          >
            Dukung Mahakarya<br />Santri Gontor
          </h2>
          <p className="font-baskerville text-sm mt-4 mb-8 max-w-xl mx-auto" style={{ color: 'rgba(244,241,235,0.75)' }}>
            Jadilah mitra sponsorship dan saksikan pagelaran seni budaya akbar siswa kelas 5 KMI Pondok Modern Darussalam Gontor.
          </p>
          <GoldButton onClick={onOpenSponsorshipModal} label="AJUKAN SPONSORSHIP" />
        </div>
      </div>

      {/* Footer links */}
      <div className="px-5 sm:px-8 md:px-12 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="font-mileast italic text-3xl font-bold gold-text mb-2">Drama Arena</div>
            <div className="font-cormorant-sc text-xs tracking-widest uppercase mb-3" style={{ color: 'rgba(214,145,3,0.7)' }}>
              5102 · Kelas 5 KMI PMDG
            </div>
            <p className="font-baskerville text-xs leading-relaxed" style={{ color: 'rgba(244,241,235,0.6)' }}>
              "Naluri dan Nurani" — Sadar akan nilai perjuangan, tumbuhkan semangat kebersamaan.
            </p>
          </div>
          <div>
            <div className="font-cormorant-sc text-xs tracking-widest uppercase mb-4" style={{ color: '#D69103' }}>
              Navigasi
            </div>
            <ul className="flex flex-col gap-2">
              {[
                ['Profil PMDG', 'about'],
                ['Tema & Filosofi', 'theme'],
                ['Ragam Acara', 'shows'],
                ['Susunan Panitia', 'committee']
              ].map(([label, id]) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(id)}
                    className="font-cormorant-sc text-xs tracking-wide hover:text-yellow-400 transition-colors cursor-pointer"
                    style={{ color: 'rgba(244,241,235,0.7)' }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-cormorant-sc text-xs tracking-widest uppercase mb-4" style={{ color: '#D69103' }}>
              Lokasi
            </div>
            <p className="font-baskerville text-xs leading-relaxed" style={{ color: 'rgba(244,241,235,0.7)' }}>
              Pondok Modern Darussalam Gontor<br />
              Ponorogo, Jawa Timur 63472<br />
              www.gontor.ac.id
            </p>
          </div>
          <div>
            <div className="font-cormorant-sc text-xs tracking-widest uppercase mb-4" style={{ color: '#D69103' }}>
              Narahubung
            </div>
            <div className="flex flex-col gap-2 font-baskerville text-xs" style={{ color: 'rgba(244,241,235,0.7)' }}>
              <p>Ahmad Nur Fajar D. P.<br />0813-9850-7876</p>
              <p>dramaarena5102@gontor.ac.id</p>
              <p className="mt-2 font-bold" style={{ color: '#D69103' }}>Rek. BRI: 0070-01-000315-56-7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mahfudzot Quote */}
      <div className="px-5 sm:px-8 py-10 text-center" style={{ borderTop: '2px solid rgba(214,145,3,0.3)' }}>
        <div className="max-w-2xl mx-auto">
          <p className="font-mileast italic text-lg sm:text-xl leading-relaxed mb-3" style={{ color: '#F4F1EB' }}>
            "Innamad-dunyā ḥadītsun ba'dahū, fakun ḥadītsan ḥasanan liman wa'ā."
          </p>
          <p className="font-cormorant-sc text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: '#D69103' }}>
            Sesungguhnya dunia itu hanyalah cerita setelahnya, maka jadilah cerita yang baik bagi siapa saja yang memahaminya.
          </p>
          <div className="w-10 h-px mx-auto my-5" style={{ background: 'rgba(214,145,3,0.35)' }} />
        </div>
        <p className="text-[11px] tracking-widest uppercase font-cormorant-sc" style={{ color: 'rgba(244,241,235,0.4)' }}>
          © 2026 Drama Arena 5102 · KMI Pondok Modern Darussalam Gontor 1 · Naluri dan Nurani
        </p>
      </div>
    </footer>
  );
};
