import { useEffect, useState } from 'react'

const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

function currentTheme() {
  return document.documentElement.dataset.theme ?? (darkQuery.matches ? 'dark' : 'light')
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(currentTheme)

  // Keep in sync with the system setting until the user picks a theme.
  useEffect(() => {
    const onChange = () => setTheme(currentTheme())
    darkQuery.addEventListener('change', onChange)
    return () => darkQuery.removeEventListener('change', onChange)
  }, [])

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage can be blocked (e.g. private mode); the toggle still works for this visit.
    }
    setTheme(next)
  }

  return (
    <button
      className="grid size-9 place-items-center border border-line transition-colors hover:border-ink"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggle}
    >
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.75">
        {theme === 'dark' ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </>
        ) : (
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        )}
      </svg>
    </button>
  )
}
