import type { ReactNode } from 'react'

interface TimelineStepProps {
  stepNumber: string
  title: string
  description: string
  icon: ReactNode
  isLast: boolean
  stepIndex: number
}

export function TimelineStep({ stepNumber, title, description, icon, isLast, stepIndex }: TimelineStepProps) {
  return (
    <div className="timeline__step" data-step={stepIndex} role="listitem">
      <div className="timeline__step-content">
        <div className="timeline__step-icon" aria-hidden="true">
          {icon}
        </div>
        <div className="timeline__step-number" aria-hidden="true">{stepNumber}</div>
        <h3 className="timeline__step-title">{title}</h3>
        <p className="timeline__step-desc">{description}</p>
      </div>
      <div className={`timeline__connector${isLast ? ' timeline__connector--last' : ''}`} aria-hidden="true" />
    </div>
  )
}
