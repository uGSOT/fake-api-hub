from typing import Optional

from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.orm import Session

from app.controllers.healthcare_controller import MedicineController
from app.database import get_db
from app.schemas.common import PaginatedResponse, SingleResponse
from app.schemas.healthcare import MedicineCreate, MedicineUpdate

router = APIRouter(prefix="/medicines", tags=["Hospital - Medicines"])


@router.get("", response_model=PaginatedResponse)
def list_medicines(
    search: Optional[str] = Query(None),
    page: Optional[int] = Query(1, ge=1),
    limit: Optional[int] = Query(10, ge=1, le=100),
    db: Session = Depends(get_db),
):
    return MedicineController.list_medicines(db, search=search, page=page, limit=limit)


@router.get("/{medicine_id}", response_model=SingleResponse)
def get_medicine(medicine_id: int, db: Session = Depends(get_db)):
    return MedicineController.get_medicine(db, medicine_id)


@router.post("", response_model=SingleResponse, status_code=status.HTTP_201_CREATED)
def create_medicine(payload: MedicineCreate, db: Session = Depends(get_db)):
    return MedicineController.create_medicine(db, payload)


@router.put("/{medicine_id}", response_model=SingleResponse)
def update_medicine(medicine_id: int, payload: MedicineUpdate, db: Session = Depends(get_db)):
    return MedicineController.update_medicine(db, medicine_id, payload)


@router.delete("/{medicine_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_medicine(medicine_id: int, db: Session = Depends(get_db)):
    MedicineController.delete_medicine(db, medicine_id)
