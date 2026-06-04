import { useCursorGlow, useScrollReveal, useSmoothScroll } from './hooks'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Philosophy } from './components/Philosophy'
import { Timeline } from './components/Timeline'
import { Footer } from './components/Footer'

function App() {
  useSmoothScroll()
  useScrollReveal()
  useCursorGlow()

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Philosophy />
      <Timeline />
      <Footer />
      <div className="cursor-glow" id="cursorGlow" aria-hidden="true" />
    </>
  )
}

export default App
