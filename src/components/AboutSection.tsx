import React from 'react';
import { FadeIn } from './FadeIn';
import { CheckCircle2, Users, Building2, BookOpen, HeartHandshake, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="relative w-full min-h-screen bg-[#08090C] flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 overflow-hidden select-none"
    >
      
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#7209B7]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-20 max-w-6xl w-full flex flex-col items-center gap-16">
        
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="text-center max-w-3xl">
          <span className="text-[#F72585] text-xs font-bold uppercase tracking-widest block mb-3">
            ✦ PROFIL SINGKAT & MAKSUD TUJUAN
          </span>
          <h2 
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
          >
            DRAMA ARENA 5102
          </h2>
          <p className="text-base sm:text-lg text-[#A3C7E6] font-semibold mt-4 italic">
            "Sadar akan nilai perjuangan, tumbuhkan semangat kebersamaan"
          </p>
        </FadeIn>

        {/* 2-Column Info Grid: Profil Drama Arena & Profil PMDG */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          
          {/* Box 1: Tentang Acara */}
          <FadeIn delay={0.15} y={30}>
            <div className="h-full p-8 rounded-[36px] bg-[#11141B] border border-[#53627A]/30 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-[#0077B6]/20 text-[#0077B6]">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-[#F72585]">PENGENALAN ACARA</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase">Pagelaran Seni DA 5102</h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-[#D7E2EA]/80 leading-relaxed">
                  Salah satu rangkaian acara utama dalam Pekan Perkenalan Khutbatu-l-'Arsy yang diselenggarakan oleh siswa kelas 5 Kulliyatu-l-Mu'allimin Al-Islamiyah (KMI) Pondok Modern Darussalam Gontor untuk tahun ajaran 1447-1448/2026-2027.
                </p>
                <p className="text-sm sm:text-base text-[#D7E2EA]/80 leading-relaxed mt-3">
                  Drama Arena merupakan wadah kreasi seni santri yang dirancang secara apik dan menarik, dikelola dengan totalitas, profesionalisme, serta kualitas tinggi tanpa mengesampingkan nilai-nilai Islam dan unsur pendidikan.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#53627A]/20 flex items-center justify-between text-xs text-[#A3C7E6] font-semibold">
                <span>Tagline: "Naluri dan Nurani"</span>
                <span>T.A. 1447-1448 / 2026-2027</span>
              </div>
            </div>
          </FadeIn>

          {/* Box 2: Profil PMDG */}
          <FadeIn delay={0.25} y={30}>
            <div className="h-full p-8 rounded-[36px] bg-[#11141B] border border-[#53627A]/30 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-[#7209B7]/20 text-[#7209B7]">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-[#A3C7E6]">LEMBAGA PENDIDIKAN</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase">Profil Singkat PMDG</h3>
                  </div>
                </div>
                <p className="text-sm text-[#D7E2EA]/80 leading-relaxed">
                  Didirikan pada <strong className="text-white">20 September 1926 (12 Rabi'ul Awwal 1345 H)</strong> oleh Trimurti: K.H. Ahmad Sahal, K.H. Zainudin Fannanie, dan K.H. Imam Zarkasyi di Desa Gontor, Ponorogo.
                </p>
                <p className="text-sm text-[#D7E2EA]/80 leading-relaxed mt-2">
                  Dipimpin oleh K.H. Hasan Abdullah Sahal, Drs. K.H. M. Akrim Mariyat, Dipl.A.Ed., dan Prof. Dr. K.H. Amal Fathullah Zarkasyi, M.A.
                </p>
                <p className="text-sm text-[#D7E2EA]/80 leading-relaxed mt-2">
                  Saat ini PMDG mendidik sekitar <strong className="text-white">32.000 santri, guru, dan keluarga besar</strong> yang tersebar di 20 kampus di seluruh Indonesia (12 kampus putra, 8 kampus putri, & UNIDA Gontor).
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#53627A]/20 flex items-center justify-between text-xs text-[#A3C7E6] font-semibold">
                <span>Gontor, Ponorogo, Jawa Timur</span>
                <span>Usia 1 Abad PMDG</span>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* 5 Maksud dan Tujuan Section */}
        <FadeIn delay={0.35} y={30} className="w-full">
          <div className="w-full p-8 sm:p-10 rounded-[36px] bg-gradient-to-r from-[#11141B] via-[#091E3A]/40 to-[#11141B] border border-[#53627A]/40">
            <h3 className="text-xl sm:text-2xl font-black uppercase text-white mb-6 text-center">
              Maksud dan Tujuan Pagelaran
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { num: "1", text: "Mensyukuri nikmat dan anugerah Allah SWT berupa kenaikan ke kelas 5 KMI." },
                { num: "2", text: "Mendidik dan melatih kecakapan santri dalam kepemimpinan, kemandirian, kerja sama, tanggung jawab, berpikir keras, serta semangat berorganisasi." },
                { num: "3", text: "Memperkenalkan kepada santri baru tentang keberadaan kesenian di PMDG." },
                { num: "4", text: "Menggali serta meningkatkan potensi segenap Siswa Kelas 5 KMI untuk diekspresikan dalam pagelaran seni yang menghibur lagi mendidik." },
                { num: "5", text: "Mempererat jalinan Ukhuwwah Islamiyah antar santri PMDG." }
              ].map((item) => (
                <div key={item.num} className="p-4 rounded-2xl bg-[#08090C]/60 border border-[#53627A]/20 flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#F72585]/20 border border-[#F72585]/60 text-[#F72585] font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {item.num}
                  </span>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/90 leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Stats Grid: Peserta & Pengunjung */}
        <FadeIn delay={0.45} y={30} className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="p-6 rounded-3xl bg-[#11141B] border border-[#53627A]/30 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase text-[#A3C7E6]">PROFIL PESERTA</span>
                <h4 className="text-3xl sm:text-4xl font-black text-white">441 Siswa</h4>
                <p className="text-xs text-[#D7E2EA]/70">Seluruh Siswa Kelas 5 KMI T.A. 1447-1448</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#0077B6]/20 text-[#0077B6]">
                <Users className="w-8 h-8" />
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#11141B] border border-[#53627A]/30 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase text-[#F72585]">PROFIL PENGUNJUNG</span>
                <h4 className="text-3xl sm:text-4xl font-black text-white">&gt; 5.000 Penonton</h4>
                <p className="text-xs text-[#D7E2EA]/70">Santri, Guru, Keluarga PMDG & Undangan</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F72585]/20 text-[#F72585]">
                <ShieldCheck className="w-8 h-8" />
              </div>
            </div>
          </div>
        </FadeIn>

      </div>

    </section>
  );
};
