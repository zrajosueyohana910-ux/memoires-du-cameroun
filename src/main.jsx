import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/global.css'
import './styles/pages.css'
import './styles/fiche.css'
import './styles/home.css'
import './styles/onglets.css'
import './styles/formulaire.css'
import './styles/apropos.css'
import './components/ui/Button.css'
import './components/ui/Badge.css'
import './components/ui/Card.css'
import './components/ui/SectionTitle.css'
import './components/ui/FilterBar.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
