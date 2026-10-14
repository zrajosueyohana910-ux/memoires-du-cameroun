import { Link } from 'react-router-dom'
import patrimoine from '../../data/patrimoine.json'
import Card from '../ui/Card'

export default function RessourcesRecentes() {
  const mises_en_avant = patrimoine
    .filter((f) => f.mise_en_avant)
    .slice(0, 3)

  return (
    <section className="recentes">
      <div className="recentes__entete">
        <div>
          <p className="recentes__surtitre">À découvrir</p>
          <h2 className="recentes__titre">Ressources récentes</h2>
          <p className="recentes__description">
            Une sélection éditorialisée pour commencer votre exploration.
          </p>
        </div>
        <Link to="/patrimoine" className="recentes__lien">
          Voir toutes les ressources →
        </Link>
      </div>

      <ul className="grille-cartes">
        {mises_en_avant.map((fiche) => (
          <li key={fiche.id}>
            <Card
              to={`/patrimoine/${fiche.id}`}
              titre={fiche.titre}
              badge={fiche.categorie}
              image={fiche.image}
              alt={fiche.alt}
              extrait={fiche.description.slice(0, 120) + '…'}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
