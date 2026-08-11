import './Experience.scss'
import type { Dict } from '@/i18n/dictionaries'

export default function Experience({ dict }: { dict: Dict['experience'] }) {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="experience__header">
          <span className="section-label">{dict.label}</span>
          <h2 className="section-title">{dict.title}</h2>
        </div>

        <div className="experience__list">
          {dict.items.map((item, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-item__main">
                <h3 className="experience-item__role">{item.role}</h3>
                <span className="experience-item__company">{item.company}</span>
              </div>
              <div className="experience-item__date">{item.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
