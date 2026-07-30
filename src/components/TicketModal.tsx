import React from 'react';
import { X, Check } from 'lucide-react';
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
    perks: ['Logo kecil media cetak', 'Logo di banner', 'Kaos panitia']
  },
  {
    tier: 'SILVER',
    pct: '30%',
    amount: 'Rp 150.032.100',
    perks: ['Logo sedang di semua media', 'Gantungan kunci', 'Tayangan videotron', 'Event gate']
  },
  {
    tier: 'GOLD',
    pct: '50%',
    amount: 'Rp 250.053.500',
    perks: ['Logo besar semua media', 'Tayangan iklan utama', 'Promosi medsos', 'Hak naming area']
  }
];

export const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0"
        style={{ background: 'rgba(6,43,74,0.85)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      />

      {/* Modal Box */}
      <div
        className="relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 z-10 my-auto"
        style={{ background: '#F4F1EB', border: '2px solid rgba(214,145,3,0.5)', boxShadow: '0 25px 80px rgba(6,43,74,0.5)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full cursor-pointer transition-colors hover:bg-black/10"
          style={{ color: '#062B4A' }}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <SectionLabel text="KEMITRAAN RESMI" />
          <h2 className="font-mileast italic font-bold text-3xl mt-2" style={{ color: '#062B4A' }}>
            Paket Sponsorship
          </h2>
          <p className="font-baskerville text-xs mt-1" style={{ color: '#062B4A', opacity: 0.7 }}>
            Total Anggaran: <strong>Rp 500.107.000</strong>
          </p>
        </div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {sponsorTiers.map(({ tier, pct, amount, perks }, i) => (
            <div
              key={tier}
              className="rounded-2xl p-5"
              style={{
                background: i === 2 ? '#062B4A' : 'transparent',
                border: `2px solid ${i === 2 ? '#D69103' : 'rgba(6,43,74,0.2)'}`
              }}
            >
              <div className="font-mileast font-bold text-base mb-1" style={{ color: '#D69103' }}>
                {tier}
              </div>
              <div className="font-cormorant-sc text-xs tracking-wider mb-1" style={{ color: i === 2 ? 'rgba(244,241,235,0.6)' : 'rgba(6,43,74,0.6)' }}>
                {pct} dari total
              </div>
              <div className="font-mileast font-bold text-base mb-3" style={{ color: i === 2 ? '#F4F1EB' : '#062B4A' }}>
                {amount}
              </div>
              <ul className="flex flex-col gap-1.5">
                {perks.map((p) => (
                  <li key={p} className="flex items-start gap-2 font-baskerville text-xs" style={{ color: i === 2 ? 'rgba(244,241,235,0.8)' : 'rgba(6,43,74,0.8)' }}>
                    <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: '#D69103' }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bank Account Info */}
        <div className="p-4 rounded-2xl mb-6" style={{ background: 'rgba(6,43,74,0.07)', border: '1px solid rgba(214,145,3,0.3)' }}>
          <div className="font-cormorant-sc text-xs tracking-widest uppercase mb-2" style={{ color: '#D69103' }}>
            Rekening Resmi Sponsorship
          </div>
          <p className="font-baskerville text-sm font-bold" style={{ color: '#062B4A' }}>
            Bank BRI: <span style={{ color: '#D69103' }}>0070-01-000315-56-7</span>
          </p>
          <p className="font-baskerville text-xs mt-1 opacity-70" style={{ color: '#062B4A' }}>
            Wesel: Panitia Pagelaran Seni Drama Arena Siswa Kelas 5 KMI PMDG, Ponorogo 63472
          </p>
        </div>

        <div className="flex justify-end">
          <GoldButton
            onClick={() => {
              alert('Terima kasih! Tim kami akan menghubungi Anda segera.');
              onClose();
            }}
            label="AJUKAN SPONSORSHIP"
          />
        </div>
      </div>
    </div>
  );
};
