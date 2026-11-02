import { Section } from './ui'
import { certifications } from '../content'

export default function Certifications() {
  return (
    <Section id="certifications" title="Training & certificates">
      <ul className="divide-y divide-line overflow-hidden rounded-lg border border-line bg-card">
        {certifications.map((certification) => (
          <li key={certification.name} className="flex items-center justify-between gap-4 px-4 py-3">
            <div>
              <p className="text-sm leading-snug font-medium">{certification.name}</p>
              {certification.issuer && <p className="mt-0.5 font-mono text-xs text-muted">{certification.issuer}</p>}
            </div>
            {certification.href ? (
              <a
                href={certification.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 font-mono text-xs text-accent hover:underline"
              >
                Verify
              </a>
            ) : (
              <span className="shrink-0 font-mono text-xs text-muted">In progress</span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}
