import './Features.css'

function Features() {
  const features = [
    {
      icon: 'fa-bluetooth',
      title: 'BLE Kontrolü',
      description: 'Bluetooth Low Energy teknolojisi ile mobil uygulama üzerinden kolay kontrol. Düşük enerji tüketimi ile uzun süreli kullanım.'
    },
    {
      icon: 'fa-volume-mute',
      title: 'Sessiz Çalışma',
      description: 'Gelişmiş teknoloji sayesinde 25dB altında sessiz çalışma. Gece uykunuzu bölmez.'
    },
    {
      icon: 'fa-palette',
      title: 'RGB LED Işık',
      description: 'Mobil uygulama üzerinden renk ayarı yapabilir, estetik görünüm sağlayabilirsiniz. 16 milyon renk seçeneği.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Güvenli Kullanım',
      description: 'Otomatik kapanma, su bitimi uyarısı ve çocuk kilidi ile güvenli kullanım garantisi.'
    },
    {
      icon: 'fa-code',
      title: 'AT Komut Desteği',
      description: 'Özel kişiselleştirilmiş AT komutları ile gelişmiş kontrol seçenekleri. Programcılar için esnek entegrasyon imkanı.'
    },
    {
      icon: 'fa-magic',
      title: 'Modern Tasarım',
      description: 'Minimalist ve şık tasarım ile evinizin dekorasyonuna uyum sağlar.'
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Neden EVISTAL?</h2>
          <p className="section-subtitle">Modern teknoloji ve kullanıcı dostu tasarımın mükemmel buluşması</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

