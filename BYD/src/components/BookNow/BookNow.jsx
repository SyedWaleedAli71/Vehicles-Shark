import React, { useEffect, useState } from 'react'
import './BookNow.css'
import slide1 from '../../assets/images/byd-car4.webp'
import slide2 from '../../assets/images/byd-car5.webp'
import slide3 from '../../assets/images/byd-car6.webp'
import slide4 from '../../assets/images/byd-car7.webp'

const slides = [
  {
    src: slide1,
    title: 'Shark 6 Premium',
    subtitle: 'Modern pickup design with PHEV efficiency and rugged style.',
  },
  {
    src: slide2,
    title: 'Intelligent Cockpit',
    subtitle: 'Advanced interior layout with large touchscreen and premium comfort.',
  },
  {
    src: slide3,
    title: 'Strong Towing',
    subtitle: '2500 kg towing power for caravans, boats, and heavy loads.',
  },
  {
    src: slide4,
    title: 'Off-Road Ready',
    subtitle: 'Durable chassis and suspension built for rough terrain.',
  },
]

export default function BookNow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const goPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="booknow-section">
      <div className="booknow-inner">
        <div className="booknow-slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`booknow-slide ${index === currentSlide ? 'booknow-slide--active' : ''}`}>
              <img src={slide.src} alt={slide.title} />
              <div className="booknow-slide__meta">
                <span>{slide.title}</span>
                <p>{slide.subtitle}</p>
              </div>
            </div>
          ))}

          <button className="booknow-arrow booknow-arrow--left" onClick={goPrev} aria-label="Previous slide">�</button>
          <button className="booknow-arrow booknow-arrow--right" onClick={goNext} aria-label="Next slide">�</button>

          <div className="booknow-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`booknow-dot ${index === currentSlide ? 'booknow-dot--active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <aside className="booknow-panel">
          <div className="booknow-panel__stats">
            <div>
              <strong>800 km*</strong>
              <span>Range</span>
            </div>
            <div>
              <strong>5.7 sec*</strong>
              <span>0–100 km/hr</span>
            </div>
            <div>
              <strong>436 HP</strong>
              <span>650 NM Torque</span>
            </div>
          </div>

          <div className="booknow-panel__options">
            <button type="button">Variants</button>
            <button type="button">Exterior Colors</button>
            <button type="button">Interior Colors</button>
          </div>

          <button className="booknow-action" type="button">BOOK NOW</button>

          <div className="booknow-disclaimer">
            Performance related matrices are based on controlled conditions. Actual performance will vary depending on driving behaviour, environment and other influencing factors.
          </div>
        </aside>
      </div>
    </section>
  )
}
