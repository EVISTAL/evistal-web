import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './style.css'

// Uygulama başlangıcında scroll pozisyonunu sıfırla ve dark mode'u kaldır
if (typeof window !== 'undefined') {
  // Scroll restoration'ı kapat - sayfa her zaman en üstten açılsın
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
  }
  
  // Dark mode class'ını kaldır - her zaman light mode'da başla
  document.documentElement.classList.remove('dark')
  
  // Sayfayı en üste al
  window.scrollTo({ top: 0, behavior: 'auto' })
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)