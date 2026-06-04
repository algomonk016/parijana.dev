import { useEffect, useRef, type RefObject } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  alpha: number
}

export function useParticleCanvas(canvasRef: RefObject<HTMLCanvasElement | null>) {
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const PARTICLE_COUNT = prefersReduced ? 0 : 88
    const MAX_DIST = 140
    const ACCENT = { r: 100, g: 255, b: 218 }

    let W: number, H: number, dpr: number
    let particles: Particle[] = []

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const randomParticle = (): Particle => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.6 + 0.4,
      alpha: Math.random() * 0.45 + 0.1,
    })

    const build = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, randomParticle)
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < -10) p.x = W + 10
        if (p.x > W + 10) p.x = -10
        if (p.y < -10) p.y = H + 10
        if (p.y > H + 10) p.y = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${p.alpha})`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const opacity = (1 - dist / MAX_DIST) * 0.12
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${opacity})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    const onResize = () => {
      cancelAnimationFrame(rafRef.current)
      resize()
      build()
      if (!prefersReduced) draw()
    }

    resize()
    build()
    if (!prefersReduced) draw()

    window.addEventListener('resize', onResize)
    const observer = new ResizeObserver(onResize)
    observer.observe(canvas)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
      observer.disconnect()
    }
  }, [canvasRef])
}
