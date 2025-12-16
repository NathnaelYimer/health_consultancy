
# Localization Strategy (English-first)

This project will be English-only for the initial rollout. The site and all published content will default to English (`en`) and the content repository will contain English source files.

## Rationale
- Prioritize a single, well-maintained language to reduce translation overhead, ensure medical accuracy, and speed time-to-launch.

## Approach
- Use Next.js default routing with English as the canonical locale (`/`).
- Store content in `content/en/` as Markdown/MDX files and keep UI strings in a single English resource file.

## Adding more languages later
- The repository and content structure will be prepared to accept additional locales later (directory-per-locale and locale-aware routing). When ready, add translated content, a language switcher, and locale-aware indexing for search.

## Accessibility & search
- Ensure `lang="en"` on all pages and provide alt text, captions, and transcripts in English.
- Index English content for the site search; related-content suggestions will operate on English tags and taxonomy.

## Acceptance criteria
- All core pages live in English under `content/en/` and the site serves English content by default. There is a clear, documented path to add languages later.

