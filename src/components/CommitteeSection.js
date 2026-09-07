import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { SectionLabel, FleuronDivider } from './HeroSection';
const committeeData = [
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
const budgetItems = [
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
export const CommitteeSection = () => {
    const [committeeTab, setCommitteeTab] = useState('panitia');
    return (React.createElement("section", { id: "committee", className: "py-24 px-5 sm:px-8 md:px-12" },
        React.createElement("div", { className: "max-w-6xl mx-auto" },
            React.createElement(FadeIn, { delay: 0, className: "text-center mb-12" },
                React.createElement(SectionLabel, { text: "FORMASI KEPANITIAAN" }),
                React.createElement("h2", { className: "font-mileast italic font-bold mt-3 leading-none uppercase", style: { fontSize: 'clamp(2rem, 6vw, 72px)', color: '#062B4A' } }, "Panitia & Anggaran"),
                React.createElement(FleuronDivider, null)),
            React.createElement(FadeIn, { delay: 0.1, className: "flex justify-center mb-10" },
                React.createElement("div", { className: "flex gap-2 p-1 rounded-lg", style: { background: 'rgba(6,43,74,0.08)', border: '1px solid rgba(214,145,3,0.2)' } }, [
                    ['panitia', 'Susunan Panitia'],
                    ['anggaran', 'Rencana Anggaran']
                ].map(([key, label]) => (React.createElement("button", { key: key, onClick: () => setCommitteeTab(key), className: "px-6 py-2 rounded-md font-cormorant-sc text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer", style: {
                        background: committeeTab === key ? '#062B4A' : 'transparent',
                        color: committeeTab === key ? '#D69103' : '#062B4A',
                        fontWeight: committeeTab === key ? '700' : '400'
                    } }, label))))),
            committeeTab === 'panitia' ? (React.createElement(FadeIn, { delay: 0.1 },
                React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" }, committeeData.map((group, idx) => (React.createElement("div", { key: idx, className: "classic-card rounded-2xl p-6" },
                    React.createElement("div", { className: "flex items-center gap-2 mb-3 pb-3", style: { borderBottom: '1px solid rgba(214,145,3,0.25)' } },
                        React.createElement("div", { className: "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0", style: { background: '#062B4A', color: '#D69103' } }, idx + 1),
                        React.createElement("h4", { className: "font-cormorant-sc font-bold text-sm uppercase tracking-wider", style: { color: '#062B4A' } }, group.role)),
                    React.createElement("ul", { className: "flex flex-col gap-1.5" }, group.names.map((n, i) => (React.createElement("li", { key: i, className: "flex items-start gap-2 font-baskerville text-xs leading-relaxed", style: { color: '#062B4A', opacity: 0.85 } },
                        React.createElement("span", { className: "mt-1 flex-shrink-0", style: { color: '#D69103' } }, "\u00B7"),
                        n)))))))))) : (React.createElement(FadeIn, { delay: 0.1 },
                React.createElement("div", { className: "classic-card rounded-3xl p-6 sm:p-10 shadow-xl max-w-3xl mx-auto" },
                    React.createElement("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 gap-4", style: { borderBottom: '1px solid rgba(214,145,3,0.3)' } },
                        React.createElement("div", null,
                            React.createElement("h3", { className: "font-playfair font-bold text-xl", style: { color: '#062B4A' } }, "Anggaran Kepanitiaan"),
                            React.createElement("p", { className: "font-cormorant-sc text-xs mt-1 tracking-wider", style: { color: '#D69103' } }, "Drama Arena 5102 \u00B7 T.A. 1447-1448")),
                        React.createElement("div", { className: "text-right p-4 rounded-xl", style: { background: '#062B4A' } },
                            React.createElement("div", { className: "font-cormorant-sc text-xs uppercase tracking-wider", style: { color: 'rgba(244,241,235,0.7)' } }, "Total Keseluruhan"),
                            React.createElement("div", { className: "font-mileast font-bold text-xl gold-text" }, "Rp 500.107.000"))),
                    React.createElement("div", { className: "overflow-x-auto" },
                        React.createElement("table", { className: "w-full text-sm" },
                            React.createElement("thead", null,
                                React.createElement("tr", { style: { borderBottom: '2px solid rgba(214,145,3,0.4)' } },
                                    React.createElement("th", { className: "py-2 px-3 text-left font-cormorant-sc text-xs tracking-wider uppercase", style: { color: '#D69103' } }, "No"),
                                    React.createElement("th", { className: "py-2 px-3 text-left font-cormorant-sc text-xs tracking-wider uppercase", style: { color: '#D69103' } }, "Bagian"),
                                    React.createElement("th", { className: "py-2 px-3 text-right font-cormorant-sc text-xs tracking-wider uppercase", style: { color: '#D69103' } }, "Nominal"))),
                            React.createElement("tbody", null,
                                budgetItems.map((b) => (React.createElement("tr", { key: b.no, style: { borderBottom: '1px solid rgba(6,43,74,0.1)' }, className: "hover:bg-yellow-50/50 transition-colors" },
                                    React.createElement("td", { className: "py-2.5 px-3 font-cormorant-sc text-xs opacity-60", style: { color: '#062B4A' } },
                                        b.no,
                                        "."),
                                    React.createElement("td", { className: "py-2.5 px-3 font-baskerville font-bold text-sm uppercase", style: { color: '#062B4A' } }, b.section),
                                    React.createElement("td", { className: "py-2.5 px-3 text-right font-mileast font-bold", style: { color: '#062B4A' } }, b.amount)))),
                                React.createElement("tr", { style: { background: '#062B4A' } },
                                    React.createElement("td", { colSpan: 2, className: "py-3 px-3 text-right font-cormorant-sc font-bold text-sm uppercase tracking-widest", style: { color: '#D69103' } }, "Total Anggaran:"),
                                    React.createElement("td", { className: "py-3 px-3 text-right font-mileast font-bold text-base gold-text" }, "Rp 500.107.000")))))))))));
};
