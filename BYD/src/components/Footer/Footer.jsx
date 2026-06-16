import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer"> 
      <div className="footer__top">
        <div className="footer__subscribe">
          <div>
            <h2>Stay Ahead</h2>
            <p>Get exclusive updates on BYD</p>
          </div>
          <form className="footer__form">
            <input className="footer__input" type="email" placeholder="Email" />
            <button className="footer__button" type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer__links">
        <div className="footer__col">
          <h3>About Us</h3>
          <a href="#">About BYD</a>
          <a href="#">Safety & Technology</a>
          <a href="#">Sustainability</a>
        </div>
        <div className="footer__col">
          <h3>Vehicles</h3>
          <a href="#">BYD Atto 2</a>
          <a href="#">BYD Atto 3</a>
          <a href="#">BYD Seal</a>
          <a href="#">BYD Sealon 7</a>
          <a href="#">BYD Shark 6</a>
        </div>
        <div className="footer__col">
          <h3>Experience</h3>
          <a href="#">BYD Locations</a>
          <a href="#">BYD Charging</a>
          <a href="#">Savings Calculator</a>
          <a href="#">Store</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer__brand">
          <div className="footer__logo">BYD</div>
          <div className="footer__sub">Mega Motor Company (Private) Limited</div>
          <div className="footer__socials">
            <a href="#" aria-label="Facebook" className="footer__icon">F</a>
            <a href="#" aria-label="Instagram" className="footer__icon">I</a>
            <a href="#" aria-label="YouTube" className="footer__icon">Y</a>
            <a href="#" aria-label="LinkedIn" className="footer__icon">L</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>©2026 BYD - Mega Motor</span>
        <div className="footer__legal">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
