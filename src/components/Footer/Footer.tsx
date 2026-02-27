import './Footer.scss'

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer" id="contact">
      <div className="container footer__container">
        
        <div className="footer__cta">
          <span className="footer__label">Get in Touch</span>
          <h2 className="footer__title">Let’s Connect</h2>
          <div className="footer__btn-wrapper">
            <a href="mailto:alexander.gerhard@outlook.com?subject=New%20Project%20Inquiry" className="footer__btn">
              Start Project
            </a>
          </div>
        </div>

        {/* Теперь карточки контактов идут отдельным блоком */}
        <div className="footer__contacts">
          <a href="mailto:alexander.gerhard@outlook.com" className="footer__contact-card">
            <span className="footer__contact-label">Email Me</span>
            <span className="footer__contact-value">alexander.gerhard@outlook.com</span>
          </a>
          <a href="https://wa.me/46707577575" target="_blank" rel="noreferrer" className="footer__contact-card">
            <span className="footer__contact-label">WhatsApp</span>
            <span className="footer__contact-value">+46 70 757 75 75</span>
          </a>
        </div>

        {/* Двухколоночная сетка: About слева, Меню справа */}
        <div className="footer__info-grid">
          <div className="footer__about">
            <p className="footer__about-text">
              Hi, I'm Alexander.<br/>
              <span>I press buttons and<br/>interfaces happen.</span>
            </p>
            <img 
              src="/assets_old/hero/Jag%20Wite.png" 
              alt="Alexander" 
              className="footer__about-img" 
            />
          </div>

          <div className="footer__bottom">
            <div className="footer__menus">
              <div className="footer__menu-row">
                <span className="footer__menu-title">Menu</span>
                <div className="footer__menu-list">
                  <a href="#home">Home</a>
                  <a href="#projects">Works</a>
                  <a href="#about">About</a>
                </div>
              </div>
              
              <div className="footer__menu-row">
                <span className="footer__menu-title">Follow</span>
                <div className="footer__menu-list">
                  <a href="https://www.linkedin.com/in/alexandergerhard/" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href="https://github.com/alexgeho" target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>

              <div className="footer__menu-row">
                <span className="footer__menu-title">Explore</span>
                <div className="footer__menu-list">
                  <a href="#skills">Skills</a>
                  <a href="#experience">Focus</a>
                </div>
              </div>
            </div>

            <div className="footer__copyright">
              <p>© {new Date().getFullYear()}, Alexander Gerhard</p>
              <a href="#home" onClick={scrollToTop} className="footer__back-to-top">
                Back to Top
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}