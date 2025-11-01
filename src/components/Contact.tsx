import React, { useEffect, useState } from 'react'
import { useToast } from '../contexts/ToastContext'

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })
  const { showToast } = useToast()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('contact')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.email || !formData.message) {
      showToast('Lütfen tüm alanları doldurun', 'error')
      return
    }
    
    if (!formData.email.includes('@')) {
      showToast('Geçerli bir e-posta adresi girin', 'error')
      return
    }
    
    // Simulate form submission
    console.log('Form submitted:', formData)
    setFormData({ email: '', message: '' })
    showToast('Mesajınız başarıyla gönderildi!', 'success')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section 
      id="contact" 
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
          İletişim
        </h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-evistal-black mb-8">İletişim Bilgileri</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-evistal-black rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-evistal-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-evistal-gray">Adres</p>
                    <p className="text-evistal-black font-medium">İstanbul, Türkiye</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-evistal-black rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-evistal-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-evistal-gray">E-posta</p>
                    <p className="text-evistal-black font-medium">info@evistal.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-evistal-black rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-evistal-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-evistal-gray">Telefon</p>
                    <p className="text-evistal-black font-medium">+90 (212) 555 0123</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-evistal-black mb-8">Bize Ulaşın</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-evistal-black mb-2">
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-evistal-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-evistal-black focus:border-transparent"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-evistal-black mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-evistal-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-evistal-black focus:border-transparent resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-evistal-black text-evistal-white py-3 px-6 rounded-lg hover:bg-evistal-gray transition-colors duration-300 transform hover:scale-105"
                >
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
