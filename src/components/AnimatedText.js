import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
export const AnimatedText = ({ text, className = '' }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 0.8', 'end 0.2']
    });
    const words = text.split(' ');
    let charIndexCounter = 0;
    const totalChars = text.length;
    return (React.createElement("p", { ref: containerRef, className: `text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[580px] ${className}`, style: { fontSize: 'clamp(1rem, 2vw, 1.35rem)' } }, words.map((word, wordIdx) => {
        return (React.createElement("span", { key: wordIdx, className: "inline-block whitespace-nowrap mr-[0.25em]" }, word.split('').map((char) => {
            const charIndex = charIndexCounter++;
            const start = charIndex / totalChars;
            const end = (charIndex + 1) / totalChars;
            return (React.createElement(Character, { key: charIndex, char: char, range: [start, end], progress: scrollYProgress }));
        })));
    })));
};
const Character = ({ char, range, progress }) => {
    const opacity = useTransform(progress, range, [0.2, 1]);
    return (React.createElement(motion.span, { style: { opacity }, className: "inline-block" }, char));
};
