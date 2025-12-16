# SEO & Search Implementation Plan

## Goals
- Make the site discoverable by search engines and provide internal search with related-content suggestions and filters.

## Sitemap & Indexing
- Generate `sitemap.xml` dynamically from published pages and submit to search engines.
- Create `robots.txt` to allow crawling of public pages and disallow admin or staging paths.

## Structured Data
- Add `schema.org` markup for `Organization`, `Article`, `Dataset`, `DatasetPublication`, and `LocalBusiness` where relevant.
- Add Open Graph and Twitter Card meta tags for social sharing.

## Page metadata templates
- Ensure each page has unique title, meta description, canonical URL, and language tags.

## Internal Search
- Recommended approaches:
  - Lightweight: Elasticlunr or Fuse.js for client-side search of blog/publication metadata.
  - Robust: Algolia or Meilisearch for hosted search with typo tolerance and instant suggestions.
- Required features: keyword search, faceted filters (year, author, topic, type), related-content suggestions on detail pages, and highlight snippets.

## Related-content algorithm
- Use tag + topic overlap: show items sharing the most tags or same category; fallback to keyword match.

## Analytics & monitoring
- Install privacy-friendly analytics (Matomo or Google Analytics with IP anonymization) and track search queries to improve results.

## Acceptance criteria
- `sitemap.xml` exists and lists public pages.
- Search returns relevant results with filters and a related-items block on content pages.
- Pages include structured data and social meta tags.
