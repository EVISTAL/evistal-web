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
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('evistal-theme')
      return saved ? JSON.parse(saved) : false
    }
    return false
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('evistal-theme', JSON.stringify(isDark))
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