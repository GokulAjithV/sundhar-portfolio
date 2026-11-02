import { useState } from 'react'
import { Button } from './ui'
import { hero, links, stats } from '../content'

function Portrait() {
  const [missing, setMissing] = useState(false)
  const frame = 'size-24 shrink-0 rounded-lg border border-line sm:size-36'

  if (missing) {
    return (
      <div
        aria-hidden="true"
        className={`${frame} flex items-center justify-center bg-accent-soft font-mono text-2xl font-medium text-accent sm:text-4xl`}
      >
        {hero.initials}
      </div>
    )
  }

  return <img src={hero.photo} alt={hero.name} onError={() => setMissing(true)} className={`${frame} object-cover`} />
}

export default function Hero() {
  return (
    <section id="top" className="scroll-mt-14 py-12 sm:py-20">
      <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
        <div>
          <p className="font-mono text-sm text-accent">
            {hero.title} · {hero.location}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{hero.name}</h1>
          <div className="mt-5 max-w-2xl space-y-3 leading-relaxed text-muted">
            {hero.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <Portrait />
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="#experience" variant="primary">
          View experience
        </Button>
        <Button href={links.resume}>Resume</Button>
        <Button href={links.presentation}>Work presentation</Button>
        <Button href={links.linkedin}>LinkedIn</Button>
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card p-4">
            <dd className="font-mono text-xl font-medium text-accent sm:text-2xl">{stat.value}</dd>
            <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  )
}
