import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal-fade, .reveal-slide, .reveal-scale')
    if (!els.length) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      els.forEach(el => el.classList.add('is-visible'))
      return
    }

    els.forEach(el => {
      const delay = el.dataset.delay ? parseInt(el.dataset.delay, 10) : 0
      if (delay) el.style.transitionDelay = `${delay}ms`
    })

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
