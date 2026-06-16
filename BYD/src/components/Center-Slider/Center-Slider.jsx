import React, { useEffect, useRef, useState } from 'react'
import './Center-Slider.css'
import car1 from '../../assets/images/byd-car7.webp'
import car2 from '../../assets/images/byd-car8.webp'
import car3 from '../../assets/images/byd-car9.webp'
import car4 from '../../assets/images/byd-car10.webp'

const slides = [
  {
    src: car1,
    title: 'AWD with Offroad Capability',
    caption: 'Drivetrain modes for mud, snow, and sand with 230mm ground clearance and 700mm wading depth.',
  },
  {
    src: car2,
    title: 'Premium Pickup Performance',
    caption: 'Smooth highway cruising and strong towing power for your next adventure.',
  },
  {
    src: car3,
    title: 'Modern PHEV Technology',
    caption: 'Efficient plug-in hybrid power with impressive electric range and fast charging.',
  },
  {
    src: car4,
    title: 'Bold Design, Strong Presence',
    caption: 'Muscular exterior styling with premium LED lighting and a confident road stance.',
  },
]

export default function CenterSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const viewportRef = useRef(null)
  const slideRefs = useRef([])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length)
    }, 4200)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const viewport = viewportRef.current
    const targetSlide = slideRefs.current[activeIndex]
    if (!viewport || !targetSlide) return

    const offset = targetSlide.offsetLeft - (viewport.offsetWidth - targetSlide.offsetWidth) / 2
    viewport.scrollTo({ left: offset, behavior: 'smooth' })
  }, [activeIndex])

  const goPrev = () => {
    setActiveIndex((index) => (index - 1 + slides.length) % slides.length)
  }

  const goNext = () => {
    setActiveIndex((index) => (index + 1) % slides.length)
  }

  return (
    <section className="center-slider">
      <div className="center-slider__head">
        <p className="center-slider__label">Slide Showcase</p>
        <h2>Experience animated, center-focused car slides</h2>
      </div>

      <div className="center-slider__viewport" ref={viewportRef}>
        <div className="center-slider__track">
          {slides.map((slide, index) => (
            <article
              key={index}
              ref={(el) => (slideRefs.current[index] = el)}
              className={`center-slider__slide ${index === activeIndex ? 'center-slider__slide--active' : ''}`}>
              <div className="slide-card">
                <img className="slide-card__image" src={slide.src} alt={slide.title} />
                <div className="slide-card__content">
                  <h3>{slide.title}</h3>
                  <p>{slide.caption}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="center-slider__controls">
        <button type="button" onClick={goPrev} className="slider-button slider-button--prev">Prev</button>
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`slider-dot ${index === activeIndex ? 'slider-dot--active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <button type="button" onClick={goNext} className="slider-button slider-button--next">Next</button>
      </div>
    </section>
  )
}
