**Suggested labels:** `good first issue`, `enhancement`, `backend`, `frontend`

## Summary

Add a new **Food Delivery API** module, following the module-per-domain pattern already used by
the Hospital API. This is one of the modules currently listed as "Coming Soon" in the UI
(`frontend/src/data`) and in `PRESENTATION.md`.

## Why

The frontend already advertises this module as coming soon; building it out demonstrates that the
architecture supports unlimited modules without redesigning the frontend, and gives contributors a
self-contained first project.

## Suggested Resources

- `restaurants` — name, cuisine, rating, location, delivery_time
- `menu_items` — restaurant_id (FK), name, price, category, is_veg
- `orders` — customer_name, restaurant_id (FK), status, total, order_date

## Acceptance Criteria

- [ ] `backend/app/models/food_delivery.py` — SQLAlchemy models for the resources above
- [ ] `backend/app/schemas/food_delivery.py` — Pydantic Create/Update/Response DTOs
- [ ] `backend/app/controllers/food_delivery_controller.py` — CRUD + search + pagination
- [ ] `backend/app/routes/food_delivery/` — one route file per resource, registered in `main.py`
      under `/api/v1/food-delivery`
- [ ] `backend/scripts/seed_food_delivery.py` — 6-8 realistic seed records per resource
- [ ] Response envelope matches existing modules: `{ status, data, meta }`
- [ ] Frontend: module flipped from "Coming Soon" to active, with resource pages and playground
      wired up the same way Hospital is
- [ ] `README.md` updated with the new module's endpoint table

## References

- Pattern to follow: [backend/ARCHITECTURE.md](../backend/ARCHITECTURE.md) → "Adding a New API Module"
- Existing implementation to mirror: `backend/app/{models,schemas,controllers,routes}/healthcare*`
