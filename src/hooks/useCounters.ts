import { useEffect, useRef, type RefObject } from 'react'

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v))

export function useCounters(elRef: RefObject<HTMLElement | null>) {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    function animateCounter(el: HTMLElement, target: number) {
      const start = performance.now()
      const duration = 1600

      function step(now: number) {
        const elapsed = now - start
        const progress = clamp(elapsed / duration, 0, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        el.textContent = String(Math.round(eased * target))
        if (progress < 1) requestAnimationFrame(step)
      }

      requestAnimationFrame(step)
    }

    const numEl = el.querySelector<HTMLElement>('.stat-card__number')
    if (!numEl) return

    const target = parseInt(numEl.dataset.target || '0', 10)

    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(numEl, target)
          observerRef.current?.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })

    observerRef.current.observe(el)

    return () => observerRef.current?.disconnect()
  }, [elRef])
}
