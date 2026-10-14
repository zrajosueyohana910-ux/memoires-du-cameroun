/**
 * Filtre une liste d'items selon des critères région et/ou catégorie.
 * Une valeur vide signifie "tous".
 */
export function filterItems(items, filters) {
  return items.filter((item) => {
    const matchRegion = !filters.region || item.region === filters.region
    const matchCategorie = !filters.categorie || item.categorie === filters.categorie
    return matchRegion && matchCategorie
  })
}

/**
 * Extrait les valeurs uniques d'un champ donné (utile pour peupler les <select>).
 */
export function uniqueValues(items, champ) {
  return [...new Set(items.map((item) => item[champ]).filter(Boolean))].sort()
}

/**
 * Compte le nombre de régions distinctes dans une liste de fiches.
 */
export function countRegions(items) {
  return new Set(items.map((item) => item.region).filter(Boolean)).size
}
