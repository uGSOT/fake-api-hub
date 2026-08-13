#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

if [ ! -d ".venv" ]; then
  python3 -m venv .venv
fi

source .venv/bin/activate
pip install -r requirements.txt

if [ ! -f ".env" ]; then
  cp .env.example .env
  echo "Created .env from .env.example — update DB_PASSWORD before continuing."
fi

python scripts/seed.py
echo "Starting FastAPI on http://127.0.0.1:8000"
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
