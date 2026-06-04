import { useEffect, type RefObject } from 'react'

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v))

export function useCardTilt(cardRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (prefersReduced || isTouch) return

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)
      const rx = clamp(-dy * 5, -6, 6)
      const ry = clamp(dx * 5, -6, 6)

      card.style.transform = `translateY(-5px) rotateX(${rx}deg) rotateY(${ry}deg)`
      card.style.transformStyle = 'preserve-3d'
    }

    const onLeave = () => {
      card.style.transform = ''
      card.style.transformStyle = ''
    }

    card.addEventListener('mousemove', onMove, { passive: true })
    card.addEventListener('mouseleave', onLeave, { passive: true })

    return () => {
      card.removeEventListener('mousemove', onMove)
      card.removeEventListener('mouseleave', onLeave)
    }
  }, [cardRef])
}
