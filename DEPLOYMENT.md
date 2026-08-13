# Deploy Fake API Hub — Vercel + Railway

**Recommended stack:**

| Part | Platform | Why |
|------|----------|-----|
| React frontend | **Vercel** | Static SPA, free tier, auto HTTPS |
| FastAPI backend | **Railway** | Long-running Python + MySQL connections |
| MySQL database | **Railway** | You already have this provisioned |

> **Note:** Vercel is not ideal for FastAPI + MySQL (serverless cold starts, connection limits). Use Vercel for the frontend only; host the API on Railway.

---

## Before you start

1. **Claim your Railway project** — the banner says *"temporary project… deleted in a day"*. Click **Claim** so it persists.
2. Push latest code to GitHub: [github.com/uGSOT/fake-api-hub](https://github.com/uGSOT/fake-api-hub)

---

## Part 1 — Railway MySQL (already done)

Your MySQL service shows **Online** but **no tables** yet. Tables are created automatically when the backend runs `scripts/seed.py` on deploy.

### Link MySQL to the backend service

1. Open your Railway project (`serene-perfection`)
2. Click **+ New** → **GitHub Repo** → select `uGSOT/fake-api-hub`
3. Set **Root Directory** to `backend`
4. Open the new backend service → **Variables** tab
5. Click **+ New Variable** → **Add Reference** → select your **MySQL** service  
   Railway injects: `MYSQLHOST`, `MYSQLPORT`, `MYSQLUSER`, `MYSQLPASSWORD`, `MYSQLDATABASE`, `MYSQL_URL`

### Backend environment variables (Railway)

Add these in the **backend service** Variables tab:

| Variable | Value |
|----------|-------|
| `APP_ENV` | `production` |
| `APP_DEBUG` | `false` |
| `CORS_ORIGINS` | `https://YOUR-APP.vercel.app` *(update after Vercel deploy)* |

You do **not** need to set `DB_*` manually if MySQL variables are referenced from the MySQL service.

### Deploy backend

Railway auto-deploys on push. Or click **Deploy** manually.

After deploy, copy your public URL, e.g.:

```text
https://fake-api-hub-backend-production.up.railway.app
```

### Verify backend

```bash
curl https://YOUR-RAILWAY-URL/health
curl "https://YOUR-RAILWAY-URL/api/v1/hospital/doctors?limit=3"
```

Open Swagger: `https://YOUR-RAILWAY-URL/docs`

Tables should now appear in Railway MySQL → **Database → Data**.

---

## Part 2 — Vercel (frontend)

### Connect repository

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import **uGSOT/fake-api-hub** from GitHub
3. Configure:

| Setting | Value |
|---------|-------|
| **Framework Preset** | Vite |
| **Root Directory** | `frontend` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

### Environment variables (Vercel)

| Variable | Value |
|----------|-------|
| `VITE_API_BASE_URL` | `https://YOUR-RAILWAY-URL` *(no trailing slash)* |

Example:

```text
VITE_API_BASE_URL=https://fake-api-hub-backend-production.up.railway.app
```

### Deploy

Click **Deploy**. Vercel gives you a URL like:

```text
https://fake-api-hub.vercel.app
```

### Update CORS on Railway

Go back to Railway backend **Variables** and set:

```text
CORS_ORIGINS=https://fake-api-hub.vercel.app,https://YOUR-VERCEL-URL.vercel.app
```

Redeploy the backend (or it may auto-redeploy on variable change).

---

## Part 3 — Verify end-to-end

1. Open your Vercel URL → Home page loads
2. Navigate to **Hospital API → Doctors**
3. Click **Try API** → should return live JSON from Railway MySQL
4. Check browser DevTools → Network → requests go to your Railway URL

---

## Architecture (production)

```text
User Browser
     │
     ▼
Vercel (React SPA)          https://your-app.vercel.app
     │
     │  fetch(VITE_API_BASE_URL + /api/v1/hospital/...)
     ▼
Railway (FastAPI)           https://your-api.up.railway.app
     │
     ▼
Railway (MySQL)             private MYSQLHOST connection
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Frontend shows static mock data | Set `VITE_API_BASE_URL` on Vercel and redeploy |
| CORS error in browser | Add Vercel URL to `CORS_ORIGINS` on Railway backend |
| Backend 502 / crash | Check Railway deploy logs; ensure MySQL vars are linked |
| Empty database | Redeploy backend (seed runs on start) or run `python scripts/seed.py` in Railway shell |
| Railway project deleted | **Claim** the project in Railway dashboard |
| 404 on Vercel page refresh | `frontend/vercel.json` rewrites are included — redeploy if missing |

---

## Quick reference — env vars

### Local development

**backend/.env**

```env
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=
DB_NAME=fake_api_hub
CORS_ORIGINS=http://localhost:5173
```

**frontend/.env**

```env
VITE_API_BASE_URL=/api
```

### Production

**Railway (backend):** MySQL refs + `CORS_ORIGINS` + `APP_DEBUG=false`  
**Vercel (frontend):** `VITE_API_BASE_URL=https://your-railway-api.up.railway.app`

---

## Optional — custom domains

- **Vercel:** Project Settings → Domains → add `fake-api-hub.com`
- **Railway:** Service Settings → Networking → Generate Domain or add custom domain
- Update `CORS_ORIGINS` and `VITE_API_BASE_URL` accordingly
