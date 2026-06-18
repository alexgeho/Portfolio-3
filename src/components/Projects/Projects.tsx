import { useState, useEffect } from "react";
import "./Projects.scss";
import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";
import project4 from "../../assets/projects/project4.png";
import project5 from "../../assets/projects/project5.png";
import project6 from "../../assets/projects/project6.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string | null;
  fullDescription?: string;
  role?: string;
  keyFeatures?: string;
  techStack?: string;
  challenges?: string;
  type?: string;
  year?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "ByggExp",
    description:
      "Presentationswebbplats för ByggExp – en plattform för tidsrapportering, projektstyrning och fakturering. Integrerad med mobilapp och adminpanel.",
    image: project1,
    link: "https://byggexp.se/",
    type: "Product Website",
    year: "2025",
    fullDescription:
      "Utvecklade en landningssida som fungerar som ingång till en mobilapp och adminpanel för tidsrapportering och projektstyrning. Implementerade användarregistrering med autentisering och datalagring (MongoDB). Fokuserade på responsiv design, prestanda och fullstack-funktionalitet.",
    role: "Full-stack development, UI and responsive layout, Authentication and admin panel, API and system architecture, Feature planning and customization.",
    keyFeatures: "Produktpresentation, användarregistrering och inloggning",
    techStack: "Next.js, MongoDB",
    challenges: "Skalbar och modulär frontendarkitektur",
  },
  {
    id: 2,
    title: "ByggExp Admin",
    description:
      "Adminpanel för ByggExp – hantering av projekt, uppgifter, dokumentation och personal i realtid. Integrerad med mobilapp och backend.",
    image: project2,
    link: null,
    type: "Admin Dashboard",
    year: "2026",
    fullDescription:
      "Central kontrollpanel för byggföretag integrerad med mobilapp, backend, databas samt ekonomisystem som Visma och Fortnox. Samlar projekt, personal och verksamhetsdata i ett gemensamt system för effektiv administration och uppföljning.",
    keyFeatures:
      "Automatisk tidsrapportering, uppgifter med påminnelser, personalöversikt i realtid, fotodokumentation kopplad till projekt, projekt- och personalplanering, fakturor och offerter.",
  },
  {
    id: 3,
    title: "ByggExp App",
    description:
      "Desktop application for time tracking, task execution, and complete project control system.",
    image: project3,
    link: null,
    type: "Desktop App",
    year: "2023",
    fullDescription:
      "Desktop application meant for time tracking, task execution, and complete project control system. Directly connected to the main ByggExp infrastructure.",
  },
  {
    id: 4,
    title: "AGRY AB",
    description:
      "Webshop for prefabricated reinforcement elements with user auth, responsive UI, and admin dashboard.",
    image: project4,
    link: "https://alexgeho.github.io/js-intro-inl-1-webshop/",
    type: "E-Commerce",
    year: "2022",
    fullDescription:
      "About the AGRYs - Webbshop. Agry Shop is a web-based platform for selling prefabricated reinforcement products for foundation construction in Sweden.",
    role: "Frontend development, UI layout and responsive design, Authentication flow (login / register UI), Admin panel structure, SCSS architecture.",
    keyFeatures:
      "Product presentation website, User registration and login pages, Admin dashboard interface, Application download section, Responsive layout for desktop and mobile.",
    techStack: "HTML5, SCSS, React.",
    challenges:
      "Challenge: Keep the UI scalable for future product features. Solution: Modular SCSS structure and reusable UI components. Challenge: Clear separation between public pages and admin area. Solution: Dedicated layouts and consistent navigation logic.",
  },
  {
    id: 5,
    title: "Blogger Backend",
    description:
      "Educational backend project focused on REST API development with NestJS and Clean Architecture.",
    image: project5,
    link: null,
    type: "REST API",
    year: "2024",
    fullDescription:
      "Educational backend project focused on REST API development with NestJS.",
    techStack: "NestJS, TypeScript, REST API",
  },
  {
    id: 6,
    title: "Express Platform",
    description:
      "Educational backend project built with Express and TypeScript focusing on RESTful principles.",
    image: project6,
    link: null,
    type: "Backend System",
    year: "2024",
    fullDescription:
      "Educational backend project built with Express and TypeScript focusing on robust backend architecture and typing.",
    techStack: "Express, TypeScript, Node.js",
  },
];

const extendedProjects = [...projectsData, ...projectsData, ...projectsData];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(projectsData.length);
  const [isAnimating, setIsAnimating] = useState(true);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.clientX);
    setIsAnimating(false);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setDragOffset(diff);
    if (Math.abs(diff) > 5) setHasDragged(true);
  };

  const onPointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsAnimating(true);

    if (dragOffset > 50) setCurrentIndex((prev) => prev - 1);
    else if (dragOffset < -50) setCurrentIndex((prev) => prev + 1);

    setDragOffset(0);
    setTimeout(() => setHasDragged(false), 50);
  };

  const onTransitionEnd = () => {
    if (currentIndex <= 0) {
      setIsAnimating(false);
      setCurrentIndex(projectsData.length);
    } else if (currentIndex >= projectsData.length * 2) {
      setIsAnimating(false);
      setCurrentIndex(projectsData.length);
    }
  };

  const handleDotClick = (index: number) => {
    setIsAnimating(true);
    setCurrentIndex(projectsData.length + index);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const transformValue = `translateX(calc(${currentIndex} * (-100% / ${extendedProjects.length}) + ${dragOffset}px))`;

  return (
    <section className="projects" id="projects">
      {/* HEADER */}
      <div className="container">
        <div className="projects__header">
          <span className="section-label">PROJECTS</span>
          <div className="projects__header-top">
            <h2 className="section-title">Latest Works</h2>
            <a
              href="https://github.com/alexgeho"
              target="_blank"
              rel="noreferrer"
              className="projects__btn-view"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
      {/*  HEADER END*/}

      {/* CAROUSEL container */}
      {/* Carousel Movement Logic */}
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
            transition: isAnimating ? "transform 0.4s ease-out" : "none",
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {/* RENDER OF CARDS */}

          {extendedProjects.map((project, index) => (
            /* RENDER 1 */

            <div className="project-slide" key={`${project.id}-${index}`}>
              <div className="project-banner-card">
                <div className="project-banner-card__info">
                  {/* Project img */}
                  <div className="project-img">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-img__img"
                      draggable={false}
                    />
                  </div>
                  <div className="project-banner-card__content">
                    {/* Title, description and button below */}
                    <h3 className="project-banner-card__title">
                      {project.title}
                    </h3>
                    <p className="project-banner-card__desc">
                      {project.description}
                    </p>
                    <button
                      onClick={() => {
                        if (!hasDragged) openModal(project);
                      }}
                      className="project-banner-card__btn-black"
                    >
                      Läs mer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* RENDER OF CARDS END*/}
        </div>
      </div>

      {/* DOTS */}
      <div className="container">
        <div className="projects__dots">
          {projectsData.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex % projectsData.length ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Opened Project / Modal window / popup  */}
      {selectedProject && (
        <div className="projects-modal-overlay" onClick={closeModal}>
          <div
            className="projects-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="projects-modal-close" onClick={closeModal}>
              ✕
            </button>

            <div className="projects-modal-content">
              {/* Main project image */}
              <div className="projects-modal-hero">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>

              {/* MAIN MODAL CONTENT */}
              <div className="projects-modal-layout">
                <div className="projects-modal-main-text">
                  <h2>{selectedProject.title}</h2>
                  <p className="main-desc">{selectedProject.fullDescription}</p>

                  {selectedProject.techStack && (
                    <div className="detail-block">
                      <h4>Tech Stack</h4>
                      <p>{selectedProject.techStack}</p>
                    </div>
                  )}
                  {selectedProject.keyFeatures && (
                    <div className="detail-block">
                      <h4>Nyckelfunktioner</h4>
                      <p>{selectedProject.keyFeatures}</p>
                    </div>
                  )}
                  {selectedProject.challenges && (
                    <div className="detail-block">
                      <h4>Utmaningar & Lösningar</h4>
                      <p>{selectedProject.challenges}</p>
                    </div>
                  )}

                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="projects-modal-link"
                    >
                      Visit Live Website →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
