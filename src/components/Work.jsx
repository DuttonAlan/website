import { projects } from '../content.js'
import { Section } from './ui.jsx'

export default function Work() {
  return (
    <Section id="work" index="02" label="Work" title="What I'm building.">
      {/* gap-px over a line-coloured background draws shared 1px borders */}
      <div className="grid gap-px border border-line bg-line">
        {projects.map((project, i) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid gap-10 bg-bg p-6 transition-colors hover:bg-subtle sm:p-10 md:grid-cols-[3fr_2fr]"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-4 font-mono text-xs text-muted">
                <span>{String(i + 1).padStart(2, '0')}</span>
                {project.status && (
                  <span className="inline-flex items-center gap-2 border border-line px-2 py-1">
                    <span className="size-1.5 bg-accent" />
                    {project.status}
                  </span>
                )}
              </div>
              <h3 className="mt-10 text-3xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                {project.title} <span className="text-xl text-muted group-hover:text-accent">↗</span>
              </h3>
              <p className="mt-3 max-w-lg leading-relaxed text-muted">{project.description}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="border border-line px-2 py-1 font-mono text-[11px] text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {project.features && (
              <ul className="self-end border-t border-line">
                {project.features.map((feature) => (
                  <li key={feature} className="border-b border-line py-3 text-sm">
                    {feature}
                  </li>
                ))}
              </ul>
            )}
          </a>
        ))}
      </div>
    </Section>
  )
}
