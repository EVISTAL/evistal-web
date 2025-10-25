import './Product.css'

function Product() {
  const specs = [
    { label: 'Su Tankı Kapasitesi:', value: '6 Litre' },
    { label: 'Çalışma Alanı:', value: '50 m²' },
    { label: 'Gürültü Seviyesi:', value: '25dB' },
    { label: 'Enerji Tüketimi:', value: '35W' },
    { label: 'Bağlantı:', value: 'BLE 5.0' },
    { label: 'LED Sistemi:', value: 'RGB LED' },
    { label: 'Kontrol:', value: 'AT Komutları' },
    { label: 'Garanti:', value: '2 Yıl' }
  ]

  return (
    <section id="product" className="product">
      <div className="container">
        <div className="product-content">
          <div className="product-info">
            <h2 className="product-title">EVISTAL Akıllı Nemlendirici</h2>
            <p className="product-description">
              EVISTAL, evinizdeki hava kalitesini artırmak için tasarlanmış yeni nesil akıllı nemlendirici cihazıdır. 
              BLE (Bluetooth Low Energy) teknolojisi ile mobil uygulama üzerinden kontrol edilir. RGB LED ışık sistemi 
              ve özel AT komut desteği ile tamamen kişiselleştirilebilir bir deneyim sunar.
            </p>
            <div className="product-specs">
              {specs.map((spec, index) => (
                <div key={index} className="spec-item">
                  <span className="spec-label">{spec.label}</span>
                  <span className="spec-value">{spec.value}</span>
                </div>
              ))}
            </div>
            <div className="product-buttons">
              <a href="#store" className="btn btn-primary">Satın Al</a>
              <a href="#contact" className="btn btn-outline">Teknik Destek</a>
            </div>
          </div>
          <div className="product-image">
            <div className="product-showcase-large">
              <div className="humidifier-large">
                <div className="device-body-large"></div>
                <div className="device-display-large">EVISTAL</div>
                <div className="device-mist-large"></div>
                <div className="rgb-led-ring-large"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product

