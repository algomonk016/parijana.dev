import { useEffect, useRef } from 'react'

type RevealType = 'fade' | 'slide' | 'scale'

interface RevealProps {
  children: React.ReactNode
  type?: RevealType
  delay?: number
  className?: string
}

const typeMap: Record<RevealType, string> = {
  fade: 'reveal-fade',
  slide: 'reveal-slide',
  scale: 'reveal-scale',
}

export function Reveal({ children, type = 'fade', delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      el.classList.add('is-visible')
      return
    }

    if (delay) el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const cls = `${typeMap[type]} ${className}`.trim()

  return (
    <div ref={ref} className={cls}>
      {children}
    </div>
  )
}
