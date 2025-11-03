import React, { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Her zaman light mode'da başla (localStorage'dan okuma)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Scroll restoration'ı kapat - sayfa her zaman en üstten açılsın
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
      }
      
      // Dark mode class'ını kaldır - her zaman light mode
      const root = document.documentElement
      root.classList.remove('dark')
      
      // Sayfayı en üste al
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Tema değiştiğinde localStorage'a kaydet (kullanıcı manuel değiştirdiğinde)
      // Ama sayfa yüklendiğinde her zaman light mode'da başla
      const root = document.documentElement
      
      if (isDark) {
        root.classList.add('dark')
        console.log('🌙 Dark mode activated')
      } else {
        root.classList.remove('dark')
        console.log('☀️ Light mode activated')
      }
    }
  }, [isDark])

  const toggleTheme = () => {
    console.log('🔄 Toggling theme from', isDark ? 'dark' : 'light', 'to', !isDark ? 'dark' : 'light')
    setIsDark(!isDark)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}