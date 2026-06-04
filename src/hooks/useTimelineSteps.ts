import { useEffect, useRef, type RefObject } from 'react'

export function useTimelineSteps(containerRef: RefObject<HTMLElement | null>) {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const step = entry.target as HTMLElement
          const idx = parseInt(step.dataset.step || '1', 10)

          setTimeout(() => {
            step.classList.add('is-visible')
          }, (idx - 1) * 160)

          observerRef.current?.unobserve(step)
        }
      })
    }, { threshold: 0.2 })

    const steps = container.querySelectorAll('.timeline__step')
    steps.forEach(s => observerRef.current?.observe(s))

    return () => observerRef.current?.disconnect()
  }, [containerRef])
}
