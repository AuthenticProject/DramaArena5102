import React, { useState } from 'react';
import { X, Check, Copy, CheckCheck, MessageCircle, ShieldCheck } from 'lucide-react';
import { SectionLabel, GoldButton } from './HeroSection';
import { SponsorTier } from '../types';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const sponsorTiers: SponsorTier[] = [
  {
    tier: 'BRONZE',
    pct: '10%',
    amount: 'Rp 50.010.700',
    perks: [
      'Logo ukuran kecil di media cetak & digital',
      'Logo ukuran kecil di kaos panitia Drama Arena',
      'Logo ukuran kecil di salah satu souvenir pilihan',
      'Sertifikat kemitraan resmi & piagam apresiasi'
    ]
  },
  {
    tier: 'SILVER',
    pct: '30%',
    amount: 'Rp 150.032.100',
    perks: [
      'Logo ukuran sedang di seluruh media cetak',
      'Logo di gantungan kunci dan event gate (gapura)',
      'Logo ukuran sedang di kaos, jaket, & videotron',
      'VIP Seat saat malam puncak pementasan'
    ]
  },
  {
    tier: 'GOLD',
    pct: '50%',
    amount: 'Rp 250.053.500',
    popular: true,
    badge: 'UTAMA / EKSKLUSIF',
    perks: [
      'Logo ukuran besar di seluruh media publikasi',
      'Logo di merchandise (gantungan kunci, kaos, topi, jaket)',
      'Tayangan video iklan profil perusahaan sebelum acara',
      'Eksposur status medsos setiap hari & booth eksklusif'
    ]
  },
  {
    tier: 'SPONSOR PRIBADI',
    pct: 'Sukarela',
    amount: 'Nominal Bebas & Ikhlas',
    perks: [
      'Dana bantuan sukarela lillahi ta\'ala',
      'Dukungan sarana maupun dana tanpa batasan',
      'Doa bersama dari ribuan santri & asatidz PMDG',
      'Laporan pertanggungjawaban kegiatan resmi'
    ]
  }
];

export const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const bankAcc = "0070-01-000315-56-7";

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(bankAcc.replace(/-/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = (tierName = 'Sponsorship') => {
    const text = encodeURIComponent(
      `Assalamu'alaikum Panitia Drama Arena 5102, saya berminat menjalin kemitraan paket ${tierName}. Mohon informasi tindak lanjut kerja sama.`
    );
    window.open(`https://wa.me/6281398507876?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 transition-opacity bg-[#101D2A]/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div
        className="relative w-full max-w-4xl rounded-3xl p-6 sm:p-10 z-10 my-auto max-h-[92vh] overflow-y-auto bg-[#FAF8F5] text-[#192E41] border-2 border-[#B58A3C] shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full cursor-pointer transition-colors hover:bg-black/10 text-[#192E41]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8 text-center sm:text-left">
          <SectionLabel text="KEMITRAAN & SPONSORSHIP RESMI" />
          <h2 className="font-mileast italic font-bold text-3xl sm:text-4xl mt-2 leading-tight text-[#192E41]">
            Paket Kerjasama Drama Arena 5102
          </h2>
          <p className="font-cormorant-sc text-xs tracking-widest mt-1 uppercase text-[#325956] font-bold">
            Total Anggaran Penyelenggaraan: <span className="text-[#B58A3C] font-bold font-mono">Rp 500.107.000</span>
          </p>
        </div>

        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {sponsorTiers.map(({ tier, pct, amount, perks, popular, badge }) => (
            <div
              key={tier}
              className={`rounded-2xl p-5 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] ${
                popular ? 'bg-[#192E41] text-[#EDE8E2] shadow-xl border-2 border-[#B58A3C]' : 'bg-[#EDE8E2] text-[#192E41] border border-[#B58A3C]/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mileast font-bold text-lg" style={{ color: popular ? '#D4A853' : '#192E41' }}>
                    {tier}
                  </span>
                  {badge && (
                    <span className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-[#B58A3C] text-[#192E41]">
                      {badge}
                    </span>
                  )}
                </div>
                <div
                  className="font-cormorant-sc text-xs tracking-wider mb-2 font-semibold"
                  style={{ color: popular ? '#B58A3C' : '#325956' }}
                >
                  {pct} dari total
                </div>
                <div
                  className="font-mileast font-bold text-base mb-4 pb-2 border-b"
                  style={{
                    color: popular ? '#EDE8E2' : '#192E41',
                    borderColor: popular ? 'rgba(181,138,60,0.3)' : 'rgba(25,46,65,0.15)'
                  }}
                >
                  {amount}
                </div>
                <ul className="flex flex-col gap-2">
                  {perks?.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-xs leading-relaxed"
                      style={{ color: popular ? 'rgba(237,232,226,0.85)' : 'rgba(25,46,65,0.85)' }}
                    >
                      <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#B58A3C]" />
                      <span className="font-alverata">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleWhatsApp(tier)}
                className="mt-5 w-full py-2 px-3 rounded-lg text-xs font-cormorant-sc font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow"
                style={{
                  background: popular ? '#B58A3C' : '#192E41',
                  color: popular ? '#192E41' : '#EDE8E2',
                  border: '1px solid #B58A3C'
                }}
              >
                <MessageCircle className="w-3.5 h-3.5" /> Pilih Paket
              </button>
            </div>
          ))}
        </div>

        {/* Official Bank Account & Contact Details */}
        <div
          className="p-5 sm:p-6 rounded-2xl mb-6 flex flex-col md:flex-row md:items-center justify-between gap-5 bg-[#EDE8E2] border-2 border-[#B58A3C]/40"
        >
          <div>
            <div className="font-cormorant-sc text-xs tracking-widest uppercase mb-1 font-bold text-[#B58A3C]">
              ✦ Rekening Resmi Sponsorship
            </div>
            <div className="flex items-center gap-3 mt-1">
              <span className="font-mileast text-lg sm:text-xl font-bold text-[#192E41]">
                Bank BRI: {bankAcc}
              </span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-bold bg-[#B58A3C] text-[#192E41] hover:bg-[#8E6B28] hover:text-[#EDE8E2] transition-colors cursor-pointer"
                title="Salin Nomor Rekening"
              >
                {copied ? <CheckCheck className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Tersalin!' : 'Salin'}</span>
              </button>
            </div>
            <p className="text-xs text-[#192E41]/75 mt-1 font-alverata">
              a.n. <strong>Panitia Drama Arena 5102 PMDG</strong> · Kampus Pusat Ponorogo, Jawa Timur 63472
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={() => handleWhatsApp('Sponsorship')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-cormorant-sc font-bold text-xs uppercase tracking-widest text-[#EDE8E2] bg-[#192E41] hover:bg-[#325956] transition-colors border border-[#B58A3C] shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#B58A3C]" />
              Hubungi Panitia WA
            </button>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <GoldButton onClick={onClose} label="TUTUP PROPOSAL" outline />
        </div>
      </div>
    </div>
  );
};
export default TicketModal;
