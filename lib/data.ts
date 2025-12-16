export type Publication = {
  id: string
  title: string
  authors: string
  year?: number
  snippet?: string
  abstract?: string
  pdf?: string
}

export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "Shifting Patterns of Immunization Uptake During COVID-19 in Sidama",
    authors: "Gedefaw A., Asefa A., et al.",
    year: 2025,
    snippet:
      "Study of immunization service utilization during the COVID-19 pandemic in Sidama region.",
    abstract:
      "This study explores how COVID-19 affected routine immunization access and coverage in Sidama, with policy
recommendations to strengthen resilience.",
    pdf: "/publications/pub-1.pdf",
  },
  {
    id: "pub-2",
    title: "Nutrition and NCDs: A Silent Crisis",
    authors: "Health Evidence Team",
    year: 2024,
    snippet: "A policy-focused review on nutrition's role in non-communicable disease burden.",
    abstract: "A review of nutrition-related drivers of NCDs and recommended interventions for health systems.",
    pdf: "/publications/pub-2.pdf",
  },
]

export const buildSearchIndex = () => {
  const items = [] as Array<{
    id: string
    title: string
    type: string
    year?: number
    snippet?: string
  }>

  for (const p of publications) {
    items.push({ id: p.id, title: p.title, type: "Publication", year: p.year, snippet: p.snippet })
  }

  // Could add blog posts and other resources here in the future.
  return items
}
