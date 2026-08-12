'use client'

import { useState, useEffect } from "react";
import "./Projects.scss";
import type { Dict } from "@/i18n/dictionaries";

interface StaticProject {
  id: number;
  title: string;
  image: string;
  link: string | null;
  techStack?: string;
  mainTech: string;
  projType: string;
}

interface Project extends StaticProject {
  subtitle: string;
  description: string;
  fullDescription: string[];
  keyFeatures?: string;
  challenges?: string;
}

const staticProjects: StaticProject[] = [
  { id: 1, title: "ByggExp", image: "/assets/projects/project1.png", link: "https://byggexp.se/", techStack: "Next.js, MongoDB", mainTech: "Next.js", projType: "Fullstack" },
  { id: 2, title: "ByggExp Admin", image: "/assets/projects/project2.png", link: null, mainTech: "React", projType: "Dashboard" },
  { id: 3, title: "ByggExp App", image: "/assets/projects/project3.png", link: null, techStack: "React Native, MongoDB", mainTech: "React Native", projType: "Mobile" },
  { id: 4, title: "AGRY AB", image: "/assets/projects/project4.png", link: "https://alexgeho.github.io/js-intro-inl-1-webshop/", techStack: "HTML5, SCSS, JavaScript", mainTech: "JavaScript", projType: "Webshop" },
  { id: 5, title: "Blogger Backend", image: "/assets/projects/project5.png", link: null, techStack: "NestJS, TypeScript, MongoDB, REST API", mainTech: "NestJS", projType: "REST API" },
  { id: 6, title: "Express Platform", image: "/assets/projects/project6.png", link: null, techStack: "Express, TypeScript, Node.js", mainTech: "Express", projType: "REST API" },
];

export default function Projects({ dict }: { dict: Dict["projects"] }) {
  const projectsData: Project[] = staticProjects.map((p, i) => ({
    ...p,
    subtitle: dict.subtitles[i],
    ...dict.items[i],
  }));
  const extendedProjects = [...projectsData, ...projectsData, ...projectsData];

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
    document.body.classList.add("modal-open");
  };
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
    document.body.classList.remove("modal-open");
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
          <span className="section-label">{dict.label}</span>
          <div className="projects__header-top">
            <h2 className="section-title">{dict.title}</h2>
            <a
              href="https://github.com/alexgeho"
              target="_blank"
              rel="noreferrer"
              className="projects__btn-view"
            >
              {dict.viewGithub}
            </a>
          </div>
        </div>
      </div>

      {/* CAROUSEL */}
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
          {extendedProjects.map((project, index) => (
            <div className="project-slide" key={`${project.id}-${index}`}>
              <div className="project-banner-card">
                <div className="project-banner-card__info">
                  <div className="project-img">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-img__img"
                      draggable={false}
                    />
                  </div>
                  <div className="project-banner-card__content">
                    <h3 className="project-banner-card__title">
                      {project.title}
                    </h3>
                    <p className="project-banner-card__subtitle">
                      {project.subtitle}
                    </p>
                    <p className="project-banner-card__desc">
                      {project.description}
                    </p>
                    <div className="project-banner-card__stats">
                      <div className="proj-stat">
                        <span className="proj-stat__label">{dict.stackLabel}</span>
                        <span className="proj-stat__value">{project.mainTech}</span>
                      </div>
                      <div className="proj-stat">
                        <span className="proj-stat__label">{dict.typeLabel}</span>
                        <span className="proj-stat__value">{project.projType}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        if (!hasDragged) openModal(project);
                      }}
                      className="project-banner-card__btn-black"
                    >
                      {dict.readMore}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

      {/* MODAL */}
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
              <div className="projects-modal-hero">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>

              <div className="projects-modal-layout">
                <div className="projects-modal-main-text">
                  <h2>{selectedProject.title}</h2>
                  <div className="main-desc">
                    {selectedProject.fullDescription?.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {selectedProject.techStack && (
                    <div className="detail-block">
                      <h4>{dict.techStack}</h4>
                      <p>{selectedProject.techStack}</p>
                    </div>
                  )}
                  {selectedProject.keyFeatures && (
                    <div className="detail-block">
                      <h4>{dict.keyFeatures}</h4>
                      <p>{selectedProject.keyFeatures}</p>
                    </div>
                  )}
                  {selectedProject.challenges && (
                    <div className="detail-block">
                      <h4>{dict.challenges}</h4>
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
                      {dict.visitLive}
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
