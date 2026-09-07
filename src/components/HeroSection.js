import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { Calendar, MapPin, Menu, X } from 'lucide-react';
export const StampLogo = ({ size = 200 }) => (React.createElement("svg", { width: size, height: size, viewBox: "0 0 200 200", className: "float-anim" },
    React.createElement("rect", { x: "10", y: "10", width: "180", height: "180", rx: "4", fill: "none", stroke: "#062B4A", strokeWidth: "3" }),
    React.createElement("rect", { x: "20", y: "20", width: "160", height: "160", rx: "2", fill: "none", stroke: "#D69103", strokeWidth: "1.5", strokeDasharray: "4,3" }),
    React.createElement("g", { transform: "translate(100,100)" },
        React.createElement("path", { d: "M-28,-38 L28,-38 L8,-4 L28,4 L-28,4 Z", fill: "#D69103", opacity: "0.15" }),
        React.createElement("path", { d: "M-28,38 L28,38 L8,4 L-28,4 Z", fill: "#062B4A", opacity: "0.12" }),
        React.createElement("path", { d: "M-28,-38 L28,-38 L8,-4 L28,4 L-28,4 Z", fill: "none", stroke: "#D69103", strokeWidth: "2.5" }),
        React.createElement("path", { d: "M28,-38 L8,-4 L28,4 L-28,4 L8,38 L-28,38", fill: "none", stroke: "#062B4A", strokeWidth: "2.5" }),
        React.createElement("line", { x1: "-28", y1: "-38", x2: "28", y2: "-38", stroke: "#062B4A", strokeWidth: "3" }),
        React.createElement("line", { x1: "-28", y1: "38", x2: "28", y2: "38", stroke: "#062B4A", strokeWidth: "3" })),
    React.createElement("text", { x: "100", y: "48", textAnchor: "middle", fontFamily: "'Mileast', serif", fontSize: "9", fontWeight: "700", fill: "#062B4A", letterSpacing: "3" }, "DRAMA"),
    React.createElement("text", { x: "100", y: "165", textAnchor: "middle", fontFamily: "'Mileast', serif", fontSize: "9", fontWeight: "700", fill: "#D69103", letterSpacing: "3" }, "ARENA"),
    React.createElement("text", { x: "100", y: "178", textAnchor: "middle", fontFamily: "'Cormorant SC', serif", fontSize: "7", fill: "#062B4A", letterSpacing: "2" }, "5102"),
    React.createElement("text", { x: "22", y: "32", fontFamily: "serif", fontSize: "10", fill: "#D69103", opacity: "0.6" }, "\u2726"),
    React.createElement("text", { x: "172", y: "32", fontFamily: "serif", fontSize: "10", fill: "#D69103", opacity: "0.6", textAnchor: "end" }, "\u2726"),
    React.createElement("text", { x: "22", y: "178", fontFamily: "serif", fontSize: "10", fill: "#D69103", opacity: "0.6" }, "\u2726"),
    React.createElement("text", { x: "172", y: "178", fontFamily: "serif", fontSize: "10", fill: "#D69103", opacity: "0.6", textAnchor: "end" }, "\u2726")));
export const FleuronDivider = () => (React.createElement("div", { className: "flex items-center gap-3 my-2 w-full max-w-xs mx-auto" },
    React.createElement("div", { className: "flex-1 h-px", style: { background: 'linear-gradient(to right, transparent, #D69103)' } }),
    React.createElement("svg", { width: "40", height: "20", viewBox: "0 0 40 20", fill: "none" },
        React.createElement("path", { d: "M20 10 C15 4, 5 4, 2 10 C5 16, 15 16, 20 10Z", fill: "#D69103", opacity: "0.8" }),
        React.createElement("path", { d: "M20 10 C25 4, 35 4, 38 10 C35 16, 25 16, 20 10Z", fill: "#D69103", opacity: "0.8" }),
        React.createElement("circle", { cx: "20", cy: "10", r: "2.5", fill: "#062B4A" })),
    React.createElement("div", { className: "flex-1 h-px", style: { background: 'linear-gradient(to left, transparent, #D69103)' } })));
export const SectionLabel = ({ text }) => (React.createElement("span", { className: "font-cormorant-sc text-xs tracking-[0.4em] uppercase", style: { color: '#D69103' } },
    "\u2726 ",
    text,
    " \u2726"));
export const GoldButton = ({ onClick, label, outline = false }) => (React.createElement("button", { onClick: onClick, className: "group relative px-8 py-3 font-cormorant-sc font-semibold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer", style: {
        background: outline ? 'transparent' : 'linear-gradient(135deg, #B8860B 0%, #D69103 50%, #E8A820 100%)',
        color: outline ? '#062B4A' : '#F4F1EB',
        border: '2px solid #D69103',
        boxShadow: outline ? 'none' : '0 4px 20px rgba(214,145,3,0.4)',
        letterSpacing: '0.15em'
    } },
    label,
    " ",
    React.createElement("span", { className: "inline-block transition-transform group-hover:translate-x-1" }, "\u2192")));
export const HeroSection = ({ onOpenSponsorshipModal, onNavigate }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const handleNav = (id) => {
        onNavigate(id);
        setMobileMenuOpen(false);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("nav", { className: "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4", style: { background: 'rgba(244,241,235,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(214,145,3,0.3)' } },
            React.createElement("div", { className: "font-mileast italic text-base font-bold cursor-pointer", onClick: () => handleNav('root') },
                React.createElement("span", { className: "gold-text font-playfair text-lg" }, "Drama Arena"),
                React.createElement("span", { className: "ml-1 text-xs font-cormorant-sc", style: { color: '#D69103' } }, "5102")),
            React.createElement("div", { className: "hidden md:flex items-center gap-8" },
                [
                    ['PROFIL', 'about'],
                    ['TEMA', 'theme'],
                    ['ACARA', 'shows'],
                    ['PANITIA', 'committee']
                ].map(([label, id]) => (React.createElement("button", { key: id, onClick: () => handleNav(id), className: "font-cormorant-sc text-xs tracking-widest uppercase transition-colors hover:text-yellow-700 cursor-pointer", style: { color: '#062B4A' } }, label))),
                React.createElement(GoldButton, { onClick: onOpenSponsorshipModal, label: "SPONSORSHIP" })),
            React.createElement("button", { className: "md:hidden text-2xl p-1 cursor-pointer", onClick: () => setMobileMenuOpen(!mobileMenuOpen), style: { color: '#062B4A' }, "aria-label": "Toggle Menu" }, mobileMenuOpen ? React.createElement(X, { className: "w-6 h-6" }) : React.createElement(Menu, { className: "w-6 h-6" }))),
        mobileMenuOpen && (React.createElement("div", { className: "fixed inset-0 z-40 flex flex-col items-center justify-center gap-8", style: { background: 'rgba(244,241,235,0.97)' } },
            [
                ['PROFIL', 'about'],
                ['TEMA', 'theme'],
                ['ACARA', 'shows'],
                ['PANITIA', 'committee']
            ].map(([label, id]) => (React.createElement("button", { key: id, onClick: () => handleNav(id), className: "font-cormorant-sc text-2xl tracking-widest uppercase cursor-pointer", style: { color: '#062B4A' } }, label))),
            React.createElement(GoldButton, { onClick: () => {
                    onOpenSponsorshipModal();
                    setMobileMenuOpen(false);
                }, label: "SPONSORSHIP" }))),
        React.createElement("section", { id: "root", className: "relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden section-stamp" },
            React.createElement("div", { className: "absolute inset-0 pointer-events-none opacity-5", style: {
                    backgroundImage: 'repeating-linear-gradient(0deg, #062B4A 0px, #062B4A 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #062B4A 0px, #062B4A 1px, transparent 1px, transparent 40px)'
                } }),
            React.createElement(FadeIn, { delay: 0, y: -20, className: "flex flex-col items-center gap-2 mb-8" },
                React.createElement(SectionLabel, { text: "PAGELARAN SENI AKBAR" }),
                React.createElement(FleuronDivider, null)),
            React.createElement(FadeIn, { delay: 0.1, y: 0, className: "mb-6" },
                React.createElement(StampLogo, { size: 200 })),
            React.createElement(FadeIn, { delay: 0.2, y: 30, className: "text-center" },
                React.createElement("h1", { className: "font-mileast italic font-bold leading-none tracking-tight uppercase", style: { fontSize: 'clamp(3.5rem, 12vw, 130px)', color: '#062B4A', lineHeight: 0.9 } },
                    "Drama",
                    React.createElement("br", null),
                    React.createElement("span", { className: "gold-text not-italic" }, "Arena"))),
            React.createElement(FadeIn, { delay: 0.3, y: 20, className: "text-center mt-4" },
                React.createElement("div", { className: "font-cormorant-sc tracking-[0.5em] text-sm uppercase mb-3", style: { color: '#D69103' } }, "Kelas 5 \u00B7 102 \u00B7 PMDG"),
                React.createElement("p", { className: "font-mileast italic text-base sm:text-lg max-w-xl mx-auto", style: { color: '#062B4A', opacity: 0.8 } }, "\"Forever Striving for an Authentic Masterpiece\"")),
            React.createElement(FadeIn, { delay: 0.4, y: 20, className: "mt-8" },
                React.createElement(FleuronDivider, null),
                React.createElement("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 text-sm font-cormorant-sc", style: { color: '#062B4A' } },
                    React.createElement("span", { className: "flex items-center gap-2" },
                        React.createElement(Calendar, { className: "w-4 h-4", style: { color: '#D69103' } }),
                        "Kamis, 20 Dzulqo'dah 1447 / 7 Mei 2026"),
                    React.createElement("span", { className: "hidden sm:block", style: { color: '#D69103' } }, "\u00B7"),
                    React.createElement("span", { className: "flex items-center gap-2" },
                        React.createElement(MapPin, { className: "w-4 h-4", style: { color: '#D69103' } }),
                        "PMDG Kampus Pusat \u2014 19.30 WIB"))),
            React.createElement(FadeIn, { delay: 0.5, y: 20, className: "mt-8 flex gap-4 flex-wrap justify-center" },
                React.createElement(GoldButton, { onClick: onOpenSponsorshipModal, label: "PROPOSAL SPONSORSHIP" }),
                React.createElement(GoldButton, { onClick: () => handleNav('about'), label: "SELENGKAPNYA", outline: true })))));
};
