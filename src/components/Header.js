import React from 'react';
export const Header = ({ onNavigate, logoSrc }) => (React.createElement("header", { className: "sticky top-0 z-20 glass-panel px-6 py-4 flex items-center justify-between backdrop-blur-md" },
    React.createElement("img", { src: logoSrc, alt: "Drama Arena Logo", className: "h-12 w-auto cursor-pointer", onClick: () => onNavigate('root') }),
    React.createElement("nav", { className: "space-x-6" },
        React.createElement("button", { className: "text-sm font-medium hover:text-cyan-400", onClick: () => onNavigate('hero') }, "Beranda"),
        React.createElement("button", { className: "text-sm font-medium hover:text-cyan-400", onClick: () => onNavigate('timeline') }, "Timeline"),
        React.createElement("button", { className: "text-sm font-medium hover:text-cyan-400", onClick: () => onNavigate('shows') }, "Acara"),
        React.createElement("button", { className: "text-sm font-medium hover:text-cyan-400", onClick: () => onNavigate('sponsors') }, "Sponsor"))));
