import { projects } from '../content.js'
import { useRepo, timeAgo } from '../lib/github.js'
import { Section } from './ui.jsx'

export default function Projects() {
  return (
    <Section id="projects" index="02" label="Projects" title="What I'm building.">
      <div className="grid gap-6">
        {projects.map((project, i) => (
          <Project key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  )
}

function Project({ project, index }) {
  const repo = useRepo(project.repo)

  return (
    // gap-px over a line-coloured background draws shared 1px borders
    <article className="grid gap-px border border-line bg-line md:grid-cols-[3fr_2fr]">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col bg-bg p-6 transition-colors hover:bg-subtle sm:p-10"
      >
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
          <span>{String(index + 1).padStart(2, '0')}</span>
          {project.status && (
            <span className="inline-flex items-center gap-2 border border-line px-2 py-1">
              <span className="size-1.5 bg-accent" />
              {project.status}
            </span>
          )}
          {repo && <span>★ {repo.stars}</span>}
          {repo && <span>Updated {timeAgo(repo.pushedAt)}</span>}
        </div>
        <h3 className="mt-10 text-3xl font-semibold tracking-tight">
          {project.title}{' '}
          <span className="inline-block text-xl text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
            ↗
          </span>
        </h3>
        {project.tagline && <p className="mt-1 font-mono text-sm text-accent">{project.tagline}</p>}
        <p className="mt-4 max-w-lg leading-relaxed text-muted">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-8">
          {project.tags.map((tag) => (
            <span key={tag} className="border border-line px-2 py-1 font-mono text-[11px] text-muted">
              {tag}
            </span>
          ))}
        </div>
      </a>

      <div className="flex flex-col gap-8 bg-bg p-6 sm:p-10">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Features</p>
          <ul className="mt-3 border-t border-line">
            {project.features.map((feature) => (
              <li key={feature} className="border-b border-line py-2.5 text-sm">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {repo?.commits.length > 0 && (
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Recent commits</p>
            <ul className="mt-3 border-t border-line">
              {repo.commits.map((commit) => (
                <li key={commit.url} className="border-b border-line">
                  <a
                    href={commit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-baseline justify-between gap-4 py-2.5 text-sm transition-colors hover:text-accent"
                  >
                    <span className="truncate font-mono text-xs">{commit.message}</span>
                    <span className="shrink-0 font-mono text-[11px] text-muted">{timeAgo(commit.date)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {repo?.languages.length > 0 && (
          <div>
            <div className="flex h-1.5 gap-px">
              {repo.languages.map((lang, i) => (
                <span
                  key={lang.name}
                  className={i === 0 ? 'bg-accent' : 'bg-muted/50'}
                  style={{ width: `${lang.share * 100}%` }}
                />
              ))}
            </div>
            <p className="mt-2 font-mono text-[11px] text-muted">
              {repo.languages
                .filter((lang) => lang.share >= 0.001)
                .map((lang) => `${lang.name} ${(lang.share * 100).toFixed(1)}%`)
                .join(' · ')}
            </p>
          </div>
        )}
      </div>
    </article>
  )
}
