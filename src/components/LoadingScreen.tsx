import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const totalDuration = 2600;
    const interval = 30;
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
          setTimeout(onComplete, 700);
        }, 200);
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
          ✦ PAGELARAN SENI AKBAR ✦
        </div>
        <div className="loading-screen__hourglass-wrap">
          <HourglassSVG progress={progress} />
        </div>
        <div className="loading-screen__title">
          <span className="loading-screen__title-drama">Drama</span>
          <br />
          <span className="loading-screen__title-arena">Arena</span>
        </div>
        <div className="loading-screen__subtitle">Kelas 5 · 102 · PMDG</div>
        <div className="loading-screen__divider" aria-hidden="true">
          <div className="loading-screen__divider-line" />
          <svg width="32" height="16" viewBox="0 0 40 20" fill="none">
            <path d="M20 10 C15 4, 5 4, 2 10 C5 16, 15 16, 20 10Z" fill="#D69103" opacity="0.8" />
            <path d="M20 10 C25 4, 35 4, 38 10 C35 16, 25 16, 20 10Z" fill="#D69103" opacity="0.8" />
            <circle cx="20" cy="10" r="2.5" fill="#F4F1EB" />
          </svg>
          <div className="loading-screen__divider-line" />
        </div>
        <div className="loading-screen__bar-wrap" aria-hidden="true">
          <div className="loading-screen__bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="loading-screen__progress-text">
          {progress < 100 ? 'Memuat...' : 'Siap'}
        </div>
      </div>
      <Corner pos="tl" />
      <Corner pos="tr" />
      <Corner pos="bl" />
      <Corner pos="br" />
    </div>
  );
};

const HourglassSVG: React.FC<{ progress: number }> = ({ progress }) => {
  const topFill = Math.max(0, 1 - progress / 100);
  const bottomFill = Math.min(1, progress / 100);
  const maxSandHeight = 44;
  const topSandHeight = topFill * maxSandHeight;
  const bottomSandHeight = bottomFill * maxSandHeight;
  const showParticle = progress > 2 && progress < 98;
  const streamBottom = Math.max(68, 116 - bottomSandHeight);

  return (
    <svg
      className="loading-hourglass"
      width="90"
      height="130"
      viewBox="0 0 90 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="50%" stopColor="#D69103" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <linearGradient id="sandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5D98A" />
          <stop offset="100%" stopColor="#D69103" />
        </linearGradient>
        <clipPath id="topClip">
          <polygon points="18,14 72,14 52,62 38,62" />
        </clipPath>
        <clipPath id="botClip">
          <polygon points="38,68 52,68 72,116 18,116" />
        </clipPath>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Hourglass top & bottom wooden/metallic frames */}
      <rect x="12" y="8" width="66" height="8" rx="3" fill="url(#goldGrad)" />
      <rect x="12" y="114" width="66" height="8" rx="3" fill="url(#goldGrad)" />
      <rect x="12" y="12" width="6" height="106" rx="2" fill="url(#goldGrad)" />
      <rect x="72" y="12" width="6" height="106" rx="2" fill="url(#goldGrad)" />

      {/* Glass bulb background chambers */}
      <polygon points="18,14 72,14 52,62 38,62" fill="rgba(6,43,74,0.55)" />
      <polygon points="38,68 52,68 72,116 18,116" fill="rgba(6,43,74,0.55)" />
      <polygon points="38,62 52,62 52,68 38,68" fill="rgba(6,43,74,0.75)" />

      {/* Top bulb sand (empties downwards toward neck) */}
      <g clipPath="url(#topClip)">
        {topSandHeight > 0 && (
          <rect
            x="0"
            y={62 - topSandHeight}
            width="90"
            height={topSandHeight}
            fill="url(#sandGrad)"
            opacity="0.95"
          />
        )}
      </g>

      {/* Bottom bulb sand (accumulates upwards from bottom) */}
      <g clipPath="url(#botClip)">
        {bottomSandHeight > 0 && (
          <rect
            x="0"
            y={116 - bottomSandHeight}
            width="90"
            height={bottomSandHeight}
            fill="url(#sandGrad)"
            opacity="0.95"
          />
        )}
        {/* Soft heap mound at top of bottom sand */}
        {bottomSandHeight > 3 && (
          <ellipse
            cx="45"
            cy={116 - bottomSandHeight}
            rx={Math.min(20, 4 + bottomSandHeight * 0.4)}
            ry="2"
            fill="#F5D98A"
            opacity="0.75"
          />
        )}
      </g>

      {/* Dynamic falling sand stream & particles */}
      {showParticle && (
        <g filter="url(#glow)">
          <line
            className="loading-sand-stream"
            x1="45"
            y1="62"
            x2="45"
            y2={streamBottom}
            stroke="#F5D98A"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.9"
          />
          <circle className="loading-sand-p1" cx="45" cy="65" r="1.1" fill="#F5D98A" opacity="0.9" />
          <circle className="loading-sand-p2" cx="44.8" cy={Math.min(streamBottom - 3, 78)} r="0.9" fill="#D69103" opacity="0.8" />
        </g>
      )}

      {/* Glass reflections & highlights */}
      <polygon points="22,16 36,16 32,40 26,40" fill="rgba(255,255,255,0.08)" />
      <ellipse cx="45" cy="65" rx="3" ry="1.5" fill="rgba(245,217,138,0.5)" />
    </svg>
  );
};

const Corner: React.FC<{ pos: 'tl' | 'tr' | 'bl' | 'br' }> = ({ pos }) => {
  const transforms: Record<string, string> = {
    tl: 'rotate(0deg)',
    tr: 'rotate(90deg)',
    bl: 'rotate(-90deg)',
    br: 'rotate(180deg)',
  };
  const positions: Record<string, React.CSSProperties> = {
    tl: { top: 20, left: 20 },
    tr: { top: 20, right: 20 },
    bl: { bottom: 20, left: 20 },
    br: { bottom: 20, right: 20 },
  };

  return (
    <div className="loading-screen__corner" style={positions[pos]} aria-hidden="true">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ transform: transforms[pos] }}>
        <path d="M2 30 L2 4 Q2 2 4 2 L30 2" stroke="#D69103" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <circle cx="2" cy="2" r="2" fill="#D69103" opacity="0.5" />
        <circle cx="8" cy="2" r="1" fill="#D69103" opacity="0.3" />
        <circle cx="2" cy="8" r="1" fill="#D69103" opacity="0.3" />
      </svg>
    </div>
  );
};

export default LoadingScreen;
