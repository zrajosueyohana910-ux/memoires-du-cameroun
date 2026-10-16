import SectionTitle from '../components/ui/SectionTitle'
import ContributeForm from '../components/forms/ContributeForm'

export default function Contribuer() {
  return (
    <section>
      <SectionTitle
        surtitre="Participer"
        titre="Proposer une contribution"
        description="Ce portail est un projet collaboratif. Vous détenez une histoire, une archive, une photographie ou une ressource ? Partagez-la avec la communauté."
      />

      <div className="contribuer-layout">
        <div className="contribuer-layout__formulaire">
          <h2 className="contribuer-layout__sous-titre">
            Formulaire de proposition
          </h2>
          <ContributeForm />
        </div>
      </div>
    </section>
  )
}
