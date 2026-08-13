**Suggested labels:** `enhancement`, `backend`, `frontend`

## Summary

Add a new **Transport API** module, following the module-per-domain pattern already used by the
Hospital API. Listed as "Coming Soon" in the UI and `PRESENTATION.md`.

## Suggested Resources

- `routes` — origin, destination, distance_km, mode (bus/train/metro)
- `vehicles` — route_id (FK), vehicle_number, capacity, type
- `schedules` — route_id (FK), departure_time, arrival_time, frequency

## Acceptance Criteria

- [ ] `backend/app/models/transport.py` — SQLAlchemy models for the resources above
- [ ] `backend/app/schemas/transport.py` — Pydantic Create/Update/Response DTOs
- [ ] `backend/app/controllers/transport_controller.py` — CRUD + search + pagination
- [ ] `backend/app/routes/transport/` — one route file per resource, registered under
      `/api/v1/transport`
- [ ] `backend/scripts/seed_transport.py` — 6-8 realistic seed records per resource
- [ ] Response envelope matches existing modules: `{ status, data, meta }`
- [ ] Frontend: module flipped from "Coming Soon" to active, with resource pages and playground
- [ ] `README.md` updated with the new module's endpoint table

## References

- Pattern to follow: [backend/ARCHITECTURE.md](../backend/ARCHITECTURE.md) → "Adding a New API Module"
- Existing implementation to mirror: `backend/app/{models,schemas,controllers,routes}/healthcare*`
