import './Hero.scss'

const badgesRow1 = [
  { icon: '/assets/5bytqvhLjt4OwCl8RJD3pyoDUA.png', text: 'Clean Architecture', bg: 'rgb(253, 226, 213)', color: 'rgb(113, 57, 30)' },
  { icon: '/assets/HfpYsXfnVzr4ul7jkLBK2OkXs.png', text: 'SOLID Principles', bg: 'rgb(255, 240, 198)', color: 'rgb(132, 82, 0)' },
  { icon: '/assets/Rel5P4n1dDLM8ybABx4NWTCihWs.png', text: 'REST API Design', bg: 'rgb(228, 237, 246)', color: 'rgb(90, 101, 112)' },
  { icon: '/assets/dAjAMuNyUqEtbvxnydtQmNy51I.png', text: 'TypeScript & NestJS', bg: 'rgb(216, 240, 220)', color: 'rgb(51, 104, 60)' },
  { icon: '/assets/sNLcfiuyfmncXhvXrewV9ScqA8.png', text: 'CQRS Pattern', bg: 'rgb(233, 233, 234)', color: 'rgb(94, 94, 95)' },
]

const badgesRow2 = [
  { icon: '/assets/0TVmnTSv90qLOFHFbvvRnc9M.png', text: 'Fullstack Developer', bg: 'rgb(242, 221, 245)', color: 'rgb(101, 50, 108)' },
  { icon: '/assets/37xemZkQiHN9kxXviIxCP1xhQ2U.png', text: 'React & SCSS', bg: 'rgb(225, 230, 251)', color: 'rgb(66, 80, 136)' },
  { icon: '/assets/FyjlxbwyYBnHt8zFdwDW3HTYWWg.png', text: 'Component-Based UI', bg: 'rgb(223, 240, 217)', color: 'rgb(64, 103, 51)' },
  { icon: '/assets/tavieUmzoalGMvf3Twzko08hs.png', text: 'JWT Auth', bg: 'rgb(246, 224, 224)', color: 'rgb(133, 64, 64)' },
  { icon: '/assets/pZdVQQB5zoAlt957CwKYbbfhCo4.png', text: 'Mobile-First Layout', bg: 'rgb(255, 240, 198)', color: 'rgb(132, 82, 0)' },
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
            src="/assets_old/hero/Jag%20Blu.jpg" 
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