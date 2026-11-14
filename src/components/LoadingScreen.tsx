import React, { useEffect, useState } from 'react';
import { importImage } from '../utils/assetHelpers';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const totalDuration = 2200;
    const interval = 25;
    const steps = totalDuration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const t = current / steps;
      const eased = t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;
      setProgress(Math.min(Math.round(eased * 100), 100));

      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setExiting(true);
          setTimeout(onComplete, 650);
        }, 150);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`loading-screen${exiting ? ' loading-screen--exit' : ''}`}
      aria-label="Memuat halaman Drama Arena 5102"
      role="status"
    >
      <div className="loading-screen__noise" aria-hidden="true" />
      <div className="loading-screen__content">
        <div className="loading-screen__supertitle">
          ✦ PAGELARAN SENI AKBAR · KELAS 5 KMI PMDG ✦
        </div>

        {/* Official DA 5102 Wax Seal Animation */}
        <div className="relative mb-6 group">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
            {/* Spinning Golden Seal Ring */}
            <div
              className="absolute inset-0 rounded-full border border-[#B58A3C]/40 border-dashed animate-spin"
              style={{ animationDuration: '18s' }}
            />
            {/* Wax Seal with Wave Medallion */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#D4A853] via-[#B58A3C] to-[#8E6B28] p-1 shadow-2xl flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#192E41] flex items-center justify-center p-3 border border-[#B58A3C]/60">
                <img
                  src={importImage('logo-da-wave-transparent.png')}
                  alt="Drama Arena 5102 Logo"
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>
            </div>
            {/* Postmark stamp overlay */}
            <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-[#101D2A] border border-[#B58A3C] text-[9px] font-cormorant-sc text-[#B58A3C] tracking-widest uppercase font-bold">
              5102
            </div>
          </div>
        </div>

        <div className="loading-screen__title">
          <span className="loading-screen__title-drama">Drama</span>
          <span className="loading-screen__title-arena">Arena</span>
        </div>

        <div className="loading-screen__subtitle">
          "Sadar dalam perjuangan, Utuh dalam kebersamaan"
        </div>

        <div className="loading-screen__bar-wrap" aria-hidden="true">
          <div className="loading-screen__bar-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="loading-screen__progress-text">
          {progress < 100 ? `Membuka Dokumen Resmi... ${progress}%` : 'Mahakarya Siap'}
        </div>
      </div>
    </div>
  );
};
