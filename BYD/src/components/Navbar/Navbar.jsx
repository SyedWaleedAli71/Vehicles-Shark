import { useEffect, useState } from 'react'
import './Navbar.css'

const links = ['ABOUT US', 'VEHICLES', 'Technology', 'EXPERIENCE', 'MMC Care']

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="nav-logo">EYD<span>.</span></div>

      <ul id="primary-navigation" className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <li key={link}><a href="#" onClick={() => setMenuOpen(false)}>{link}</a></li>
        ))}
      </ul>

      <a href="#" className="nav-dealership" aria-label="Dealership Application">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 5c0 1-1 1-1 1H4s-1 0-1-1 1-4 5-4 5 3 5 4z"/>
        </svg>
        Dealership Application
      </a>

      <button
        type="button"
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}

export default Navbar
