import { Link } from 'react-router-dom'

const CHEMINS = [
  {
    numero: '01',
    titre: 'Patrimoines vivants',
    texte: 'Explorez les lieux, objets, langues et pratiques qui façonnent les mémoires camerounaises.',
    lien: '/patrimoine',
    icone: '🏛️'
  },
  {
    numero: '02',
    titre: 'Méthodes numériques',
    texte: 'Apprenez à documenter, analyser et valoriser les patrimoines grâce aux outils numériques.',
    lien: '/ressources-methodes',
    icone: '⚗️'
  },
  {
    numero: '03',
    titre: 'Communauté de recherche',
    texte: 'Découvrez les chercheuses, chercheurs et projets qui font avancer les humanités numériques.',
    lien: '/acteurs-projets',
    icone: '👥'
  }
]

export default function TroisChemins() {
  return (
    <section className="chemins">
      <div className="chemins__entete">
        <p className="chemins__surtitre">Trois chemins d'exploration</p>
        <h2 className="chemins__titre">Relier héritages et futurs</h2>
        <p className="chemins__description">
          Des ressources fiables et accessibles pour comprendre, apprendre et contribuer.
        </p>
      </div>

      <div className="chemins__grille">
        {CHEMINS.map((chemin) => (
          <Link key={chemin.numero} to={chemin.lien} className="chemin">
            <div className="chemin__entete">
              <span className="chemin__numero">{chemin.numero}</span>
              <span className="chemin__icone">{chemin.icone}</span>
            </div>
            <h3 className="chemin__titre">{chemin.titre}</h3>
            <p className="chemin__texte">{chemin.texte}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
