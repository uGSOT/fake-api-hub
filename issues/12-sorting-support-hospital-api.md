**Suggested labels:** `enhancement`, `backend`, `good first issue`

## Summary

Hospital API list endpoints currently support `search`, `page`, `limit`, and (for doctors only)
`specialization` — see `backend/ARCHITECTURE.md`. There is no way to sort results (e.g. doctors by
experience, medicines by price, appointments by date).

## Why

Sorting is a common, expected feature of list endpoints and is a self-contained addition that
doesn't require touching the module architecture — a good task for a contributor getting familiar
with the codebase before building a full new module (#1-#4).

## Scope

- Add `sort_by` and `sort_order` (`asc`/`desc`) query params to the six Hospital list endpoints:
  `doctors`, `patients`, `departments`, `appointments`, `medicines`, `medical-records`
- Validate `sort_by` against an allowlist of sortable fields per resource (reject unknown fields
  with a 422, don't allow arbitrary column injection)
- Update `backend/app/utils/response.py` / `backend/app/controllers/healthcare_controller.py`
  accordingly

## Acceptance Criteria

- [ ] `GET /api/v1/hospital/doctors?sort_by=experience&sort_order=desc` returns doctors sorted by
      experience, highest first
- [ ] Invalid `sort_by` values return a clear 422 error, not a 500
- [ ] Sorting composes correctly with existing `search` and pagination params
- [ ] Swagger docs (`/docs`) reflect the new query params
- [ ] `README.md` Hospital API table updated to mention sorting support
