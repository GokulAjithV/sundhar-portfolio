import { BulletList, Section } from './ui'
import { achievements, education, languages } from '../content'

export default function Education() {
  return (
    <Section id="education" title="Education & achievements">
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <h3 className="font-semibold">{education.degree}</h3>
          <p className="mt-1 text-sm text-muted">{education.level}</p>
          <p className="mt-1 text-sm text-muted">{education.school}</p>
          <p className="mt-1 font-mono text-xs text-muted">{education.details}</p>

          <h3 className="mt-8 mb-2 text-sm font-semibold">Languages</h3>
          <ul className="space-y-1 text-sm">
            {languages.map((language) => (
              <li key={language.name}>
                {language.name} <span className="text-muted">· {language.level}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Achievements</h3>
          <BulletList items={achievements} />
        </div>
      </div>
    </Section>
  )
}
