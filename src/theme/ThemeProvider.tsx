import { useEffect, useState, type ReactNode } from 'react'
import { ThemeContext } from './ThemeContext'
import type { ThemeName } from './types'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>('teal')

  useEffect(() => {
    document.documentElement.classList.toggle('theme-orange', theme === 'orange')
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
