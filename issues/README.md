# Ready-to-Post Issues

This folder holds 12 pre-written GitHub issues for Fake API Hub, ready to be opened on the repo's
[Issues tab](https://github.com/uGSOT/fake-api-hub/issues). Each file is a standalone issue body —
copy-paste it into "New Issue", or use the GitHub CLI:

```bash
gh issue create \
  --title "Add Food Delivery API module (backend + frontend)" \
  --body-file issues/01-food-delivery-api-module.md \
  --label "good first issue,enhancement,backend,frontend"
```

Suggested labels are listed at the top of each file — create them first in the repo's Labels page
if they don't exist yet, or drop `--label` and add labels manually after creating the issue.

| # | File | Title | Type |
|---|------|-------|------|
| 1 | [01-food-delivery-api-module.md](01-food-delivery-api-module.md) | Add Food Delivery API module (backend + frontend) | New module |
| 2 | [02-college-education-api-module.md](02-college-education-api-module.md) | Add College / Education API module | New module |
| 3 | [03-transport-api-module.md](03-transport-api-module.md) | Add Transport API module | New module |
| 4 | [04-ecommerce-api-module.md](04-ecommerce-api-module.md) | Add E-commerce API module | New module |
| 5 | [05-add-license-file.md](05-add-license-file.md) | Add an open-source LICENSE file | Chore |
| 6 | [06-backend-pytest-suite.md](06-backend-pytest-suite.md) | Add automated backend test suite (pytest) | Testing |
| 7 | [07-frontend-vitest-suite.md](07-frontend-vitest-suite.md) | Add frontend unit tests (Vitest + React Testing Library) | Testing |
| 8 | [08-github-actions-ci.md](08-github-actions-ci.md) | Add GitHub Actions CI workflow | Infra |
| 9 | [09-dark-mode-toggle.md](09-dark-mode-toggle.md) | Add dark mode toggle to the frontend | Enhancement |
| 10 | [10-dockerize-local-dev.md](10-dockerize-local-dev.md) | Add Docker / docker-compose for local development | Infra |
| 11 | [11-accessibility-audit.md](11-accessibility-audit.md) | Accessibility (a11y) audit and fixes | Enhancement |
| 12 | [12-sorting-support-hospital-api.md](12-sorting-support-hospital-api.md) | Add sorting support to Hospital API list endpoints | Enhancement |

These were drafted by reviewing the current state of the repo (no LICENSE, no automated tests, no
CI, and six "Coming Soon" API modules referenced in the UI/PRESENTATION.md but not yet built), so
they reflect real gaps rather than generic filler.
