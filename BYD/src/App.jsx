import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroSection/hero'
import Hero2 from "./components/Hero-2/hero-2.jsx";
import CarImagesSection from "./components/CarImagesSection/CarImagesSection.jsx";
import CenterSlider from "./components/Center-Slider/Center-Slider.jsx";
import NextLeveLCapability from "./components/Next level capability/Next-level-capability.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Hero2 />
      <CarImagesSection />
      <CenterSlider />
      <NextLeveLCapability />
    </>
  )
}

export default App
