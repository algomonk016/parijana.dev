import { useEffect, useRef, type RefObject } from 'react'

export function useParallax(elementRef: RefObject<HTMLElement | null>) {
  const tickingRef = useRef(false)

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const onScroll = () => {
      if (!tickingRef.current) {
        requestAnimationFrame(() => {
          const y = window.scrollY
          el.style.transform = `translateX(-50%) translateY(${y * 0.25}px)`
          tickingRef.current = false
        })
        tickingRef.current = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [elementRef])
}
