import { Link } from 'react-router-dom'

export default function BandeauContribution() {
  return (
    <section className="bandeau-contribution">
      <div className="bandeau-contribution__contenu">
        <p className="bandeau-contribution__surtitre">Une mémoire collective</p>
        <h2 className="bandeau-contribution__titre">
          Vous détenez une histoire, une archive ou une ressource ?
        </h2>
      </div>
      <div className="bandeau-contribution__action">
        <p>
          Aidez-nous à enrichir ce portail en partageant vos connaissances avec la communauté.
        </p>
        <Link to="/contribuer" className="btn btn--primary">
          Proposer une contribution →
        </Link>
      </div>
    </section>
  )
}
