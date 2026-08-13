# Fake API Hub — Backend

FastAPI + MySQL backend for the **Hospital Healthcare** module.

**API docs:** http://127.0.0.1:8000/docs  
**Architecture deep-dive:** [ARCHITECTURE.md](ARCHITECTURE.md)

---

## Quick Start

### Prerequisites

- Python 3.9+
- MySQL 8+ (macOS: `brew install mysql && brew services start mysql`)

### Setup

```bash
cd backend
cp .env.example .env          # Set DB_PASSWORD if your MySQL root has one
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# Create database (once)
mysql -u root < scripts/create_database.sql

# Create tables + seed mock data
python scripts/seed.py

# Start server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Verify

```bash
curl http://127.0.0.1:8000/health
curl "http://127.0.0.1:8000/api/v1/hospital/doctors?limit=3"
```

---

## Architecture

```text
routes/        → HTTP endpoints (thin layer)
controllers/   → Business logic & database queries
models/        → SQLAlchemy ORM tables
schemas/       → Pydantic request/response validation
utils/         → Pagination, response helpers
scripts/       → Database seeding
```

See [ARCHITECTURE.md](ARCHITECTURE.md) for folder structure, request flow, and how to add new API modules.

---

## API Reference

**Prefix:** `/api/v1/hospital`

| Resource | Endpoints |
|----------|-----------|
| Doctors | GET list, GET by id, POST, PUT, DELETE |
| Patients | GET list, GET by id, POST, PUT, DELETE |
| Departments | GET list, GET by id, POST, PUT, DELETE |
| Appointments | GET list, GET by id, POST, PUT, DELETE |
| Medicines | GET list, GET by id, POST, PUT, DELETE |
| Medical Records | GET list, GET by id, POST, PUT, DELETE |

**List query params:** `search`, `page`, `limit`, `specialization` (doctors only)

---

## Environment Variables

Copy `.env.example` to `.env`:

| Variable | Default | Description |
|----------|---------|-------------|
| `DB_HOST` | `127.0.0.1` | MySQL host |
| `DB_PORT` | `3306` | MySQL port |
| `DB_USER` | `root` | MySQL user |
| `DB_PASSWORD` | *(empty)* | MySQL password |
| `DB_NAME` | `fake_api_hub` | Database name |
| `CORS_ORIGINS` | Vite dev URLs | Comma-separated origins |

---

## Connect Frontend

In `frontend/.env`:

```env
VITE_API_BASE_URL=/api
```

Vite proxies `/api` → `http://127.0.0.1:8000` (see `frontend/vite.config.ts`).

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Can't connect to MySQL | `brew services start mysql` |
| Access denied | Check `DB_PASSWORD` in `.env` |
| Unknown database | Run `scripts/create_database.sql` |
| Empty API responses | Run `python scripts/seed.py` |
| `mysql` not found | Use `/opt/homebrew/bin/mysql` on Apple Silicon |

---

## Adding New Modules

Follow the pattern in [ARCHITECTURE.md](ARCHITECTURE.md#adding-a-new-api-module) — add models, schemas, controllers, routes, and register in `main.py`.
