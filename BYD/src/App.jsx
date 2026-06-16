import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroSection/hero'
import Hero2 from "./components/Hero-2/hero-2.jsx";
import CarImagesSection from "./components/CarImagesSection/CarImagesSection.jsx";
import CenterSlider from "./components/Center-Slider/Center-Slider.jsx";
import NextLeveLCapability from "./components/Next level capability/Next-level-capability.jsx";
import V2LFuntion from "./components/V2L function/V2L function.jsx";
import Advancedtechnicalassembly from "./components/Advanced technical assembly/Advanced technical assembly.jsx";
import BookNow from './components/BookNow/BookNow.jsx';
import Footer from './components/Footer/Footer.jsx';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Hero2 />
      <CarImagesSection />
      <CenterSlider />
      <NextLeveLCapability />
      <V2LFuntion />
      <Advancedtechnicalassembly />
      <BookNow />
      <Footer />
    </>
  )
}

export default App
