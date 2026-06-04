import { useEffect } from 'react'

const lerp = (a: number, b: number, t: number) => a + (b - a) * t

export function useCursorGlow() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (prefersReduced || isTouch) return

    const glow = document.getElementById('cursorGlow')
    if (!glow) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let cx = mx, cy = mx
    let rafId: number

    const onMouse = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }

    const tick = () => {
      cx = lerp(cx, mx, 0.1)
      cy = lerp(cy, my, 0.1)
      glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`
      rafId = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMouse, { passive: true })
    rafId = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMouse)
      cancelAnimationFrame(rafId)
    }
  }, [])
}
