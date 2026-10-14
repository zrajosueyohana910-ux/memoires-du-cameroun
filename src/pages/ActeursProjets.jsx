import { useState } from 'react'
import { Link } from 'react-router-dom'
import acteurs from '../data/acteurs.json'
import { uniqueValues } from '../utils/filters'
import SectionTitle from '../components/ui/SectionTitle'

export default function ActeursProjets() {
  const [filtreType, setFiltreType] = useState('')

  const types = uniqueValues(acteurs, 'type')
  const acteursFiltres = filtreType
    ? acteurs.filter((a) => a.type === filtreType)
    : acteurs

  return (
    <section>
      <SectionTitle
        surtitre="Communauté"
        titre="Acteurs & projets"
        description="Institutions, collectifs et projets qui documentent, préservent et valorisent le patrimoine camerounais à l'ère numérique."
      />

      <div className="filtre-simple">
        <label htmlFor="filtre-acteur-type">Filtrer par type :</label>
        <select
          id="filtre-acteur-type"
          value={filtreType}
          onChange={(e) => setFiltreType(e.target.value)}
        >
          <option value="">Tous les types</option>
          {types.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <p className="resultats-info" aria-live="polite">
        {acteursFiltres.length} acteur{acteursFiltres.length > 1 ? 's' : ''} ou projet{acteursFiltres.length > 1 ? 's' : ''}
      </p>

      {acteursFiltres.length === 0 ? (
        <div className="aucun-resultat">
          <p>Aucun acteur ne correspond à ce filtre.</p>
          <button onClick={() => setFiltreType('')}>Réinitialiser</button>
        </div>
      ) : (
        <ul className="liste-fiches">
          {acteursFiltres.map((acteur) => (
            <li key={acteur.id} className="fiche-liste">
              <a
                href={acteur.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="fiche-liste__lien"
              >
                <div className="fiche-liste__entete">
                  <span className="fiche-liste__badge">{acteur.type}</span>
                  <span className="fiche-liste__domaine">{acteur.domaine}</span>
                </div>
                <h3 className="fiche-liste__titre">{acteur.nom}</h3>
                <p className="fiche-liste__resume">{acteur.description}</p>
                <p className="fiche-liste__meta">
                  <span className="fiche-liste__externe">↗ Site externe</span>
                </p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
