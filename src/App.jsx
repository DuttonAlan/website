import { profile, projects, footer } from './content.js'

const external = { target: '_blank', rel: 'noopener noreferrer' }

export default function App() {
  return (
    <>
      <div className="grid-bg" aria-hidden="true" />
      <main className="container">
        <h1>
          Hi, I'm {profile.firstName}{' '}
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </h1>

        <p>
          I'm a {profile.role} based in {profile.location}.
        </p>

        <p>
          I'm building{' '}
          {projects.map((project, i) => (
            <span key={project.title}>
              {i > 0 && (i === projects.length - 1 ? ' and ' : ', ')}
              <a href={project.href} {...external} title={project.tagline}>
                {project.title}
              </a>
            </span>
          ))}
          .
        </p>

        <p>
          Both are open source. You can follow along{' '}
          <a href={`https://github.com/${profile.github}`} {...external}>
            on GitHub
          </a>
          .
        </p>

        <footer className="footer">
          {footer.map((line) => (
            <p key={line.href}>
              {line.question}{' '}
              <a href={line.href} {...external}>
                Click here.
              </a>
            </p>
          ))}
        </footer>
      </main>
    </>
  )
}
