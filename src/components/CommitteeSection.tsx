import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { SectionLabel, FleuronDivider } from './HeroSection';
import { CommitteeGroup, BudgetItem } from '../types';
import { TypographyDecor } from './TypographyDecor';
import { importImage } from '../utils/assetHelpers';
import { Shirt, ArrowRight, ShieldCheck, DollarSign, Users } from 'lucide-react';

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
    <section id="committee" className="py-24 px-4 sm:px-6 md:px-12 bg-[#EDE8E2] text-[#192E41] relative overflow-hidden">
      {/* Background Typography Watermark */}
      <TypographyDecor
        sectionId="committee"
        variant="5"
        mode="corner-ornament"
        position="bottom-right"
        opacity={0.04}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn delay={0} className="text-center mb-12">
          <SectionLabel text="06. FORMASI KEPANITIAAN" />
          <h2 className="font-mileast italic font-bold mt-2 leading-none uppercase text-[#192E41]" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 68px)' }}>
            Panitia & Anggaran
          </h2>
          <FleuronDivider />
          <p className="font-cormorant-sc text-xs sm:text-sm tracking-widest text-[#325956] uppercase max-w-xl mx-auto mt-2 font-semibold">
            Struktur Amanah dan Akuntabilitas Perhelatan Drama Arena 5102
          </p>
        </FadeIn>

        {/* Tab switcher */}
        <FadeIn delay={0.1} className="flex justify-center mb-12">
          <div className="flex gap-1.5 p-1.5 rounded-full bg-[#192E41]/10 border border-[#B58A3C]/35 shadow-inner backdrop-blur-sm">
            {[
              ['panitia', 'Susunan Panitia Mandiri'],
              ['anggaran', 'Rencana Anggaran Biaya']
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setCommitteeTab(key as 'panitia' | 'anggaran')}
                className={`px-6 py-2.5 rounded-full font-cormorant-sc text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer font-bold ${
                  committeeTab === key
                    ? 'bg-[#192E41] text-[#EDE8E2] shadow-lg border border-[#B58A3C]/50'
                    : 'text-[#192E41]/80 hover:text-[#192E41] hover:bg-[#192E41]/5'
                }`}
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
                <div key={idx} className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#B58A3C]/30 shadow-md hover:shadow-xl transition-shadow">
                  <div
                    className="flex items-center gap-2.5 mb-3 pb-3 border-b border-[#B58A3C]/25"
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 bg-[#192E41] text-[#EDE8E2] border border-[#B58A3C]"
                    >
                      {idx + 1}
                    </div>
                    <h4 className="font-mileast font-bold text-base text-[#192E41] tracking-wide">
                      {group.role}
                    </h4>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {group.names.map((n, i) => (
                      <li key={i} className="flex items-start gap-2 font-alverata text-xs leading-relaxed text-[#192E41]/85">
                        <span className="mt-1 flex-shrink-0 text-[#B58A3C] font-bold">·</span>
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
            <div className="has-registration-marks bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-[#B58A3C]/40 max-w-3xl mx-auto relative">
              <span className="reg-mark reg-tl" />
              <span className="reg-mark reg-tr" />
              <span className="reg-mark reg-bl" />
              <span className="reg-mark reg-br" />

              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 gap-4 border-b border-[#B58A3C]/30"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#B58A3C]" />
                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#325956] font-bold">
                      SK NO. 05/DA.5102/KMI/PMDG
                    </span>
                  </div>
                  <h3 className="font-mileast font-bold text-2xl text-[#192E41]">Rencana Anggaran Biaya</h3>
                  <p className="font-cormorant-sc text-xs mt-0.5 tracking-wider text-[#325956] font-semibold">Tahun Ajaran 1447-1448 H · Kulliyatu-l-Mu'allimin Al-Islamiyah</p>
                </div>
                <div className="text-right p-4 rounded-xl bg-[#192E41] text-[#EDE8E2] border border-[#B58A3C] shadow-md">
                  <div className="font-cormorant-sc text-[11px] uppercase tracking-wider text-[#EDE8E2]/70 font-semibold">Total Anggaran</div>
                  <div className="font-mileast font-bold text-xl sm:text-2xl gold-text">Rp 500.107.000</div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-[#B58A3C] bg-[#EDE8E2]/60">
                      <th className="py-3 px-3 text-left font-cormorant-sc text-xs tracking-wider uppercase text-[#192E41] font-bold">No</th>
                      <th className="py-3 px-3 text-left font-cormorant-sc text-xs tracking-wider uppercase text-[#192E41] font-bold">Bagian Kepanitiaan</th>
                      <th className="py-3 px-3 text-right font-cormorant-sc text-xs tracking-wider uppercase text-[#192E41] font-bold">Alokasi Nominal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {budgetItems.map((b, i) => (
                      <tr key={b.no} className={`border-b border-[#192E41]/10 hover:bg-[#EDE8E2]/60 transition-colors ${i % 2 === 1 ? 'bg-black/[0.015]' : ''}`}>
                        <td className="py-2.5 px-3 font-mono text-xs text-[#192E41]/60">{b.no}.</td>
                        <td className="py-2.5 px-3 font-alverata font-semibold text-sm text-[#192E41]">{b.section}</td>
                        <td className="py-2.5 px-3 text-right font-mono font-bold text-sm text-[#325956]">{b.amount}</td>
                      </tr>
                    ))}
                    <tr className="bg-[#192E41] text-[#EDE8E2]">
                      <td colSpan={2} className="py-3.5 px-3 text-right font-cormorant-sc font-bold text-sm uppercase tracking-widest text-[#B58A3C]">
                        Total Keseluruhan Anggaran:
                      </td>
                      <td className="py-3.5 px-3 text-right font-mileast font-bold text-xl gold-text">Rp 500.107.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        )}

        {/* Official Workshirt Teaser Banner */}
        <FadeIn delay={0.2} className="mt-14">
          <div className="rounded-2xl p-6 bg-gradient-to-r from-[#192E41] via-[#1D3533] to-[#325956] text-[#EDE8E2] border-2 border-[#B58A3C]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-white/10 p-2 flex items-center justify-center flex-shrink-0 border border-[#B58A3C]/40">
                <img
                  src={importImage('workshirt.png')}
                  alt="Official Panitia Workshirt"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-cormorant-sc text-[10px] tracking-widest text-[#B58A3C] uppercase font-bold">
                  ✦ SERAGAM RESMI PANITIA 5102 ✦
                </span>
                <h4 className="font-mileast font-bold text-lg text-[#EDE8E2]">
                  Official Committee Workshirt & Visual Identity
                </h4>
                <p className="font-alverata text-xs text-[#EDE8E2]/80 max-w-lg mt-0.5">
                  Lihat detail seragam dinas panitia dan seluruh arsip grafis di galeri Media Showcase.
                </p>
              </div>
            </div>

            {onNavigate && (
              <button
                onClick={() => onNavigate('media-showcase')}
                className="px-5 py-2.5 rounded-lg border border-[#B58A3C] bg-[#B58A3C] text-[#192E41] font-cormorant-sc text-xs tracking-wider uppercase font-bold hover:bg-[#FAF8F5] transition-colors flex items-center gap-2 flex-shrink-0 cursor-pointer shadow"
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
export default CommitteeSection;
