import { Link } from 'react-router-dom'
import { countRegions } from '../../utils/filters'
import patrimoine from '../../data/patrimoine.json'

export default function Hero() {
  const regionsCount = countRegions(patrimoine)

  return (
    <section className="hero">
      <div className="hero__contenu">
        <p className="hero__surtitre">Culture · Recherche · Transmission</p>
        <h1 className="hero__titre">
          Le Cameroun, <em>mémoire et innovation</em> à l'ère numérique
        </h1>
        <p className="hero__description">
          Un espace ouvert pour explorer les patrimoines, découvrir les acteurs
          et s'initier aux méthodes des humanités numériques.
        </p>
        <div className="hero__actions">
          <Link to="/patrimoine" className="btn btn--primary">
            Explorer le patrimoine →
          </Link>
          <Link to="/ressources-methodes" className="btn btn--secondary hero__btn-clair">
            Découvrir les méthodes →
          </Link>
        </div>
      </div>

      <div className="hero__aside">
        <div className="hero__badge">
          <span className="hero__badge-titre">Archives</span>
          <span className="hero__badge-sous">vivantes</span>
        </div>
        <div className="hero__compteur">
          <span className="hero__compteur-nombre">{regionsCount}</span>
          <span className="hero__compteur-label">régions à explorer</span>
        </div>
        <p className="hero__credit">
          Crédit photo : à compléter (Wikimedia Commons, CC BY-SA 4.0)
        </p>
      </div>
    </section>
  )
}
