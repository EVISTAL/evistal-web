import React, { useEffect, useState } from 'react'

interface HeroProps {
  onExploreProducts?: () => void
}

const Hero: React.FC<HeroProps> = ({ onExploreProducts }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-evistal-white to-evistal-gray-light"
    >
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <div 
          className={`transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-evistal-black mb-6 animate-float">
            Smart Humidifier
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-evistal-gray mb-8">
            İlk Akıllı Nemlendirici
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => {
                if (onExploreProducts) {
                  onExploreProducts()
                  return
                }
                const element = document.getElementById('products')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-evistal-black text-evistal-white px-8 py-3 rounded-lg hover:bg-evistal-gray transition-all duration-300 hover-lift"
            >
              Ürünleri Keşfet
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
