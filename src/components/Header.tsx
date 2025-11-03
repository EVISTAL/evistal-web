import React, { useState } from 'react'
import MobileMenu from './MobileMenu'
import { useTheme } from '../contexts/ThemeContext'

interface HeaderProps {
  onNavigateProducts?: () => void
  onNavigateHome?: () => void
}

const Header: React.FC<HeaderProps> = ({ onNavigateProducts, onNavigateHome }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-evistal-white/95 backdrop-blur-sm border-b border-evistal-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => (onNavigateHome ? onNavigateHome() : scrollToSection('hero'))}
          >
            {/* EVISTAL Logo */}
            <div className="w-8 h-8 mr-3 relative">
              <img 
                src="/logo.png" 
                alt="EVISTAL Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-evistal-black">EVISTAL</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => (onNavigateProducts ? onNavigateProducts() : scrollToSection('products'))}
              className="text-evistal-black hover:text-evistal-gray transition-colors duration-200"
            >
              Ürünlerimiz
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-evistal-black hover:text-evistal-gray transition-colors duration-200"
            >
              Hakkımızda
            </button>
            <button
              onClick={() => scrollToSection('why-evistal')}
              className="text-evistal-black hover:text-evistal-gray transition-colors duration-200"
            >
              Neden EVISTAL?
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-evistal-black hover:text-evistal-gray transition-colors duration-200"
            >
              İletişim
            </button>
          </nav>

          {/* Theme toggle and Mobile menu button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-evistal-black hover:text-evistal-gray transition-colors duration-200 p-2 rounded-lg hover:bg-evistal-gray-light"
              aria-label="Tema değiştir"
            >
              {isDark ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-evistal-black hover:text-evistal-gray transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        scrollToSection={scrollToSection}
        onNavigateProducts={onNavigateProducts}
      />
    </header>
  )
}

export default Header
