import SectionTitle from '../components/ui/SectionTitle'

export default function APropos() {
  return (
    <section>
      <SectionTitle
        surtitre="Le projet"
        titre="À propos de Mémoires du Cameroun"
        description="Un portail de ressources sur la culture et les humanités numériques au Cameroun."
      />

      <article className="a-propos">

        <section className="a-propos__section">
          <h2>Le projet</h2>
          <p>
            <strong>Mémoires du Cameroun</strong> est un portail de ressources
            consacré à la préservation, à la valorisation et à la transmission
            du patrimoine culturel camerounais à l'ère numérique. Il s'inscrit
            dans le champ des <em>humanités numériques</em>, qui croisent les
            sciences humaines (histoire, langues, anthropologie, arts) et les
            outils numériques (numérisation, bases de données, wikis, cartographie).
          </p>
          <p>
            Le portail <strong>référence et oriente</strong> : il ne stocke pas
            d'archives, mais il aide les étudiants, les chercheurs et le grand
            public à trouver des ressources fiables, des méthodes et des acteurs
            qui œuvrent pour la mémoire camerounaise.
          </p>
        </section>

        <section className="a-propos__section">
          <h2>Objectifs</h2>
          <ul className="a-propos__liste">
            <li><strong>Vulgariser</strong> - présenter les humanités numériques et le patrimoine en langage clair</li>
            <li><strong>Valoriser</strong> - mettre en avant le patrimoine camerounais, en priorité celui du Nord</li>
            <li><strong>Référencer</strong> - centraliser des outils et ressources vérifiés</li>
            <li><strong>Outiller</strong> - proposer des méthodes pas à pas pour documenter et contribuer</li>
            <li><strong>Mobiliser</strong> - inciter à contribuer et à enrichir la communauté</li>
          </ul>
        </section>

        <section className="a-propos__section">
          <h2>L'équipe</h2>
          <div className="a-propos__equipe">
            <div className="a-propos__membre">
              <h3>BAMBE KENNEDY</h3>
              <p className="a-propos__role">Développement React, données, acteurs</p>
              <p className="a-propos__matricule">CM-UGa-23IBAI0096</p>
            </div>
            <div className="a-propos__membre">
              <h3>ZRA JOSUE YOHANA</h3>
              <p className="a-propos__role">UI/UX, contenus, documentation</p>
              <p className="a-propos__matricule">CM-UGa-23IBAI0093</p>
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
          <p>
            Le projet a suivi une démarche en cinq étapes, formalisée dans un
            cahier des charges :
          </p>
          <ol className="a-propos__liste-num">
            <li><strong>Cadrage</strong> — problématique, public cible, objectifs</li>
            <li><strong>Conception</strong> — arborescence, modèle de données, maquette Figma</li>
            <li><strong>Développement</strong> — React, React Router, données en JSON, déploiement Vercel</li>
            <li><strong>Tests</strong> — responsive, accessibilité (Lighthouse, WCAG AA), liens</li>
            <li><strong>Documentation</strong> — guide technique, guide d'utilisation, README</li>
          </ol>
        </section>

        <section className="a-propos__section">
          <h2>Sources et licences</h2>
          <p>
            Les métadonnées produites par l'équipe sont placées sous licence
            <strong> Creative Commons BY-SA 4.0</strong>. Les images utilisées
            proviennent en priorité de Wikimedia Commons et sont créditées
            individuellement dans chaque fiche.
          </p>
          <p>
            Chaque fiche patrimoine cite au minimum deux sources vérifiées, avec
            date de consultation. Les alignements avec Wikidata ont été contrôlés
            manuellement.
          </p>
          <p>
            Ce projet ne stocke pas d'archives. Les liens externes pointent vers
            les ressources originales, dont les droits restent détenus par leurs
            auteurs.
          </p>
        </section>

        <section className="a-propos__section">
          <h2>Contact</h2>
          <p>
            Pour toute question, suggestion ou contribution :
            <br />
            <a href="mailto:contact@memoires-du-cameroun.cm" className="a-propos__lien">
              contact@memoires-du-cameroun.cm
            </a>
          </p>
        </section>

      </article>
    </section>
  )
}
