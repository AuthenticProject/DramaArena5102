import React, { useEffect, useState } from 'react';
const StampEmblem = ({ size = 160 }) => (React.createElement("div", { className: "relative inline-flex items-center justify-center p-2" },
    React.createElement("div", { className: "absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500/30 via-cyan-400/40 to-sky-300/20 blur-xl animate-pulse-slow" }),
    React.createElement("svg", { width: size, height: size, viewBox: "0 0 200 200", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "relative z-10 transition-transform duration-500 hover:rotate-3 hover:scale-105 drop-shadow-[0_15px_30px_rgba(0,240,255,0.35)]" },
        React.createElement("circle", { cx: "100", cy: "100", r: "95", fill: "rgba(6, 25, 48, 0.92)", stroke: "#38BDF8", strokeWidth: "3" }),
        React.createElement("circle", { cx: "100", cy: "100", r: "88", stroke: "#00F0FF", strokeWidth: "1.5", strokeDasharray: "5 3" }),
        React.createElement("circle", { cx: "100", cy: "100", r: "76", stroke: "#0284C7", strokeWidth: "2" }),
        React.createElement("path", { id: "curve-top", d: "M 30,100 A 70,70 0 0,1 170,100", fill: "none" }),
        React.createElement("text", { fontSize: "8.5", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", fill: "#38BDF8", letterSpacing: "2.5" },
            React.createElement("textPath", { href: "#curve-top", startOffset: "50%", textAnchor: "middle" }, "PAGELARAN SENI AKBAR \u00B7 KELAS 5 KMI")),
        React.createElement("path", { id: "curve-bot", d: "M 170,100 A 70,70 0 0,1 30,100", fill: "none" }),
        React.createElement("text", { fontSize: "8", fontFamily: "'Space Grotesk', sans-serif", fontWeight: "600", fill: "#7DD3FC", letterSpacing: "2" },
            React.createElement("textPath", { href: "#curve-bot", startOffset: "50%", textAnchor: "middle" }, "DARUSSALAM GONTOR \u00B7 1447-1448")),
        React.createElement("circle", { cx: "100", cy: "100", r: "54", fill: "linear-gradient(135deg, rgba(2,132,199,0.3), rgba(0,240,255,0.15))" }),
        React.createElement("circle", { cx: "100", cy: "100", r: "50", stroke: "#38BDF8", strokeWidth: "1.5" }),
        React.createElement("text", { x: "100", y: "80", textAnchor: "middle", fontFamily: "'Amiri', serif", fontSize: "13", fontWeight: "700", fill: "#00F0FF" }, "\u062F\u0631\u0627\u0645\u0627 \u0623\u0631\u064A\u0646\u0627"),
        React.createElement("text", { x: "100", y: "105", textAnchor: "middle", fontFamily: "'Mileast', serif", fontSize: "23", fontWeight: "700", fill: "#FFFFFF", fontStyle: "italic" }, "DRAMA"),
        React.createElement("text", { x: "100", y: "125", textAnchor: "middle", fontFamily: "'Mileast', serif", fontSize: "16", fontWeight: "700", fill: "#38BDF8", letterSpacing: "4" }, "ARENA"),
        React.createElement("text", { x: "100", y: "142", textAnchor: "middle", fontFamily: "'Space Grotesk', sans-serif", fontSize: "11", fontWeight: "800", fill: "#00F0FF", letterSpacing: "3" }, "5102"),
        React.createElement("text", { x: "26", y: "102", fontFamily: "serif", fontSize: "10", fill: "#00F0FF" }, "\u2726"),
        React.createElement("text", { x: "172", y: "102", fontFamily: "serif", fontSize: "10", fill: "#00F0FF" }, "\u2726"))));
export const Hero = ({ onNavigate }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    useEffect(() => {
        const target = new Date('2026-05-07T19:30:00+07:00').getTime();
        const calc = () => {
            const diff = target - Date.now();
            if (diff > 0) {
                setTimeLeft({
                    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((diff % (1000 * 60)) / 1000),
                });
            }
        };
        calc();
        const interval = setInterval(calc, 1000);
        return () => clearInterval(interval);
    }, []);
    return (React.createElement("section", { id: "hero", className: "min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-800 via-sky-900 to-gray-900 text-white py-12" },
        React.createElement(StampEmblem, { size: 200 }),
        React.createElement("h1", { className: "mt-6 text-4xl md:text-6xl font-extrabold gradient-shimmer text-center" }, "DRAMA ARENA 5102"),
        React.createElement("p", { className: "mt-4 text-lg md:text-xl text-sky-200 text-center" }, "Pagelaran Seni Akbar Kelas 5 KMI PMDG"),
        React.createElement("div", { className: "mt-8 grid grid-cols-4 gap-4 max-w-xl" }, [{ label: 'HARI', val: timeLeft.days }, { label: 'JAM', val: timeLeft.hours }, { label: 'MENIT', val: timeLeft.minutes }, { label: 'DETIK', val: timeLeft.seconds }].map(({ label, val }) => (React.createElement("div", { key: label, className: "p-4 rounded-2xl glass-panel text-center" },
            React.createElement("div", { className: "text-3xl font-bold text-white drop-shadow-[0_0_12px_rgba(0,240,255,0.7)]" }, String(val).padStart(2, '0')),
            React.createElement("div", { className: "mt-1 text-xs uppercase text-sky-300 font-medium tracking-wider" }, label))))),
        React.createElement("button", { onClick: () => onNavigate('shows'), className: "mt-10 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg transition-colors" }, "Lihat Acara")));
};
