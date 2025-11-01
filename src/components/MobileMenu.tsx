import React from 'react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  scrollToSection: (sectionId: string) => void
  onNavigateProducts?: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, scrollToSection, onNavigateProducts }) => {
  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    onClose()
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-evistal-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={onClose}
              className="text-evistal-black hover:text-evistal-gray transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Navigation Links */}
          <nav className="space-y-6">
            <button
              onClick={() => handleNavClick('hero')}
              className="block w-full text-left text-xl font-medium text-evistal-black hover:text-evistal-gray transition-colors duration-200"
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => {
                if (onNavigateProducts) {
                  onNavigateProducts()
                  onClose()
                } else {
                  handleNavClick('products')
                }
              }}
              className="block w-full text-left text-xl font-medium text-evistal-black hover:text-evistal-gray transition-colors duration-200"
            >
              Ürünlerimiz
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="block w-full text-left text-xl font-medium text-evistal-black hover:text-evistal-gray transition-colors duration-200"
            >
              Hakkımızda
            </button>
            <button
              onClick={() => handleNavClick('why-evistal')}
              className="block w-full text-left text-xl font-medium text-evistal-black hover:text-evistal-gray transition-colors duration-200"
            >
              Neden EVISTAL?
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left text-xl font-medium text-evistal-black hover:text-evistal-gray transition-colors duration-200"
            >
              İletişim
            </button>
          </nav>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
