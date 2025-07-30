import ReactAudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"

const MusicPlayer = () => {
  return (
    <div className="hidden">
      <ReactAudioPlayer
        src="/audio/Arabian_Night.mp3"
        autoPlay
        loop
        volume={1}
      />
    </div>
  )
}

export default MusicPlayer
