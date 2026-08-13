**Suggested labels:** `enhancement`, `infra`, `ci`

## Summary

There is no `.github/workflows/` directory in the repo — no CI runs on pull requests today. Add a
GitHub Actions workflow that lints and tests both frontend and backend on every push/PR.

## Why

As the project takes contributions from multiple people adding new modules (#1-#4), CI is what
catches broken builds and lint errors before merge, rather than relying on manual review.

## Scope

- `.github/workflows/ci.yml` with two jobs:
  - **frontend**: `npm ci`, `npm run lint`, `npm run build`, and `npm test` once #7 lands
  - **backend**: set up Python 3.9+, `pip install -r requirements.txt`, and `pytest` once #6 lands
- Trigger on `push` to `main` and on `pull_request`
- Add a status badge to `README.md`

## Acceptance Criteria

- [ ] `.github/workflows/ci.yml` added
- [ ] Both jobs pass on a clean checkout
- [ ] Workflow runs automatically on PRs
- [ ] CI badge added to top of `README.md`

## Notes

This can land before #6/#7 are fully complete — start with lint + build, then add test steps once
those test suites exist.
