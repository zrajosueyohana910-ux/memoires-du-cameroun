export default function SectionTitle({ surtitre, titre, description, id }) {
  return (
    <div className="section-title">
      {surtitre && <p className="section-title__surtitre">{surtitre}</p>}
      <h2 className="section-title__titre" id={id}>{titre}</h2>
      {description && <p className="section-title__description">{description}</p>}
    </div>
  )
}
