import React from 'react';
import { FadeIn } from './FadeIn';
const actsData = [
    {
        number: "01",
        title: "EDUCATING",
        subtitle: "Pendidikan & Nilai Islam",
        description: "Pementasan yang serat akan pesan moral, penanaman jiwa kepemimpinan, kedisiplinan, dan pembentukan karakter santri sesuai filosofi Pondok Modern."
    },
    {
        number: "02",
        title: "ENTERTAINING",
        subtitle: "Hiburan & Kreativitas",
        description: "Sajian seni budaya yang dikemas penuh kehangatan, dinamika pertunjukan yang energik, serta penampilan atraktif yang memukau penonton."
    },
    {
        number: "03",
        title: "ELEGANT",
        subtitle: "Estetika & Keindahan",
        description: "Tatanan panggung yang megah, arsitektur background indah, tatanan pencahayaan artistik, serta desain busana dan properti berkelas."
    },
    {
        number: "04",
        title: "ENJOYABLE",
        subtitle: "Kenyamanan & Apresiasi",
        description: "Suasana pertunjukan yang memberikan kesan mendalam, harmonisasi antara musik, tari, teater, dan rupa yang dinikmati oleh ribuan pasang mata."
    }
];
export const ActsSection = () => {
    return (React.createElement("section", { className: "w-full bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 text-[#0C0C0C] relative z-0" },
        React.createElement("div", { className: "max-w-5xl mx-auto" },
            React.createElement(FadeIn, { delay: 0, y: 30, className: "w-full text-center" },
                React.createElement("span", { className: "text-[#0077B6] text-xs font-bold uppercase tracking-widest block mb-3" }, "\u2726 BENTUK ACARA PAGELARAN SENI"),
                React.createElement("h2", { className: "font-black uppercase centered text-[#0C0C0C] leading-none mb-16 sm:mb-20 md:mb-24", style: { fontSize: 'clamp(2.5rem, 9vw, 120px)' } }, "UNSUR UTAMA PERTUNJUKAN")),
            React.createElement("div", { className: "w-full flex flex-col border-t border-[rgba(12,12,12,0.15)]" }, actsData.map((act, idx) => (React.createElement(FadeIn, { key: act.number, delay: idx * 0.1, y: 20, className: "w-full" },
                React.createElement("div", { className: "w-full flex flex-col md:flex-row md:items-center justify-between py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] gap-4 md:gap-10 group hover:px-2 transition-all duration-300" },
                    React.createElement("div", { className: "font-black text-[#0C0C0C] leading-none tracking-tight flex-shrink-0 opacity-90 group-hover:opacity-100 transition-opacity", style: { fontSize: 'clamp(3rem, 9vw, 120px)' } }, act.number),
                    React.createElement("div", { className: "flex flex-col md:max-w-xl justify-center" },
                        React.createElement("div", { className: "flex items-center gap-3 mb-1" },
                            React.createElement("h3", { className: "text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-[#0C0C0C]" }, act.title),
                            React.createElement("span", { className: "px-3 py-0.5 rounded-full bg-[#0077B6]/10 text-[#0077B6] text-xs font-bold uppercase" }, act.subtitle)),
                        React.createElement("p", { className: "text-sm sm:text-base md:text-lg font-medium text-[#0C0C0C]/80 leading-relaxed" }, act.description))))))))));
};
