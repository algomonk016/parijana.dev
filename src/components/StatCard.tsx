import { useRef } from 'react'
import { useCounters } from '../hooks'
import { Reveal } from './Reveal'

interface StatCardProps {
  target: number
  suffix: string
  label: string
  delay: number
}

export function StatCard({ target, suffix, label, delay }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  useCounters(ref)

  return (
    <Reveal type="scale" delay={delay}>
      <div className="stat-card" ref={ref}>
        <span>
          <span className="stat-card__number" data-target={target}>0</span>
          <span className="stat-card__suffix">{suffix}</span>
        </span>
        <span className="stat-card__label">{label}</span>
      </div>
    </Reveal>
  )
}
