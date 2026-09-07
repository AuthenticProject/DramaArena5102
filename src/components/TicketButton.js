import React from 'react';
export const TicketButton = ({ onClick, className = '', label = "Beli Tiket" }) => {
    return (React.createElement("button", { onClick: onClick, style: {
            background: 'linear-gradient(123deg, #091E3A 7%, #0077B6 37%, #7209B7 72%, #F72585 100%)',
            boxShadow: '0px 4px 4px rgba(247, 37, 133, 0.25), inset 4px 4px 12px #7209B7',
            outline: '2px solid #FFFFFF',
            outlineOffset: '-3px'
        }, className: `group relative rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${className}` },
        React.createElement("span", { className: "relative z-10" }, label),
        React.createElement("span", { className: "inline-block transition-transform duration-300 group-hover:translate-x-1" }, "\u2192")));
};
