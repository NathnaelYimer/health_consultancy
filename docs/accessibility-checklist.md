# Accessibility Checklist (WCAG 2.1 AA)

This file lists requirements and simple acceptance tests to achieve WCAG 2.1 AA for core site features.

## General
- Provide skip-to-content link visible on keyboard focus.
- Page titles and landmark roles present on all pages.

## Perceptible
- All non-text content has appropriate alt text.
- Videos have captions and transcripts.
- Provide high contrast color combinations; test with color-blind simulators.

## Operable
- Keyboard navigation works for all interactive controls.
- Focus order is logical; visible focus indicator.
- No content that flashes more than three times per second.

## Understandable
- Forms have labels and inline validation with clear error messages.
- Language declared for each page (html lang attribute) and for content blocks when language differs.

## Robust
- Use semantic HTML and ARIA only where necessary; test with screen readers (NVDA, VoiceOver).

## Acceptance tests (core flows)
- Homepage: run keyboard-only navigation through top nav, hero CTAs, and footer — all reachable and actionable.
- Article page: screen reader reads title, author, publication date, and nav to related content.
- Consultation form: labels present, errors announced to assistive tech, consent checkbox focusable.

## Tools & process
- Automated scans: axe-core, Lighthouse accessibility checks.
- Manual tests: keyboard-only, screen-readers (NVDA/VoiceOver), color contrast tools.
- Include accessibility as part of PR checklist and run basic checks on CI for core pages.
