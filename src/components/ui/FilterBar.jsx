export default function FilterBar({ filters, onChange, regions, categories }) {
  const handleChange = (champ, valeur) => {
    onChange({ ...filters, [champ]: valeur })
  }

  return (
    <div className="filter-bar" role="search">
      <div className="filter-bar__group">
        <label htmlFor="filtre-region">Région</label>
        <select
          id="filtre-region"
          value={filters.region}
          onChange={(e) => handleChange('region', e.target.value)}
        >
          <option value="">Toutes les régions</option>
          {regions.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <div className="filter-bar__group">
        <label htmlFor="filtre-categorie">Catégorie</label>
        <select
          id="filtre-categorie"
          value={filters.categorie}
          onChange={(e) => handleChange('categorie', e.target.value)}
        >
          <option value="">Toutes les catégories</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {(filters.region || filters.categorie) && (
        <button
          type="button"
          className="filter-bar__reset"
          onClick={() => onChange({ region: '', categorie: '' })}
        >
          Réinitialiser les filtres
        </button>
      )}
    </div>
  )
}
