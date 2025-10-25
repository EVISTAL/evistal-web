import { useState } from 'react'
import './Navbar.css'
import logoImg from '../../images/Screenshot from 2025-10-25 12-54-15.png'

function Navbar({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logoImg} alt="EVISTAL Logo" className="logo-img" />
          <h2 className="logo-text">EVISTAL</h2>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={closeMenu}>Ana Sayfa</a>
          </li>
          <li className="nav-item">
            <a href="#features" className="nav-link" onClick={closeMenu}>Özellikler</a>
          </li>
          <li className="nav-item">
            <a href="#product" className="nav-link" onClick={closeMenu}>Ürün</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={closeMenu}>Hakkımızda</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={closeMenu}>İletişim</a>
          </li>
          <li className="nav-item">
            <a href="#store" className="nav-link store-link" onClick={closeMenu}>Mağaza</a>
          </li>
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

