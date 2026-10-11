import { profile, links } from '../content.js'
import { Button, Container } from './ui.jsx'

export default function Hero() {
  return (
    <section className="border-b border-line">
      <Container className="py-24 sm:py-36">
        <p className="inline-flex items-center gap-2 border border-line px-3 py-1.5 font-mono text-xs text-muted">
          <span className="size-1.5 bg-accent" />
          {profile.status}
        </p>
        <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tighter sm:text-7xl">
          {profile.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">{profile.intro}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="#work">See my work →</Button>
          {links.map((link) => (
            <Button key={link.label} href={link.href} variant="secondary" external>
              {link.label} ↗
            </Button>
          ))}
        </div>
      </Container>
    </section>
  )
}
