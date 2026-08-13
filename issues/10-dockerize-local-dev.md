**Suggested labels:** `enhancement`, `infra`, `good first issue`

## Summary

Local setup currently requires manually installing Node, Python, and MySQL and wiring them
together (see `README.md` → Quick Start). Add Docker support so contributors can get a working
environment with one command.

## Why

Lowers the barrier to entry for new contributors — no need to install/configure MySQL locally
just to try the project or work on a new module (#1-#4).

## Scope

- `backend/Dockerfile` — Python 3.9+, installs `requirements.txt`, runs Uvicorn
- `frontend/Dockerfile` — Node 18+, installs deps, runs Vite dev server (or a production build
  served via a lightweight server)
- Root `docker-compose.yml` wiring together:
  - `mysql` service (with the schema from `backend/scripts/create_database.sql` applied on init)
  - `backend` service (depends on `mysql`, runs `scripts/seed.py` then Uvicorn)
  - `frontend` service (depends on `backend`)
- `.dockerignore` files for both frontend and backend

## Acceptance Criteria

- [ ] `docker compose up` brings up MySQL + backend + frontend with seed data, no manual steps
- [ ] Backend reachable at `http://127.0.0.1:8000/docs`, frontend at `http://localhost:5173`
- [ ] `README.md` updated with a "Docker Quick Start" section as an alternative to the manual setup
- [ ] Existing `DEPLOYMENT.md` (Vercel/Railway) left untouched — this is for local dev only
