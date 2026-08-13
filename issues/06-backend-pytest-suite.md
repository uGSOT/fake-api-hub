**Suggested labels:** `enhancement`, `backend`, `testing`

## Summary

There is currently no automated test coverage for the FastAPI backend — no `tests/` directory, no
pytest config, nothing wired into CI (see also #8, the CI issue). Add a pytest-based test suite
covering the Hospital API.

## Why

Manual testing via Swagger UI doesn't scale as more modules are added by contributors (see #1-#4).
A test suite catches regressions and gives new contributors a template to follow when they add
their own module.

## Scope

- Set up `pytest` + `httpx`/`TestClient` + a test database (SQLite in-memory or a dedicated MySQL
  test schema)
- Cover, for each Hospital resource (doctors, patients, departments, appointments, medicines,
  medical records):
  - List with pagination
  - Get by ID (found + 404 case)
  - Create (valid + validation error case)
  - Update
  - Delete
- Cover `GET /health`

## Acceptance Criteria

- [ ] `backend/tests/` directory with test modules mirroring `app/routes/hospital/`
- [ ] `backend/pytest.ini` or `pyproject.toml` pytest config
- [ ] Test dependencies added to `backend/requirements.txt` (or a separate `requirements-dev.txt`)
- [ ] `backend/README.md` updated with a "Running tests" section
- [ ] All tests pass locally via `pytest`
