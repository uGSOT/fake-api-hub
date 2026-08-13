# Fake API Hub

An open-source platform that provides **free mock REST APIs** for real-world business domains. Developers can discover, browse, document, and test APIs without waiting for a backend.

**Live demo module:** Hospital Healthcare API (fully implemented)  
**Repository:** [github.com/uGSOT/fake-api-hub](https://github.com/uGSOT/fake-api-hub)

---

## What is Fake API Hub?

Fake API Hub helps frontend developers, students, and contributors:

- Discover and search mock APIs by category
- Read API documentation and endpoint specs
- Test endpoints in an interactive playground
- Copy sample requests and JSON responses
- Contribute new API modules, datasets, and docs

Future modules (Food Delivery, College, Transport, E-commerce, etc.) appear as **Coming Soon** in the UI.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19, Vite 8, Tailwind CSS v4, React Router |
| Backend | FastAPI, Python 3.9+, Uvicorn |
| Database | MySQL 9.x |
| ORM | SQLAlchemy 2.x |
| Validation | Pydantic v2 |

---

## Project Structure

```text
fake-api-hub/
├── README.md                 # This file — project overview
├── PRESENTATION.md           # Sharing / PPT source material
├── frontend/                 # React developer portal
│   ├── src/
│   │   ├── components/       # Navbar, ApiCard, Playground, etc.
│   │   ├── pages/            # Home, APIs, Hospital, Docs, Contribute
│   │   ├── layouts/          # MainLayout
│   │   ├── data/             # Static fallback mock data
│   │   └── services/         # apiService.js — backend client
│   └── README.md             # Full UI/UX specification
├── backend/                  # FastAPI + MySQL
│   ├── app/
│   │   ├── main.py           # FastAPI app entry
│   │   ├── config.py         # Environment settings
│   │   ├── database.py       # SQLAlchemy engine & sessions
│   │   ├── models/           # Database tables
│   │   ├── schemas/          # Pydantic DTOs
│   │   ├── controllers/      # Business logic
│   │   ├── routes/           # HTTP endpoints
│   │   └── utils/            # Pagination, response helpers
│   ├── scripts/              # seed.py, create_database.sql
│   ├── ARCHITECTURE.md       # Backend structure deep-dive
│   └── README.md             # Backend setup guide
└── .gitignore
```

---

## Quick Start

### Prerequisites

- **Node.js 18+** and npm
- **Python 3.9+**
- **MySQL 8+** (Homebrew on macOS: `brew install mysql`)

### 1. Clone the repository

```bash
git clone https://github.com/uGSOT/fake-api-hub.git
cd fake-api-hub
```

### 2. Backend setup

```bash
cd backend
cp .env.example .env          # Edit DB_PASSWORD if needed
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# Create database (once)
mysql -u root < scripts/create_database.sql

# Create tables + seed data
python scripts/seed.py

# Start API server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

API docs: **http://127.0.0.1:8000/docs**

### 3. Frontend setup

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

App: **http://localhost:5173**

The Vite dev server proxies `/api` → `http://127.0.0.1:8000`.

---

## Hospital API

**Base URL:** `/api/v1/hospital`

| Resource | Path | Methods |
|----------|------|---------|
| Doctors | `/doctors` | GET, POST, PUT, DELETE |
| Patients | `/patients` | GET, POST, PUT, DELETE |
| Departments | `/departments` | GET, POST, PUT, DELETE |
| Appointments | `/appointments` | GET, POST, PUT, DELETE |
| Medicines | `/medicines` | GET, POST, PUT, DELETE |
| Medical Records | `/medical-records` | GET, POST, PUT, DELETE |

**Example:**

```bash
curl "http://127.0.0.1:8000/api/v1/hospital/doctors?limit=3"
curl http://127.0.0.1:8000/health
```

---

## Frontend Routes

| Route | Page |
|-------|------|
| `/` | Home — hero, search, categories, featured APIs |
| `/apis` | API Library with filters |
| `/apis/hospital` | Hospital API overview |
| `/apis/hospital/:resource` | Resource endpoints & playground |
| `/categories` | Browse by category |
| `/documentation` | Getting started guide |
| `/contribute` | Open-source contribution guide |

---

## Architecture

```text
┌─────────────────┐     /api proxy      ┌─────────────────┐     SQLAlchemy     ┌─────────┐
│  React Frontend │ ──────────────────► │  FastAPI Backend │ ────────────────► │  MySQL  │
│  (Vite :5173)   │                     │  (Uvicorn :8000) │                   │         │
└─────────────────┘                     └─────────────────┘                   └─────────┘
```

**Backend pattern:** `routes` → `controllers` → `models` (see [backend/ARCHITECTURE.md](backend/ARCHITECTURE.md))

---

## Documentation Index

| Document | Purpose |
|----------|---------|
| [README.md](README.md) | Project overview & quick start |
| [PRESENTATION.md](PRESENTATION.md) | Slide deck / sharing material |
| [frontend/README.md](frontend/README.md) | Complete UI/UX specification |
| [backend/README.md](backend/README.md) | Backend setup & API reference |
| [backend/ARCHITECTURE.md](backend/ARCHITECTURE.md) | Backend folder structure & patterns |

---

## Contributing

We welcome contributions:

- New API modules (Food, College, Transport, …)
- Mock datasets and REST endpoints
- Documentation and tests
- Frontend improvements

See the **Contribute** page in the app or [frontend/README.md](frontend/README.md) for the full workflow.

---

## License

Open-source — built for learning and community contribution.
