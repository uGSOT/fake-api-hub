# Fake API Hub — Presentation & Sharing Material

Use this document as the **source for slides**, demos, README intros, and stakeholder briefings. Each section maps to one or more PowerPoint / Google Slides.

---

## Slide 1 — Title

**Fake API Hub**  
*Build Faster with Ready-to-Use Mock APIs*

- Open-source developer platform
- Free mock REST APIs for real-world business domains
- GitHub: [github.com/uGSOT/fake-api-hub](https://github.com/uGSOT/fake-api-hub)

---

## Slide 2 — The Problem

**Frontend developers often wait for backends.**

- Backend teams are busy or not ready
- Students need realistic APIs for projects
- Testing UI flows requires believable data
- Setting up databases and servers takes time

**Result:** Slower development, blocked UI work, unrealistic demos.

---

## Slide 3 — Our Solution

**Fake API Hub** = A developer portal + mock API platform

Developers can:

1. **Discover** APIs by category (Healthcare, Food, Education, …)
2. **Search** APIs and resources globally
3. **Browse** documentation with parameters and examples
4. **Test** endpoints in an interactive playground
5. **Copy** cURL, JavaScript, Python code snippets
6. **Contribute** new modules as open-source contributors

---

## Slide 4 — Target Users

| Audience | Use Case |
|----------|----------|
| Frontend developers | Build UI before backend exists |
| Students & learners | Practice REST API integration |
| Hackathon teams | Quick realistic data for demos |
| Open-source contributors | Add new business API modules |
| Educators | Teach API consumption patterns |

---

## Slide 5 — Platform Vision

**Today:** Hospital Healthcare API (fully live)

**Coming Soon (UI placeholders):**

- Food Delivery API
- College / Education API
- Transport API
- E-commerce API
- Hotel / Hospitality API
- Banking / Finance API
- Travel API
- Job Portal API

Architecture supports **unlimited modules** without redesigning the frontend.

---

## Slide 6 — Tech Stack Overview

```text
┌──────────────────┐
│   React + Vite   │  Developer portal UI
│   Tailwind v4    │  Modern, responsive design
└────────┬─────────┘
         │ REST / JSON
┌────────▼─────────┐
│     FastAPI      │  Python backend, auto OpenAPI docs
│     Uvicorn      │
└────────┬─────────┘
         │ SQLAlchemy
┌────────▼─────────┐
│      MySQL       │  Persistent mock data
└──────────────────┘
```

| Component | Technology |
|-----------|------------|
| Frontend | React 19, Vite 8, React Router 7, Tailwind CSS v4 |
| Backend | FastAPI, Python 3.9+, Pydantic v2 |
| Database | MySQL 9.x |
| API Docs | Swagger UI at `/docs` |

---

## Slide 7 — System Architecture

```text
                         ┌─────────────────┐
                         │   User Browser  │
                         └────────┬────────┘
                                  │
                    localhost:5173 │ (Vite dev)
                                  ▼
                         ┌─────────────────┐
                         │ React Frontend  │
                         │  - Home         │
                         │  - API Library  │
                         │  - Hospital API │
                         │  - Playground   │
                         └────────┬────────┘
                                  │ /api → proxy
                                  ▼
                         ┌─────────────────┐
                         │ FastAPI Backend │
                         │  routes         │
                         │  controllers    │
                         │  models         │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │ MySQL Database  │
                         │  fake_api_hub   │
                         └─────────────────┘
```

---

## Slide 8 — Frontend Features

### Pages & Routes

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, search, categories, how-it-works |
| API Library | `/apis` | Filterable list of all APIs |
| Hospital API | `/apis/hospital` | Demo module overview |
| Resources | `/apis/hospital/:resource` | Endpoints + docs + playground |
| Categories | `/categories` | Browse by business domain |
| Documentation | `/documentation` | Getting started, HTTP methods |
| Contribute | `/contribute` | Open-source guide |
| 404 | `*` | Professional error page |

### UI Components

- Sticky Navbar with global search
- API cards (Active / Coming Soon badges)
- Category cards with icons
- Endpoint documentation cards
- Code blocks with copy
- Interactive API Playground
- Hospital resource sidebar
- Dark navy footer

### Design

- **Brand color:** Red `#e50913`
- **Font:** Plus Jakarta Sans
- **Style:** Modern developer portal (not e-commerce)

---

## Slide 9 — Hospital API (Live Demo Module)

**Base URL:** `https://fake-api-hub.com/api/v1/hospital`  
*(Local: `http://127.0.0.1:8000/api/v1/hospital`)*

**6 Resources · 24+ Endpoints · JSON · REST · v1.0**

| Resource | Sample Endpoints |
|----------|------------------|
| Doctors | `GET /doctors`, `GET /doctors/{id}`, filter by specialization |
| Patients | Full CRUD |
| Departments | `GET /departments`, `GET /departments/{id}` |
| Appointments | Full CRUD |
| Medicines | `GET /medicines`, `GET /medicines/{id}` |
| Medical Records | `GET /medical-records`, `GET /medical-records/{id}` |

**Seed data:** 8 realistic records per resource.

---

## Slide 10 — Sample API Response

**Request:**

```bash
GET /api/v1/hospital/doctors?limit=2&specialization=Cardiology
```

**Response:**

```json
{
  "status": 200,
  "data": [
    {
      "id": 1,
      "name": "Dr. Ananya Sharma",
      "specialization": "Cardiology",
      "experience": 8,
      "hospital": "City Care Hospital",
      "location": "New Delhi",
      "availability": "Mon-Fri"
    }
  ],
  "meta": {
    "total": 2,
    "page": 1,
    "limit": 2,
    "totalPages": 1
  }
}
```

---

## Slide 11 — Backend Architecture

**Layered pattern for scalability:**

```text
routes/       → HTTP endpoints (thin)
controllers/  → Business logic, queries
models/       → SQLAlchemy ORM tables
schemas/      → Pydantic validation
utils/        → Pagination, response helpers
```

**Why this matters for open source:**

- New contributors add a module without touching existing code
- Clear separation of concerns
- Consistent API response format across all modules

See: `backend/ARCHITECTURE.md`

---

## Slide 12 — Database Schema (Healthcare)

| Table | Key Fields |
|-------|------------|
| `doctors` | name, specialization, experience, hospital, location |
| `patients` | name, age, gender, blood_group, phone |
| `departments` | name, description, floor, head_doctor |
| `appointments` | patient_id, doctor_id, date, time, status |
| `medicines` | name, category, manufacturer, price, stock |
| `medical_records` | patient_id, doctor_id, diagnosis, prescription |

Foreign keys link appointments and records to patients and doctors.

---

## Slide 13 — User Journey / Demo Flow

```text
HOME
  │
  ├── Search "Hospital"
  ├── Browse Categories → Healthcare
  └── APIs → Hospital API
                │
                ├── Overview (stats, base URL)
                ├── Doctors → Endpoints
                │     ├── View documentation
                │     ├── Copy cURL / JS / Python
                │     └── Try API (Playground)
                ├── Patients
                ├── Departments
                └── … other resources
```

**Demo talking points:**

1. Search from home page
2. Open Hospital API
3. Click Doctors resource
4. Expand an endpoint
5. Send request in Playground
6. Show live JSON from MySQL backend

---

## Slide 14 — Developer Experience

### Frontend developer

```bash
cd frontend && npm install && npm run dev
# → http://localhost:5173
```

### Backend developer

```bash
cd backend && source .venv/bin/activate
python scripts/seed.py
uvicorn app.main:app --reload --port 8000
# → http://127.0.0.1:8000/docs
```

### Interactive API docs

- **Swagger UI** at `/docs` — try every endpoint in browser
- **ReDoc** at `/redoc` — readable reference

---

## Slide 15 — Open Source & Contribution

**What contributors can add:**

- New API module (e.g. Food Delivery)
- New resource within a module
- Mock datasets
- REST endpoints
- Documentation
- Tests
- Frontend improvements

**Contribution workflow:**

1. Choose a business domain
2. Create data model
3. Add mock data + REST endpoints
4. Write documentation
5. Open Pull Request

**Built by the community, for the community.**

---

## Slide 16 — Project Repository Layout

```text
fake-api-hub/
├── README.md              Project overview
├── PRESENTATION.md        This file (slide source)
├── frontend/              React app
│   ├── src/components/    10+ reusable components
│   ├── src/pages/         8 route pages
│   └── README.md          Full UI spec (1400+ lines)
└── backend/               FastAPI + MySQL
    ├── app/               Application code
    ├── scripts/           Seed & DB setup
    ├── README.md          Setup guide
    └── ARCHITECTURE.md    Structure deep-dive
```

---

## Slide 17 — Current Status & Milestones

| Milestone | Status |
|-----------|--------|
| Frontend UI (all pages) | ✅ Complete |
| Hospital API UI + static data | ✅ Complete |
| FastAPI backend | ✅ Complete |
| MySQL integration | ✅ Complete |
| Seed data (8 × 6 tables) | ✅ Complete |
| Frontend ↔ Backend connection | ✅ Complete |
| Swagger documentation | ✅ Complete |
| Auth / login | ⏳ Not in scope (v1) |
| Additional API modules | 🔜 Coming Soon |
| Production deployment | 🔜 Future |

---

## Slide 18 — Key Differentiators

1. **Real developer portal UX** — not just raw JSON endpoints
2. **Open-source & extensible** — module-based architecture
3. **Full stack demo** — React + FastAPI + MySQL working together
4. **Educational** — ideal for students and hackathons
5. **Production-ready patterns** — layered backend, typed schemas, pagination
6. **Consistent API contract** — same response shape across all resources

---

## Slide 19 — Live Demo Checklist

Before presenting, verify:

- [ ] MySQL running: `brew services list | grep mysql`
- [ ] Backend: `curl http://127.0.0.1:8000/health`
- [ ] Doctors API: `curl "http://127.0.0.1:8000/api/v1/hospital/doctors?limit=3"`
- [ ] Frontend: http://localhost:5173
- [ ] Swagger: http://127.0.0.1:8000/docs
- [ ] Playground returns live data from MySQL

---

## Slide 20 — Q&A / Contact

**Fake API Hub**

- GitHub: [github.com/uGSOT/fake-api-hub](https://github.com/uGSOT/fake-api-hub)
- Stack: React · FastAPI · MySQL
- License: Open Source

**Questions?**

- How do I add a new API module? → See `backend/ARCHITECTURE.md`
- How do I run locally? → See root `README.md`
- How do I contribute? → `/contribute` page in the app

---

## Appendix A — Full API Endpoint List

**Prefix:** `/api/v1/hospital`

| Method | Path | Description |
|--------|------|-------------|
| GET | `/doctors` | List doctors (search, specialization, pagination) |
| GET | `/doctors/{id}` | Get doctor by ID |
| POST | `/doctors` | Create doctor |
| PUT | `/doctors/{id}` | Update doctor |
| DELETE | `/doctors/{id}` | Delete doctor |
| GET | `/patients` | List patients |
| GET | `/patients/{id}` | Get patient |
| POST | `/patients` | Create patient |
| PUT | `/patients/{id}` | Update patient |
| DELETE | `/patients/{id}` | Delete patient |
| GET | `/departments` | List departments |
| GET | `/departments/{id}` | Get department |
| POST | `/departments` | Create department |
| PUT | `/departments/{id}` | Update department |
| DELETE | `/departments/{id}` | Delete department |
| GET | `/appointments` | List appointments |
| GET | `/appointments/{id}` | Get appointment |
| POST | `/appointments` | Create appointment |
| PUT | `/appointments/{id}` | Update appointment |
| DELETE | `/appointments/{id}` | Delete appointment |
| GET | `/medicines` | List medicines |
| GET | `/medicines/{id}` | Get medicine |
| POST | `/medicines` | Create medicine |
| PUT | `/medicines/{id}` | Update medicine |
| DELETE | `/medicines/{id}` | Delete medicine |
| GET | `/medical-records` | List medical records |
| GET | `/medical-records/{id}` | Get medical record |
| POST | `/medical-records` | Create medical record |
| PUT | `/medical-records/{id}` | Update medical record |
| DELETE | `/medical-records/{id}` | Delete medical record |
| GET | `/health` | Health check |

---

## Appendix B — Environment Setup Summary

| Step | Command |
|------|---------|
| Clone | `git clone https://github.com/uGSOT/fake-api-hub.git` |
| DB create | `mysql -u root < backend/scripts/create_database.sql` |
| Backend env | `cp backend/.env.example backend/.env` |
| Backend deps | `pip install -r backend/requirements.txt` |
| Seed | `python backend/scripts/seed.py` |
| Run backend | `uvicorn app.main:app --reload --port 8000` |
| Frontend env | `cp frontend/.env.example frontend/.env` |
| Run frontend | `npm run dev` |

---

## Appendix C — Suggested PPT Structure (20 slides)

1. Title  
2. Problem  
3. Solution  
4. Target Users  
5. Vision / Roadmap  
6. Tech Stack  
7. Architecture Diagram  
8. Frontend Features  
9. Hospital API Overview  
10. Sample API Response  
11. Backend Architecture  
12. Database Schema  
13. User Journey / Demo Flow  
14. Developer Experience  
15. Open Source & Contribution  
16. Repository Layout  
17. Status & Milestones  
18. Key Differentiators  
19. Live Demo Checklist  
20. Q&A / GitHub Link  

---

*Generated for Fake API Hub — use freely for presentations, workshops, and project submissions.*
