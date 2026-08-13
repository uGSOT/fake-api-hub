from typing import Optional

from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.orm import Session

from app.controllers.healthcare_controller import DoctorController
from app.database import get_db
from app.schemas.common import PaginatedResponse, SingleResponse
from app.schemas.healthcare import DoctorCreate, DoctorResponse, DoctorUpdate

router = APIRouter(prefix="/doctors", tags=["Hospital - Doctors"])


@router.get("", response_model=PaginatedResponse)
def list_doctors(
    search: Optional[str] = Query(None, description="Search by name, specialization, hospital, or location"),
    specialization: Optional[str] = Query(None, description="Filter by specialization"),
    page: Optional[int] = Query(1, ge=1),
    limit: Optional[int] = Query(10, ge=1, le=100),
    db: Session = Depends(get_db),
):
    return DoctorController.list_doctors(
        db,
        search=search,
        specialization=specialization,
        page=page,
        limit=limit,
    )


@router.get("/{doctor_id}", response_model=SingleResponse)
def get_doctor(doctor_id: int, db: Session = Depends(get_db)):
    return DoctorController.get_doctor(db, doctor_id)


@router.post("", response_model=SingleResponse, status_code=status.HTTP_201_CREATED)
def create_doctor(payload: DoctorCreate, db: Session = Depends(get_db)):
    return DoctorController.create_doctor(db, payload)


@router.put("/{doctor_id}", response_model=SingleResponse)
def update_doctor(doctor_id: int, payload: DoctorUpdate, db: Session = Depends(get_db)):
    return DoctorController.update_doctor(db, doctor_id, payload)


@router.delete("/{doctor_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_doctor(doctor_id: int, db: Session = Depends(get_db)):
    DoctorController.delete_doctor(db, doctor_id)
