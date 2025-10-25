import { useState } from 'react'
import './Store.css'

function Store() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setIsSubmitted(true)
      setEmail('')
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section id="store" className="store">
      <div className="container">
        <div className="store-content">
          <div className="store-icon">
            <i className="fas fa-store"></i>
          </div>
          <h2 className="store-title">Mağaza Yakında Açılıyor</h2>
          <p className="store-description">
            EVISTAL nemlendirici cihazını satın almak için mağazamız yakında hizmetinizde. 
            Haberdar olmak için e-posta listemize katılın.
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="E-posta adresinizi girin" 
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary newsletter-btn">
              {isSubmitted ? 'Kaydedildi!' : 'Bildirim Al'}
            </button>
          </form>
          <div className="store-features">
            <div className="store-feature">
              <i className="fas fa-shipping-fast"></i>
              <span>Ücretsiz Kargo</span>
            </div>
            <div className="store-feature">
              <i className="fas fa-undo"></i>
              <span>14 Gün İade</span>
            </div>
            <div className="store-feature">
              <i className="fas fa-shield-alt"></i>
              <span>Güvenli Ödeme</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Store

