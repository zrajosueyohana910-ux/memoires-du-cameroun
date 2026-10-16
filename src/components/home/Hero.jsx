import { Link } from 'react-router-dom'

const REGIONS_CAMEROUN = [
  'Adamaoua', 'Centre', 'Est', 'Extrême-Nord', 'Littoral',
  'Nord', 'Nord-Ouest', 'Ouest', 'Sud', 'Sud-Ouest'
]

// ⚠️ CHANGEZ CE CHEMIN selon votre choix
const IMAGE_FOND = '/images/diy-gid-biy.jpg'

export default function Hero() {
  return (
    <section
      className="hero hero--avec-image"
      style={{ backgroundImage: `url(${IMAGE_FOND})` }}
    >
      <div className="hero__overlay">
        <div className="hero__contenu">
          <p className="hero__surtitre">Culture · Recherche · Transmission</p>
          <h1 className="hero__titre">
            Le Cameroun, <em>mémoire et innovation</em> à l'ère numérique
          </h1>
          <p className="hero__description">
            Un espace ouvert pour explorer les patrimoines des 10 régions du
            Cameroun, découvrir les acteurs et s'initier aux méthodes des
            humanités numériques.
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
            <span className="hero__badge-titre">Patrimoine</span>
            <span className="hero__badge-sous">vivant</span>
          </div>
          <div className="hero__compteur">
            <span className="hero__compteur-nombre">{REGIONS_CAMEROUN.length}</span>
            <span className="hero__compteur-label">régions à explorer</span>
          </div>
          <p className="hero__credit">
            Photo : Wikimedia Commons, CC BY-SA 4.0
          </p>
        </div>
      </div>
    </section>
  )
}
