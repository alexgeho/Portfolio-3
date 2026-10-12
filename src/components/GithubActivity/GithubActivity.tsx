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

  // Group days into weeks (Sunday first, like GitHub); the first week is padded
  const offset = new Date(data.days[0].date + 'T00:00:00Z').getUTCDay()
  const cells: (Day | null)[] = [...Array(offset).fill(null), ...data.days]
  const weeks: (Day | null)[][] = []
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7))

  // Month label on the first week that starts a new month
  const monthFmt = new Intl.DateTimeFormat(dict.locale, { month: 'short', timeZone: 'UTC' })
  let prevMonth = -1
  const labels = weeks.map((week) => {
    const first = week.find(Boolean)!
    const date = new Date(first.date + 'T00:00:00Z')
    if (date.getUTCMonth() === prevMonth) return ''
    prevMonth = date.getUTCMonth()
    return monthFmt.format(date).replace('.', '')
  })

  // Phones show only the latest weeks so the grid fits without scrolling
  const mobileWeeks = 22

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
          <span className="github-card__arrow" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </span>
          <div className="github-card__grid" role="img" aria-label={`${data.total} ${dict.contributions}`}>
            {weeks.map((week, w) => (
              <div key={w} className={`github-card__week${w < weeks.length - mobileWeeks ? ' github-card__week--old' : ''}`}>
                <span className="github-card__month">{w > 0 && w < weeks.length - 1 ? labels[w] : ''}</span>
                {week.map((d, i) =>
                  d ? (
                    <span key={d.date} className={`github-card__cell github-card__cell--l${d.level}`} title={`${d.date}: ${d.count}`} />
                  ) : (
                    <span key={`pad-${i}`} className="github-card__cell github-card__cell--pad" />
                  )
                )}
              </div>
            ))}
          </div>
        </a>
      </div>
    </section>
  )
}
