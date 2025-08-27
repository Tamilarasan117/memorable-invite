import WelcomeSection from "./components/WelcomeSection"
import CoupleIntro from "./components/CoupleIntro"
import ImageCarousel from "./components/ImageCarousel"
import EventDetails from "./components/EventDetails"
import FamilyIntro from "./components/FamilyIntro"
import GallerySection from "./components/GallerySection"
import Blessings from "./components/Blessings"
import MapSection from "./components/MapSection"
import RSVP from "./components/RSVP"
import Footer from "./components/Footer"
// import QRCodeSection from "./components/QRCodeSection"

const App = () => {
  return (
    <div className="bg-black text-gold font-fancy w-full overflow-x-hidden">
      <main className="w-full max-w-[430px] mx-auto">
        <WelcomeSection />
        <CoupleIntro />
        <ImageCarousel />
        <EventDetails />
        <FamilyIntro />
        <GallerySection />
        <Blessings />
        <MapSection />
        {/* <QRCodeSection /> */}
        <RSVP />
        <Footer />
      </main>
    </div>
  )
}

export default App
