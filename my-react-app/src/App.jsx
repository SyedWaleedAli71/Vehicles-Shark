import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroSection/hero'
import Hero2 from "./components/Hero-2/hero-2.jsx";
import CarImagesSection from "./components/CarImagesSection/CarImagesSection.jsx";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Hero2 />
      <CarImagesSection />
    </>
  )
}

export default App
