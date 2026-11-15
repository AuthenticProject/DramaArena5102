import React, { useMemo, useState } from 'react';
import { FadeIn } from './FadeIn';
import { SectionLabel, FleuronDivider } from './HeroSection';
import { CommitteeGroup, BudgetItem } from '../types';
import { TypographyDecor } from './TypographyDecor';
import { importImage } from '../utils/assetHelpers';
import { ArrowRight, Search, Users, Wallet, ChevronDown } from 'lucide-react';

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
  { no: 1, section: "Sekretaris", amount: "Rp 64.110.000", raw: 64110000 },
  { no: 2, section: "Bendahara", amount: "Rp 405.000", raw: 405000 },
  { no: 3, section: "Properti", amount: "Rp 57.306.000", raw: 57306000 },
  { no: 4, section: "Dekorasi", amount: "Rp 67.376.000", raw: 67376000 },
  { no: 5, section: "Konsumsi", amount: "Rp 86.480.000", raw: 86480000 },
  { no: 6, section: "Multimedia", amount: "Rp 37.400.000", raw: 37400000 },
  { no: 7, section: "Kostum", amount: "Rp 101.970.000", raw: 101970000 },
  { no: 8, section: "Pertamanan", amount: "Rp 50.545.000", raw: 50545000 },
  { no: 9, section: "Kreatif & Acara", amount: "Rp 31.420.000", raw: 31420000 },
  { no: 10, section: "Publikasi", amount: "Rp 3.095.000", raw: 3095000 },
  { no: 11, section: "Elektro", amount: "Rp 31.310.000", raw: 31310000 },
  { no: 12, section: "Humas", amount: "Rp 185.450.000", raw: 185450000 },
  { no: 13, section: "Sound System", amount: "Rp 3.540.000", raw: 3540000 }
];

const statedBudgetTotal = 500107000;
const formatRupiah = (value: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);

interface CommitteeSectionProps { onNavigate?: (id: string) => void; }

export const CommitteeSection: React.FC<CommitteeSectionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'panitia' | 'anggaran'>('panitia');
  const [search, setSearch] = useState('');
  const [expandedRoles, setExpandedRoles] = useState<string[]>(['Ketua']);
  const filteredCommittee = useMemo(() => committeeData.filter(group =>
    group.role.toLowerCase().includes(search.toLowerCase()) ||
    group.names.some(name => name.toLowerCase().includes(search.toLowerCase()))
  ), [search]);
  const totalPeople = committeeData.reduce((sum, group) => sum + group.names.length, 0);
  const listedBudgetTotal = budgetItems.reduce((sum, item) => sum + (item.raw || 0), 0);
  const largestAllocation = Math.max(...budgetItems.map(item => item.raw || 0));

  const toggleRole = (role: string) => setExpandedRoles(current =>
    current.includes(role) ? current.filter(item => item !== role) : [...current, role]
  );

  return (
    <section id="committee" className="da-committee-section relative overflow-hidden py-24 px-4 sm:px-6 md:px-12">
      <TypographyDecor sectionId="committee" variant="5" mode="corner-ornament" position="bottom-right" opacity={0.035} />
      <div className="da-committee-shell relative z-10 mx-auto max-w-6xl">
        <FadeIn className="da-committee-intro text-center">
          <SectionLabel text="06. FORMASI & TATA KELOLA" />
          <p className="da-kicker da-kicker-dark mt-5">THE PRODUCTION DOSSIER · 5102</p>
          <h2 className="da-committee-title">Di balik <em>panggung</em>,<br/>ada sebuah tim.</h2>
          <FleuronDivider />
          <p className="da-committee-lead">Setiap pertunjukan berdiri di atas kerja kolektif. Kenali orang-orang di balik Drama Arena 5102, sekaligus rencana anggaran yang tercantum dalam dokumen kepanitiaan.</p>
        </FadeIn>

        <div className="da-committee-switch" role="tablist" aria-label="Dokumen kepanitiaan">
          <button type="button" role="tab" aria-selected={activeTab === 'panitia'} className={activeTab === 'panitia' ? 'is-active' : ''} onClick={() => setActiveTab('panitia')}>
            <Users size={15}/> <span>Susunan Panitia</span><small>01</small>
          </button>
          <button type="button" role="tab" aria-selected={activeTab === 'anggaran'} className={activeTab === 'anggaran' ? 'is-active' : ''} onClick={() => setActiveTab('anggaran')}>
            <Wallet size={15}/> <span>Rencana Anggaran</span><small>02</small>
          </button>
        </div>

        {activeTab === 'panitia' ? (
          <FadeIn>
            <div className="da-committee-overview">
              <div><strong>{committeeData.length.toString().padStart(2, '0')}</strong><span>Bidang & unsur</span></div>
              <div><strong>{totalPeople.toString().padStart(2, '0')}</strong><span>Nama tercantum</span></div>
              <div><strong>5102</strong><span>Drama Arena</span></div>
            </div>
            <div className="da-committee-tools">
              <div><span>DIRECTORY / 01—16</span><span>{filteredCommittee.length} dari {committeeData.length} bidang</span></div>
              <label className="da-committee-search"><Search size={15}/><input value={search} onChange={event => setSearch(event.target.value)} placeholder="Cari nama atau bidang..." aria-label="Cari nama atau bidang"/></label>
            </div>
            {filteredCommittee.length ? (
              <div className="da-committee-list">
                {filteredCommittee.map((group) => {
                  const isExpanded = expandedRoles.includes(group.role) || search.trim().length > 0;
                  return <article className={`da-committee-row ${isExpanded ? 'is-open' : ''}`} key={group.role}>
                    <button type="button" className="da-committee-row-trigger" aria-expanded={isExpanded} onClick={() => toggleRole(group.role)}>
                      <span className="da-committee-row-number">{String(committeeData.indexOf(group) + 1).padStart(2, '0')}</span>
                      <span className="da-committee-row-title"><strong>{group.role}</strong><small>{group.names.length} personel tercantum</small></span>
                      <span className="da-committee-row-count">{String(group.names.length).padStart(2, '0')}</span>
                      <ChevronDown className="da-committee-chevron" size={18}/>
                    </button>
                    {isExpanded && <div className="da-committee-members">{group.names.map((name, index) => <div key={name}><span>{String(index + 1).padStart(2, '0')}</span>{name}</div>)}</div>}
                  </article>;
                })}
              </div>
            ) : <div className="da-committee-empty">Tidak ada nama atau bidang yang cocok dengan pencarian “{search}”.</div>}
          </FadeIn>
        ) : (
          <FadeIn>
            <div className="da-budget-document">
              <div className="da-budget-doc-head">
                <div><span className="da-budget-stamp">DOKUMEN ANGGARAN · 1447—1448 H</span><h3>Rencana Anggaran Biaya</h3><p>SK NO. 05/DA.5102/KMI/PMDG</p></div>
                <div className="da-budget-total"><small>Total anggaran tercantum</small><strong>Rp 500.107.000</strong><span>Tahun Ajaran 1447–1448 H</span></div>
              </div>
              <div className="da-budget-note"><span>CATATAN PEMERIKSAAN DATA</span><p>Nominal total pada dokumen dan hasil penjumlahan 13 alokasi di bawah menunjukkan angka yang berbeda. Angka asli ditampilkan apa adanya agar dapat diverifikasi, bukan disesuaikan secara sepihak.</p></div>
              <div className="da-budget-list-heading"><span>RINCIAN ALOKASI</span><span>{budgetItems.length} POS ANGGARAN</span></div>
              <div className="da-budget-items">
                {budgetItems.map(item => <div className="da-budget-item" key={item.no}>
                  <span className="da-budget-number">{String(item.no).padStart(2, '0')}</span>
                  <div className="da-budget-item-main"><div><strong>{item.section}</strong><span>{item.amount}</span></div><div className="da-budget-track"><i style={{ width: `${((item.raw || 0) / largestAllocation) * 100}%` }}/></div></div>
                </div>)}
              </div>
              <div className="da-budget-reconciliation">
                <div><span>Total dari rincian 13 pos</span><strong>{formatRupiah(listedBudgetTotal)}</strong></div>
                <div><span>Total yang tercantum di dokumen</span><strong>Rp 500.107.000</strong></div>
                <div className="da-budget-difference"><span>Selisih yang perlu dikonfirmasi</span><strong>{formatRupiah(listedBudgetTotal - statedBudgetTotal)}</strong></div>
              </div>
              <p className="da-budget-footnote">Visualisasi proporsi batang dihitung dari nominal tiap pos terhadap pos terbesar. Nilai nominal mengikuti daftar yang tersedia.</p>
            </div>
          </FadeIn>
        )}

        <FadeIn className="da-committee-merch">
          <div className="da-committee-merch-image"><img src={importImage('workshirt.png')} alt="Seragam resmi panitia Drama Arena 5102" loading="lazy" decoding="async"/></div>
          <div className="da-committee-merch-copy"><span>IDENTITAS RESMI · 5102</span><h3>Seragam dan identitas visual panitia</h3><p>Jelajahi arsip visual, pedoman identitas, dan dokumentasi pendukung Drama Arena 5102.</p></div>
          {onNavigate && <button type="button" onClick={() => onNavigate('media-showcase')}>Buka Media Showcase <ArrowRight size={15}/></button>}
        </FadeIn>
      </div>
    </section>
  );
};

export default CommitteeSection;
