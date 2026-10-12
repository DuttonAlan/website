import { useState } from 'react'
import { profile } from '../content.js'
import { Container } from './ui.jsx'
import ThemeToggle from './ThemeToggle.jsx'

const items = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight">
          <span className="grid size-8 place-items-center bg-ink font-mono text-base font-semibold tracking-tight text-bg">
            {profile.initials}
          </span>
          {profile.name}
        </a>

        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 text-sm text-muted sm:flex">
            {items.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-2">
            <ThemeToggle />
            <button
              className="grid size-9 place-items-center border border-line sm:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.75">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {open && (
        <nav className="border-t border-line bg-bg sm:hidden">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line px-4 py-4 last:border-b-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
