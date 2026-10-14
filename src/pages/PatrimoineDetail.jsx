import { useParams, Link } from 'react-router-dom'
import patrimoine from '../data/patrimoine.json'
import NotFound from './NotFound'
import Badge from '../components/ui/Badge'

export default function PatrimoineDetail() {
  const { id } = useParams()
  const fiche = patrimoine.find((f) => f.id === id)

  if (!fiche) {
    return <NotFound />
  }

  return (
    <article className="fiche">
      <Link to="/patrimoine" className="fiche__retour">
        ← Retour au patrimoine
      </Link>

      <header className="fiche__entete">
        <div className="fiche__meta">
          <Badge variant="or">{fiche.categorie}</Badge>
          <Badge variant="default">{fiche.region}</Badge>
          {fiche.niveau && <Badge variant="ocre">{fiche.niveau}</Badge>}
        </div>
        <h1 className="fiche__titre">{fiche.titre}</h1>
      </header>

      <figure className="fiche__figure">
        <img src={fiche.image} alt={fiche.alt} className="fiche__image" />
        <figcaption className="fiche__legende">
          {fiche.credit} — <em>{fiche.licence}</em>
        </figcaption>
      </figure>

      <section className="fiche__section">
        <h2>Description</h2>
        <p>{fiche.description}</p>
      </section>

      <section className="fiche__section">
        <h2>Sources</h2>
        <ul className="fiche__sources">
          {fiche.sources.map((s, i) => (
            <li key={i}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.titre}
              </a>
              <span className="fiche__source-date"> (consulté le {s.consulte})</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="fiche__section fiche__contribution">
        <h2>Vous avez des informations complémentaires ?</h2>
        <p>
          Ce portail est collaboratif. Si vous détenez des sources, des photos ou des
          informations sur cette fiche, vous pouvez nous les proposer.
        </p>
        <Link to="/contribuer" className="btn btn--primary">
          Proposer une contribution
        </Link>
      </section>
    </article>
  )
}
