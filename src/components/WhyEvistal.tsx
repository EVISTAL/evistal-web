import React, { useEffect, useState } from 'react'

const WhyEvistal: React.FC = () => {
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

    const element = document.getElementById('why-evistal')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="why-evistal" 
      className="py-20 bg-evistal-white"
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
          Neden EVISTAL?
        </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xl text-evistal-gray leading-relaxed mb-8">
                EVISTAL, modern tasarımı, BLE teknolojisi ve enerji verimliliğiyle evinizdeki yaşam kalitesini artırır.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg hover:bg-evistal-gray-light transition-colors duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-evistal-black rounded-full flex items-center justify-center">
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
                <h3 className="text-xl font-bold text-evistal-black mb-3">Modern Tasarım</h3>
                <p className="text-evistal-gray">Evinizin her köşesine uyum sağlayan şık ve minimal tasarım</p>
              </div>

              <div className="text-center p-6 rounded-lg hover:bg-evistal-gray-light transition-colors duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-evistal-black rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-evistal-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
                    {/* Bluetooth Icon */}
                    <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-evistal-black mb-3">BLE Teknolojisi</h3>
                <p className="text-evistal-gray">Telefonunuzdan kolayca kontrol edebileceğiniz akıllı bağlantı</p>
              </div>

              <div className="text-center p-6 rounded-lg hover:bg-evistal-gray-light transition-colors duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-evistal-black rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-evistal-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
                    {/* Energy Efficiency Icon - Lightning bolt with leaf */}
                    <path d="M7 2v11h3v9l7-12h-4l4-8z" fill="currentColor"/>
                    <path d="M17 2l-2 4h2l-1 2h-1l2-4h-2l1-2z" fill="currentColor" opacity="0.6"/>
                    <path d="M19 4l-1 2h1l-0.5 1h-0.5l1-2h-1l0.5-1z" fill="currentColor" opacity="0.4"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-evistal-black mb-3">Enerji Verimliliği</h3>
                <p className="text-evistal-gray">Çevre dostu ve ekonomik çalışma prensipleri</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyEvistal
