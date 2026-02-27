import './Achievements.scss'

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
            <img src="/assets/08VPiyjhDPjl59RnZgvrOoNOwc.png" alt="Waving" className="bento-card__img" />
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
            <img src="/assets/3mZSytZXTHG3uxHa3g1UAfbm1Q.png" alt="Call" className="bento-card__img" />
          </div>

          <div className="bento-card bento-card--img-left">
            <img src="/assets/YOx3t0OLKaZxlx6w7xuHGanM0.png" alt="Thinking" className="bento-card__img" />
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