import './BentoAbout.scss'
import type { Dict } from '@/i18n/dictionaries'

export default function BentoAbout({ dict }: { dict: Dict['bento'] }) {
  const pinSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  )

  return (
    <section className="bento-about" id="bento-about">
      <div className="container">
        <div className="bento-about__grid">

          <div className="bento-card bento-card--main">
            <h2 className="bento-card__title-large">
              <span className="text-dark">{dict.mainTitle.dark}</span> {dict.mainTitle.light}
            </h2>
            <div className="bento-card__img-wrapper">
              <img src="https://framerusercontent.com/images/1kN4QMOe7JYBGY0nhmg9BO8dGek.png" alt="" />
            </div>
          </div>

          <div className="bento-card bento-card--location">
            <div className="bento-card__header">
              <span className="bento-card__label">{dict.basedInLabel}</span>
              <h3 className="bento-card__title">{dict.basedInValue}</h3>
            </div>
            <div className="bento-card__map">
              <div className="map-pin faded">{pinSvg}</div>
              <div className="map-pin faded">{pinSvg}</div>
              <div className="map-pin active">
                <div className="pulse"></div>
                {pinSvg}
              </div>
              <div className="map-pin faded">{pinSvg}</div>
              <div className="map-pin faded">{pinSvg}</div>
            </div>
          </div>

          <div className="bento-card bento-card--code">
            <div className="bento-card__header">
              <span className="bento-card__label">{dict.codingSinceLabel}</span>
              <h3 className="bento-card__title">{dict.codingSinceValue}</h3>
            </div>
            <div className="code-window">
              <div className="code-window__header">
                <span></span><span></span><span></span>
              </div>
              <pre className="code-window__content">
                <code>
                  <span className="code-line">{'<!DOCTYPE html>'}</span>
                  <span className="code-line">{'<html lang="en">'}</span>
                  <span className="code-line">{'<head>'}</span>
                  <span className="code-line indent">{'<meta charset="UTF-8" />'}</span>
                  <span className="code-line indent">{'<title>Hi, I\'m Alexander</title>'}</span>
                  <span className="code-line">{'</head>'}</span>
                  <span className="code-line">{'<body>'}</span>
                  <span className="code-line">{'</body>'}</span>
                  <span className="code-line">{'</html>'}</span>
                </code>
              </pre>
            </div>
          </div>

          <div className="bento-card bento-card--what">
            <div className="pill">
              <span className="dot"></span> {dict.whatIDoPill}
            </div>
            <h3 className="bento-card__title-medium">
              <span className="text-dark">{dict.whatIDoTitle.dark}</span> {dict.whatIDoTitle.light}
            </h3>
          </div>

          <div className="bento-card bento-card--learning">
            <div className="pill">
              <span className="dot"></span> {dict.learningPill}
            </div>
            <h3 className="bento-card__title-medium">
              {dict.learningExploring}<br/>
              <span className="text-dark">{dict.learningTopic}</span>
            </h3>
            <img src="https://framerusercontent.com/images/TSyrVIcVdoum6jU4VGQGBARVkp4.png" alt="" className="bento-card__img-learning" />
          </div>

        </div>
      </div>
    </section>
  )
}
