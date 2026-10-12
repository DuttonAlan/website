import { useEffect, useState } from 'react'
import { profile, links, now } from '../content.js'
import { Button, Container } from './ui.jsx'

function useLocalTime(timeZone) {
  const format = () =>
    new Intl.DateTimeFormat('en-GB', { timeZone, hour: '2-digit', minute: '2-digit' }).format(new Date())
  const [time, setTime] = useState(format)

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 15_000)
    return () => clearInterval(id)
  }, [timeZone])

  return time
}

export default function Hero() {
  const time = useLocalTime(profile.timeZone)

  return (
    <section className="border-b border-line">
      <Container className="pt-24 pb-16 sm:pt-32">
        <p className="inline-flex items-center gap-2 border border-line px-3 py-1.5 font-mono text-xs text-muted">
          <span className="size-1.5 bg-accent" />
          {profile.location} · {time} local time
        </p>
        <h1 className="mt-8 text-5xl font-semibold leading-[1.05] tracking-tighter sm:text-7xl">
          Hi, I'm {profile.firstName}
          <span className="text-accent">.</span>
          <br />
          <span className="text-muted">I build things with code.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{profile.intro}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="#work">
            See what I'm building <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Button>
          {links.map((link) => (
            <Button key={link.label} href={link.href} variant="secondary" external>
              {link.label} ↗
            </Button>
          ))}
        </div>

        {/* "Now" strip */}
        <dl className="mt-20 grid gap-px border border-line bg-line sm:grid-cols-3">
          {now.map((item) => {
            const Value = item.href ? 'a' : 'span'
            return (
              <div key={item.label} className="bg-bg px-5 py-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">{item.label}</dt>
                <dd className="mt-1 font-medium">
                  <Value href={item.href} className={item.href ? 'transition-colors hover:text-accent' : undefined}>
                    {item.value}
                  </Value>
                </dd>
              </div>
            )
          })}
        </dl>
      </Container>
    </section>
  )
}
