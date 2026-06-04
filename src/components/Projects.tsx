import { ProjectCard } from './ProjectCard'
import { projects } from '../data/portfolio'

const projectIcons = [
  <svg key="chaturang" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="13" y="2" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="2" y="13" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="13" y="13" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>,
  <svg key="empath" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 12s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 9h.01M15 9h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  <svg key="kafka" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 12h3M14 12h3M12 7v3M12 14v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
]

export function Projects() {
  return (
    <section className="projects" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-label reveal-fade">
          <span>Featured Work</span>
        </div>
        <h2 className="section-heading reveal-slide" id="projects-heading">
          Selected projects
        </h2>
        <p className="section-sub reveal-fade" data-delay="100">
          A handful of things I've built with care.
        </p>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} delay={i * 120} icon={projectIcons[i]} />
          ))}
        </div>

        <div className="projects__cta reveal-fade" data-delay="400">
          <a href="#" className="btn btn--outline">
            View all projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
