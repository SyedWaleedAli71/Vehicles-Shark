import { useEffect } from 'react'
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
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined

    const revealGroups = [
      {
        selector: '.hero2__stats, .hero2__visual, .car-images-section__hero, .center-slider__head, .assembly__header, .footer__subscribe',
        direction: 'reveal-up',
      },
      {
        selector: '.car-image-card, .capability-card, .assembly-card, .footer__col, .footer__brand',
        direction: 'reveal-fade',
      },
      {
        selector: '.v2l-function__media, .booknow-slider',
        direction: 'reveal-left',
      },
      {
        selector: '.v2l-function__content, .booknow-panel',
        direction: 'reveal-right',
      },
    ]
    const items = revealGroups.flatMap(({ selector, direction }) =>
      Array.from(document.querySelectorAll(selector), (element) => {
        element.classList.add('reveal-item', direction)
        return element
      }),
    )
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

    document.documentElement.classList.add('reveal-ready')
    items.forEach((item) => observer.observe(item))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('reveal-ready')
    }
  }, [])

  return (
    <>
      <Navbar />
      <main className="site-content">
        <Hero />
        <Hero2 />
        <CarImagesSection />
        <CenterSlider />
        <NextLeveLCapability />
        <V2LFuntion />
        <Advancedtechnicalassembly />
        <BookNow />
      </main>
      <Footer />
    </>
  )
}

export default App
