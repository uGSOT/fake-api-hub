from typing import Optional

from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.orm import Session

from app.controllers.healthcare_controller import MedicalRecordController
from app.database import get_db
from app.schemas.common import PaginatedResponse, SingleResponse
from app.schemas.healthcare import MedicalRecordCreate, MedicalRecordUpdate

router = APIRouter(prefix="/medical-records", tags=["Hospital - Medical Records"])


@router.get("", response_model=PaginatedResponse)
def list_medical_records(
    search: Optional[str] = Query(None),
    page: Optional[int] = Query(1, ge=1),
    limit: Optional[int] = Query(10, ge=1, le=100),
    db: Session = Depends(get_db),
):
    return MedicalRecordController.list_medical_records(db, search=search, page=page, limit=limit)


@router.get("/{record_id}", response_model=SingleResponse)
def get_medical_record(record_id: int, db: Session = Depends(get_db)):
    return MedicalRecordController.get_medical_record(db, record_id)


@router.post("", response_model=SingleResponse, status_code=status.HTTP_201_CREATED)
def create_medical_record(payload: MedicalRecordCreate, db: Session = Depends(get_db)):
    return MedicalRecordController.create_medical_record(db, payload)


@router.put("/{record_id}", response_model=SingleResponse)
def update_medical_record(
    record_id: int, payload: MedicalRecordUpdate, db: Session = Depends(get_db)
):
    return MedicalRecordController.update_medical_record(db, record_id, payload)


@router.delete("/{record_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_medical_record(record_id: int, db: Session = Depends(get_db)):
    MedicalRecordController.delete_medical_record(db, record_id)
