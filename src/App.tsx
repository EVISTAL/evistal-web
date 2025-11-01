import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import WhyEvistal from './components/WhyEvistal'
import ProductDetail from './components/ProductDetail'
import Loading from './components/Loading'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Particles from './components/Particles'
import { ThemeProvider } from './contexts/ThemeContext'
import { ToastProvider } from './contexts/ToastContext'
import ProductsPage from './pages/ProductsPage'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'product' | 'products'>('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const showProductDetail = () => {
    setCurrentPage('product')
  }

  const showHome = () => {
    setCurrentPage('home')
    // Always start from top when returning home
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }, 0)
  }

  const showProductsPage = () => {
    setCurrentPage('products')
    // Always start from top when opening the products page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }, 0)
  }

  if (isLoading) {
    return <Loading />
  }

  if (currentPage === 'product') {
    return <ProductDetail onBack={showHome} />
  }

  if (currentPage === 'products') {
    return (
      <ThemeProvider>
        <ToastProvider>
          <div className="min-h-screen bg-evistal-white">
            <Particles />
            <ScrollProgress />
            <ProductsPage onBackHome={showHome} onProductClick={showProductDetail} />
            <BackToTop />
          </div>
        </ToastProvider>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="min-h-screen bg-evistal-white">
          <Particles />
          <ScrollProgress />
          <Header onNavigateProducts={showProductDetail} onNavigateHome={showHome} />
          <Hero onExploreProducts={showProductsPage} />
          <Products onProductClick={showProductDetail} />
          <About />
          <WhyEvistal />
          <Contact />
          <BackToTop />
        </div>
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App
