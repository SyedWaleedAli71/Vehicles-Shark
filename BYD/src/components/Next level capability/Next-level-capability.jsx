import React from 'react'
import './Next-level-capability.css'
import feature1 from '../../assets/images/feature-01.webp'
import feature2 from '../../assets/images/feature-02.webp'
import feature3 from '../../assets/images/feature-03.webp'

const features = [
  {
    src: feature1,
    title: '360° Camera',
    subtitle: 'Full surround view for safer parking and off-road maneuvering.',
  },
  {
    src: feature2,
    title: 'Intelligent Cockpit',
    subtitle: '15.6" LCD display with smart connectivity and navigation.',
  },
  {
    src: feature3,
    title: '2,500kg Towing',
    subtitle: 'Powerful towing capacity for caravan and boat adventures.',
  },
]

export default function NextLevelCapability() {
  return (
    <section className="next-level-capability">
      <div className="next-level-capability__header">
        <span className="next-level-capability__eyebrow">Next Level Capability</span>
      </div>

      <div className="next-level-capability__grid">
        {features.map((item, index) => (
          <article key={index} className="capability-card">
            <div className="capability-card__media">
              <img src={item.src} alt={item.title} />
              <div className="capability-card__overlay" />
            </div>
            <div className="capability-card__content">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
