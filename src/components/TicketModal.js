import React from 'react';
import { X, Check } from 'lucide-react';
import { SectionLabel, GoldButton } from './HeroSection';
const sponsorTiers = [
    {
        tier: 'BRONZE',
        pct: '10%',
        amount: 'Rp 50.010.700',
        perks: ['Logo kecil media cetak', 'Logo di banner', 'Kaos panitia']
    },
    {
        tier: 'SILVER',
        pct: '30%',
        amount: 'Rp 150.032.100',
        perks: ['Logo sedang di semua media', 'Gantungan kunci', 'Tayangan videotron', 'Event gate']
    },
    {
        tier: 'GOLD',
        pct: '50%',
        amount: 'Rp 250.053.500',
        perks: ['Logo besar semua media', 'Tayangan iklan utama', 'Promosi medsos', 'Hak naming area']
    }
];
export const TicketModal = ({ isOpen, onClose }) => {
    if (!isOpen)
        return null;
    return (React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" },
        React.createElement("div", { className: "fixed inset-0", style: { background: 'rgba(6,43,74,0.85)', backdropFilter: 'blur(8px)' }, onClick: onClose }),
        React.createElement("div", { className: "relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 z-10 my-auto", style: { background: '#F4F1EB', border: '2px solid rgba(214,145,3,0.5)', boxShadow: '0 25px 80px rgba(6,43,74,0.5)' } },
            React.createElement("button", { onClick: onClose, className: "absolute top-5 right-5 p-2 rounded-full cursor-pointer transition-colors hover:bg-black/10", style: { color: '#062B4A' }, "aria-label": "Close modal" },
                React.createElement(X, { className: "w-5 h-5" })),
            React.createElement("div", { className: "mb-6" },
                React.createElement(SectionLabel, { text: "KEMITRAAN RESMI" }),
                React.createElement("h2", { className: "font-mileast italic font-bold text-3xl mt-2", style: { color: '#062B4A' } }, "Paket Sponsorship"),
                React.createElement("p", { className: "font-baskerville text-xs mt-1", style: { color: '#062B4A', opacity: 0.7 } },
                    "Total Anggaran: ",
                    React.createElement("strong", null, "Rp 500.107.000"))),
            React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6" }, sponsorTiers.map(({ tier, pct, amount, perks }, i) => (React.createElement("div", { key: tier, className: "rounded-2xl p-5", style: {
                    background: i === 2 ? '#062B4A' : 'transparent',
                    border: `2px solid ${i === 2 ? '#D69103' : 'rgba(6,43,74,0.2)'}`
                } },
                React.createElement("div", { className: "font-mileast font-bold text-base mb-1", style: { color: '#D69103' } }, tier),
                React.createElement("div", { className: "font-cormorant-sc text-xs tracking-wider mb-1", style: { color: i === 2 ? 'rgba(244,241,235,0.6)' : 'rgba(6,43,74,0.6)' } },
                    pct,
                    " dari total"),
                React.createElement("div", { className: "font-mileast font-bold text-base mb-3", style: { color: i === 2 ? '#F4F1EB' : '#062B4A' } }, amount),
                React.createElement("ul", { className: "flex flex-col gap-1.5" }, perks.map((p) => (React.createElement("li", { key: p, className: "flex items-start gap-2 font-baskerville text-xs", style: { color: i === 2 ? 'rgba(244,241,235,0.8)' : 'rgba(6,43,74,0.8)' } },
                    React.createElement(Check, { className: "w-3.5 h-3.5 mt-0.5 flex-shrink-0", style: { color: '#D69103' } }),
                    p)))))))),
            React.createElement("div", { className: "p-4 rounded-2xl mb-6", style: { background: 'rgba(6,43,74,0.07)', border: '1px solid rgba(214,145,3,0.3)' } },
                React.createElement("div", { className: "font-cormorant-sc text-xs tracking-widest uppercase mb-2", style: { color: '#D69103' } }, "Rekening Resmi Sponsorship"),
                React.createElement("p", { className: "font-baskerville text-sm font-bold", style: { color: '#062B4A' } },
                    "Bank BRI: ",
                    React.createElement("span", { style: { color: '#D69103' } }, "0070-01-000315-56-7")),
                React.createElement("p", { className: "font-baskerville text-xs mt-1 opacity-70", style: { color: '#062B4A' } }, "Wesel: Panitia Pagelaran Seni Drama Arena Siswa Kelas 5 KMI PMDG, Ponorogo 63472")),
            React.createElement("div", { className: "flex justify-end" },
                React.createElement(GoldButton, { onClick: () => {
                        alert('Terima kasih! Tim kami akan menghubungi Anda segera.');
                        onClose();
                    }, label: "AJUKAN SPONSORSHIP" })))));
};
