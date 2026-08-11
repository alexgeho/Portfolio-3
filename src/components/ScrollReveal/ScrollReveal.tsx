'use client'

import { useEffect } from 'react'

/**
 * Scroll-reveal animations (ported from the original Vite App.tsx).
 * Renders nothing; only wires an IntersectionObserver on mount.
 */
export default function ScrollReveal() {
  useEffect(() => {
    let delayCounter = 0
    let timeoutId: ReturnType<typeof setTimeout>

    const observerCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver,
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement

          setTimeout(() => {
            el.classList.add('is-revealed')

            setTimeout(() => {
              el.classList.remove('reveal-element', 'card-cascade', 'is-revealed')
            }, 4600)
          }, delayCounter * 100)

          delayCounter++
          observer.unobserve(el)
        }
      })

      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        delayCounter = 0
      }, 100)
    }

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1,
    })

    const simpleSelectors = [
      '.hero__title', '.hero__marquee-wrapper',
      '.section-label', '.section-title', '.projects__btn-view',
      '.projects__dots', '.footer__cta', '.footer__contact-card', '.footer__bottom',
    ]

    const cascadeSelectors = [
      '.bento-card', '.skill-block', '.experience-item', '.about-card',
      '.project-banner-card', '.hero__avatar-wrapper', '.footer__about',
    ]

    document.querySelectorAll(simpleSelectors.join(', ')).forEach((el) => {
      el.classList.add('reveal-element')
      observer.observe(el)
    })

    document.querySelectorAll(cascadeSelectors.join(', ')).forEach((el) => {
      el.classList.add('reveal-element', 'card-cascade')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
