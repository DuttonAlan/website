import { experience } from '../content.js'
import { Section } from './ui.jsx'

export default function Experience() {
  return (
    <Section id="experience" index="03" label="Experience" title="Where I work.">
      <ol className="border-t border-ink">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.role}`}
            className="grid gap-2 border-b border-line py-6 sm:grid-cols-[180px_1fr] sm:gap-8"
          >
            <span className="font-mono text-sm text-muted">{job.period ?? 'Now'}</span>
            <div>
              <h3 className="font-semibold">
                {job.role} <span className="font-normal text-muted">· {job.company}</span>
              </h3>
              {job.description && <p className="mt-1 text-sm leading-relaxed text-muted">{job.description}</p>}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
