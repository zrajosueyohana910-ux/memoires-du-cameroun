import { Link } from 'react-router-dom'

export default function Card({ to, titre, badge, image, alt, extrait }) {
  return (
    <Link to={to} className="card">
      <img src={image} alt={alt} className="card__image" loading="lazy" />
      <div className="card__body">
        {badge && <span className="card__badge">{badge}</span>}
        <h3 className="card__titre">{titre}</h3>
        {extrait && <p className="card__extrait">{extrait}</p>}
      </div>
    </Link>
  )
}
