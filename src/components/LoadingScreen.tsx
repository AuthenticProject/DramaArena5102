import React, { useEffect, useState } from 'react';
import { importImage } from '../utils/assetHelpers';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Lock scroll while preloader is active
    document.body.style.overflow = 'hidden';

    const maxProgress = 102; // Special tribute to DA 5102
    const totalDuration = 2000; // 2.0s duration
    const interval = 20;
    const steps = totalDuration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const t = current / steps;
      // Smooth cubic ease-out
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.min(Math.round(eased * maxProgress), maxProgress));

      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => {
            document.body.style.overflow = '';
            onComplete();
          }, 600);
        }, 200);
      }
    }, interval);

    // Failsafe timer (3.5s max)
    const safety = setTimeout(() => {
      clearInterval(timer);
      setExiting(true);
      setTimeout(() => {
        document.body.style.overflow = '';
        onComplete();
      }, 400);
    }, 3500);

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

  const getStatusText = (val: number) => {
    if (val < 25) return 'MEMPERSIAPKAN DOKUMEN RESMI 5102...';
    if (val < 55) return 'MEMUAT IDENTITAS VISUAL & ARSIP ARTISTIK...';
    if (val < 85) return 'MENYIAPKAN PANGGUNG & TATA CAHAYA...';
    if (val < 100) return 'MENYELARASKAN ORKESTRASI SENI 5102...';
    if (val < 102) return 'FINALISASI DOKUMEN RESMI DA 5102...';
    return '102% TERPENUHI · MAHAKARYA DA 5102 SIAP DIBUKA';
  };

  const progressPercentWidth = Math.min((progress / 102) * 100, 100);

  return (
    <div
      className={`loading-screen${exiting ? ' loading-screen--exit' : ''}`}
      aria-label="Memuat portal resmi Drama Arena 5102"
      role="status"
    >
      {/* Background Ambience & Noise */}
      <div className="loading-screen__noise" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#B58A3C]/12 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Content Box */}
      <div className="loading-screen__content select-none">
        
        {/* ── TOP PROMINENT ROTATING LOGO PRESENTATION ── */}
        <div className="relative mb-8 flex flex-col items-center">
          {/* Ambient Golden Halo Pulse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-gradient-to-r from-[#F3E1B8]/25 via-[#D4AF37]/35 to-[#B58A3C]/25 blur-xl animate-gold-halo pointer-events-none" />

          <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
            {/* Outer Astronomical Orbit Ring 1 (Clockwise) */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#D4AF37]/50 animate-spin-logo pointer-events-none" />
            
            {/* Outer Astronomical Orbit Ring 2 (Counter-Clockwise) */}
            <div className="absolute inset-2 sm:inset-3 rounded-full border border-dotted border-[#F3E1B8]/40 animate-spin-logo-reverse pointer-events-none" />
            
            {/* 4 Cardinal Compass Star Marks */}
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[10px] text-[#D4AF37] font-serif font-bold">✦</span>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] text-[#D4AF37] font-serif font-bold">✦</span>
            <span className="absolute top-1/2 -left-1 -translate-y-1/2 text-[10px] text-[#D4AF37] font-serif font-bold">✦</span>
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 text-[10px] text-[#D4AF37] font-serif font-bold">✦</span>

            {/* Core Rotating Medallion with 3D Flip & Spin */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#F3E1B8] via-[#B58A3C] to-[#8E6B28] p-1.5 shadow-[0_0_35px_rgba(212,175,55,0.45)] flex items-center justify-center animate-spin-3d">
              <div className="w-full h-full rounded-full bg-[#101D2A] flex items-center justify-center p-3 sm:p-4 border border-[#B58A3C]/70 shadow-inner">
                <img
                  src={importImage('logo-da-wave-transparent.png')}
                  alt="Drama Arena 5102 Rotating Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)]"
                />
              </div>
            </div>

            {/* Sub-badge: Golden 1447H Wax Stamp Overlay */}
            <div className="absolute -bottom-2 px-3 py-0.5 rounded-full bg-[#101D2A] border border-[#D4AF37] text-[10px] font-mono text-[#F3E1B8] font-bold shadow-xl flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>DA 5102 · 1447H</span>
            </div>
          </div>
        </div>

        {/* Eyebrow Label */}
        <div className="loading-screen__supertitle flex items-center gap-2">
          <span>✦ PAGELARAN SENI AKBAR TAHUNAN · KMI PMDG ✦</span>
        </div>

        {/* Display Typography */}
        <div className="loading-screen__title">
          <span className="loading-screen__title-drama">Drama</span>
          <span className="loading-screen__title-arena">Arena 5102</span>
        </div>

        {/* Motto Subtitle */}
        <div className="loading-screen__subtitle">
          “Sadar dalam perjuangan, Utuh dalam kebersamaan”
        </div>

        {/* Progress Bar Container */}
        <div className="loading-screen__bar-wrap" aria-hidden="true">
          <div className="loading-screen__bar-fill" style={{ width: `${progressPercentWidth}%` }} />
        </div>

        {/* Progress Percentage (Up to 102%) & Dynamic Status Text */}
        <div className="flex flex-col items-center gap-1">
          <div className="loading-screen__progress-text font-bold text-sm sm:text-base text-[#F3E1B8] flex items-center gap-1.5">
            <span className="tabular-nums font-mono text-lg sm:text-xl text-[#D4AF37]">{progress}%</span>
            {progress >= 100 && (
              <span className="px-1.5 py-0.2 rounded bg-[#B58A3C]/30 text-[10px] text-[#F3E1B8] border border-[#D4AF37]/40 animate-pulse font-mono">
                {progress === 102 ? 'MAX 102%' : 'COMPLETE'}
              </span>
            )}
          </div>
          <div className="font-mono text-[10px] text-[#D4AF37] tracking-widest uppercase font-semibold">
            {getStatusText(progress)}
          </div>
        </div>

        {/* Skip Action */}
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
