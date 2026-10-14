import { useState } from 'react'
import { Link } from 'react-router-dom'
import methodes from '../data/methodes.json'
import ressources from '../data/ressources.json'
import { uniqueValues } from '../utils/filters'
import SectionTitle from '../components/ui/SectionTitle'

export default function RessourcesMethodes() {
  const [ongletActif, setOngletActif] = useState('methodes')
  const [filtreMethode, setFiltreMethode] = useState('')
  const [filtreType, setFiltreType] = useState('')

  // Méthodes : filtrer par niveau
  const niveaux = uniqueValues(methodes, 'niveau')
  const methodesFiltrees = filtreMethode
    ? methodes.filter((m) => m.niveau === filtreMethode)
    : methodes

  // Ressources : filtrer par type
  const types = uniqueValues(ressources, 'type')
  const ressourcesFiltrees = filtreType
    ? ressources.filter((r) => r.type === filtreType)
    : ressources

  return (
    <section>
      <SectionTitle
        surtitre="Apprendre"
        titre="Ressources & Méthodes"
        description="Des guides pratiques pour documenter, structurer et valoriser les patrimoines numériques, ainsi qu'une sélection d'outils vérifiés."
      />

      {/* Onglets */}
      <div className="onglets" role="tablist">
        <button
          role="tab"
          aria-selected={ongletActif === 'methodes'}
          className={`onglet ${ongletActif === 'methodes' ? 'onglet--actif' : ''}`}
          onClick={() => setOngletActif('methodes')}
        >
          Méthodes ({methodes.length})
        </button>
        <button
          role="tab"
          aria-selected={ongletActif === 'ressources'}
          className={`onglet ${ongletActif === 'ressources' ? 'onglet--actif' : ''}`}
          onClick={() => setOngletActif('ressources')}
        >
          Outils & ressources ({ressources.length})
        </button>
      </div>

      {/* Onglet Méthodes */}
      {ongletActif === 'methodes' && (
        <div className="onglet-contenu" role="tabpanel">
          <div className="filtre-simple">
            <label htmlFor="filtre-niveau">Filtrer par niveau :</label>
            <select
              id="filtre-niveau"
              value={filtreMethode}
              onChange={(e) => setFiltreMethode(e.target.value)}
            >
              <option value="">Tous les niveaux</option>
              {niveaux.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          <p className="resultats-info" aria-live="polite">
            {methodesFiltrees.length} méthode{methodesFiltrees.length > 1 ? 's' : ''}
          </p>

          <ul className="liste-fiches">
            {methodesFiltrees.map((methode) => (
              <li key={methode.id} className="fiche-liste">
                <Link to={`/methodes/${methode.id}`} className="fiche-liste__lien">
                  <span className="fiche-liste__badge">{methode.niveau}</span>
                  <h3 className="fiche-liste__titre">{methode.titre}</h3>
                  <p className="fiche-liste__resume">
                    {methode.etapes.length} étapes · Outils : {methode.outils.join(', ')}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Onglet Ressources */}
      {ongletActif === 'ressources' && (
        <div className="onglet-contenu" role="tabpanel">
          <div className="filtre-simple">
            <label htmlFor="filtre-type">Filtrer par type :</label>
            <select
              id="filtre-type"
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
            {ressourcesFiltrees.length} ressource{ressourcesFiltrees.length > 1 ? 's' : ''}
          </p>

          <ul className="liste-fiches">
            {ressourcesFiltrees.map((ressource) => (
              <li key={ressource.id} className="fiche-liste">
                <a
                  href={ressource.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fiche-liste__lien"
                >
                  <div className="fiche-liste__entete">
                    <span className="fiche-liste__badge">{ressource.type}</span>
                    {ressource.gratuit && <span className="fiche-liste__gratuit">Gratuit</span>}
                  </div>
                  <h3 className="fiche-liste__titre">{ressource.nom}</h3>
                  <p className="fiche-liste__resume">{ressource.description}</p>
                  <p className="fiche-liste__meta">
                    Langue : {ressource.langue} · <span className="fiche-liste__externe">↗ Site externe</span>
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
