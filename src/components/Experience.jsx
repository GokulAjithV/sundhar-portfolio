import { BulletList, Section } from './ui'
import { experience } from '../content'

function BuildStages({ stages }) {
  return (
    <ol aria-label="Build stages" className="mb-4 flex flex-wrap items-center">
      {stages.map((stage, index) => (
        <li key={stage} className="flex items-center">
          {index > 0 && <span aria-hidden="true" className="h-px w-4 bg-accent" />}
          <span className="rounded bg-accent-soft px-2 py-1 font-mono text-xs text-accent">{stage}</span>
        </li>
      ))}
    </ol>
  )
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="sm:ml-20">
        {experience.map((job, index) => (
          <article
            key={job.company}
            className={`relative border-l-2 border-line pl-6 ${index < experience.length - 1 ? 'pb-10' : ''}`}
          >
            {/* The node on the timeline, drawn like a via on a board. */}
            <span
              aria-hidden="true"
              className="absolute top-1 -left-2 size-3.5 rounded-full border-2 border-accent bg-paper"
            />
            <p className="mb-1 font-mono text-sm text-accent sm:absolute sm:top-0 sm:-left-20 sm:mb-0">{job.year}</p>
            <h3 className="text-lg font-semibold">{job.role}</h3>
            <p className="mt-1 text-sm text-muted">
              {job.company} · {job.location}
            </p>
            <p className="mt-1 mb-4 font-mono text-xs text-muted">
              {job.department} · {job.product}
            </p>
            {job.stages && <BuildStages stages={job.stages} />}
            <BulletList items={job.bullets} />
          </article>
        ))}
      </div>
    </Section>
  )
}
