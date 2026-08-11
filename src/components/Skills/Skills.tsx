import './Skills.scss'
import type { Dict } from '@/i18n/dictionaries'

const skillsData = [
  {
    items: [
      { name: 'React', icon: '/assets/skills/react.svg' },
      { name: 'TypeScript', icon: '/assets/skills/typescript.svg' },
      { name: 'JavaScript', icon: '/assets/skills/js.svg' },
      { name: 'HTML5', icon: '/assets/skills/html.svg' },
      { name: 'CSS3 / SCSS', icon: '/assets/skills/css.svg' },
    ],
  },
  {
    items: [
      { name: 'Node.js', icon: '/assets/skills/nodejs.svg' },
      { name: 'NestJS', icon: '/assets/skills/nestjs.svg' },
      { name: 'Express', icon: '/assets/skills/expressjs.svg' },
      { name: 'MongoDB', icon: '/assets/skills/mongodb.svg' },
    ],
  },
  {
    items: [
      { name: 'Git & GitHub', icon: '/assets/skills/git-hub.svg' },
      { name: 'Docker', icon: '/assets/skills/docker.svg' },
      { name: 'Postman', icon: '/assets/skills/postman.svg' },
    ],
  },
  {
    items: [
      { name: 'Figma', icon: '/assets/skills/figma.svg' },
      { name: 'Notion', icon: '/assets/skills/notion.svg' },
    ],
  },
]

export default function Skills({ dict }: { dict: Dict['skills'] }) {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills__header">
          <span className="section-label">{dict.label}</span>
          <h2 className="section-title">{dict.title}</h2>
        </div>

        <div className="skills__grid">
          {skillsData.map((block, index) => (
            <div className="skill-block" key={index}>
              <h3 className="skill-block__title">{dict.categories[index]}</h3>
              <div className="skill-block__list">
                {block.items.map((item, i) => (
                  <div className="skill-item" key={i}>
                    <img src={item.icon} alt={item.name} className="skill-item__icon" />
                    <div className="skill-item__info">
                      <h4 className="skill-item__name">{item.name}</h4>
                      <p className="skill-item__desc">{dict.descriptions[item.name]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
