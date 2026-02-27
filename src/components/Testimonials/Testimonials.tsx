import './Testimonials.scss'

const testimonialsData = [
  {
    id: 1,
    name: '!!! Sarah Jenkins',
    role: '!!! CEO at TechFlow',
    text: '!!! Alexander transformed our vision into a stunning reality. The attention to detail, performance, and UI clarity is absolutely unmatched.',
    image: '/assets/1coHJDuUjArN8XelAAFgRhjI9c.png'
  },
  {
    id: 2,
    name: '!!! David Chen',
    role: '!!! Product Manager',
    text: '!!! Working with him was a breeze. He delivered the project ahead of schedule and the code quality was superb. Highly recommended.',
    image: '/assets/bkZKfY6UAl9Bbd8gqjgt7Jw5Ja8.png'
  },
  {
    id: 3,
    name: '!!! Emily Davis',
    role: '!!! Creative Director',
    text: '!!! A true professional who perfectly understands both design aesthetics and complex technical constraints. A rare find.',
    image: '/assets/NHGGrmDpls3Tf4tytp4KXrBsVE.png'
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <span className="section-label">!!! TESTIMONIALS</span>
          <h2 className="section-title">!!! What People Say</h2>
        </div>

        <div className="testimonials__grid">
          {testimonialsData.map((review) => (
            <div className="review-card" key={review.id}>
              <div className="review-card__stars">★★★★★</div>
              <p className="review-card__text">"{review.text}"</p>
              <div className="review-card__author">
                <img src={review.image} alt={review.name} className="review-card__avatar" />
                <div className="review-card__info">
                  <h4 className="review-card__name">{review.name}</h4>
                  <span className="review-card__role">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}