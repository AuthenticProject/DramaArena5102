import React from 'react';
const marqueeImages = [
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=600&auto=format&fit=crop",
];
export const MarqueeSection = () => {
    const row1 = [...marqueeImages, ...marqueeImages];
    const row2 = [...marqueeImages.slice(5), ...marqueeImages.slice(0, 5), ...marqueeImages.slice(5), ...marqueeImages.slice(0, 5)];
    return (React.createElement("div", { className: "relative overflow-hidden py-10", style: { background: '#062B4A' } },
        React.createElement("div", { className: "perforated-top absolute top-0 left-0 right-0", style: { background: 'radial-gradient(circle at 50% 0%, #F4F1EB 9px, transparent 9px) top center / 20px 12px repeat-x' } }),
        React.createElement("div", { className: "flex flex-col gap-3 select-none" },
            React.createElement("div", { className: "marquee-left flex gap-3 w-max" }, row1.map((src, i) => (React.createElement("div", { key: `r1-${i}`, className: "w-[260px] h-[160px] flex-shrink-0 rounded-lg overflow-hidden border", style: { borderColor: 'rgba(214,145,3,0.4)' } },
                React.createElement("img", { src: src, alt: "Drama Arena Showcase", loading: "lazy", className: "w-full h-full object-cover filter sepia-[0.3]" }))))),
            React.createElement("div", { className: "marquee-right flex gap-3 w-max" }, row2.map((src, i) => (React.createElement("div", { key: `r2-${i}`, className: "w-[260px] h-[160px] flex-shrink-0 rounded-lg overflow-hidden border", style: { borderColor: 'rgba(214,145,3,0.4)' } },
                React.createElement("img", { src: src, alt: "Drama Arena Showcase", loading: "lazy", className: "w-full h-full object-cover filter sepia-[0.3]" })))))),
        React.createElement("div", { className: "perforated-bottom absolute bottom-0 left-0 right-0", style: { background: 'radial-gradient(circle at 50% 100%, #F4F1EB 9px, transparent 9px) bottom center / 20px 12px repeat-x' } })));
};
