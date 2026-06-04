import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const link = (e.target as Element).closest('a[href^="#"]')
      if (!link) return

      const href = link.getAttribute('href')
      if (!href || href === '#') return

      const target = document.querySelector(href)
      if (!target) return

      e.preventDefault()
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 64
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 8
      window.scrollTo({ top, behavior: 'smooth' })
    }

    document.addEventListener('click', handler, { passive: false })
    return () => document.removeEventListener('click', handler)
  }, [])
}
