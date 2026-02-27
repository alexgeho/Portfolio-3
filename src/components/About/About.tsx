import './About.scss'
import avtar1 from '../../assets/memoji-peace-mini-wite.png';
import avtar2 from '../../assets/memoji-peace-mini.png';

const infoData = [
  {
    id: 1,
    title: 'Open for Cooperation',
    role: 'Fullstack Developer',
    text: 'Interested in working together? I’m available to discuss backend, frontend, and full-stack roles, as well as freelance projects. My focus is always on code quality, scalable architecture, and finding the right solution for complex problems.',
    image: avtar1
  },
  {
    id: 2,
    title: 'Technical Focus',
    role: 'Core Principles',
    text: 'This portfolio demonstrates my commitment to modern web standards:\n- Semantic & Accessible HTML\n- Modular CSS/SCSS Architecture\n- Clean, Maintainable TypeScript Code\n- User-Centric UI/UX Design',
    image: avtar2
  }
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__header">
          <span className="section-label">INFO</span>
          <h2 className="section-title">General Information</h2>
        </div>

        <div className="about__grid">
          {infoData.map((info) => (
            <div className="about-card" key={info.id}>
              <p className="about-card__text" style={{ whiteSpace: 'pre-line' }}>{info.text}</p>
              <div className="about-card__author">
                <img src={info.image} alt={info.title} className="about-card__avatar" />
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