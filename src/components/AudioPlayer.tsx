import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, Disc } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const audioUrl = `${import.meta.env.BASE_URL}Teruslah%20Percaya%20-%20Official%20Music%20Video%20-%20(OST%20Percaya%20Asa%20Short%20Movie).mp3`;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.65;

    // Attempt autoplay
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setShowNotification(false);
        })
        .catch(() => {
          // Autoplay blocked by browser policy
          setIsPlaying(false);
          setShowNotification(true);

          const handleUserInteraction = () => {
            if (audioRef.current && audioRef.current.paused) {
              audioRef.current
                .play()
                .then(() => {
                  setIsPlaying(true);
                  setShowNotification(false);
                })
                .catch(() => {});
            }
            window.removeEventListener('click', handleUserInteraction);
            window.removeEventListener('touchstart', handleUserInteraction);
            window.removeEventListener('keydown', handleUserInteraction);
          };

          window.addEventListener('click', handleUserInteraction);
          window.addEventListener('touchstart', handleUserInteraction);
          window.addEventListener('keydown', handleUserInteraction);
        });
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setShowNotification(false);
        })
        .catch((err) => {
          console.error("Audio playback error:", err);
        });
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src={audioUrl}
        loop
        preload="auto"
      />

      {/* Floating Audio Control Player Widget */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-auto">
        {/* Autoplay prompt toast if blocked */}
        {showNotification && !isPlaying && (
          <div className="bg-[#192E41] border-2 border-[#B58A3C] text-[#F3E1B8] text-xs px-4 py-2 rounded-2xl shadow-2xl flex items-center gap-2 animate-bounce max-w-xs">
            <Music className="w-4 h-4 text-[#B58A3C] flex-shrink-0" />
            <span>Klik tombol <strong>▶ Play</strong> untuk memutar OST Drama Arena 5102!</span>
          </div>
        )}

        {/* Branded Player Card */}
        <div className="flex items-center gap-3 p-2.5 pl-4 rounded-full bg-[#192E41]/95 backdrop-blur-md border-2 border-[#B58A3C] shadow-[0_10px_30px_rgba(25,46,65,0.6)] transition-all hover:scale-105">
          {/* Animated Vinyl Disc / Icon */}
          <div className="relative flex items-center justify-center">
            <div className={`w-9 h-9 rounded-full bg-gradient-to-tr from-[#8E6B28] via-[#B58A3C] to-[#F3E1B8] flex items-center justify-center shadow-md ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }}>
              <Disc className="w-5 h-5 text-[#192E41]" />
            </div>
            {isPlaying && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B58A3C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F3E1B8]"></span>
              </span>
            )}
          </div>

          {/* Track Info & Equalizer */}
          <div className="flex flex-col pr-1 min-w-[120px]">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-[#EDE8E2] truncate max-w-[130px] font-sans">
                Teruslah Percaya
              </span>
              {/* Equalizer Bars */}
              {isPlaying && (
                <div className="flex items-end gap-0.5 h-3">
                  <div className="w-0.5 bg-[#B58A3C] rounded-full h-2 animate-pulse" />
                  <div className="w-0.5 bg-[#F3E1B8] rounded-full h-3 animate-pulse" style={{ animationDelay: '0.15s' }} />
                  <div className="w-0.5 bg-[#B58A3C] rounded-full h-1.5 animate-pulse" style={{ animationDelay: '0.3s' }} />
                </div>
              )}
            </div>
            <span className="text-[10px] text-[#B58A3C] font-semibold tracking-wide truncate max-w-[130px]">
              OST Drama Arena 5102
            </span>
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-[#B58A3C] hover:bg-[#D4A853] text-[#192E41] flex items-center justify-center transition-transform hover:scale-110 shadow-lg cursor-pointer ml-1"
            title={isPlaying ? "Pause Musik" : "Putar Musik OST"}
            aria-label={isPlaying ? "Pause Musik" : "Putar Musik OST"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current text-[#192E41]" />
            ) : (
              <Play className="w-5 h-5 fill-current text-[#192E41] ml-0.5" />
            )}
          </button>

          {/* Mute Button */}
          <button
            onClick={toggleMute}
            className="p-2 text-[#F3E1B8] hover:text-white transition-colors cursor-pointer"
            title={isMuted ? "Unmute" : "Mute"}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </>
  );
};
export default AudioPlayer;
