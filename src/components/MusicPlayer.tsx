import type { RefObject } from "react";

type MusicPlayerProps = {
  audioRef: RefObject<HTMLAudioElement | null>;
};

const MusicPlayer = ({ audioRef }: MusicPlayerProps) => {
  return (
    <audio
      ref={audioRef}
      src="/audio/BG_Music.mp3"
      loop
      preload="auto"
    />
  );
};

export default MusicPlayer;
