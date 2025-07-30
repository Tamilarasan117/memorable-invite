import WelcomeSection from "./components/WelcomeSection"
import CoupleIntro from "./components/CoupleIntro"
import ImageCarousel from "./components/ImageCarousel"
import EventDetails from "./components/EventDetails"
import CountdownTimer from "./components/CountdownTimer"
import FamilyIntro from "./components/FamilyIntro"
import Blessings from "./components/Blessings"
import RSVP from "./components/RSVP"
import Footer from "./components/Footer"
import MusicPlayer from "./components/MusicPlayer"

const App = () => {
  return (
    <div className="bg-black text-gold font-fancy min-h-screen w-full overflow-x-hidden">
      <MusicPlayer />
      <main className="w-full max-w-[430px] mx-auto px-4 py-4">
        <WelcomeSection />
        <CoupleIntro />
        <ImageCarousel />
        <EventDetails />
        <CountdownTimer />
        <FamilyIntro />
        <Blessings />
        <RSVP />
        <Footer />
      </main>
    </div>
  )
}

export default App
