import { useState, useEffect } from 'react'
import './Projects.scss'

interface Project {
  id: number
  title: string
  description: string
  image: string
  link: string | null
  fullDescription?: string
  role?: string
  features?: string
  techStack?: string
  challenges?: string
  type?: string
  year?: string
  testimonial?: string
  testimonialAuthor?: string
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'ByggExp',
    description: 'Presentation website for a time tracking and project management platform with bold type and smooth navigation.',
    image: '/assets_old/projects/project1.png',
    link: 'https://alexgeho.github.io/ByggExp.se/',
    type: 'Product Website',
    year: '2023',
    testimonial: 'Smooth, stylish, and intuitive – exactly the kind of experience our users expect for project management.',
    testimonialAuthor: 'CEO, ByggExp',
    fullDescription: 'About the ByggExp. Time Tracking & Management Platform for Construction. ByggExp is a presentation website for a time tracking and project management application. The website introduces the product, allows users to register, log in to the admin area, and download the desktop application.',
    role: 'Full-stack development, UI and responsive layout, Authentication and admin panel, API and system architecture, Feature planning and customization.',
    features: 'Product presentation website, User registration and login pages, Admin dashboard interface, Application download section, Responsive layout for desktop and mobile.',
    techStack: 'React, SCSS.',
    challenges: 'Challenge: Keep the UI scalable for future product features. Solution: Modular SCSS structure and reusable UI components. Challenge: Clear separation between public pages and admin area. Solution: Dedicated layouts and consistent navigation logic.'
  },
  {
    id: 2,
    title: 'ByggExp Admin',
    description: 'Centralized admin panel for managing projects, tasks, teams, and tracking metrics.',
    image: '/assets_old/projects/project2.png',
    link: null,
    type: 'Admin Dashboard',
    year: '2023',
    testimonial: 'The new admin panel transformed how we track metrics. Fast, clean, and incredibly powerful to use daily.',
    testimonialAuthor: 'Operations Manager',
    fullDescription: 'Centralized admin panel for managing projects, tasks, teams, and tracking metrics. Built as an internal tool to oversee the entire ByggExp ecosystem.'
  },
  {
    id: 3,
    title: 'ByggExp App',
    description: 'Desktop application for time tracking, task execution, and complete project control system.',
    image: '/assets_old/projects/project3.png',
    link: null,
    type: 'Desktop App',
    year: '2023',
    testimonial: 'Time tracking has never been this seamless. The desktop app integrates flawlessly with our workflow.',
    testimonialAuthor: 'Project Lead',
    fullDescription: 'Desktop application meant for time tracking, task execution, and complete project control system. Directly connected to the main ByggExp infrastructure.'
  },
  {
    id: 4,
    title: 'AGRY AB',
    description: 'Webshop for prefabricated reinforcement elements with user auth, responsive UI, and admin dashboard.',
    image: '/assets_old/projects/project4.png',
    link: 'https://alexgeho.github.io/js-intro-inl-1-webshop/',
    type: 'E-Commerce',
    year: '2022',
    testimonial: 'A modern, robust webshop that handles complex reinforcement product configurations effortlessly.',
    testimonialAuthor: 'Sales Director, AGRY AB',
    fullDescription: 'About the AGRYs - Webbshop. Agry Shop is a web-based platform for selling prefabricated reinforcement products for foundation construction in Sweden.',
    role: 'Frontend development, UI layout and responsive design, Authentication flow (login / register UI), Admin panel structure, SCSS architecture.',
    features: 'Product presentation website, User registration and login pages, Admin dashboard interface, Application download section, Responsive layout for desktop and mobile.',
    techStack: 'HTML5, SCSS, React.',
    challenges: 'Challenge: Keep the UI scalable for future product features. Solution: Modular SCSS structure and reusable UI components. Challenge: Clear separation between public pages and admin area. Solution: Dedicated layouts and consistent navigation logic.'
  },
  {
    id: 5,
    title: 'Blogger Backend',
    description: 'Educational backend project focused on REST API development with NestJS and Clean Architecture.',
    image: '/assets_old/projects/project5.png',
    link: null,
    type: 'REST API',
    year: '2024',
    testimonial: 'Highly scalable backend architecture. Clean code principles made future feature additions a breeze.',
    testimonialAuthor: 'Tech Lead',
    fullDescription: 'Educational backend project focused on REST API development with NestJS.',
    techStack: 'NestJS, TypeScript, REST API'
  },
  {
    id: 6,
    title: 'Express Platform',
    description: 'Educational backend project built with Express and TypeScript focusing on RESTful principles.',
    image: '/assets_old/projects/project6.png',
    link: null,
    type: 'Backend System',
    year: '2024',
    testimonial: 'Solid foundation for content management. Fast response times and excellently typed with TypeScript.',
    testimonialAuthor: 'Frontend Developer',
    fullDescription: 'Educational backend project built with Express and TypeScript focusing on robust backend architecture and typing.',
    techStack: 'Express, TypeScript, Node.js'
  }
]

// Дублируем массив 3 раза, чтобы лента была бесконечной
const extendedProjects = [...projectsData, ...projectsData, ...projectsData]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentIndex, setCurrentIndex] = useState(projectsData.length)
  const [isAnimating, setIsAnimating] = useState(true)
  const [startX, setStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [hasDragged, setHasDragged] = useState(false)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }
  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true)
    setHasDragged(false)
    setStartX(e.clientX)
    setIsAnimating(false)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return
    const diff = e.clientX - startX
    setDragOffset(diff)
    if (Math.abs(diff) > 5) setHasDragged(true)
  }

  const onPointerUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    setIsAnimating(true)

    if (dragOffset > 50) setCurrentIndex((prev) => prev - 1)
    else if (dragOffset < -50) setCurrentIndex((prev) => prev + 1)
    
    setDragOffset(0)
    setTimeout(() => setHasDragged(false), 50)
  }

  const onTransitionEnd = () => {
    if (currentIndex <= 0) {
      setIsAnimating(false)
      setCurrentIndex(projectsData.length)
    } else if (currentIndex >= projectsData.length * 2) {
      setIsAnimating(false)
      setCurrentIndex(projectsData.length)
    }
  }

  const handleDotClick = (index: number) => {
    setIsAnimating(true)
    setCurrentIndex(projectsData.length + index)
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  const transformValue = `translateX(calc(${currentIndex} * (-100% / ${extendedProjects.length}) + ${dragOffset}px))`

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects__header">
          <span className="section-label">PROJECTS</span>
          <div className="projects__header-top">
            <h2 className="section-title">Latest Works</h2>
            <a href="https://github.com/alexgeho" target="_blank" rel="noreferrer" className="projects__btn-view">View GitHub</a>
          </div>
        </div>
      </div>

      <div 
        className="projects__carousel-container"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div 
          className="projects__carousel-track"
          style={{
            transform: transformValue,
            transition: isAnimating ? 'transform 0.4s ease-out' : 'none',
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {extendedProjects.map((project, index) => (
            <div className="project-slide" key={`${project.id}-${index}`}>
              <div className="project-banner-card">
                
                {/* Левая колонка с информацией */}
                <div className="project-banner-card__info">
                  
                  {/* Отзыв (Testimonial) наверху */}
                  <div className="project-testimonial-mini">
                    <p>"{project.testimonial}"</p>
                    <div className="author">
                      {/* Используем общую аватарку для красоты */}
                      <img src="/assets_old/hero/Jag%20Wite.png" alt="Author" />
                      <span>{project.testimonialAuthor}</span>
                    </div>
                  </div>

                  {/* Название, описание и кнопка внизу */}
                  <h3 className="project-banner-card__title">{project.title}</h3>
                  <p className="project-banner-card__desc">{project.description}</p>
                  <button 
                    onClick={() => {
                      if (!hasDragged) openModal(project)
                    }} 
                    className="project-banner-card__btn-black"
                  >
                    Read More
                  </button>
                </div>

                {/* Правая колонка с картинкой */}
                <div className="project-banner-card__img-wrapper">
                  <img src={project.image} alt={project.title} className="project-banner-card__img" draggable={false} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="projects__dots">
          {projectsData.map((_, index) => (
            <button 
              key={index} 
              className={`dot ${index === currentIndex % projectsData.length ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Модальное окно (Открытый проект) */}
      {selectedProject && (
        <div className="projects-modal-overlay" onClick={closeModal}>
          <div className="projects-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="projects-modal-close" onClick={closeModal}>✕</button>
            
            <div className="projects-modal-content">
              
              {/* Главное фото проекта */}
              <div className="projects-modal-hero">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>

              {/* Двухколоночная сетка данных */}
              <div className="projects-modal-layout">
                
                <div className="projects-modal-sidebar">
                  {selectedProject.type && (
                    <div className="spec">
                      <span>Type</span>
                      <p>{selectedProject.type}</p>
                    </div>
                  )}
                  {selectedProject.role && (
                    <div className="spec">
                      <span>Role</span>
                      <p>{selectedProject.role}</p>
                    </div>
                  )}
                  {selectedProject.year && (
                    <div className="spec">
                      <span>Year</span>
                      <p>{selectedProject.year}</p>
                    </div>
                  )}
                </div>

                <div className="projects-modal-main-text">
                  <h2>{selectedProject.title}</h2>
                  <p className="main-desc">{selectedProject.fullDescription}</p>
                  
                  {selectedProject.techStack && (
                    <div className="detail-block">
                      <h4>Tech Stack</h4>
                      <p>{selectedProject.techStack}</p>
                    </div>
                  )}
                  {selectedProject.features && (
                    <div className="detail-block">
                      <h4>Key Features</h4>
                      <p>{selectedProject.features}</p>
                    </div>
                  )}
                  {selectedProject.challenges && (
                    <div className="detail-block">
                      <h4>Challenges & Solutions</h4>
                      <p>{selectedProject.challenges}</p>
                    </div>
                  )}

                  {selectedProject.link && (
                    <a href={selectedProject.link} target="_blank" rel="noreferrer" className="projects-modal-link">
                      Visit Live Website →
                    </a>
                  )}
                </div>
              </div>

              {/* Блок с отзывом в самом низу */}
              <div className="projects-modal-testimonial-big">
                <span className="feedback-label">Feedback</span>
                <p>"{selectedProject.testimonial}"</p>
                <div className="author">
                  <img src="/assets_old/hero/Jag%20Wite.png" alt="Author" />
                  <span>{selectedProject.testimonialAuthor}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  )
}