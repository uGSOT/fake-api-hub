**Suggested labels:** `enhancement`, `frontend`, `good first issue`

## Summary

Add a dark mode toggle to the frontend. The current design uses Tailwind CSS v4 with a fixed brand
color (`#e50913`) and light background; add a dark theme variant and a toggle in the `Navbar`.

## Why

Dark mode is a common expectation for developer-facing tools/portals, and this project positions
itself as a developer portal (per `README.md` and `PRESENTATION.md` Slide 8).

## Scope

- Add Tailwind dark mode support (`class` strategy recommended so it can be toggled at runtime)
- Add a toggle control in `frontend/src/components/Navbar.jsx`
- Persist the user's preference (e.g. `localStorage`, respecting `prefers-color-scheme` as the
  default)
- Audit key pages/components for readable contrast in dark mode: `Home`, `ApiLibrary`,
  `HospitalApiMain`, `HospitalApiResource`, `Playground`, `CodeBlock`, `Footer`

## Acceptance Criteria

- [ ] Toggle in the navbar switches the whole app between light/dark instantly
- [ ] Preference persists across page reloads
- [ ] All existing pages remain readable (no low-contrast text) in both modes
- [ ] No regression to the existing light theme (brand color, layout unchanged)
