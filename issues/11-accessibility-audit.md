**Suggested labels:** `enhancement`, `frontend`, `accessibility`

## Summary

Run an accessibility (a11y) pass over the frontend and fix issues found. No accessibility audit
has been done on the current UI (Home, API Library, Hospital API pages, Playground, Documentation,
Contribute, 404).

## Why

The project is aimed at students and learners (per `PRESENTATION.md` Slide 4); accessible UI is
both good practice and part of being a welcoming, educational open-source project.

## Scope

- Run automated checks (axe DevTools, Lighthouse accessibility score, or `eslint-plugin-jsx-a11y`)
  against each page
- Fix common issues: missing alt text, insufficient color contrast (check the brand red `#e50913`
  against backgrounds), missing form labels, keyboard navigation traps, missing focus states
- Verify the `Playground` component (interactive request/response UI) and `Sidebar` are fully
  keyboard-navigable
- Verify `Navbar` search and mobile menu are screen-reader friendly

## Acceptance Criteria

- [ ] Lighthouse accessibility score ≥ 90 on Home, API Library, and a Hospital resource page
- [ ] All interactive elements (buttons, links, form inputs) are reachable and operable via
      keyboard alone
- [ ] All images/icons have appropriate `alt` text or `aria-hidden` if decorative
- [ ] Color contrast meets WCAG AA for body text
- [ ] Findings and fixes documented in the PR description
