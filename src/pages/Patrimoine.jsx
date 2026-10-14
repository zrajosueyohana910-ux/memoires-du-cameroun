import { useState } from 'react'
import patrimoine from '../data/patrimoine.json'
import { filterItems, uniqueValues } from '../utils/filters'
import FilterBar from '../components/ui/FilterBar'
import Card from '../components/ui/Card'
import SectionTitle from '../components/ui/SectionTitle'
import '../components/ui/FilterBar.css'

export default function Patrimoine() {
  const [filters, setFilters] = useState({ region: '', categorie: '' })

  const regions = uniqueValues(patrimoine, 'region')
  const categories = uniqueValues(patrimoine, 'categorie')
  const resultats = filterItems(patrimoine, filters)

  return (
    <section>
      <SectionTitle
        surtitre="Explorer"
        titre="Patrimoine du Cameroun"
        description="Découvrez les sites, traditions et expressions culturelles documentés par notre équipe."
      />

      <FilterBar
        filters={filters}
        onChange={setFilters}
        regions={regions}
        categories={categories}
      />

      {/* Annonce aux lecteurs d'écran */}
      <p className="resultats-info" aria-live="polite">
        {resultats.length} fiche{resultats.length > 1 ? 's' : ''} trouvée{resultats.length > 1 ? 's' : ''}
      </p>

      {resultats.length === 0 ? (
        <div className="aucun-resultat">
          <p>Aucune fiche ne correspond à ces filtres.</p>
          <button onClick={() => setFilters({ region: '', categorie: '' })}>
            Réinitialiser
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
