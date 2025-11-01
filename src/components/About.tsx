import React, { useEffect, useState } from 'react'

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="about" 
      className="py-20 bg-evistal-gray-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
        <h2 className="text-4xl sm:text-5xl font-bold text-evistal-black text-center mb-16 gradient-text">
          Hakkımızda
        </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-8 bg-evistal-black rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-evistal-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              
              <p className="text-xl text-evistal-gray leading-relaxed mb-8">
                EVISTAL, yenilikçi IoT teknolojileriyle ev konforunu akıllı hale getiren bir teknoloji markasıdır.
              </p>
              
              <p className="text-lg text-evistal-gray leading-relaxed">
                Misyonumuz, modern yaşamın gereksinimlerini karşılayan, kullanıcı dostu ve sürdürülebilir 
                akıllı ev çözümleri sunmaktır. BLE teknolojisi ve enerji verimliliği odaklı yaklaşımımızla, 
                evinizdeki yaşam kalitesini artırmayı hedefliyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
