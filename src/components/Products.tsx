import React, { useEffect, useState } from 'react'

interface ProductsProps {
  onProductClick: () => void
}

const Products: React.FC<ProductsProps> = ({ onProductClick }) => {
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

    const element = document.getElementById('products')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="products" 
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
            Ürünlerimiz
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div 
              className="bg-evistal-gray-light rounded-2xl p-8 sm:p-12 hover:shadow-2xl transition-all duration-300 hover-3d cursor-pointer"
              onClick={onProductClick}
            >
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-8 bg-evistal-black rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-evistal-white dark:text-black" fill="currentColor" viewBox="0 0 100 100">
                    {/* Exact replica of the photo - 13 horizontal bars creating hourglass shape */}
                    {/* Bar 1 - Top with handles */}
                    <rect x="10" y="5" width="80" height="8" fill="currentColor" />
                    <rect x="8" y="3" width="4" height="4" fill="currentColor" />
                    <rect x="88" y="3" width="4" height="4" fill="currentColor" />
                    
                    {/* Bar 2 */}
                    <rect x="15" y="13" width="70" height="6" fill="currentColor" />
                    
                    {/* Bar 3 */}
                    <rect x="20" y="19" width="60" height="5" fill="currentColor" />
                    
                    {/* Bar 4 */}
                    <rect x="25" y="24" width="50" height="4" fill="currentColor" />
                    
                    {/* Bar 5 */}
                    <rect x="30" y="28" width="40" height="4" fill="currentColor" />
                    
                    {/* Bar 6 */}
                    <rect x="35" y="32" width="30" height="3" fill="currentColor" />
                    
                    {/* Bar 7 - Middle (narrowest) */}
                    <rect x="40" y="35" width="20" height="3" fill="currentColor" />
                    
                    {/* Bar 8 */}
                    <rect x="35" y="38" width="30" height="3" fill="currentColor" />
                    
                    {/* Bar 9 */}
                    <rect x="30" y="41" width="40" height="4" fill="currentColor" />
                    
                    {/* Bar 10 */}
                    <rect x="25" y="45" width="50" height="4" fill="currentColor" />
                    
                    {/* Bar 11 */}
                    <rect x="20" y="49" width="60" height="5" fill="currentColor" />
                    
                    {/* Bar 12 */}
                    <rect x="15" y="54" width="70" height="6" fill="currentColor" />
                    
                    {/* Bar 13 - Bottom */}
                    <rect x="10" y="60" width="80" height="8" fill="currentColor" />
                  </svg>
                </div>
                
                <h3 className="text-3xl font-bold text-evistal-black mb-6">
                  Smart Humidifier
                </h3>
                
                <div className="space-y-4 text-lg text-evistal-gray">
                  <p>
                    EVISTAL Smart Humidifier, evinizdeki nem seviyesini akıllı teknoloji ile optimize eder.
                  </p>
                  <p>
                    BLE teknolojisi sayesinde telefonunuzdan kolayca kontrol edebilir, enerji verimliliği ile çevre dostu bir yaşam sürdürebilirsiniz.
                  </p>
                  <p>
                    Modern tasarımı ile evinizin her köşesine uyum sağlar.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-evistal-black mb-2">BLE</div>
                    <div className="text-evistal-gray">Akıllı Bağlantı</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-evistal-black mb-2">%40</div>
                    <div className="text-evistal-gray">Enerji Tasarrufu</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-evistal-black mb-2">24/7</div>
                    <div className="text-evistal-gray">Kesintisiz Çalışma</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
