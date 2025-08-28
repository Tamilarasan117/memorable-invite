import { useEffect } from "react";
import type { RefObject } from "react";

type MusicPlayerProps = {
  audioRef: RefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
};

const MusicPlayer = ({ audioRef, isPlaying }: MusicPlayerProps) => {
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;

      const playAttempt = audioRef.current.play();
      if (playAttempt !== undefined) {
        playAttempt.catch(() => {
          console.warn("Autoplay blocked by browser, waiting for user action.");
        });
      }
    }
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <audio
      ref={audioRef}
      src="/audio/BG_Music_Ringtone.mp3"
      loop
      autoPlay
      preload="auto"
    />
  );
};

export default MusicPlayer;
