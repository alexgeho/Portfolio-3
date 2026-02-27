import './Skills.scss'
import react from '../../assets/skills/react.svg';
import typeScript from '../../assets/skills/typescript.svg';
import js from '../../assets/skills/js.svg';
import html from '../../assets/skills/html.svg';
import css from '../../assets/skills/css.svg';
import nodeJs from '../../assets/skills/nodejs.svg';
import nestJs from '../../assets/skills/nestjs.svg';
import mongoDb from '../../assets/skills/mongodb.svg';
import express from '../../assets/skills/expressjs.svg';
import git from '../../assets/skills/git-hub.svg';
import figma from '../../assets/skills/figma.svg';
import docker from '../../assets/skills/docker.svg';
import postman from '../../assets/skills/postman.svg';
import notion from '../../assets/skills/notion.svg';


const skillsData = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', desc: 'For building fast, interactive UIs', icon: react},
      { name: 'TypeScript', desc: 'Typed JavaScript for safer code', icon: typeScript },
      { name: 'JavaScript', desc: 'Core web logic & DOM manipulation', icon: js },
      { name: 'HTML5', desc: 'Semantic markup & accessibility', icon: html },
      { name: 'CSS3 / SCSS', desc: 'Responsive styling & layouts', icon: css }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', desc: 'JavaScript runtime for servers', icon: nodeJs },
      { name: 'NestJS', desc: 'Scalable server-side applications', icon: nestJs },
      { name: 'Express', desc: 'Minimal framework for APIs', icon: express },
      { name: 'MongoDB', desc: 'Flexible NoSQL database system', icon: mongoDb }
    ]
  },
  {
    category: 'Tools & DevOps',
    items: [
      /* Вот здесь мы заменили иконку GitHub на темную версию из CDN */
      { name: 'Git & GitHub', desc: 'Version control and collaboration', icon: git },
      { name: 'Docker', desc: 'Containers for isolated environments', icon: docker },
      { name: 'Postman', desc: 'API testing and documentation', icon: postman }
    ]
  },
  {
    category: 'Design & Workflow',
    items: [
      { name: 'Figma', desc: 'Vector graphics and prototyping', icon: figma },
      { name: 'Notion', desc: 'Planning and docs in one place', icon: notion }
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