import { useParams, Link } from 'react-router-dom'
import methodes from '../data/methodes.json'
import NotFound from './NotFound'
import Badge from '../components/ui/Badge'

export default function MethodeDetail() {
  const { id } = useParams()
  const methode = methodes.find((m) => m.id === id)

  if (!methode) {
    return <NotFound />
  }

  return (
    <article className="fiche">
      <Link to="/ressources-methodes" className="fiche__retour">
        ← Retour aux méthodes
      </Link>

      <header className="fiche__entete">
        <div className="fiche__meta">
          <Badge variant="or">Méthode</Badge>
          <Badge variant="ocre">{methode.niveau}</Badge>
        </div>
        <h1 className="fiche__titre">{methode.titre}</h1>
      </header>

      <section className="fiche__section">
        <h2>Étapes</h2>
        <ol className="fiche__etapes">
          {methode.etapes.map((etape, i) => (
            <li key={i}>{etape}</li>
          ))}
        </ol>
      </section>

      <section className="fiche__section">
        <h2>Outils recommandés</h2>
        <ul className="fiche__outils">
          {methode.outils.map((outil, i) => (
            <li key={i}>
              <Badge variant="default">{outil}</Badge>
            </li>
          ))}
        </ul>
      </section>

      {methode.sources && methode.sources.length > 0 && (
        <section className="fiche__section">
          <h2>Sources</h2>
          <ul className="fiche__sources">
            {methode.sources.map((s, i) => (
              <li key={i}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.titre}
                </a>
                <span className="fiche__source-date"> (consulté le {s.consulte})</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="fiche__section fiche__contribution">
        <h2>Une suggestion d'amélioration ?</h2>
        <p>
          Cette méthode peut être enrichie. Si vous connaissez un outil ou une
          étape complémentaire, proposez-nous votre contribution.
        </p>
        <Link to="/contribuer" className="btn btn--primary">
          Proposer une contribution
        </Link>
      </section>
    </article>
  )
}
