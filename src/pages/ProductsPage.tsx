import React, { useEffect } from 'react'
import Header from '../components/Header'
import Products from '../components/Products'

interface ProductsPageProps {
  onBackHome: () => void
  onProductClick: () => void
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onBackHome, onProductClick }) => {
  useEffect(() => {
    // Ensure the page opens at the very top every time
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  return (
    <div className="min-h-screen bg-evistal-white">
      <Header onNavigateHome={onBackHome} onNavigateProducts={() => {}} />
      <section className="pt-24">
        <Products onProductClick={onProductClick} />
      </section>
    </div>
  )
}

export default ProductsPage


