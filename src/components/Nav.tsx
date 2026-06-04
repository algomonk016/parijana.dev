import { useEffect, useState } from 'react'
import { navLinks } from '../data/portfolio'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const update = () => {
      setScrolled(window.scrollY > 20)
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')
          document.querySelectorAll('.nav__link[href^="#"]').forEach(link => {
            const href = link.getAttribute('href')?.slice(1)
            link.classList.toggle('active', href === id)
          })
        }
      })
    }, { rootMargin: '-40% 0px -55% 0px' })

    document.querySelectorAll('section[id]').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="nav__inner">
          <a href="/" className="nav__logo" aria-label="Parijana home">
            <img src="/logos/logo-dark.svg" alt="Parijana" />
          </a>
        <ul className={`nav__links${menuOpen ? ' open' : ''}`} role="list">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`nav__link${link.cta ? ' nav__link--cta' : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`nav__toggle${menuOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
