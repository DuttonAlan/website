// Shared building blocks. Square corners throughout — never add `rounded-*`.

export function Container({ className = '', children }) {
  return <div className={`mx-auto max-w-5xl px-4 sm:px-6 ${className}`}>{children}</div>
}

export function Label({ children }) {
  return <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">{children}</p>
}

export function Section({ id, index, label, title, children }) {
  return (
    <section id={id} className="border-b border-line">
      <Container className="py-20 sm:py-28">
        <Label>
          {index} <span className="text-line">/</span> {label}
        </Label>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  )
}

const buttonStyles = {
  primary: 'bg-ink text-bg border-ink hover:bg-accent hover:border-accent',
  secondary: 'bg-bg text-ink border-line hover:border-ink',
}

export function Button({ href, variant = 'primary', external, children }) {
  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      className={`inline-flex h-11 items-center gap-2 border px-5 text-sm font-medium transition-colors ${buttonStyles[variant]}`}
    >
      {children}
    </a>
  )
}
