from typing import Optional

from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.orm import Session

from app.controllers.healthcare_controller import PatientController
from app.database import get_db
from app.schemas.common import PaginatedResponse, SingleResponse
from app.schemas.healthcare import PatientCreate, PatientUpdate

router = APIRouter(prefix="/patients", tags=["Hospital - Patients"])


@router.get("", response_model=PaginatedResponse)
def list_patients(
    search: Optional[str] = Query(None),
    page: Optional[int] = Query(1, ge=1),
    limit: Optional[int] = Query(10, ge=1, le=100),
    db: Session = Depends(get_db),
):
    return PatientController.list_patients(db, search=search, page=page, limit=limit)


@router.get("/{patient_id}", response_model=SingleResponse)
def get_patient(patient_id: int, db: Session = Depends(get_db)):
    return PatientController.get_patient(db, patient_id)


@router.post("", response_model=SingleResponse, status_code=status.HTTP_201_CREATED)
def create_patient(payload: PatientCreate, db: Session = Depends(get_db)):
    return PatientController.create_patient(db, payload)


@router.put("/{patient_id}", response_model=SingleResponse)
def update_patient(patient_id: int, payload: PatientUpdate, db: Session = Depends(get_db)):
    return PatientController.update_patient(db, patient_id, payload)


@router.delete("/{patient_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_patient(patient_id: int, db: Session = Depends(get_db)):
    PatientController.delete_patient(db, patient_id)
