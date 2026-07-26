import React from 'react';
import { TicketButton } from './TicketButton';
import { MapPin, Mail, Phone, Globe, ShieldCheck, Sparkles, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenTicketModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTicketModal }) => {
  return (
    <footer id="footer" className="w-full bg-[#08090C] border-t border-[#53627A]/30 text-[#D7E2EA] pt-20 pb-12 px-6 md:px-10 relative z-20 select-none">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Top Callout */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 p-8 sm:p-12 rounded-[36px] sm:rounded-[48px] bg-gradient-to-r from-[#091E3A]/60 via-[#11141B] to-[#08090C] border border-[#53627A]/40 shadow-[0_0_60px_rgba(114,9,183,0.15)]">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="flex items-center gap-2 text-[#F72585] text-xs font-bold uppercase tracking-widest justify-center md:justify-start">
              <Sparkles className="w-4 h-4" /> DUKUNG MAHAKARYA SENI SANTRI GONTOR
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase hero-heading">
              SIAP MENDUKUNG DRAMA ARENA 5102?
            </h2>
            <p className="text-sm sm:text-base text-[#D7E2EA]/80 max-w-lg">
              Jadilah mitra sponsorship dan saksi apresiasi seni budaya akbar siswa kelas 5 KMI Pondok Modern Darussalam Gontor.
            </p>
          </div>
          <TicketButton onClick={onOpenTicketModal} label="AJUKAN SPONSORSHIP" />
        </div>

        {/* Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-[#53627A]/20 pb-12">
          
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h3 className="hero-heading font-black text-3xl uppercase tracking-tight">
              DRAMA ARENA 5102
            </h3>
            <p className="text-xs sm:text-sm text-[#D7E2EA]/70 leading-relaxed font-medium">
              Pagelaran Seni Mahakarya Siswa Kelas 5 Kulliyatu-l-Mu'allimin Al-Islamiyah (KMI) Pondok Modern Darussalam Gontor T.A. 1447-1448 / 2026-2027.
            </p>
            <div className="text-xs font-semibold text-[#A3C7E6] italic">
              "Naluri dan Nurani" — Sadar akan nilai perjuangan, tumbuhkan semangat kebersamaan.
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#A3C7E6]">
              NAVIGASI UTAMA
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-[#D7E2EA]/80 font-medium">
              <li><a href="#about" className="hover:text-white transition-colors">TENTANG ACARA</a></li>
              <li><a href="#shows" className="hover:text-white transition-colors">RAGAM PERTUNJUKAN</a></li>
              <li><a href="#committee" className="hover:text-white transition-colors">PANITIA & ANGGARAN</a></li>
              <li><button onClick={onOpenTicketModal} className="hover:text-white transition-colors text-left cursor-pointer">PAKET SPONSORSHIP</button></li>
            </ul>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#A3C7E6]">
              LOKASI PENYELENGGARAAN
            </h4>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-[#D7E2EA]/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F72585] shrink-0 mt-0.5" />
                <span>Pondok Modern Darussalam Gontor<br />Ds. Gontor, Kec. Mlarak, Kab. Ponorogo, Jawa Timur 63472</span>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#0077B6] shrink-0" />
                <span>www.gontor.ac.id</span>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#7209B7] shrink-0" />
                <span>@pondok.modern.gontor</span>
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#A3C7E6]">
              NARAHUBUNG PANITIA
            </h4>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-[#D7E2EA]/80">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0077B6] shrink-0" />
                <span>0813-9850-7876 (Ahmad Nur Fajar D. P.)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F72585] shrink-0" />
                <span>0812-6322-6333 (Gibran Gibraltar Z.)</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#7209B7] shrink-0" />
                <span>dramaarena5102@gontor.ac.id</span>
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0077B6] shrink-0" />
                <span>Rek. BRI: 0070-01-000315-56-7</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between text-xs text-[#D7E2EA]/50 gap-4">
          <p>© PAGELARAN SENI DRAMA ARENA 5102 PONDOK MODERN DARUSSALAM GONTOR. HAK CIPTA DILINDUNGI.</p>
          <p className="uppercase tracking-wider">NALURI DAN NURANI — GONTOR PONOROGO</p>
        </div>

      </div>
    </footer>
  );
};
