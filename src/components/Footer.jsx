import { profile, links } from '../content.js'
import { Container } from './ui.jsx'

export default function Footer() {
  return (
    <footer>
      <Container className="flex flex-col gap-4 py-8 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </span>
        <div className="flex gap-6">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}
