import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Patrimoine from './pages/Patrimoine'
import PatrimoineDetail from './pages/PatrimoineDetail'
import RessourcesMethodes from './pages/RessourcesMethodes'
import ActeursProjets from './pages/ActeursProjets'
import Contribuer from './pages/Contribuer'
import APropos from './pages/APropos'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/patrimoine" element={<Patrimoine />} />
        <Route path="/patrimoine/:id" element={<PatrimoineDetail />} />
        <Route path="/ressources-methodes" element={<RessourcesMethodes />} />
        <Route path="/acteurs-projets" element={<ActeursProjets />} />
        <Route path="/contribuer" element={<Contribuer />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
