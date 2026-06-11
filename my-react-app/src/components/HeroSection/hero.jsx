import heroVideo from '../../assets/vedio/byd-shark-dvc-6.webm'
import './hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/webm" />
      </video>

      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-left">
          <h1>World's no.1 PHEV brand*</h1>
          <p>*Based on the publicly available sources</p>
        </div>

        <div className="hero-bottom">
          <div className="hero-buttons">
            <a href="#" className="hero-btn">Express Your Interest</a>
            <a href="#" className="hero-btn">Test Drive</a>
            <a href="#" className="hero-btn">Book Now</a>
          </div>
          <p className="hero-bottom-text">PKR 19,950,000/-</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
