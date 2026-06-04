import { useEffect, useRef } from 'react'
import { useParallax, useParticleCanvas } from '../hooks'

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useParticleCanvas(canvasRef)
  useParallax(glowRef)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lines = document.querySelectorAll('.hero__headline-line')
    if (prefersReduced) {
      lines.forEach(l => l.classList.add('is-visible'))
      return
    }
    lines.forEach((line, i) => {
      setTimeout(() => {
        line.classList.add('is-visible')
      }, 200 + i * 110)
    })
  }, [])

  return (
    <section className="hero" id="hero" aria-labelledby="hero-headline">
      <canvas className="hero__canvas" ref={canvasRef} aria-hidden="true" />
      <div className="hero__glow" ref={glowRef} aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__badge reveal-fade is-visible">
          <span className="hero__badge-dot" />
          <span>Available for select collaborations</span>
        </div>

        <h1 className="hero__headline" id="hero-headline">
          <span className="hero__headline-line reveal-slide" data-delay="0">Building</span>
          <span className="hero__headline-line reveal-slide" data-delay="100">thoughtful</span>
          <span className="hero__headline-line hero__headline-line--accent reveal-slide" data-delay="200">software.</span>
        </h1>

        <p className="hero__sub reveal-fade is-visible" data-delay="400">
          Projects, experiments, products, and ideas by <strong>Shivesh Tiwari</strong>.
        </p>

        <div className="hero__actions reveal-fade is-visible" data-delay="550">
          <a href="#projects" className="btn btn--primary">
            <span>Explore Projects</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#blog" className="btn btn--ghost">Read Blog</a>
        </div>

        <div className="hero__scroll reveal-fade is-visible" data-delay="700" aria-hidden="true">
          <div className="hero__scroll-line" />
          <span>scroll</span>
        </div>
      </div>
    </section>
  )
}
