import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Link to="/" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
        Mémoires du Cameroun
      </Link>
      <nav aria-label="Navigation principale">
        <Link to="/patrimoine">Patrimoine</Link>
        <Link to="/ressources-methodes">Ressources & Méthodes</Link>
        <Link to="/acteurs-projets">Acteurs & projets</Link>
        <Link to="/a-propos">À propos</Link>
        <Link to="/contribuer">Contribuer</Link>
      </nav>
    </header>
  )
}
