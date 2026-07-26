import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Zap, ShieldCheck, Building, CreditCard, Mail } from 'lucide-react';
import { TicketButton } from './TicketButton';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SPONSOR_PACKAGES = [
  {
    id: 'bronze',
    name: 'BRONZE SPONSOR',
    percentage: '10%',
    price: 'Rp 50.010.700',
    perks: [
      'Logo ukuran kecil di media cetak & digital',
      'Logo ukuran kecil di kaos Drama Arena 5102',
      'Logo ukuran kecil di salah satu souvenir pilihan'
    ],
    popular: false
  },
  {
    id: 'silver',
    name: 'SILVER SPONSOR',
    percentage: '30%',
    price: 'Rp 150.032.100',
    perks: [
      'Logo ukuran sedang di semua media cetak',
      'Logo di gantungan kunci & event gate',
      'Logo di kaos, jaket, videotron, & media online'
    ],
    popular: false
  },
  {
    id: 'gold',
    name: 'GOLD SPONSOR',
    percentage: '50%',
    price: 'Rp 250.053.500',
    perks: [
      'Logo ukuran besar di semua media publikasi',
      'Logo di gantungan kunci, kaos, topi, jaket, & merchandise',
      'Tayangan iklan perusahaan sebelum acara',
      'Status media sosial setiap hari'
    ],
    popular: true
  }
];

export const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose }) => {
  const [selectedPackage, setSelectedPackage] = useState('gold');
  const [sponsorName, setSponsorName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#08090C]/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-3xl rounded-[32px] sm:rounded-[40px] border-2 border-[#53627A]/40 bg-[#08090C] p-6 sm:p-8 text-[#D7E2EA] shadow-[0_0_80px_rgba(114,9,183,0.3)] z-10 my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full border border-[#53627A]/40 text-[#D7E2EA] hover:bg-[#53627A]/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-r from-[#0077B6] to-[#7209B7] flex items-center justify-center mb-6 shadow-lg"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase hero-heading mb-2">
                  KONFIRMASI TERKIRIM!
                </h3>
                <p className="text-sm sm:text-base text-[#D7E2EA]/80 max-w-md">
                  Terima kasih atas partisipasi dan dukungan kerja sama untuk Pagelaran Seni Drama Arena 5102 PMDG. Tim Sponsorship kami akan segera menghubungi Anda.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Header */}
                <div>
                  <div className="flex items-center gap-2 text-[#F72585] text-xs font-semibold tracking-widest uppercase mb-1">
                    <Zap className="w-4 h-4" /> KEMITRAAN & KERJA SAMA RESMI
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase hero-heading">
                    PAKET SPONSORSHIP DRAMA ARENA 5102
                  </h2>
                  <p className="text-xs sm:text-sm text-[#A3C7E6] mt-1">
                    Total Anggaran Kepanitiaan: <strong className="text-white">Rp 500.107.000</strong>
                  </p>
                </div>

                {/* Package Selection Grid */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#A3C7E6] mb-2">
                    PILIH PAKET SPONSORSHIP
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {SPONSOR_PACKAGES.map((pkg) => {
                      const isSelected = selectedPackage === pkg.id;
                      return (
                        <div
                          key={pkg.id}
                          onClick={() => setSelectedPackage(pkg.id)}
                          className={`relative rounded-2xl p-4 cursor-pointer transition-all duration-300 border ${
                            isSelected
                              ? 'border-[#F72585] bg-[#7209B7]/20 shadow-[0_0_20px_rgba(247,37,133,0.3)]'
                              : 'border-[#53627A]/30 bg-[#11141B] hover:border-[#53627A]'
                          }`}
                        >
                          {pkg.popular && (
                            <span className="absolute -top-2.5 right-3 bg-gradient-to-r from-[#7209B7] to-[#F72585] text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full">
                              UTAMA
                            </span>
                          )}
                          <div className="text-xs font-bold uppercase text-[#D7E2EA] mb-1">
                            {pkg.name} ({pkg.percentage})
                          </div>
                          <div className="text-base font-black text-[#A3C7E6] mb-2">
                            {pkg.price}
                          </div>
                          <ul className="text-[11px] text-[#D7E2EA]/80 flex flex-col gap-1">
                            {pkg.perks.map((perk, i) => (
                              <li key={i} className="flex items-start gap-1">
                                <span className="text-[#F72585] shrink-0">✓</span>
                                <span>{perk}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Form Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#A3C7E6] mb-1">
                      NAMA INSTANSI / PERUSAHAAN / SPONSOR
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: PT Darussalam Mandiri"
                      value={sponsorName}
                      onChange={(e) => setSponsorName(e.target.value)}
                      className="w-full bg-[#11141B] border border-[#53627A]/40 rounded-xl px-4 py-2.5 text-sm text-[#D7E2EA] focus:outline-none focus:border-[#F72585]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#A3C7E6] mb-1">
                      NOMOR WHATSAPP / KONTAK
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: 0812-3456-7890"
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      className="w-full bg-[#11141B] border border-[#53627A]/40 rounded-xl px-4 py-2.5 text-sm text-[#D7E2EA] focus:outline-none focus:border-[#F72585]"
                    />
                  </div>
                </div>

                {/* Rekening Pembayaran Banner */}
                <div className="p-4 rounded-2xl bg-[#11141B] border border-[#53627A]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-[#F72585] font-extrabold uppercase block mb-0.5">
                      REKENING RESMI SPONSORSHIP:
                    </span>
                    <p className="text-white font-bold">
                      Bank BRI: <span className="text-[#A3C7E6]">0070-01-000315-56-7</span> (a.n. Panitia Drama Arena Gontor)
                    </p>
                  </div>
                  <div className="text-left sm:text-right text-[#D7E2EA]/70">
                    <span className="block">Wesel: Panitia Drama Arena KMI PMDG</span>
                    <span className="block">Ponorogo, Jawa Timur 63472</span>
                  </div>
                </div>

                {/* Action Submit Button */}
                <div className="mt-2 flex justify-end">
                  <TicketButton label="AJUKAN SPONSORSHIP" className="w-full sm:w-auto" />
                </div>

              </form>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
