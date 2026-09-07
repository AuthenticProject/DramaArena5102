import React from 'react';
import { FadeIn } from './FadeIn';
import { SectionLabel, FleuronDivider, StampLogo } from './HeroSection';
import { Star } from 'lucide-react';
const pillarsData = [
    { en: "Educating", id: "Mendidik", desc: "Setiap sajian seni mengandung nilai dan pesan moral Islami yang mendidik jiwa santri." },
    { en: "Entertaining", id: "Menghibur", desc: "Hiburan yang sehat, penuh semangat, dan memberikan pengalaman estetika yang luar biasa." },
    { en: "Elegant", id: "Elegan", desc: "Tampilan artistik yang anggun, berkelas, dan mencerminkan kebudayaan Nusantara." },
    { en: "Enjoyable", id: "Menyenangkan", desc: "Suasana yang hangat dan penuh kegembiraan untuk seluruh sivitas pondok." }
];
export const AboutSection = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { id: "about", className: "py-24 px-5 sm:px-8 md:px-12 max-w-6xl mx-auto" },
            React.createElement(FadeIn, { delay: 0, className: "text-center mb-16" },
                React.createElement(SectionLabel, { text: "PROFIL SINGKAT" }),
                React.createElement("h2", { className: "font-mileast italic font-bold mt-3 leading-none uppercase", style: { fontSize: 'clamp(2rem, 6vw, 72px)', color: '#062B4A' } }, "Tentang Acara"),
                React.createElement(FleuronDivider, null)),
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10" },
                React.createElement(FadeIn, { delay: 0.1 },
                    React.createElement("div", { className: "classic-card rounded-2xl p-8 h-full" },
                        React.createElement("div", { className: "font-cormorant-sc text-xs tracking-widest uppercase mb-2", style: { color: '#D69103' } }, "Penyelenggara"),
                        React.createElement("h3", { className: "font-playfair font-bold text-2xl mb-4", style: { color: '#062B4A' } }, "Pondok Modern Darussalam Gontor"),
                        React.createElement("p", { className: "font-baskerville text-sm leading-relaxed mb-4", style: { color: '#062B4A', opacity: 0.8 } }, "PMDG merupakan lembaga pendidikan Islam pesantren modern bertaraf internasional yang kini dipimpin oleh Trimurti: Dr. K.H. Abdullah Syukri Zarkasyi, M.A., K.H. Hasan Abdullah Sahal, dan K.H. Syamsul Hadi Abdan, S.Ag."),
                        React.createElement("div", { className: "grid grid-cols-2 gap-4 mt-6" }, [
                            ['32.000+', 'Santri & Asatidz'],
                            ['20', 'Kampus PMDG'],
                            ['441', 'Santri Kelas 5 KMI'],
                            ['5.000+', 'Estimasi Penonton']
                        ].map(([num, label]) => (React.createElement("div", { key: label, className: "text-center p-3 rounded-lg", style: { background: 'rgba(214,145,3,0.08)', border: '1px solid rgba(214,145,3,0.2)' } },
                            React.createElement("div", { className: "font-mileast text-2xl font-bold gold-text" }, num),
                            React.createElement("div", { className: "font-cormorant-sc text-xs tracking-wider", style: { color: '#062B4A', opacity: 0.7 } }, label))))))),
                React.createElement(FadeIn, { delay: 0.15 },
                    React.createElement("div", { className: "classic-card rounded-2xl p-8 h-full" },
                        React.createElement("div", { className: "font-cormorant-sc text-xs tracking-widest uppercase mb-2", style: { color: '#D69103' } }, "Maksud & Tujuan"),
                        React.createElement("h3", { className: "font-playfair font-bold text-2xl mb-4", style: { color: '#062B4A' } }, "Drama Arena 5102"),
                        React.createElement("p", { className: "font-baskerville text-sm leading-relaxed mb-4", style: { color: '#062B4A', opacity: 0.8 } }, "Salah satu rangkaian acara utama dalam Pekan Perkenalan Khutbatu-l-'Arsy yang diselenggarakan oleh siswa kelas 5 KMI PMDG T.A. 1447-1448 / 2026-2027."),
                        React.createElement("hr", { className: "gold-rule my-4" }),
                        React.createElement("div", { className: "font-cormorant-sc text-xs tracking-widest uppercase mb-3", style: { color: '#D69103' } }, "4 Unsur Pertunjukan"),
                        React.createElement("div", { className: "grid grid-cols-2 gap-3" }, pillarsData.map(p => (React.createElement("div", { key: p.en, className: "flex items-center gap-2" },
                            React.createElement(Star, { className: "w-3.5 h-3.5 flex-shrink-0", style: { color: '#D69103' } }),
                            React.createElement("span", { className: "font-cormorant-sc text-sm font-semibold", style: { color: '#062B4A' } }, p.en))))))))),
        React.createElement("section", { className: "py-20 px-5 sm:px-8", style: { background: '#062B4A' } },
            React.createElement("div", { className: "max-w-5xl mx-auto" },
                React.createElement(FadeIn, { delay: 0, className: "text-center mb-14" },
                    React.createElement("span", { className: "font-cormorant-sc text-xs tracking-[0.4em] uppercase", style: { color: '#D69103' } }, "\u2726 BRAND IDENTITY \u2726"),
                    React.createElement("h2", { className: "font-mileast italic font-bold mt-3 leading-none uppercase gold-text", style: { fontSize: 'clamp(2rem, 5vw, 60px)' } }, "Drama Arena 5102"),
                    React.createElement(FleuronDivider, null)),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8" },
                    React.createElement(FadeIn, { delay: 0.1 },
                        React.createElement("div", { className: "p-6 rounded-2xl h-full", style: { border: '1px solid rgba(214,145,3,0.3)', background: 'rgba(244,241,235,0.05)' } },
                            React.createElement("div", { className: "font-cormorant-sc text-xs tracking-widest uppercase mb-4", style: { color: '#D69103' } }, "Color Palette"),
                            React.createElement("div", { className: "flex flex-col gap-3" }, [
                                { hex: '#062B4A', name: 'Navy Blue', label: '#062b4a' },
                                { hex: '#D69103', name: 'Gold', label: '#d69103' },
                                { hex: '#F4F1EB', name: 'Bone White', label: '#f4f1eb' }
                            ].map(c => (React.createElement("div", { key: c.name, className: "flex items-center gap-3" },
                                React.createElement("div", { className: "w-10 h-10 rounded-lg flex-shrink-0 border", style: { background: c.hex, borderColor: 'rgba(214,145,3,0.4)' } }),
                                React.createElement("div", null,
                                    React.createElement("div", { className: "font-cormorant-sc text-sm font-bold", style: { color: '#F4F1EB' } }, c.name),
                                    React.createElement("div", { className: "font-cormorant-sc text-xs opacity-60", style: { color: '#F4F1EB' } }, c.label)))))))),
                    React.createElement(FadeIn, { delay: 0.15 },
                        React.createElement("div", { className: "p-6 rounded-2xl h-full", style: { border: '1px solid rgba(214,145,3,0.3)', background: 'rgba(244,241,235,0.05)' } },
                            React.createElement("div", { className: "font-cormorant-sc text-xs tracking-widest uppercase mb-4", style: { color: '#D69103' } }, "Branding Theme"),
                            [
                                ['🏛', 'Old Classic', 'Estetika klasik bernilai tinggi'],
                                ['📮', 'Stamp / Prangko', 'Simbol perjalanan & pesan budaya'],
                                ['🏯', 'Kebudayaan Indonesia', 'Akar budaya Nusantara'],
                                ['⏳', 'Jam Pasir', 'Perjalanan waktu yang tak berhenti']
                            ].map(([ic, name, desc]) => (React.createElement("div", { key: name, className: "flex items-start gap-3 mb-4" },
                                React.createElement("span", { className: "text-2xl" }, ic),
                                React.createElement("div", null,
                                    React.createElement("div", { className: "font-cormorant-sc text-sm font-bold", style: { color: '#D69103' } }, name),
                                    React.createElement("div", { className: "font-cormorant-sc text-xs opacity-70", style: { color: '#F4F1EB' } }, desc))))))),
                    React.createElement(FadeIn, { delay: 0.2 },
                        React.createElement("div", { className: "p-6 rounded-2xl h-full", style: { border: '1px solid rgba(214,145,3,0.3)', background: 'rgba(244,241,235,0.05)' } },
                            React.createElement("div", { className: "font-cormorant-sc text-xs tracking-widest uppercase mb-4", style: { color: '#D69103' } }, "Main Logo"),
                            React.createElement("div", { className: "flex justify-center mb-4" },
                                React.createElement(StampLogo, { size: 120 })),
                            React.createElement("hr", { className: "gold-rule mb-4" }),
                            React.createElement("div", { className: "font-cormorant-sc text-xs tracking-widest uppercase mb-2", style: { color: '#D69103' } }, "Font Type"),
                            React.createElement("div", { className: "font-mileast text-3xl font-bold", style: { color: '#F4F1EB' } }, "Mileast"),
                            React.createElement("div", { className: "font-cormorant-sc text-lg", style: { color: '#D69103' } }, "& Alverata"),
                            React.createElement("div", { className: "text-xs mt-2 font-cormorant-sc", style: { color: '#F4F1EB', opacity: 0.6 } }, "Tipografi dekoratif klasik"))))))));
};
