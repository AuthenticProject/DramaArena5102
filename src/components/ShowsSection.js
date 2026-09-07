import React from 'react';
import { FadeIn } from './FadeIn';
import { SectionLabel, FleuronDivider } from './HeroSection';
const showsData = [
    {
        id: "show-musik", number: "01", category: "SENI MUSIK",
        title: "Harmoni Musikal 5102",
        items: ["Hadrah", "Nasyid", "Paduan Suara", "Gema Shalawat", "Akustik", "Band 5102"],
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "show-teater", number: "02", category: "SENI TEATER",
        title: "Pementasan Drama Utama",
        items: ["Drama 5102", "Pantomim", "Teatrikal Puisi"],
        img: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "show-tari", number: "03", category: "SENI TARI",
        title: "Koreografi Nusantara & Modern",
        items: ["Tari Saman Atjeh", "Tari Campur Sari", "Tari Singa Depok", "Tari Timur", "Tari Dayak", "Tari Zapin", "Tari India", "Tari Modern"],
        img: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "show-rupa", number: "04", category: "SENI RUPA & MULTIMEDIA",
        title: "Visual Art & Multimedia",
        items: ["Grand Opening", "Iklan Pendidikan", "Video Motivasi", "Trailer DA 5102", "Grand Closing"],
        img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop"
    }
];
export const ShowsSection = ({ onOpenTrailer }) => {
    return (React.createElement("section", { id: "shows", className: "py-24 px-5 sm:px-8 md:px-12 bg-aged" },
        React.createElement("div", { className: "max-w-6xl mx-auto" },
            React.createElement(FadeIn, { delay: 0, className: "text-center mb-16" },
                React.createElement(SectionLabel, { text: "RAGAM PERTUNJUKAN" }),
                React.createElement("h2", { className: "font-mileast italic font-bold mt-3 leading-none uppercase", style: { fontSize: 'clamp(2rem, 6vw, 72px)', color: '#062B4A' } }, "Acara Utama"),
                React.createElement(FleuronDivider, null)),
            React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-8" }, showsData.map((show, i) => (React.createElement(FadeIn, { key: show.id, delay: i * 0.1 },
                React.createElement("div", { className: "classic-card rounded-2xl overflow-hidden group cursor-pointer", onClick: () => onOpenTrailer(show) },
                    React.createElement("div", { className: "relative h-52 overflow-hidden" },
                        React.createElement("img", { src: show.img, alt: show.title, className: "w-full h-full object-cover filter sepia-[0.2] group-hover:scale-105 transition-transform duration-500" }),
                        React.createElement("div", { className: "absolute inset-0", style: { background: 'linear-gradient(to top, rgba(6,43,74,0.8) 0%, transparent 60%)' } }),
                        React.createElement("div", { className: "absolute top-4 left-4 font-mileast font-bold text-5xl gold-text opacity-40" }, show.number),
                        React.createElement("div", { className: "absolute bottom-4 left-4 right-4" },
                            React.createElement("div", { className: "font-cormorant-sc text-xs tracking-widest uppercase mb-1", style: { color: '#D69103' } }, show.category),
                            React.createElement("h3", { className: "font-playfair font-bold text-xl text-white" }, show.title))),
                    React.createElement("div", { className: "p-5" },
                        React.createElement("div", { className: "flex flex-wrap gap-2" }, show.items.map(item => (React.createElement("span", { key: item, className: "font-cormorant-sc text-xs px-3 py-1 rounded-full", style: { background: 'rgba(214,145,3,0.1)', border: '1px solid rgba(214,145,3,0.3)', color: '#062B4A' } }, item)))))))))),
            React.createElement(FadeIn, { delay: 0.3, className: "mt-16" },
                React.createElement("div", { className: "classic-card rounded-3xl p-8 sm:p-12" },
                    React.createElement("div", { className: "text-center mb-8" },
                        React.createElement(SectionLabel, { text: "KONSEP PANGGUNG" }),
                        React.createElement("h3", { className: "font-playfair font-bold text-2xl mt-2", style: { color: '#062B4A' } }, "Arsitektur Latar Klasik Nusantara"),
                        React.createElement("p", { className: "font-baskerville text-sm mt-2 max-w-2xl mx-auto leading-relaxed", style: { color: '#062B4A', opacity: 0.8 } }, "Latar bangunan klasik Nusantara yang menggabungkan keanekaragaman arsitektur daerah \u2014 mencerminkan akar budaya bangsa dan semangat Gontor sebagai \"Guru Kebangsaan\".")),
                    React.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center" }, [
                        ['12 × 26.84 m', 'Panggung Utama'],
                        ['48 Beam', 'Tata Cahaya Beam'],
                        ['37 Par LED', 'Par LED Lights'],
                        ['2 Follow Spot', 'Follow Spotlight'],
                        ['LED 3×6 m', 'Layar LED'],
                        ['1.5×7.32×24.4 m', 'Elevated Stage'],
                        ['Special Effects', 'Efek Khusus'],
                        ['Pyro & Confetti', 'Grand Opening']
                    ].map(([val, label]) => (React.createElement("div", { key: label, className: "p-4 rounded-xl", style: { background: 'rgba(6,43,74,0.05)', border: '1px solid rgba(214,145,3,0.2)' } },
                        React.createElement("div", { className: "font-mileast font-bold text-base gold-text" }, val),
                        React.createElement("div", { className: "font-cormorant-sc text-xs mt-1 opacity-70", style: { color: '#062B4A' } }, label))))))))));
};
