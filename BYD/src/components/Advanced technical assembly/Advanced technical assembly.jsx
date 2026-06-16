import React, { useEffect, useState } from 'react'
import './Advanced technical assembly.css'
import assembly1 from '../../assets/images/feature-01.webp'
import assembly2 from '../../assets/images/feature-02.webp'
import assembly3 from '../../assets/images/feature-03.webp'
import assembly4 from '../../assets/images/feature-04.webp'

const cards = [
  {
    title: 'Electric Hybrid',
    description: "The world's first longitudinal EHS drive assembly.",
    image: assembly1,
  },
  {
    title: 'Innovation',
    description: 'Cell to Chassis technology increases rigidity by 22%.',
    image: assembly2,
  },
  {
    title: 'Set Free',
    description: 'High strength steel underbody protection plate.',
    image: assembly3,
  },
  {
    title: 'Off-Road Chassis',
    description: 'Long travel double wishbone suspension stabilises Shark 6 around corners.',
    image: assembly4,
  },
]

export default function AdvancedTechnicalAssembly() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 650)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={`advanced-technical-assembly ${loaded ? 'advanced-technical-assembly--loaded' : ''}`}>
      <div className="assembly__header">
        <h2>Advanced Technical Assembly</h2>
      </div>
      <div className="assembly__grid">
        {cards.map((card, index) => (
          <article key={index} className="assembly-card">
            <div className="assembly-card__media">
              <img src={card.image} alt={card.title} />
              <div className="assembly-card__overlay" />
            </div>
            <div className="assembly-card__body">
              <span>{card.title}</span>
              <p>{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
