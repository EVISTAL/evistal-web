import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>EVISTAL</h3>
            <p>Sağlıklı yaşam alanları için akıllı nemlendirici çözümleri.</p>
          </div>
          <div className="footer-section">
            <h4>Hızlı Linkler</h4>
            <ul>
              <li><a href="#home">Ana Sayfa</a></li>
              <li><a href="#features">Özellikler</a></li>
              <li><a href="#product">Ürün</a></li>
              <li><a href="#about">Hakkımızda</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Destek</h4>
            <ul>
              <li><a href="#contact">İletişim</a></li>
              <li><a href="#">Teknik Destek</a></li>
              <li><a href="#">Sıkça Sorulan Sorular</a></li>
              <li><a href="#">Garanti</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Sosyal Medya</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 EVISTAL. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

