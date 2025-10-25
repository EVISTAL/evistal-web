import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">EVISTAL Hakkında</h2>
            <p className="about-description">
              EVISTAL, sağlıklı yaşam alanları yaratmak amacıyla kurulmuş bir teknoloji şirketidir. 
              Uzman mühendislerimiz ve tasarım ekibimiz, evlerinizde daha iyi hava kalitesi sağlamak 
              için sürekli çalışmaktadır.
            </p>
            <p className="about-description">
              Misyonumuz, modern teknoloji ile geleneksel konforu birleştirerek, her evde sağlıklı 
              bir yaşam ortamı yaratmaktır. EVISTAL nemlendirici cihazı, bu misyonumuzun ilk adımıdır.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>1000+</h3>
                <p>Mutlu Müşteri</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Teknik Destek</p>
              </div>
              <div className="stat-item">
                <h3>2 Yıl</h3>
                <p>Garanti</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-visual">
              <div className="visual-element"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

