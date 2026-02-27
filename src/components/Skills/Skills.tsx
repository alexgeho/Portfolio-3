import './Skills.scss'

const skillsData = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', desc: 'For building fast, interactive UIs', icon: '/assets_old/skills/techSkills/react.svg' },
      { name: 'TypeScript', desc: 'Typed JavaScript for safer code', icon: '/assets_old/skills/techSkills/typescript.svg' },
      { name: 'JavaScript', desc: 'Core web logic & DOM manipulation', icon: '/assets_old/skills/techSkills/js.svg' },
      { name: 'HTML5', desc: 'Semantic markup & accessibility', icon: '/assets_old/skills/techSkills/html.svg' },
      { name: 'CSS3 / SCSS', desc: 'Responsive styling & layouts', icon: '/assets_old/skills/techSkills/css.svg' }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', desc: 'JavaScript runtime for servers', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'NestJS', desc: 'Scalable server-side applications', icon: '/assets_old/skills/techSkills/nestjs.svg' },
      { name: 'Express', desc: 'Minimal framework for APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
      { name: 'MongoDB', desc: 'Flexible NoSQL database system', icon: '/assets_old/skills/techSkills/mongodb.svg' }
    ]
  },
  {
    category: 'Tools & DevOps',
    items: [
      /* Вот здесь мы заменили иконку GitHub на темную версию из CDN */
      { name: 'Git & GitHub', desc: 'Version control and collaboration', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
      { name: 'Docker', desc: 'Containers for isolated environments', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Postman', desc: 'API testing and documentation', icon: '/assets_old/skills/techSkills/postman.svg' }
    ]
  },
  {
    category: 'Design & Workflow',
    items: [
      { name: 'Figma', desc: 'Vector graphics and prototyping', icon: '/assets_old/skills/techSkills/figma.svg' },
      { name: 'Notion', desc: 'Planning and docs in one place', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg' }
    ]
  }
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills__header">
          <span className="section-label">TECH STACK</span>
          <h2 className="section-title">What I Use</h2>
        </div>

        <div className="skills__grid">
          {skillsData.map((block, index) => (
            <div className="skill-block" key={index}>
              <h3 className="skill-block__title">{block.category}</h3>
              <div className="skill-block__list">
                {block.items.map((item, i) => (
                  <div className="skill-item" key={i}>
                    <img src={item.icon} alt={item.name} className="skill-item__icon" />
                    <div className="skill-item__info">
                      <h4 className="skill-item__name">{item.name}</h4>
                      <p className="skill-item__desc">{item.desc}</p>
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