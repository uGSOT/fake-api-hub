from fastapi import APIRouter

router = APIRouter(tags=["Health"])


@router.get("/health")
def health_check():
    return {"status": "ok", "service": "fake-api-hub-backend"}


@router.get("/")
def root():
    return {
        "message": "Fake API Hub Backend",
        "docs": "/docs",
        "api_prefix": "/api/v1",
    }
