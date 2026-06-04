import { useContext } from 'react'
import { ThemeContext, type ThemeContextValue } from './ThemeContext'

export function useTheme(): ThemeContextValue & { isTeal: boolean; isOrange: boolean } {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return {
    ...ctx,
    isTeal: ctx.theme === 'teal',
    isOrange: ctx.theme === 'orange',
  }
}
