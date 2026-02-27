import './Hero.scss'
import avatarImage from '../../assets/hero/jagBlu.jpg';
import fullStackIcon from '../../assets/hero/full-stack-developer.png';
import cleanArchitectureIcon from '../../assets/hero/clean-architecture.png';
import jwtAuth from '../../assets/hero/jwt-auth.png';
import mobileFirst from '../../assets/hero/mobile-first.png';
import reactScss from '../../assets/hero/react-scss.png';
import typescripNestJs from '../../assets/hero/typescrip-nest-js.png';
import restApi from '../../assets/hero/rest-api.png';
import componentUi from '../../assets/hero/component-ui.png';
import solidPrinciples from '../../assets/hero/solid-principles.png';
import cqrsPattern from '../../assets/hero/cqrs-pattern.png';

const badgesRow1 = [
  { icon: cleanArchitectureIcon, text: 'Clean Architecture', bg: 'rgb(253, 226, 213)', color: 'rgb(113, 57, 30)' },
  { icon: solidPrinciples, text: 'SOLID Principles', bg: 'rgb(255, 240, 198)', color: 'rgb(132, 82, 0)' },
  { icon: restApi, text: 'REST API Design', bg: 'rgb(228, 237, 246)', color: 'rgb(90, 101, 112)' },
  { icon: typescripNestJs, text: 'TypeScript & NestJS', bg: 'rgb(216, 240, 220)', color: 'rgb(51, 104, 60)' },
  { icon: cqrsPattern, text: 'CQRS Pattern', bg: 'rgb(233, 233, 234)', color: 'rgb(94, 94, 95)' },
]

const badgesRow2 = [
  { icon: fullStackIcon, text: 'Fullstack Developer', bg: 'rgb(242, 221, 245)', color: 'rgb(101, 50, 108)' },
  { icon: reactScss, text: 'React & SCSS', bg: 'rgb(225, 230, 251)', color: 'rgb(66, 80, 136)' },
  { icon: componentUi, text: 'Component-Based UI', bg: 'rgb(223, 240, 217)', color: 'rgb(64, 103, 51)' },
  { icon: jwtAuth, text: 'JWT Auth', bg: 'rgb(246, 224, 224)', color: 'rgb(133, 64, 64)' },
  { icon: mobileFirst, text: 'Mobile-First Layout', bg: 'rgb(255, 240, 198)', color: 'rgb(132, 82, 0)' },
]

export default function Hero() {
  const renderContent = (data: typeof badgesRow1) => (
    <div className="hero__marquee-content">
      {data.map((badge, i) => (
        <span className="badge" style={{ backgroundColor: badge.bg, color: badge.color }} key={i}>
          <img src={badge.icon} alt="icon" className="badge__img" /> {badge.text}
        </span>
      ))}
    </div>
  )

  return (
    <section className="hero" id="home">
      <div className="container hero__container">
        <div className="hero__avatar-wrapper">
          <img 
            src= {avatarImage}  
            alt="Alexander Gerhard" 
            className="hero__avatar" 
          />
          <div className="hero__status-dot"></div>
        </div>

        <h1 className="hero__title">
          Hi, I'm Alexander Gerhard.
          <span className="hero__subtitle">Turning ideas into scalable<br/>web solutions.</span>
        </h1>
      </div>

      <div className="hero__marquee-wrapper">
        <div className="hero__marquee-track">
          {renderContent(badgesRow1)}
          {renderContent(badgesRow1)}
        </div>

        <div className="hero__marquee-track reverse">
          {renderContent(badgesRow2)}
          {renderContent(badgesRow2)}
        </div>
      </div>
    </section>
  )
}