import './Achievements.scss'
import type { Dict } from '@/i18n/dictionaries'

export default function Achievements({ dict }: { dict: Dict['achievements'] }) {
  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <div className="achievements__header">
          <span className="section-label">{dict.label}</span>
          <h2 className="section-title">{dict.title}</h2>
        </div>

        <div className="bento-stack">

          <div className="bento-card bento-card--img-left">
            <img src="/assets/achievements/jag-photo.png" alt="" className="bento-card__img" />
            <div className="bento-card__content">
              <h3>{dict.cards[0].value}</h3>
              <p>{dict.cards[0].caption}</p>
            </div>
          </div>

          <div className="bento-card bento-card--img-right">
            <div className="bento-card__content">
              <h3>{dict.cards[1].value}</h3>
              <p>{dict.cards[1].caption}</p>
            </div>
            <img src="/assets/achievements/jag-photo.png" alt="" className="bento-card__img" />
          </div>

          <div className="bento-card bento-card--img-left">
            <img src="/assets/achievements/jag-photo.png" alt="" className="bento-card__img" />
            <div className="bento-card__content">
              <h3>{dict.cards[2].value}</h3>
              <p>{dict.cards[2].caption}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
