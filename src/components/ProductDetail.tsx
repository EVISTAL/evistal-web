import React, { useEffect, useState } from 'react'

interface ProductDetailProps {
  onBack: () => void
  onNavigateProducts?: () => void
}

const ProductDetail: React.FC<ProductDetailProps> = ({ onBack }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-evistal-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-evistal-white/95 backdrop-blur-sm border-b border-evistal-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          {/* Logo */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={onBack}
            >
              {/* EVISTAL Logo - E+V Design */}
              <div className="w-8 h-8 mr-3 relative">
                <svg viewBox="0 0 32 32" className="w-full h-full">
                  {/* E harfi - Sol taraf */}
                  <path d="M4 4 L4 28 L8 28 L8 20 L20 20 L20 16 L8 16 L8 12 L20 12 L20 8 L8 8 L8 4 Z" fill="#000000"/>
                  {/* V harfi - Sağ taraf */}
                  <path d="M24 4 L28 4 L24 20 L20 20 Z" fill="#000000"/>
                  <path d="M20 20 L24 20 L20 28 L16 28 Z" fill="#000000"/>
                </svg>
              </div>
              <span className="text-2xl font-bold text-evistal-black">EVISTAL</span>
            </div>

          {/* Back Button */}
            <button
              onClick={onBack}
              className="flex items-center text-evistal-black hover:text-evistal-gray transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Ana Sayfaya Dön
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section id="product-hero" className="py-20 bg-gradient-to-br from-evistal-white to-evistal-gray-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className={`transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-16">
                <div className="w-32 h-32 mx-auto mb-8 bg-evistal-black rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-evistal-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold text-evistal-black mb-6 gradient-text">
                  Smart Humidifier
                </h1>
                <p className="text-xl sm:text-2xl text-evistal-gray">
                  İlk Akıllı Nemlendirici
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-evistal-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-evistal-black text-center mb-16">
              Ürün Özellikleri
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* BLE Teknolojisi */}
              <div className="bg-evistal-gray-light rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-evistal-black rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-evistal-white dark:text-black icon-on-light" fill="currentColor" viewBox="0 0 24 24">
                    {/* Bluetooth Icon */}
                    <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-evistal-black mb-4">BLE Teknolojisi</h3>
                <p className="text-evistal-gray">
                  Telefonunuzdan kolayca kontrol edebileceğiniz akıllı bağlantı teknolojisi
                </p>
              </div>

              {/* Enerji Verimliliği */}
              <div className="bg-evistal-gray-light rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-evistal-black rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-evistal-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
                    {/* Energy Efficiency Icon - Lightning bolt */}
                    <path d="M7 2v11h3v9l7-12h-4l4-8z" fill="currentColor"/>
                    <path d="M17 2l-2 4h2l-1 2h-1l2-4h-2l1-2z" fill="currentColor" opacity="0.6"/>
                    <path d="M19 4l-1 2h1l-0.5 1h-0.5l1-2h-1l0.5-1z" fill="currentColor" opacity="0.4"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-evistal-black mb-4">%40 Enerji Tasarrufu</h3>
                <p className="text-evistal-gray">
                  Çevre dostu ve ekonomik çalışma prensipleri ile enerji verimliliği
                </p>
              </div>

              {/* 24/7 Çalışma */}
              <div className="bg-evistal-gray-light rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-evistal-black rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-evistal-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
                    {/* Clock Icon */}
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-evistal-black mb-4">24/7 Kesintisiz</h3>
                <p className="text-evistal-gray">
                  Sürekli nem kontrolü ile evinizde ideal ortam koşulları
                </p>
              </div>

              {/* Modern Tasarım */}
              <div className="bg-evistal-gray-light rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-evistal-black rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-evistal-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
                    {/* Modern Design Icon - Geometric shapes */}
                    <rect x="4" y="4" width="6" height="6" fill="currentColor" opacity="0.8"/>
                    <rect x="12" y="4" width="6" height="6" fill="currentColor"/>
                    <rect x="4" y="12" width="6" height="6" fill="currentColor"/>
                    <rect x="12" y="12" width="6" height="6" fill="currentColor" opacity="0.6"/>
                    <circle cx="7" cy="7" r="1" fill="currentColor" opacity="0.4"/>
                    <circle cx="15" cy="7" r="1" fill="currentColor" opacity="0.4"/>
                    <circle cx="7" cy="15" r="1" fill="currentColor" opacity="0.4"/>
                    <circle cx="15" cy="15" r="1" fill="currentColor" opacity="0.4"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-evistal-black mb-4">Modern Tasarım</h3>
                <p className="text-evistal-gray">
                  Evinizin her köşesine uyum sağlayan şık ve minimal tasarım
                </p>
              </div>

              {/* Akıllı Kontrol */}
              <div className="bg-evistal-gray-light rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-evistal-black rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-evistal-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
                    {/* Smartphone Icon */}
                    <path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                    <path d="M12 16.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-evistal-black mb-4">Akıllı Kontrol</h3>
                <p className="text-evistal-gray">
                  Uygulama üzerinden nem seviyesi ve çalışma modlarını ayarlayın
                </p>
              </div>

              {/* Sessiz Çalışma */}
              <div className="bg-evistal-gray-light rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-evistal-black rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-evistal-white dark:text-black icon-on-light" fill="currentColor" viewBox="0 0 24 24">
                    {/* Mute Icon */}
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-evistal-black mb-4">Sessiz Çalışma</h3>
                <p className="text-evistal-gray">
                  Geceleri rahatsız etmeyen ultra sessiz motor teknolojisi
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-evistal-gray-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-evistal-black text-center mb-16">
              Teknik Özellikler
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-evistal-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-evistal-black mb-6">Genel Özellikler</h3>
                    <ul className="space-y-3 text-evistal-gray">
                      <li>• Boyut: 25 x 25 x 35 cm</li>
                      <li>• Ağırlık: 2.5 kg</li>
                      <li>• Su Tankı Kapasitesi: 4L</li>
                      <li>• Çalışma Alanı: 50 m²</li>
                      <li>• Nem Aralığı: %30 - %80</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-evistal-black mb-6">Teknik Detaylar</h3>
                    <ul className="space-y-3 text-evistal-gray">
                      <li>• Güç: 25W</li>
                      <li>• Voltaj: 220V / 50Hz</li>
                      <li>• Bağlantı: BLE 5.0</li>
                      <li>• Uygulama: iOS / Android</li>
                      <li>• Garanti: 2 Yıl</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ProductDetail
