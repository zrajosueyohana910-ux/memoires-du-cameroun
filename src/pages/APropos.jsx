import SectionTitle from '../components/ui/SectionTitle'

export default function APropos() {
  return (
    <section>
      <SectionTitle
        surtitre="Le projet"
        titre="À propos de Mémoires du Cameroun"
        description="Un portail de ressources sur le patrimoine des 10 régions du Cameroun à l'ère numérique."
      />

      <article className="a-propos">

        <section className="a-propos__section">
          <h2>Le projet</h2>
          <p>
            <strong>Mémoires du Cameroun</strong> est un portail de ressources consacré
            à la préservation, à la valorisation et à la transmission du patrimoine
            culturel camerounais à l'ère numérique. Il s'inscrit dans le champ des
            <em> humanités numériques</em>.
          </p>
          <p>
            Le portail <strong>référence et oriente</strong> : il aide les étudiants,
            les chercheurs et le grand public à trouver des ressources fiables, des
            méthodes et des acteurs qui œuvrent pour la mémoire camerounaise.
          </p>
        </section>

        <section className="a-propos__section">
          <h2>Objectifs</h2>
          <ul className="a-propos__liste">
            <li><strong>Vulgariser</strong> — présenter les humanités numériques et le patrimoine en langage clair</li>
            <li><strong>Valoriser</strong> — mettre en avant le patrimoine des 10 régions du Cameroun</li>
            <li><strong>Référencer</strong> — centraliser des outils et ressources vérifiés</li>
            <li><strong>Outiller</strong> — proposer des méthodes pas à pas pour documenter et contribuer</li>
            <li><strong>Mobiliser</strong> — inciter à contribuer et à enrichir la communauté</li>
          </ul>
        </section>

        <section className="a-propos__section">
          <h2>Démarche et extension</h2>
          <p>
            Notre travail a démarré par une phase de <strong>modélisation sémantique</strong>
            du patrimoine du Nord-Cameroun (régions du Nord et de l'Extrême-Nord),
            formalisée dans une ontologie RDF. Le portail présente aujourd'hui ces
            premières fiches comme <strong>preuve de concept</strong>.
          </p>
          <p>
            L'architecture est <strong>extensible aux 10 régions du Cameroun</strong> :
            Adamaoua, Centre, Est, Extrême-Nord, Littoral, Nord, Nord-Ouest, Ouest,
            Sud et Sud-Ouest. Ajouter une région, c'est enrichir les données sources
            sans modifier le code.
          </p>
          <p>
            Notre objectif est de <strong>couvrir progressivement l'ensemble du
            territoire camerounais</strong>, en commençant par les régions où nous
            avons un ancrage documentaire direct.
          </p>
        </section>

        <section className="a-propos__section">
          <h2>L'équipe</h2>
          <div className="a-propos__equipe">
            <div className="a-propos__membre">
              <h3>BAMBE KENNEDY</h3>
              <p className="a-propos__role">Développement React, données, acteurs</p>
  
            </div>
            <div className="a-propos__membre">
              <h3>ZRA JOSUE YOHANA</h3>
              <p className="a-propos__role">UI/UX, contenus, documentation</p>
            </div>
          </div>
          <p className="a-propos__institution">
            Master 1 — Arts et Humanités<br />
            Institut des Beaux-Arts et de l'Innovation (IBAI)<br />
            Université de Garoua — Cameroun
          </p>
        </section>

        <section className="a-propos__section">
          <h2>Méthodologie</h2>
          <ol className="a-propos__liste-num">
            <li><strong>Cadrage</strong> — problématique, public cible, objectifs</li>
            <li><strong>Conception</strong> — arborescence, maquette, modèle de données</li>
            <li><strong>Développement</strong> — React, React Router, données JSON, déploiement Vercel</li>
            <li><strong>Tests</strong> — responsive, accessibilité, liens</li>
            <li><strong>Documentation</strong> — guide technique, guide d'utilisation, README</li>
          </ol>
        </section>

        <section className="a-propos__section">
          <h2>Sources et licences</h2>
          <p>
            Les métadonnées produites par l'équipe sont sous licence
            <strong> Creative Commons BY-SA 4.0</strong>. Les images proviennent de
            Wikimedia Commons et sont créditées individuellement dans chaque fiche.
          </p>
          <p>
            Chaque fiche patrimoine cite au minimum deux sources vérifiées avec date
            de consultation.
          </p>
        </section>

        <section className="a-propos__section">
          <h2>Note sur les images</h2>
          <p>
            La majorité des photographies utilisées sur ce portail proviennent de
            <strong> Wikimedia Commons</strong> et sont créditées individuellement dans
            chaque fiche. Trois illustrations (Contes de Goggo Addi, Goalala, Maray)
            ont été <strong>générées par intelligence artificielle</strong> à titre
            d'illustration, en l'absence d'images libres de droits adaptées. Elles ne
            prétendent pas représenter des scènes réelles.
          </p>
        </section>

                <section className="a-propos__section">
          <h2>Contact</h2>
          <p>
            <a href="mailto:contact@memoires-du-cameroun.cm" className="a-propos__lien">
              contact@memoires-du-cameroun.cm
            </a>
          </p>
        </section>

      </article>
    </section>
  )
}
