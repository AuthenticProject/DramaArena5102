import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { SectionLabel, FleuronDivider } from './HeroSection';
import { CommitteeGroup, BudgetItem } from '../types';
import { TypographyDecor } from './TypographyDecor';
import { importImage } from '../utils/assetHelpers';
import { Shirt, ArrowRight } from 'lucide-react';

const committeeData: CommitteeGroup[] = [
  { role: "Penanggung Jawab", names: ["Ahmad Nur Fajar Dwi Prakosa"] },
  { role: "Ketua", names: ["Hammad Fida Rahman", "Adha Eka Rahmadhani", "Husai Annurani Marekhan"] },
  { role: "Sekretaris", names: ["Luthfi Abdillah Noor Arifin", "Kaan Danang Wong Aydin", "Muhammad Irsyadil Umam", "Muhammad Nashir Azzuhri", "Sulthon Akmal Nurfathilah", "Muhammad Adib Al-Hazmi"] },
  { role: "Bendahara", names: ["Muhammad Syauqi Romadhon", "Rafly Yarhan Sulaiman"] },
  { role: "Kreatif Acara", names: ["Muhammad 'Azzam Asy-Syauqi", "Muhamad Ilyas Abdillah", "Muhamad Raghib Musyafa", "M Yusuf Al Qordowi Siregar", "Ridzky Amgerah Effendi", "Muhammad Fakhri As Syujai", "Muhammad Auf Zabarjadiy", "Agheea Gheelwana Huda", "Muhammad Rendy Raihan Nurdihan", "Pahmi Idris", "Reedho Muhammad Fathan", "Alfian Ramadhan", "Muhammad Syafiq Musyafa", "Rafi Kalima Guaryanto", "Muhammad Rakha Putra Satriawan"] },
  { role: "Multimedia", names: ["Luthfi Nurfauzan", "Kurnia Akbar Auliya Lubis", "Muhammad Fathi Salim", "Muhammad Ulfa Ultimaha"] },
  { role: "Humas", names: ["Djem Andrea Kurnia", "Rico Farizan", "Balurul Ulum Mahardika", "Muhammad Hafidz Ahsani", "Muhammad Khaerul Rizal Al Muttaqien", "Achmad Ghovva Marshandi Abi Nur Y"] },
  { role: "Publikasi", names: ["Alwan Zahid Bibra Agusta", "Muhammad Dzulfiqar Sirajudin", "Zaky Ahmad Faisal", "M. Haidar Zaky Abdillah Latief", "Habib Al Hasyir", "Zarofi Hawari"] },
  { role: "Konsumsi", names: ["Rizy Aditia", "Malcom Gymnastiar Gilang Ramadhan", "Brauantio Drajat Abdi Nugroho", "Muhammad Muflih Fathin"] },
  { role: "Properti", names: ["Muhammad Ihza Ziaulliaq", "Muhammad Ali Al Khaidar", "Agus Setyo Budi", "M. Umar Hakimi Bin Musleh", "Muhammad Zaki Hisyam"] },
  { role: "Dekorasi", names: ["Rendy Jamaluddin", "Muhammad Nabil Bachtiar", "Rahmat Isaani Farhan", "M.Iqbal Habibi Arrasyq"] },
  { role: "Sponsorship", names: ["Ahmad Rifki Humaidi", "Ridwan Maulana", "Fairus Yudha Alfaridzi", "Muhammad Syakir Al Fadhil", "Hadi Azhari Romadhon", "Muhammad Zinedine Ihsan Zidane"] },
  { role: "Bazaar", names: ["Muhammad Rizky", "Mazda Shofiyulloh", "Muhammad Faturrahman Faa'iz Ramadhan", "Muhammad Sukri Fuadi"] },
  { role: "Kostum", names: ["Radhien Achmad Satya Wicaksana", "Fakhru Ramdhan Alhatami", "Ahmad Fardan Alfalaq", "Muhammad Rizqy Fahlevi", "Muhammad Yusuf Habibie"] },
  { role: "Lighting", names: ["Abdul Karim Naufal Dafa", "Jajang Nurjaman", "Sanudin"] },
  { role: "Sound", names: ["M. Adlan Ash-Shidiq", "Adhika Ikhsan Pratama", "Muhammad Hafidz Nurrohim", "Raihan Fatihul Ihsan", "Agio Abrah Yudha"] }
];

const budgetItems: BudgetItem[] = [
  { no: 1, section: "Sekretaris", amount: "Rp 64.110.000" },
  { no: 2, section: "Bendahara", amount: "Rp 405.000" },
  { no: 3, section: "Properti", amount: "Rp 57.306.000" },
  { no: 4, section: "Dekorasi", amount: "Rp 67.376.000" },
  { no: 5, section: "Konsumsi", amount: "Rp 86.480.000" },
  { no: 6, section: "Multimedia", amount: "Rp 37.400.000" },
  { no: 7, section: "Kostum", amount: "Rp 101.970.000" },
  { no: 8, section: "Pertamanan", amount: "Rp 50.545.000" },
  { no: 9, section: "Kreatif & Acara", amount: "Rp 31.420.000" },
  { no: 10, section: "Publikasi", amount: "Rp 3.095.000" },
  { no: 11, section: "Elektro", amount: "Rp 31.310.000" },
  { no: 12, section: "Humas", amount: "Rp 185.450.000" },
  { no: 13, section: "Sound System", amount: "Rp 3.540.000" }
];

interface CommitteeSectionProps {
  onNavigate?: (id: string) => void;
}

export const CommitteeSection: React.FC<CommitteeSectionProps> = ({ onNavigate }) => {
  const [committeeTab, setCommitteeTab] = useState<'panitia' | 'anggaran'>('panitia');

  return (
    <section id="committee" className="py-24 px-5 sm:px-8 md:px-12 relative overflow-hidden">
      {/* Background Typography Watermark */}
      <TypographyDecor
        sectionId="committee"
        variant="5"
        mode="corner-ornament"
        position="bottom-right"
        opacity={0.05}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn delay={0} className="text-center mb-12">
          <SectionLabel text="FORMASI KEPANITIAAN" />
          <h2 className="font-mileast italic font-bold mt-3 leading-none uppercase" style={{ fontSize: 'clamp(2rem, 6vw, 72px)', color: '#062B4A' }}>
            Panitia & Anggaran
          </h2>
          <FleuronDivider />
        </FadeIn>

        {/* Tab switcher */}
        <FadeIn delay={0.1} className="flex justify-center mb-10">
          <div className="flex gap-2 p-1 rounded-lg" style={{ background: 'rgba(6,43,74,0.08)', border: '1px solid rgba(214,145,3,0.2)' }}>
            {[
              ['panitia', 'Susunan Panitia'],
              ['anggaran', 'Rencana Anggaran']
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setCommitteeTab(key as 'panitia' | 'anggaran')}
                className="px-6 py-2 rounded-md font-cormorant-sc text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer"
                style={{
                  background: committeeTab === key ? '#062B4A' : 'transparent',
                  color: committeeTab === key ? '#D69103' : '#062B4A',
                  fontWeight: committeeTab === key ? '700' : '400'
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </FadeIn>

        {committeeTab === 'panitia' ? (
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {committeeData.map((group, idx) => (
                <div key={idx} className="classic-card rounded-2xl p-6">
                  <div
                    className="flex items-center gap-2 mb-3 pb-3"
                    style={{ borderBottom: '1px solid rgba(214,145,3,0.25)' }}
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: '#062B4A', color: '#D69103' }}
                    >
                      {idx + 1}
                    </div>
                    <h4 className="font-cormorant-sc font-bold text-sm uppercase tracking-wider" style={{ color: '#062B4A' }}>
                      {group.role}
                    </h4>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {group.names.map((n, i) => (
                      <li key={i} className="flex items-start gap-2 font-baskerville text-xs leading-relaxed" style={{ color: '#062B4A', opacity: 0.85 }}>
                        <span className="mt-1 flex-shrink-0" style={{ color: '#D69103' }}>·</span>
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.1}>
            <div className="classic-card rounded-3xl p-6 sm:p-10 shadow-xl max-w-3xl mx-auto">
              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 gap-4"
                style={{ borderBottom: '1px solid rgba(214,145,3,0.3)' }}
              >
                <div>
                  <h3 className="font-playfair font-bold text-xl" style={{ color: '#062B4A' }}>Anggaran Kepanitiaan</h3>
                  <p className="font-cormorant-sc text-xs mt-1 tracking-wider" style={{ color: '#D69103' }}>Drama Arena 5102 · T.A. 1447-1448</p>
                </div>
                <div className="text-right p-4 rounded-xl" style={{ background: '#062B4A' }}>
                  <div className="font-cormorant-sc text-xs uppercase tracking-wider" style={{ color: 'rgba(244,241,235,0.7)' }}>Total Keseluruhan</div>
                  <div className="font-mileast font-bold text-xl gold-text">Rp 500.107.000</div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ borderBottom: '2px solid rgba(214,145,3,0.4)' }}>
                      <th className="py-2 px-3 text-left font-cormorant-sc text-xs tracking-wider uppercase" style={{ color: '#D69103' }}>No</th>
                      <th className="py-2 px-3 text-left font-cormorant-sc text-xs tracking-wider uppercase" style={{ color: '#D69103' }}>Bagian</th>
                      <th className="py-2 px-3 text-right font-cormorant-sc text-xs tracking-wider uppercase" style={{ color: '#D69103' }}>Nominal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {budgetItems.map((b) => (
                      <tr key={b.no} style={{ borderBottom: '1px solid rgba(6,43,74,0.1)' }} className="hover:bg-yellow-50/50 transition-colors">
                        <td className="py-2.5 px-3 font-cormorant-sc text-xs opacity-60" style={{ color: '#062B4A' }}>{b.no}.</td>
                        <td className="py-2.5 px-3 font-baskerville font-bold text-sm uppercase" style={{ color: '#062B4A' }}>{b.section}</td>
                        <td className="py-2.5 px-3 text-right font-mileast font-bold" style={{ color: '#062B4A' }}>{b.amount}</td>
                      </tr>
                    ))}
                    <tr style={{ background: '#062B4A' }}>
                      <td colSpan={2} className="py-3 px-3 text-right font-cormorant-sc font-bold text-sm uppercase tracking-widest" style={{ color: '#D69103' }}>
                        Total Anggaran:
                      </td>
                      <td className="py-3 px-3 text-right font-mileast font-bold text-base gold-text">Rp 500.107.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        )}

        {/* Official Workshirt Teaser Banner */}
        <FadeIn delay={0.2} className="mt-14">
          <div className="rounded-2xl p-6 bg-gradient-to-r from-[#062B4A] to-[#041d33] text-white border border-[#D69103]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-white/10 p-2 flex items-center justify-center flex-shrink-0 border border-[#D69103]/30">
                <img
                  src={importImage('workshirt.png')}
                  alt="Official Panitia Workshirt"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-cormorant-sc text-[10px] tracking-widest text-[#D69103] uppercase font-bold">
                  ✦ SERAGAM RESMI PANITIA 5102 ✦
                </span>
                <h4 className="font-mileast font-bold text-lg text-white">
                  Official Committee Workshirt & Visual Identity
                </h4>
                <p className="font-baskerville text-xs text-[#F4F1EB]/75 max-w-lg mt-0.5">
                  Lihat detail seragam dinas panitia dan seluruh arsip grafis di galeri Media Showcase.
                </p>
              </div>
            </div>

            {onNavigate && (
              <button
                onClick={() => onNavigate('media-showcase')}
                className="px-5 py-2.5 rounded-lg border border-[#D69103] bg-[#D69103] text-[#062B4A] font-cormorant-sc text-xs tracking-wider uppercase font-bold hover:bg-white hover:text-[#062B4A] transition-colors flex items-center gap-2 flex-shrink-0 cursor-pointer"
              >
                Buka Media Showcase <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
