**Suggested labels:** `good first issue`, `enhancement`, `backend`, `frontend`

## Summary

Add a new **College / Education API** module, following the module-per-domain pattern already
used by the Hospital API. Listed as "Coming Soon" in the UI and `PRESENTATION.md`.

## Why

Gives students/contributors a domain they're personally familiar with, and continues filling out
the roadmap of planned modules.

## Suggested Resources

- `students` — name, roll_number, department, year, cgpa
- `courses` — code, name, department, credits, instructor
- `enrollments` — student_id (FK), course_id (FK), semester, grade

## Acceptance Criteria

- [ ] `backend/app/models/education.py` — SQLAlchemy models for the resources above
- [ ] `backend/app/schemas/education.py` — Pydantic Create/Update/Response DTOs
- [ ] `backend/app/controllers/education_controller.py` — CRUD + search + pagination
- [ ] `backend/app/routes/education/` — one route file per resource, registered under
      `/api/v1/education`
- [ ] `backend/scripts/seed_education.py` — 6-8 realistic seed records per resource
- [ ] Response envelope matches existing modules: `{ status, data, meta }`
- [ ] Frontend: module flipped from "Coming Soon" to active, with resource pages and playground
- [ ] `README.md` updated with the new module's endpoint table

## References

- Pattern to follow: [backend/ARCHITECTURE.md](../backend/ARCHITECTURE.md) → "Adding a New API Module"
- Existing implementation to mirror: `backend/app/{models,schemas,controllers,routes}/healthcare*`
