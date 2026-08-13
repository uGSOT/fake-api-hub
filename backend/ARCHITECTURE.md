# Backend Architecture

Detailed structure and conventions for the **Fake API Hub** FastAPI backend.

---

## Design Principles

1. **Thin routes** — HTTP layer only; no business logic in route files
2. **Controllers own logic** — CRUD, filtering, pagination live in controllers
3. **Models = database** — SQLAlchemy ORM maps to MySQL tables
4. **Schemas = API contract** — Pydantic validates requests and shapes responses
5. **Module-per-domain** — Each future API (Food, College, …) gets its own model/controller/route set

---

## Folder Structure

```text
backend/
├── app/
│   ├── main.py                    # FastAPI app, CORS, exception handlers, router registration
│   ├── config.py                  # pydantic-settings: reads .env
│   ├── database.py                # SQLAlchemy engine, SessionLocal, get_db()
│   │
│   ├── models/
│   │   ├── __init__.py
│   │   └── healthcare.py          # Doctor, Patient, Department, Appointment, Medicine, MedicalRecord
│   │
│   ├── schemas/
│   │   ├── common.py              # PaginatedResponse, SingleResponse, PaginationMeta
│   │   └── healthcare.py          # Create/Update/Response DTOs per resource
│   │
│   ├── controllers/
│   │   ├── __init__.py
│   │   └── healthcare_controller.py   # DoctorController, PatientController, …
│   │
│   ├── routes/
│   │   ├── health.py              # GET /health, GET /
│   │   └── hospital/
│   │       ├── __init__.py        # Aggregates all hospital routers
│   │       ├── doctors.py
│   │       ├── patients.py
│   │       ├── departments.py
│   │       ├── appointments.py
│   │       ├── medicines.py
│   │       └── medical_records.py
│   │
│   └── utils/
│       ├── pagination.py          # page/limit defaults and caps
│       └── response.py            # build_paginated_response, NotFoundError, search filter
│
├── scripts/
│   ├── seed.py                    # create_all() + insert mock data
│   └── create_database.sql        # CREATE DATABASE fake_api_hub
│
├── requirements.txt
├── .env.example
├── run.sh
├── README.md
└── ARCHITECTURE.md                # This file
```

---

## Request Flow

```text
HTTP Request
    │
    ▼
routes/hospital/doctors.py     ← Validates query params, injects DB session
    │
    ▼
controllers/healthcare_controller.py   ← DoctorController.list_doctors()
    │
    ├── utils/response.py      ← pagination, search filter
    ├── models/healthcare.py   ← SQLAlchemy query
    └── schemas/healthcare.py  ← DoctorResponse serialization
    │
    ▼
JSON Response { status, data, meta }
```

---

## Database Schema (Healthcare)

```text
doctors
├── id (PK)
├── name, specialization, experience
├── hospital, location, availability

patients
├── id (PK)
├── name, age, gender, blood_group, phone, hospital

departments
├── id (PK)
├── name, description, floor, head_doctor

appointments
├── id (PK)
├── patient_id (FK → patients)
├── doctor_id (FK → doctors)
├── appointment_date, appointment_time, status

medicines
├── id (PK)
├── name, category, manufacturer, price, stock

medical_records
├── id (PK)
├── patient_id (FK → patients)
├── doctor_id (FK → doctors)
├── diagnosis, record_date, prescription
```

**Seed data:** 8 records per table (matches frontend static data).

---

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `DB_HOST` | `127.0.0.1` | MySQL host |
| `DB_PORT` | `3306` | MySQL port |
| `DB_USER` | `root` | MySQL user |
| `DB_PASSWORD` | *(empty)* | MySQL password |
| `DB_NAME` | `fake_api_hub` | Database name |
| `DATABASE_URL` | — | Optional full URL override |
| `CORS_ORIGINS` | `http://localhost:5173,...` | Comma-separated allowed origins |
| `APP_DEBUG` | `true` | SQLAlchemy echo SQL when true |

Connection string format:

```text
mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}
```

---

## API Response Format

**List (paginated):**

```json
{
  "status": 200,
  "data": [ ... ],
  "meta": {
    "total": 8,
    "page": 1,
    "limit": 10,
    "totalPages": 1
  }
}
```

**Single resource:**

```json
{
  "status": 200,
  "data": { "id": 1, "name": "Dr. Ananya Sharma", ... }
}
```

**Error:**

```json
{
  "status": 404,
  "error": "Doctor with id 99 not found"
}
```

Query parameters on list endpoints: `search`, `page`, `limit`, and `specialization` (doctors only).

---

## Adding a New API Module

Example: **Food Delivery API**

1. **Model** — `app/models/food_delivery.py`
2. **Schema** — `app/schemas/food_delivery.py`
3. **Controller** — `app/controllers/food_delivery_controller.py`
4. **Routes** — `app/routes/food_delivery/restaurants.py`, etc.
5. **Register** in `app/main.py`:

   ```python
   from app.routes.food_delivery import router as food_router
   app.include_router(food_router, prefix="/api/v1")
   ```

6. **Seed** — `scripts/seed_food_delivery.py`

Keep the same response envelope (`status`, `data`, `meta`) for frontend consistency.

---

## Key Files Reference

| File | Responsibility |
|------|----------------|
| `main.py` | App factory, CORS middleware, global exception handlers |
| `database.py` | Engine, `get_db()` FastAPI dependency |
| `healthcare_controller.py` | All CRUD + search + pagination for 6 resources |
| `utils/response.py` | `NotFoundError`, `build_paginated_response`, `apply_search_filter` |
| `scripts/seed.py` | Idempotent seed — skips if doctors table has rows |

---

## Running & Testing

```bash
cd backend
source .venv/bin/activate
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

- Swagger UI: http://127.0.0.1:8000/docs
- ReDoc: http://127.0.0.1:8000/redoc
- Health: http://127.0.0.1:8000/health
