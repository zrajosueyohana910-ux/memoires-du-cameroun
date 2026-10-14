import { useState } from 'react'

const FORMULAIRE_VIDE = {
  nom: '',
  email: '',
  type: '',
  message: ''
}

const TYPES = [
  { value: 'patrimoine', label: 'Une fiche patrimoine' },
  { value: 'methode', label: 'Une méthode / un tutoriel' },
  { value: 'ressource', label: 'Un outil ou une ressource' },
  { value: 'acteur', label: 'Un acteur ou un projet' },
  { value: 'autre', label: 'Autre proposition' }
]

function valider(valeurs) {
  const erreurs = {}

  if (!valeurs.nom.trim()) {
    erreurs.nom = 'Veuillez indiquer votre nom.'
  } else if (valeurs.nom.trim().length < 2) {
    erreurs.nom = 'Le nom doit contenir au moins 2 caractères.'
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!valeurs.email.trim()) {
    erreurs.email = 'Veuillez indiquer votre adresse e-mail.'
  } else if (!regexEmail.test(valeurs.email)) {
    erreurs.email = 'Adresse e-mail invalide.'
  }

  if (!valeurs.type) {
    erreurs.type = 'Veuillez choisir un type de proposition.'
  }

  if (!valeurs.message.trim()) {
    erreurs.message = 'Veuillez écrire votre proposition.'
  } else if (valeurs.message.trim().length < 20) {
    erreurs.message = 'Votre message doit contenir au moins 20 caractères.'
  }

  return erreurs
}

export default function ContributeForm() {
  const [valeurs, setValeurs] = useState(FORMULAIRE_VIDE)
  const [erreurs, setErreurs] = useState({})
  const [envoye, setEnvoye] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValeurs({ ...valeurs, [name]: value })
    // Effacer l'erreur du champ modifié
    if (erreurs[name]) {
      setErreurs({ ...erreurs, [name]: undefined })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nouvellesErreurs = valider(valeurs)
    setErreurs(nouvellesErreurs)

    if (Object.keys(nouvellesErreurs).length === 0) {
      // SIMULATION : aucun envoi réel. Voir l'encart pédagogique ci-dessous.
      console.log('Formulaire soumis (simulation) :', valeurs)
      setEnvoye(true)
      setValeurs(FORMULAIRE_VIDE)
    }
  }

  if (envoye) {
    return (
      <div className="formulaire-succes" role="status" aria-live="polite">
        <div className="formulaire-succes__icone">✓</div>
        <h2>Merci pour votre contribution !</h2>
        <p>
          Votre proposition a bien été enregistrée (démonstration). Nous vous
          recontacterons si elle est retenue.
        </p>
        <button
          type="button"
          className="btn btn--secondary"
          onClick={() => setEnvoye(false)}
        >
          Proposer une autre contribution
        </button>
      </div>
    )
  }

  return (
    <form className="formulaire" onSubmit={handleSubmit} noValidate>
      <div className="formulaire__champ">
        <label htmlFor="nom">Votre nom *</label>
        <input
          id="nom"
          name="nom"
          type="text"
          value={valeurs.nom}
          onChange={handleChange}
          aria-invalid={!!erreurs.nom}
          aria-describedby={erreurs.nom ? 'err-nom' : undefined}
        />
        {erreurs.nom && (
          <p id="err-nom" className="formulaire__erreur" role="alert">
            {erreurs.nom}
          </p>
        )}
      </div>

      <div className="formulaire__champ">
        <label htmlFor="email">Votre e-mail *</label>
        <input
          id="email"
          name="email"
          type="email"
          value={valeurs.email}
          onChange={handleChange}
          aria-invalid={!!erreurs.email}
          aria-describedby={erreurs.email ? 'err-email' : undefined}
        />
        {erreurs.email && (
          <p id="err-email" className="formulaire__erreur" role="alert">
            {erreurs.email}
          </p>
        )}
      </div>

      <div className="formulaire__champ">
        <label htmlFor="type">Type de proposition *</label>
        <select
          id="type"
          name="type"
          value={valeurs.type}
          onChange={handleChange}
          aria-invalid={!!erreurs.type}
          aria-describedby={erreurs.type ? 'err-type' : undefined}
        >
          <option value="">— Choisir —</option>
          {TYPES.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
        {erreurs.type && (
          <p id="err-type" className="formulaire__erreur" role="alert">
            {erreurs.type}
          </p>
        )}
      </div>

      <div className="formulaire__champ">
        <label htmlFor="message">Votre proposition *</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={valeurs.message}
          onChange={handleChange}
          placeholder="Décrivez votre proposition : sources, liens, contexte…"
          aria-invalid={!!erreurs.message}
          aria-describedby={erreurs.message ? 'err-message' : undefined}
        />
        {erreurs.message && (
          <p id="err-message" className="formulaire__erreur" role="alert">
            {erreurs.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn--primary">
        Envoyer ma proposition
      </button>

      <p className="formulaire__note">
        * Champs obligatoires
      </p>
    </form>
  )
}
