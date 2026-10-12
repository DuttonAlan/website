import { about } from '../content.js'
import { Section } from './ui.jsx'

export default function About() {
  return (
    <Section id="about" index="01" label="About" title="A bit about me.">
      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <div>
          <p className="text-2xl font-medium tracking-tight">{about.lead}</p>
          {about.body.map((paragraph) => (
            <p key={paragraph} className="mt-5 max-w-xl leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Tools I use</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {about.skills.map((skill) => (
              <li
                key={skill}
                className="border border-line px-3 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
