import React from 'react';
import { X } from 'lucide-react';
export const TrailerModal = ({ show, onClose }) => {
    if (!show)
        return null;
    return (React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4" },
        React.createElement("div", { className: "fixed inset-0", style: { background: 'rgba(6,43,74,0.85)', backdropFilter: 'blur(8px)' }, onClick: onClose }),
        React.createElement("div", { className: "relative w-full max-w-lg rounded-3xl overflow-hidden z-10", style: { background: '#F4F1EB', border: '2px solid rgba(214,145,3,0.4)', boxShadow: '0 20px 60px rgba(6,43,74,0.4)' } },
            React.createElement("div", { className: "relative h-52" },
                React.createElement("img", { src: show.img, alt: show.title, className: "w-full h-full object-cover filter sepia-[0.2]" }),
                React.createElement("div", { className: "absolute inset-0", style: { background: 'linear-gradient(to top, rgba(6,43,74,0.9) 0%, transparent 50%)' } }),
                React.createElement("button", { onClick: onClose, className: "absolute top-4 right-4 p-2 rounded-full cursor-pointer transition-colors hover:bg-white/20", style: { background: 'rgba(244,241,235,0.9)', color: '#062B4A' }, "aria-label": "Close detail modal" },
                    React.createElement(X, { className: "w-4 h-4" })),
                React.createElement("div", { className: "absolute bottom-4 left-4 right-4" },
                    React.createElement("div", { className: "font-cormorant-sc text-xs tracking-widest", style: { color: '#D69103' } }, show.category),
                    React.createElement("h3", { className: "font-playfair font-bold text-xl text-white" }, show.title))),
            React.createElement("div", { className: "p-6" },
                React.createElement("div", { className: "font-cormorant-sc text-xs tracking-widest uppercase mb-3", style: { color: '#D69103' } }, "Daftar Penampilan"),
                React.createElement("div", { className: "flex flex-wrap gap-2" }, show.items.map((item) => (React.createElement("span", { key: item, className: "font-cormorant-sc text-sm px-3 py-1.5 rounded-full font-semibold", style: { background: 'rgba(6,43,74,0.08)', border: '1px solid rgba(214,145,3,0.3)', color: '#062B4A' } }, item))))))));
};
