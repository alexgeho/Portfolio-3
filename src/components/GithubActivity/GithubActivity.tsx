import './GithubActivity.scss'
import type { Dict } from '@/i18n/dictionaries'

type Day = { date: string; count: number; level: number }

// Fetched at build time; the deploy workflow rebuilds daily to keep it fresh
async function getContributions(): Promise<{ total: number; days: Day[] } | null> {
  try {
    const res = await fetch('https://github-contributions-api.jogruber.de/v4/alexgeho?y=last', { cache: 'force-cache' })
    if (!res.ok) return null
    const data = await res.json()
    return { total: data.total.lastYear, days: data.contributions }
  } catch {
    return null
  }
}

export default async function GithubActivity({ dict }: { dict: Dict['github'] }) {
  const data = await getContributions()
  if (!data) return null

  // Pad the first week so rows line up with weekdays (Sunday first, like GitHub)
  const offset = new Date(data.days[0].date + 'T00:00:00Z').getUTCDay()

  return (
    <section className="github-activity" id="github">
      <div className="container">
        <a className="github-card" href="https://github.com/alexgeho" target="_blank" rel="noreferrer">
          <div className="github-card__header">
            <span className="github-card__label">GitHub</span>
            <h2 className="github-card__title">
              {data.total.toLocaleString(dict.locale)} {dict.contributions}
            </h2>
          </div>
          <div className="github-card__scroll">
            <div className="github-card__grid" role="img" aria-label={`${data.total} ${dict.contributions}`}>
              {Array.from({ length: offset }, (_, i) => <span key={`pad-${i}`} className="github-card__cell github-card__cell--pad" />)}
              {data.days.map((d) => (
                <span key={d.date} className={`github-card__cell github-card__cell--l${d.level}`} title={`${d.date}: ${d.count}`} />
              ))}
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
