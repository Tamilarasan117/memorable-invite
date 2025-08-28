import type { RefObject } from "react";

type MusicPlayerProps = {
  audioRef: RefObject<HTMLAudioElement | null>;
};

const MusicPlayer = ({ audioRef }: MusicPlayerProps) => {
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
