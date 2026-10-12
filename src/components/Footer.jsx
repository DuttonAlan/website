import { profile, links } from '../content.js'
import { Container } from './ui.jsx'

export default function Footer() {
  return (
    <footer>
      <Container className="py-16">
        <p className="text-2xl font-semibold tracking-tight">
          Thanks for stopping by<span className="text-accent">.</span>
        </p>
        <p className="mt-2 text-muted">
          Say hi on{' '}
          <a
            href={links[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
          >
            {links[0].label}
          </a>
          .
        </p>
      </Container>
      <Container className="flex flex-col gap-4 border-t border-line py-6 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </span>
        <div className="flex gap-6">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              {link.label}
            </a>
          ))}
          <a
            href={`https://github.com/${profile.github}/website`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            Source
          </a>
        </div>
      </Container>
    </footer>
  )
}
