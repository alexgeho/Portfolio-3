'use client'

import './Footer.scss'
import type { Dict } from '@/i18n/dictionaries'

export default function Footer({ dict }: { dict: Dict['footer'] }) {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const aboutLine2 = dict.aboutLine2.split('\n')

  return (
    <footer className="footer" id="contact">
      <div className="container footer__container">

        <div className="footer__cta">
          <span className="footer__label">{dict.label}</span>
          <h2 className="footer__title">{dict.title}</h2>
          <div className="footer__btn-wrapper">
            <a href="mailto:alex@alexgeho.dev?subject=New%20Project%20Inquiry" className="footer__btn">
              {dict.startProject}
            </a>
          </div>
        </div>

        <div className="footer__contacts">
          <a href="mailto:alex@alexgeho.dev" className="footer__contact-card">
            <span className="footer__contact-label">{dict.emailMe}</span>
            <span className="footer__contact-value">alex@alexgeho.dev</span>
          </a>
          <a href="https://wa.me/46707577575" target="_blank" rel="noreferrer" className="footer__contact-card">
            <span className="footer__contact-label">{dict.whatsapp}</span>
            <span className="footer__contact-value">+46 70 757 75 75</span>
          </a>
        </div>

        <div className="footer__info-grid">
          <div className="footer__about">
            <p className="footer__about-text">
              {dict.aboutLine1}<br/>
              <span>
                {aboutLine2.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < aboutLine2.length - 1 && <br />}
                  </span>
                ))}
              </span>
            </p>
            <img
              src="/assets/JagWite.png"
              alt="Alexander Gerhard"
              className="footer__about-img"
            />
          </div>

          <div className="footer__bottom">
            <div className="footer__menus">
              <div className="footer__menu-row">
                <span className="footer__menu-title">{dict.menuTitle}</span>
                <div className="footer__menu-list">
                  <a href="#home">{dict.linkHome}</a>
                  <a href="#projects">{dict.linkWorks}</a>
                  <a href="#bento-about">{dict.linkAbout}</a>
                </div>
              </div>

              <div className="footer__menu-row">
                <span className="footer__menu-title">{dict.followTitle}</span>
                <div className="footer__menu-list">
                  <a href="https://www.linkedin.com/in/alexandergerhard/" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href="https://github.com/alexgeho" target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>

              <div className="footer__menu-row">
                <span className="footer__menu-title">{dict.exploreTitle}</span>
                <div className="footer__menu-list">
                  <a href="#skills">{dict.linkSkills}</a>
                  <a href="#experience">{dict.linkFocus}</a>
                </div>
              </div>
            </div>

            <div className="footer__copyright">
              <p>© {new Date().getFullYear()}, Alexander Gerhard</p>
              <a href="#home" onClick={scrollToTop} className="footer__back-to-top">
                {dict.backToTop}
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
