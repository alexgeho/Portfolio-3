import './Achievements.scss'
import waving from '../../assets/achievements/memoji-wave.png';
import whisper from '../../assets/achievements/memoji-whisper.png';
import chefKiss from '../../assets/achievements/memoji-chef-kiss.png';

export default function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <div className="achievements__header">
          <span className="section-label">PORTFOLIO FACTS</span>
          <h2 className="section-title">Professional Focus</h2>
        </div>

        <div className="bento-stack">
          
          <div className="bento-card bento-card--img-left">
            <img src={waving} alt="waving" className="bento-card__img" />
            <div className="bento-card__content">
              <h3>6+</h3>
              <p>Fullstack Projects</p>
            </div>
          </div>

          <div className="bento-card bento-card--img-right">
            <div className="bento-card__content">
              <h3>Clean</h3>
              <p>Architecture Focus</p>
            </div>
            <img src={whisper}alt="whisper" className="bento-card__img" />
          </div>

          <div className="bento-card bento-card--img-left">
            <img src={chefKiss} alt="chefKiss" className="bento-card__img" />
            <div className="bento-card__content">
              <h3>100%</h3>
              <p>Scalable Web Solutions</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}