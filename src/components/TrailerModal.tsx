import React from 'react';
import { X } from 'lucide-react';
import { ShowCategoryData } from '../types';

interface TrailerModalProps {
  show: ShowCategoryData | null;
  onClose: () => void;
}

export const TrailerModal: React.FC<TrailerModalProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#101D2A]/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div
        className="relative w-full max-w-lg rounded-3xl overflow-hidden z-10 bg-[#FAF8F5] border-2 border-[#B58A3C] shadow-2xl text-[#192E41]"
      >
        <div className="relative h-56">
          <img src={show.img} alt={show.title} className="w-full h-full object-cover filter contrast-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#192E41] via-[#192E41]/50 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full cursor-pointer transition-colors bg-[#EDE8E2] text-[#192E41] hover:bg-[#B58A3C] hover:text-[#EDE8E2] shadow"
            aria-label="Close detail modal"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="font-cormorant-sc text-xs tracking-widest text-[#D4A853] font-bold uppercase mb-1">
              {show.category}
            </div>
            <h3 className="font-mileast font-bold text-2xl text-[#EDE8E2]">{show.title}</h3>
          </div>
        </div>

        <div className="p-6 bg-[#FAF8F5]">
          <div className="font-cormorant-sc text-xs tracking-widest uppercase mb-3 text-[#325956] font-bold">
            ✦ Rangkaian Sajian Pentas
          </div>
          <div className="flex flex-wrap gap-2">
            {show.items.map((item) => (
              <span
                key={item}
                className="font-cormorant-sc text-xs px-3.5 py-1.5 rounded-full font-semibold bg-[#192E41]/5 border border-[#B58A3C]/40 text-[#192E41]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrailerModal;
