import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ShowData } from './ShowsSection';

interface TrailerModalProps {
  show: ShowData | null;
  onClose: () => void;
}

export const TrailerModal: React.FC<TrailerModalProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#08090C]/95 backdrop-blur-lg"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/40 bg-[#08090C] p-4 sm:p-6 text-[#D7E2EA] shadow-[0_0_100px_rgba(0,119,182,0.4)] z-10 my-auto flex flex-col"
        >
          {/* Top Bar */}
          <div className="w-full flex items-center justify-between pb-4 border-b border-[#53627A]/30">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A3C7E6]">
                {show.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-[#D7E2EA]">
                {show.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full border border-[#53627A]/40 text-[#D7E2EA] hover:bg-[#53627A]/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Video Container */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black mt-4 border border-[#53627A]/20">
            <iframe
              src={show.trailerUrl}
              title={`${show.title} Official Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
