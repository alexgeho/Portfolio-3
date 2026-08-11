'use client'

import { useState } from 'react'
import Link from 'next/link'
import './FloatingNav.scss'
import type { Dict, Lang } from '@/i18n/dictionaries'

export default function FloatingNav({ dict, lang }: { dict: Dict['nav']; lang: Lang }) {
  const [activeNav, setActiveNav] = useState('#home')
  const otherLang: Lang = lang === 'sv' ? 'en' : 'sv'

  return (
    <div className="framer-nav-container">
      <div className="framer-nav-box">

        <div className="framer-menu-items">
          <a
            href="#home"
            onClick={() => setActiveNav('#home')}
            aria-label={dict.home}
            className={`framer-nav-link ${activeNav === '#home' ? 'active' : ''}`}
          >
            <div className="framer-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            {activeNav === '#home' && <div className="framer-active-dot"></div>}
          </a>

          <a
            href="#projects"
            onClick={() => setActiveNav('#projects')}
            aria-label={dict.projects}
            className={`framer-nav-link ${activeNav === '#projects' ? 'active' : ''}`}
          >
            <div className="framer-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            {activeNav === '#projects' && <div className="framer-active-dot"></div>}
          </a>

          <a
            href="#about"
            onClick={() => setActiveNav('#about')}
            aria-label={dict.about}
            className={`framer-nav-link ${activeNav === '#about' ? 'active' : ''}`}
          >
            <div className="framer-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            {activeNav === '#about' && <div className="framer-active-dot"></div>}
          </a>
        </div>

        <div className="framer-divider"></div>

        {/* Language switcher */}
        <Link
          href={`/${otherLang}`}
          className="framer-nav-link framer-lang-switch"
          aria-label={dict.switchTo}
          title={dict.switchTo}
        >
          <span className="framer-lang-code">{otherLang.toUpperCase()}</span>
        </Link>

        <div className="framer-divider"></div>

        {/* Contact (mail) */}
        <a href="mailto:alexander.gerhard@outlook.com?subject=New%20Project%20Inquiry" className="framer-nav-primary">
          <div className="framer-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
        </a>

      </div>
    </div>
  )
}
