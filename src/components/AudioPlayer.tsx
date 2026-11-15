import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Disc } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const audioUrl = `${import.meta.env.BASE_URL}Teruslah%20Percaya%20-%20Official%20Music%20Video%20-%20(OST%20Percaya%20Asa%20Short%20Movie).mp3`;

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.55;
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={audioUrl}
        loop
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Floating Audio Control Player Widget */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto">
        <div className="flex items-center gap-3 p-2 pl-3.5 rounded-full bg-[#101D2A]/90 backdrop-blur-md border border-[#B58A3C]/50 shadow-2xl transition-all duration-300 hover:scale-105 hover:border-[#D4AF37]">
          {/* Animated Vinyl Disc */}
          <div className="relative flex items-center justify-center" aria-hidden="true">
            <div
              className={`w-8 h-8 rounded-full bg-gradient-to-tr from-[#8E6B28] via-[#B58A3C] to-[#F3E1B8] flex items-center justify-center shadow-md ${isPlaying ? 'animate-spin' : ''}`}
              style={{ animationDuration: '6s' }}
            >
              <Disc className="w-4 h-4 text-[#101D2A]" />
            </div>
          </div>

          {/* Track Info */}
          <div className="flex flex-col pr-1 min-w-[110px]">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-[#EDE8E2] truncate max-w-[120px] font-sans">
                Teruslah Percaya
              </span>
              {isPlaying && (
                <span className="flex items-end gap-0.5 h-3" aria-label="Sedang diputar">
                  <span className="w-0.5 bg-[#D4AF37] rounded-full h-2 animate-pulse" />
                  <span className="w-0.5 bg-[#F3E1B8] rounded-full h-3 animate-pulse" />
                  <span className="w-0.5 bg-[#D4AF37] rounded-full h-1.5 animate-pulse" />
                </span>
              )}
            </div>
            <span className="text-[9px] text-[#D4AF37] font-mono tracking-wider uppercase font-semibold">
              OST DA 5102
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1 pl-1 border-l border-white/10">
            <button
              type="button"
              onClick={togglePlay}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full text-[#EDE8E2] hover:text-[#D4AF37] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] transition-colors cursor-pointer"
              title={isPlaying ? 'Jeda Musik' : 'Putar Musik'}
              aria-label={isPlaying ? 'Jeda musik' : 'Putar musik'}
              aria-pressed={isPlaying}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full text-[#EDE8E2]/70 hover:text-[#D4AF37] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] transition-colors cursor-pointer"
              title={isMuted ? 'Batal bisukan' : 'Bisukan suara'}
              aria-label={isMuted ? 'Aktifkan suara' : 'Bisukan suara'}
              aria-pressed={isMuted}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AudioPlayer;
