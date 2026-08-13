**Suggested labels:** `enhancement`, `backend`, `frontend`

## Summary

Add a new **E-commerce API** module, following the module-per-domain pattern already used by the
Hospital API. Listed as "Coming Soon" in the UI and `PRESENTATION.md`.

## Suggested Resources

- `products` — name, category, price, stock, rating
- `orders` — customer_name, product_id (FK), quantity, status, order_date
- `reviews` — product_id (FK), rating, comment, reviewer_name

## Acceptance Criteria

- [ ] `backend/app/models/ecommerce.py` — SQLAlchemy models for the resources above
- [ ] `backend/app/schemas/ecommerce.py` — Pydantic Create/Update/Response DTOs
- [ ] `backend/app/controllers/ecommerce_controller.py` — CRUD + search + pagination
- [ ] `backend/app/routes/ecommerce/` — one route file per resource, registered under
      `/api/v1/ecommerce`
- [ ] `backend/scripts/seed_ecommerce.py` — 6-8 realistic seed records per resource
- [ ] Response envelope matches existing modules: `{ status, data, meta }`
- [ ] Frontend: module flipped from "Coming Soon" to active, with resource pages and playground
- [ ] `README.md` updated with the new module's endpoint table

## References

- Pattern to follow: [backend/ARCHITECTURE.md](../backend/ARCHITECTURE.md) → "Adding a New API Module"
- Existing implementation to mirror: `backend/app/{models,schemas,controllers,routes}/healthcare*`
