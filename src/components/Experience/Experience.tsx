import './Experience.scss'

const expertiseData = [
  {
    id: 1,
    role: 'Software Architecture',
    company: 'SOLID principles, Clean Architecture, CQRS, Separation of concerns, Dependency Injection',
    date: 'Scalable Design'
  },
  {
    id: 2,
    role: 'Backend Engineering',
    company: 'REST API design, JWT Auth, DTO & input validation, Repository pattern, Guards, Pipes, Interceptors',
    date: 'Secure & Robust'
  },
  {
    id: 3,
    role: 'Frontend Interfaces',
    company: 'Component-based architecture, UI / logic / data separation, Reusable UI components',
    date: 'Interactive'
  },
  {
    id: 4,
    role: 'Web Standards & Quality',
    company: 'Semantic HTML & accessibility (a11y), Error handling & logging, Basic performance considerations',
    date: 'High Quality'
  }
]

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="experience__header">
          <span className="section-label">EXPERTISE</span>
          <h2 className="section-title">Deep Dive Skills</h2>
        </div>

        <div className="experience__list">
          {expertiseData.map((item) => (
            <div className="experience-item" key={item.id}>
              <div className="experience-item__main">
                <h3 className="experience-item__role">{item.role}</h3>
                <span className="experience-item__company">{item.company}</span>
              </div>
              <div className="experience-item__date">{item.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}