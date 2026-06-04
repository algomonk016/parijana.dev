import { createContext } from 'react'
import type { ThemeName } from './types'

export interface ThemeContextValue {
  theme: ThemeName
  setTheme: (t: ThemeName) => void
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'teal',
  setTheme: () => {},
})
