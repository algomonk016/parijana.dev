import { StatCard } from './StatCard'
import { stats, tags } from '../data/portfolio'

export function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-label reveal-fade">
          <span>About</span>
        </div>

        <div className="about__grid">
          <div className="about__text">
            <h2 className="about__heading reveal-slide" id="about-heading">
              Engineering at the intersection of systems and experience.
            </h2>
            <p className="about__para reveal-fade" data-delay="100">
              I build software that thinks carefully about the humans who use it. My work spans frontend architecture, distributed systems, and AI applications — always with a focus on clarity, performance, and craft.
            </p>
            <p className="about__para reveal-fade" data-delay="200">
              Whether designing systems that scale or interfaces that delight, I bring the same rigor: understand the problem deeply, then build something that lasts.
            </p>
          </div>

          <div className="about__stats" aria-label="Statistics">
            {stats.map((s, i) => (
              <StatCard key={s.label} target={s.target} suffix={s.suffix} label={s.label} delay={i * 100} />
            ))}
          </div>
        </div>

        <div className="about__tags reveal-fade" data-delay="300" aria-label="Areas of focus">
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
