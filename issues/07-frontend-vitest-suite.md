**Suggested labels:** `enhancement`, `frontend`, `testing`

## Summary

There is currently no automated test coverage for the React frontend. Add unit/component tests
using Vitest + React Testing Library, matching the Vite-based toolchain already in use.

## Why

Components like `ApiCard`, `EndpointCard`, `Playground`, and `SearchBar` are reused across pages;
tests protect them from regressions as new API modules (see #1-#4) plug into the same UI.

## Scope

Start with the components most reused across pages:

- `frontend/src/components/ApiCard.jsx`
- `frontend/src/components/CategoryCard.jsx`
- `frontend/src/components/CodeBlock.jsx`
- `frontend/src/components/EndpointCard.jsx`
- `frontend/src/components/SearchBar.jsx`
- `frontend/src/components/Playground.jsx`

## Acceptance Criteria

- [ ] Add `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom` as dev
      dependencies
- [ ] Add a `test` script to `frontend/package.json`
- [ ] Add Vitest config (in `vite.config.ts` or a separate `vitest.config.ts`)
- [ ] At least one test file per component listed above, covering render + key interaction
      (e.g. `SearchBar` fires a search callback, `CodeBlock` copy button copies to clipboard)
- [ ] `frontend/README.md` updated with a "Running tests" section
- [ ] All tests pass locally via `npm test`
