import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">EVISTAL</h1>
          <h2 className="hero-subtitle">Akıllı Nemlendirici Cihazı</h2>
          <p className="hero-description">
            Evinizde ideal nem seviyesini koruyun. BLE teknolojisi, RGB LED ışık sistemi ve mobil uygulama kontrolü ile 
            tamamen kişiselleştirilebilir bir nemlendirici deneyimi yaşayın.
          </p>
          <div className="hero-buttons">
            <a href="#product" className="btn btn-primary">Ürünü İncele</a>
            <a href="#features" className="btn btn-secondary">Özellikler</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="product-showcase">
            <div className="humidifier-device">
              <div className="device-body"></div>
              <div className="device-display">EVISTAL</div>
              <div className="device-mist"></div>
              <div className="rgb-led-ring"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

