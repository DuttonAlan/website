import { about } from '../content.js'
import { Section } from './ui.jsx'

export default function About() {
  return (
    <Section id="about" index="01" label="About" title="A bit about me.">
      <div className="grid gap-12 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-xl leading-relaxed">{about.lead}</p>
          <p className="mt-6 leading-relaxed text-muted">{about.body}</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Tools I use</p>
          <ul className="mt-4 border-t border-line">
            {about.skills.map((skill) => (
              <li key={skill} className="border-b border-line py-3 text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
