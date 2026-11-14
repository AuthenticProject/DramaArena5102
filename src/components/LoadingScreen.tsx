import React, { useEffect, useState } from 'react';
import { importImage } from '../utils/assetHelpers';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Lock scroll while preloader is active
    document.body.style.overflow = 'hidden';

    const totalDuration = 1800; // Fast and snappy 1.8s
    const interval = 20;
    const steps = totalDuration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const t = current / steps;
      // Smooth ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.min(Math.round(eased * 100), 100));

      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => {
            document.body.style.overflow = '';
            onComplete();
          }, 600);
        }, 120);
      }
    }, interval);

    // Fallback safety timeout (max 3 seconds)
    const safety = setTimeout(() => {
      clearInterval(timer);
      setExiting(true);
      setTimeout(() => {
        document.body.style.overflow = '';
        onComplete();
      }, 400);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(safety);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  const handleSkip = () => {
    setExiting(true);
    setTimeout(() => {
      document.body.style.overflow = '';
      onComplete();
    }, 300);
  };

  return (
    <div
      className={`loading-screen${exiting ? ' loading-screen--exit' : ''}`}
      aria-label="Memuat portal resmi Drama Arena 5102"
      role="status"
    >
      {/* Background Ambience & Noise */}
      <div className="loading-screen__noise" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B58A3C]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Box */}
      <div className="loading-screen__content">
        <div className="loading-screen__supertitle">
          ✦ PAGELARAN SENI AKBAR TAHUNAN · KMI PMDG ✦
        </div>

        {/* Official DA 5102 Medallion with Golden Spinning Ring */}
        <div className="relative mb-6 group select-none">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
            {/* Spinning Golden Orbit Ring */}
            <div
              className="absolute inset-0 rounded-full border-2 border-[#B58A3C]/40 border-dashed animate-spin"
              style={{ animationDuration: '16s' }}
            />
            {/* Medallion Core */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#F3E1B8] via-[#B58A3C] to-[#8E6B28] p-1 shadow-2xl flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#101D2A] flex items-center justify-center p-3.5 border border-[#B58A3C]/60">
                <img
                  src={importImage('logo-da-wave-transparent.png')}
                  alt="Drama Arena 5102 Seal"
                  className="w-full h-full object-contain filter drop-shadow-md"
                />
              </div>
            </div>
            {/* Year Stamp Pill */}
            <div className="absolute -bottom-1 -right-1 px-2.5 py-0.5 rounded-full bg-[#192E41] border border-[#B58A3C] text-[10px] font-mono text-[#D4AF37] font-bold shadow-lg">
              1447H
            </div>
          </div>
        </div>

        <div className="loading-screen__title">
          <span className="loading-screen__title-drama">Drama</span>
          <span className="loading-screen__title-arena">Arena 5102</span>
        </div>

        <div className="loading-screen__subtitle">
          “Sadar dalam perjuangan, Utuh dalam kebersamaan”
        </div>

        {/* Progress Track */}
        <div className="loading-screen__bar-wrap" aria-hidden="true">
          <div className="loading-screen__bar-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="loading-screen__progress-text">
          {progress < 100 ? `MEMBUKA PORTAL RESMI... ${progress}%` : 'MAHAKARYA SIAP'}
        </div>

        {/* Quick Skip Button */}
        <button
          onClick={handleSkip}
          className="mt-6 text-[10px] font-mono text-[#EDE8E2]/50 hover:text-[#D4AF37] tracking-widest uppercase transition-colors cursor-pointer"
        >
          [LEWATI / SKIP]
        </button>
      </div>
    </div>
  );
};
export default LoadingScreen;
