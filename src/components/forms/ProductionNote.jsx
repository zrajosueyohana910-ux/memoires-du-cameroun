export default function ProductionNote() {
  return (
    <aside className="note-production">
      <h3>💡 Comment fonctionnerait ce formulaire en production ?</h3>
      <p>
        Ce formulaire est actuellement <strong>simulé côté front</strong> : les données
        saisies sont validées et affichées dans la console du navigateur, mais
        aucun envoi réel n'est effectué.
      </p>
      <p>
        En production, nous brancherions le formulaire sur un service tiers :
      </p>
      <ul>
        <li>
          <strong>Formspree</strong> : 50 soumissions/mois gratuites, aucune
          configuration serveur, idéal pour un projet académique.
        </li>
        <li>
          <strong>EmailJS</strong> : envoi d'e-mails via JavaScript, sans backend,
          avec authentification par clé publique.
        </li>
        <li>
          <strong>Netlify Forms</strong> : si le site est hébergé sur Netlify,
          traitement natif des formulaires.
        </li>
      </ul>
      <p>
        Cette approche permet de tester l'expérience utilisateur sans mettre en
        place une infrastructure backend complexe (hors périmètre du projet,
        conformément au CDC §5.4).
      </p>
      <p className="note-production__contact">
        En attendant, vous pouvez nous contacter directement :
        {' '}
        <a href="mailto:contact@memoires-du-cameroun.cm">
          contact@memoires-du-cameroun.cm
        </a>
      </p>
    </aside>
  )
}
