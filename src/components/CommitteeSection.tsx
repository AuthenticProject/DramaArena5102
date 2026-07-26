import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { Users, DollarSign } from 'lucide-react';

interface CommitteeGroup {
  role: string;
  names: string[];
  badge?: string;
}

const committeeData: CommitteeGroup[] = [
  {
    role: "Penanggung Jawab",
    names: ["Ahmad Nur Fajar Dwi Prakosa"],
    badge: "Utama"
  },
  {
    role: "Ketua Pelaksana",
    names: [
      "M. Radja Althafa",
      "Atsrul Iman",
      "Mohamad Razka Al-Isfahany"
    ]
  },
  {
    role: "Sekretaris",
    names: [
      "Sultan Ridwan Putra Pratama",
      "Naufal Fikri Setyawan",
      "Sigap Dwi Aminullah",
      "Ahmad Bimo Wiranata Yahya",
      "Ibrahim Hidayatulloh",
      "Muhammad Ayus Sofi",
      "Husni Annurani Marekhan"
    ]
  },
  {
    role: "Bendahara",
    names: [
      "Gibran Gibraltar Zahri",
      "Moh. Yusuf Ubaidilah"
    ]
  },
  {
    role: "Tim Kreatif & Acara",
    names: [
      "Ade Rezki Agesta",
      "Muhamad Hadi Wijaya Munir",
      "Muhammad Reynaldi Alvian Mubarak",
      "Muhammad Rifqi Fachriyan",
      "Muhammad Haidar Al-Wa'ie",
      "M. Ilhamsyah Ainul Al-Imron",
      "Afif Al Ansori Farid Hasem Al Askari",
      "Muhammad Iqbal Rizqullah",
      "Azzam Al-Mutawakkil Alallah",
      "Ahmad Syirajuddin Rabbani",
      "Rafi' Dhiya'Ulhaq",
      "Muhammad Amin Firdaus",
      "Agata Daniswara",
      "Abdul Rosyid",
      "Muhammad Nurul Faizin",
      "Hammad Fida Rahman"
    ]
  },
  {
    role: "Publikasi",
    names: [
      "M. Adrian Fahlevi",
      "Hafizh Maulana N. P. M., S.M.",
      "Fatahna Fathan Mubina, S.H.",
      "M. Difa Maula Alfath",
      "Hazel Hudaya Bisri",
      "Adha Nur Lintang"
    ]
  },
  {
    role: "Hubungan Masyarakat (Humas)",
    names: [
      "Dwi Wahyu Utomo",
      "M. Idris Ramli Abdul Karim, S.Ag.",
      "Nashrul Haq Rambe",
      "Pedri Fauzi",
      "Muhammad Handrey bin Rodin",
      "Muhamad Rafli Hidayat",
      "Haris Achmad Nursamsu"
    ]
  },
  {
    role: "Multimedia",
    names: [
      "Mohamad Wisnu Aji Pambayun",
      "Imam Jahfaluddin Suyanto",
      "Muhammad Naufal Tsabitul Azmi",
      "Fachri Muhamad Sidiq",
      "Azhar Rizki Anggoro Sahputro"
    ]
  },
  {
    role: "Tim Properti & Dekorasi",
    names: [
      "Yusuf Zidane",
      "Luthfi Nabhani Abdul Jalil",
      "Muhammad Iqbal Fauzan",
      "Teguh Prasetyo",
      "Muhammad Avisena",
      "Azzumardi A'raaf, S.Pd.",
      "Hilmy Mochtar, S.M.",
      "Raihan Husain Abdat, S.M.",
      "Muhammad Hasyim Abbas",
      "M. Shofa Afkar",
      "Adha Eka Rahmadhani"
    ]
  },
  {
    role: "Bagian Kostum",
    names: [
      "Abdul Hakim",
      "Muhammad Nashiruddin, S.Ag.",
      "Krisna Achmad Pasya",
      "Hilal Al Akbar Nurainda",
      "Muhammad Zidan Fadlullah"
    ]
  },
  {
    role: "Sponsorship",
    names: [
      "Ahmad Ridwan",
      "Febri Fitrah Muliawan, S.M.",
      "Abdillah Malik Fauzan Abrori",
      "Muhammad Fahmi Romadlon, S.Ag."
    ]
  },
  {
    role: "Sound Engineering",
    names: [
      "Muhammad Syafiq Fadhlurrahman",
      "Ega Afwan Gaffar",
      "Sayid Wildan Al Jannatan"
    ]
  },
  {
    role: "Lightning",
    names: [
      "Irfan Syaukany",
      "Attila Syah Putra Simanjuntak, S.M."
    ]
  },
  {
    role: "Bazaar",
    names: [
      "Zhafir Rizqy Mahardika",
      "Affan Mahatma Wuran",
      "Akhdan Favian Aptaputra",
      "Tsabitul Hidayat"
    ]
  },
  {
    role: "Bagian Konsumsi",
    names: [
      "Arfakhsyadz Rusyana Anzaldin M.",
      "Izzuddien Setiaji",
      "Andika Rizaldi, S.Ag.",
      "Nanda Shafa Imantaka",
      "Mochammad Faiz Al Bahrain"
    ]
  }
];

const budgetItems = [
  { no: 1, section: "Sekretaris", amount: "Rp 64.110.000" },
  { no: 2, section: "Bendahara", amount: "Rp 405.000" },
  { no: 3, section: "Properti", amount: "Rp 57.306.000" },
  { no: 4, section: "Dekorasi", amount: "Rp 67.376.000" },
  { no: 5, section: "Konsumsi", amount: "Rp 86.480.000" },
  { no: 6, section: "Multimedia", amount: "Rp 37.400.000" },
  { no: 7, section: "Kostum", amount: "Rp 101.970.000" },
  { no: 8, section: "Pertamanan", amount: "Rp 50.545.000" },
  { no: 9, section: "Kreatif dan Acara", amount: "Rp 31.420.000" },
  { no: 10, section: "Publikasi", amount: "Rp 3.095.000" },
  { no: 11, section: "Elektro", amount: "Rp 31.310.000" },
  { no: 12, section: "Humas", amount: "Rp 185.450.000" },
  { no: 13, section: "Sound System", amount: "Rp 3.540.000" }
];

export const CommitteeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'panitia' | 'anggaran'>('panitia');

  return (
    <section id="committee" className="w-full bg-[#08090C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-24 relative z-10 border-t border-[#53627A]/30 select-none">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <FadeIn delay={0} y={30} className="text-center mb-12">
          <span className="text-[#F72585] text-xs font-bold uppercase tracking-widest block mb-2">
            ✦ PANITIA PENYELENGGARA & RENCANA ANGGARAN
          </span>
          <h2 
            className="hero-heading font-black uppercase tracking-tight leading-none text-center"
            style={{ fontSize: 'clamp(2.2rem, 7vw, 90px)' }}
          >
            STRUKTUR & ANGGARAN
          </h2>
          <p className="text-sm sm:text-base text-[#D7E2EA]/70 max-w-2xl mx-auto mt-4">
            Dikelola dengan totalitas dan profesionalisme oleh Siswa Kelas 5 KMI Pondok Modern Darussalam Gontor
          </p>
        </FadeIn>

        {/* Tab Switcher */}
        <FadeIn delay={0.1} y={20} className="mb-12">
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#11141B] border border-[#53627A]/40">
            <button
              onClick={() => setActiveTab('panitia')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'panitia'
                  ? 'bg-gradient-to-r from-[#0077B6] to-[#7209B7] text-white shadow-lg'
                  : 'text-[#D7E2EA]/70 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" /> Susunan Panitia
            </button>
            <button
              onClick={() => setActiveTab('anggaran')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'anggaran'
                  ? 'bg-gradient-to-r from-[#7209B7] to-[#F72585] text-white shadow-lg'
                  : 'text-[#D7E2EA]/70 hover:text-white'
              }`}
            >
              <DollarSign className="w-4 h-4" /> Anggaran Kepanitiaan
            </button>
          </div>
        </FadeIn>

        {/* Content: Susunan Panitia */}
        {activeTab === 'panitia' && (
          <div className="w-full flex flex-col gap-10">
            
            {/* Top Protection & Advisors Banner */}
            <FadeIn delay={0.15} y={20}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 sm:p-8 rounded-3xl bg-[#11141B] border border-[#53627A]/30 shadow-md">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#A3C7E6] block mb-2">
                    PELINDUNG ACARA
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
                    Pimpinan Pondok Modern Darussalam Gontor
                  </h3>
                </div>
                <div className="p-6 sm:p-8 rounded-3xl bg-[#11141B] border border-[#53627A]/30 shadow-md">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#A3C7E6] block mb-2">
                    PEMBIMBING
                  </span>
                  <p className="text-sm sm:text-base text-[#D7E2EA]/90 leading-relaxed font-medium">
                    Staf Pengasuhan Santri, Segenap Wali Kelas 5 KMI, & Bapak-Bapak Guru KMI
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Grid of Committee Roles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {committeeData.map((group, idx) => (
                <FadeIn key={group.role} delay={0.05 * idx} y={20} className="h-full">
                  <div className="h-full p-6 rounded-3xl bg-[#11141B]/80 border border-[#53627A]/30 hover:border-[#A3C7E6]/60 transition-all duration-300 flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#53627A]/20">
                        <h4 className="text-base sm:text-lg font-black uppercase text-[#D7E2EA] group-hover:text-white transition-colors">
                          {group.role}
                        </h4>
                        {group.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#F72585]/20 border border-[#F72585]/50 text-[#F72585]">
                            {group.badge}
                          </span>
                        )}
                      </div>
                      <ul className="flex flex-col gap-2">
                        {group.names.map((name, i) => (
                          <li key={i} className="text-xs sm:text-sm text-[#D7E2EA]/80 flex items-start gap-2">
                            <span className="text-[#0077B6] shrink-0 mt-0.5">•</span>
                            <span className="font-medium">{name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        )}

        {/* Content: Anggaran Kepanitiaan */}
        {activeTab === 'anggaran' && (
          <FadeIn delay={0.15} y={20} className="w-full max-w-4xl">
            <div className="w-full rounded-3xl bg-[#11141B] border border-[#53627A]/30 p-6 sm:p-10 shadow-2xl">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#53627A]/30 gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white">
                    Anggaran Panitia Penyelenggara
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3C7E6]">
                    Pagelaran Seni Drama Arena 5102 (T.A. 1447-1448 / 2026-2027)
                  </p>
                </div>
                <div className="bg-[#7209B7]/20 border border-[#7209B7]/50 rounded-2xl px-5 py-3 text-right">
                  <span className="text-[11px] uppercase tracking-wider text-[#A3C7E6] block">
                    TOTAL KESELURUHAN
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-[#F72585]">
                    Rp 500.107.000
                  </span>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-[#53627A]/40 text-[#A3C7E6] uppercase font-bold tracking-wider">
                      <th className="py-3 px-4 w-16">No</th>
                      <th className="py-3 px-4">Bagian / Divisi</th>
                      <th className="py-3 px-4 text-right">Nominal Anggaran</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#53627A]/20">
                    {budgetItems.map((item) => (
                      <tr key={item.no} className="hover:bg-[#53627A]/10 transition-colors">
                        <td className="py-3 px-4 text-[#D7E2EA]/60 font-semibold">{item.no}.</td>
                        <td className="py-3 px-4 text-[#D7E2EA] font-semibold uppercase">{item.section}</td>
                        <td className="py-3 px-4 text-right font-black text-[#A3C7E6]">{item.amount}</td>
                      </tr>
                    ))}
                    <tr className="bg-[#53627A]/20 font-black text-sm sm:text-base text-white">
                      <td colSpan={2} className="py-4 px-4 uppercase text-right">Total Anggaran:</td>
                      <td className="py-4 px-4 text-right text-[#F72585]">Rp 500.107.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 pt-6 border-t border-[#53627A]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D7E2EA]/60 gap-4">
                <span>Disetujui di Gontor, 18 Sya'ban 1447 / 6 Februari 2026</span>
                <span className="font-semibold text-[#A3C7E6]">Penanggung Jawab: Ahmad Nur Fajar Dwi Prakosa</span>
              </div>

            </div>
          </FadeIn>
        )}

      </div>
    </section>
  );
};
