# Contributing to Fake API Hub

Thanks for your interest in contributing! Fake API Hub is a beginner-friendly, open-source
developer portal that ships free mock REST APIs for real-world business domains. It's built to
grow one module at a time — this guide explains how to add to it.

---

## Ways to Contribute

- **Add a new API module** — Food Delivery, College, Transport, E-commerce, Hotel, Banking, etc.
  (see [Adding a New API Module](#adding-a-new-api-module) below)
- **Add a new resource** to an existing module (e.g. a `Pharmacies` resource under Hospital)
- **Report bugs** or gaps in behavior
- **Improve documentation** (README, ARCHITECTURE.md, inline docstrings/comments)
- **Write tests** — the project currently has no automated test suite (backend or frontend)
- **Improve the frontend** — accessibility, responsiveness, new components, UX polish
- **Triage issues** — reproduce bugs, ask clarifying questions, suggest labels

Check the [issues](https://github.com/uGSOT/fake-api-hub/issues) tab for open work, especially
anything labeled `good first issue` or `help wanted`.

---

## Ground Rules

- Be respectful and constructive in issues, PRs, and reviews.
- Keep pull requests focused — one feature/fix per PR is easier to review than a bundle.
- Match the existing code style and structure rather than introducing a new pattern.
- If you're proposing a large change (new module, architecture change), open an issue first to
  align on the approach before writing code.

---

## Project Structure

```text
fake-api-hub/
├── frontend/     React 19 + Vite + Tailwind developer portal
└── backend/      FastAPI + MySQL + SQLAlchemy API server
```

See the root [README.md](README.md) for the full layout and [backend/ARCHITECTURE.md](backend/ARCHITECTURE.md)
for backend conventions.

---

## Development Setup

### Prerequisites

- Node.js 18+ and npm
- Python 3.9+
- MySQL 8+

### Backend

```bash
cd backend
cp .env.example .env
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mysql -u root < scripts/create_database.sql
python scripts/seed.py
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Before opening a PR that touches the frontend, run:

```bash
npm run lint
npm run format
```

---

## Adding a New API Module

The backend follows a **module-per-domain** pattern (`routes` → `controllers` → `models` →
`schemas`) so new business domains can be added without touching existing code. Example for a
**Food Delivery API**:

1. **Model** — `backend/app/models/food_delivery.py` (SQLAlchemy tables)
2. **Schema** — `backend/app/schemas/food_delivery.py` (Pydantic request/response DTOs)
3. **Controller** — `backend/app/controllers/food_delivery_controller.py` (CRUD, search, pagination)
4. **Routes** — `backend/app/routes/food_delivery/` (one file per resource, e.g. `restaurants.py`)
5. **Register the router** in `backend/app/main.py`:
   ```python
   from app.routes.food_delivery import router as food_router
   app.include_router(food_router, prefix="/api/v1")
   ```
6. **Seed data** — `backend/scripts/seed_food_delivery.py`, 6-8 realistic records per resource
7. **Frontend** — add the module card in `frontend/src/data`, flip it from "Coming Soon" to
   active once the API is live, and wire up its resource pages

Keep the response envelope consistent with the rest of the API:

```json
{ "status": 200, "data": [ ... ], "meta": { "total": 8, "page": 1, "limit": 10, "totalPages": 1 } }
```

Full conventions (folder layout, request flow, environment variables, error format) are documented
in [backend/ARCHITECTURE.md](backend/ARCHITECTURE.md).

---

## Commit & Branch Conventions

- Branch names: `feat/food-delivery-api`, `fix/doctor-pagination`, `docs/update-readme`
- Commit messages: short, imperative summary (e.g. `Add Food Delivery API module`), with more
  detail in the body if needed
- Keep commits scoped — avoid mixing unrelated changes in one commit

---

## Pull Request Process

1. Fork the repo and create your branch from `main`.
2. Make your changes, following the module pattern and existing code style.
3. Test manually (`/docs` Swagger UI for backend, the running app for frontend) — there is no
   automated test suite yet, so describe what you tested in the PR description.
4. Run `npm run lint` / `npm run format` for frontend changes.
5. Update relevant docs (`README.md`, `backend/ARCHITECTURE.md`, `frontend/README.md`) if your
   change affects setup, routes, or structure.
6. Open a PR against `main` with:
   - A clear description of what changed and why
   - Screenshots/GIFs for UI changes
   - Reference to the issue it closes (e.g. `Closes #12`)
7. A maintainer will review and may request changes before merging.

---

## Reporting Bugs

Open an issue with:

- What you expected to happen vs. what actually happened
- Steps to reproduce
- Environment (OS, Node/Python version, browser)
- Relevant logs or screenshots

## Suggesting Features

Open an issue describing the problem it solves, who it's for, and (if you have one) a rough
approach. For a new API module, sketch the resources and key fields — see the module list in
[PRESENTATION.md](PRESENTATION.md) for domains already planned (Food Delivery, College, Transport,
E-commerce, Hotel, Banking, Travel, Job Portal).

---

## Questions?

Open a [discussion or issue](https://github.com/uGSOT/fake-api-hub/issues) — there are no silly
questions, this project is meant to be a friendly place to learn full-stack development.
