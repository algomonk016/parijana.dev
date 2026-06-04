import { useRef } from 'react'
import { useCardTilt } from '../hooks'
import { Reveal } from './Reveal'
import type { Project } from '../data/portfolio'

interface ProjectCardProps extends Project {
  delay: number
  icon: React.ReactNode
}

export function ProjectCard({ title, description, tag, stack, href, delay, icon }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  useCardTilt(cardRef)

  return (
    <Reveal type="scale" delay={delay}>
      <article className="project-card" ref={cardRef}>
        <div className="project-card__inner">
          <div className="project-card__header">
            <div className="project-card__icon" aria-hidden="true">
              {icon}
            </div>
            <div className="project-card__meta">
              <span className="project-card__tag">{tag}</span>
            </div>
          </div>
          <h3 className="project-card__title">{title}</h3>
          <p className="project-card__desc">{description}</p>
          <div className="project-card__footer">
            <div className="project-card__stack">
              {stack.map(s => <span key={s}>{s}</span>)}
            </div>
            <a href={href} className="project-card__link" aria-label={`View ${title} project`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 13L13 3M13 3H7M13 3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
        <div className="project-card__glow" aria-hidden="true" />
      </article>
    </Reveal>
  )
}
