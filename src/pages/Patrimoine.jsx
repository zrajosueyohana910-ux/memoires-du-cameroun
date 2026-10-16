import { useState } from 'react'
import patrimoine from '../data/patrimoine.json'
import { filterItems } from '../utils/filters'
import FilterBar from '../components/ui/FilterBar'
import Card from '../components/ui/Card'
import SectionTitle from '../components/ui/SectionTitle'
import '../components/ui/FilterBar.css'

// Les 10 régions du Cameroun
const REGIONS_CAMEROUN = [
  'Adamaoua', 'Centre', 'Est', 'Extrême-Nord', 'Littoral',
  'Nord', 'Nord-Ouest', 'Ouest', 'Sud', 'Sud-Ouest'
]

const CATEGORIES = ['matériel', 'immatériel', 'linguistique']

export default function Patrimoine() {
  const [filters, setFilters] = useState({ region: '', categorie: '' })

  const resultats = filterItems(patrimoine, filters)

  return (
    <section>
      <SectionTitle
        surtitre="Explorer"
        titre="Patrimoine du Cameroun"
        description="Découvrez les sites, traditions et expressions culturelles des 10 régions du Cameroun. Le portail est enrichi progressivement."
      />

      <FilterBar
        filters={filters}
        onChange={setFilters}
        regions={REGIONS_CAMEROUN}
        categories={CATEGORIES}
      />

      <p className="resultats-info" aria-live="polite">
        {resultats.length} fiche{resultats.length > 1 ? 's' : ''} trouvée{resultats.length > 1 ? 's' : ''}
      </p>

      {resultats.length === 0 ? (
        <div className="aucun-resultat">
          <p>
            Aucune fiche n'est encore publiée pour cette combinaison.
            Le portail est enrichi progressivement — n'hésitez pas à proposer une contribution.
          </p>
          <button onClick={() => setFilters({ region: '', categorie: '' })}>
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <ul className="grille-cartes">
          {resultats.map((fiche) => (
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
      )}
    </section>
  )
}
