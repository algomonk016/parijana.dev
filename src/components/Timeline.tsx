import { useRef } from 'react'
import { useTimelineSteps } from '../hooks'
import { TimelineStep } from './TimelineStep'
import { timelineSteps } from '../data/portfolio'

const stepIcons = [
  <svg key="1" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 3a7 7 0 100 14A7 7 0 0010 3zm0 2a5 5 0 110 10A5 5 0 0110 5zm-1 2v4l3 1.5-.75 1.3L8 12V7h1z" fill="currentColor" />
  </svg>,
  <svg key="2" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5 4h10a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1zm2 3v6h6V7H7zm1 1h4v4H8V8z" fill="currentColor" />
  </svg>,
  <svg key="3" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm-1 4h2v2h-2V6zm0 3h2v5h-2V9z" fill="currentColor" />
  </svg>,
  <svg key="4" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 3l2.5 5 5.5.8-4 3.9.95 5.5L10 15.5l-4.95 2.7.95-5.5L2 8.8l5.5-.8L10 3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
  </svg>,
]

export function Timeline() {
  const trackRef = useRef<HTMLDivElement>(null)
  useTimelineSteps(trackRef)

  return (
    <section className="timeline" id="timeline" aria-labelledby="timeline-heading">
      <div className="container">
        <div className="section-label reveal-fade">
          <span>Process</span>
        </div>
        <h2 className="section-heading reveal-slide" id="timeline-heading">
          How I work
        </h2>

        <div className="timeline__track" ref={trackRef} role="list">
          {timelineSteps.map((step, i) => (
            <TimelineStep
              key={step.stepNumber}
              {...step}
              icon={stepIcons[i]}
              isLast={i === timelineSteps.length - 1}
              stepIndex={i + 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
