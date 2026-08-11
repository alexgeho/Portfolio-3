import './About.scss'
import type { Dict } from '@/i18n/dictionaries'

const cardImages = [
  '/assets/memoji-peace-mini-wite.png',
  '/assets/memoji-peace-mini.png',
]

export default function About({ dict }: { dict: Dict['about'] }) {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__header">
          <span className="section-label">{dict.label}</span>
          <h2 className="section-title">{dict.title}</h2>
        </div>

        <div className="about__grid">
          {dict.cards.map((info, index) => (
            <div className="about-card" key={index}>
              <p className="about-card__text" style={{ whiteSpace: 'pre-line' }}>{info.text}</p>
              <div className="about-card__author">
                <img src={cardImages[index]} alt={info.title} className="about-card__avatar" />
                <div className="about-card__info">
                  <h4 className="about-card__name">{info.title}</h4>
                  <span className="about-card__role">{info.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
