import ReactAudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const MusicPlayer = () => {
  return (
    <div className="fixed bottom-0 left-0 opacity-0 pointer-events-none">
      <ReactAudioPlayer
        src="/audio/Arabian_Night.mp3"
        autoPlay
        loop
        volume={0.5}
      />
    </div>
  );
};

export default MusicPlayer;
