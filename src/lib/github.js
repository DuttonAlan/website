import { useEffect, useState } from 'react'

const API = 'https://api.github.com'

// Live repo stats + recent commits. Returns null until loaded, or if the
// request fails (e.g. the 60 req/hour unauthenticated rate limit) — callers
// simply render nothing in that case.
export function useRepo(repo) {
  const [data, setData] = useState(null)

  useEffect(() => {
    let cancelled = false

    Promise.all([
      fetch(`${API}/repos/${repo}`).then(ok),
      fetch(`${API}/repos/${repo}/languages`).then(ok),
      fetch(`${API}/repos/${repo}/commits?per_page=20`).then(ok),
    ])
      .then(([info, languages, commits]) => {
        if (cancelled) return
        setData({
          stars: info.stargazers_count,
          pushedAt: info.pushed_at,
          languages: toShares(languages),
          commits: commits
            .filter((c) => c.parents.length < 2) // skip merge commits
            .slice(0, 3)
            .map((c) => ({
              message: c.commit.message.split('\n')[0],
              date: c.commit.author.date,
              url: c.html_url,
            })),
        })
      })
      .catch(() => {})

    return () => {
      cancelled = true
    }
  }, [repo])

  return data
}

function ok(res) {
  if (!res.ok) throw new Error(res.statusText)
  return res.json()
}

function toShares(languages) {
  const total = Object.values(languages).reduce((a, b) => a + b, 0)
  return Object.entries(languages).map(([name, bytes]) => ({ name, share: bytes / total }))
}

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
const units = [
  ['year', 31536000],
  ['month', 2592000],
  ['week', 604800],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
]

export function timeAgo(date) {
  const seconds = (new Date(date) - Date.now()) / 1000
  for (const [unit, size] of units) {
    if (Math.abs(seconds) >= size) return rtf.format(Math.round(seconds / size), unit)
  }
  return 'just now'
}
