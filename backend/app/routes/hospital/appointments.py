from typing import Optional

from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.orm import Session

from app.controllers.healthcare_controller import AppointmentController
from app.database import get_db
from app.schemas.common import PaginatedResponse, SingleResponse
from app.schemas.healthcare import AppointmentCreate, AppointmentUpdate

router = APIRouter(prefix="/appointments", tags=["Hospital - Appointments"])


@router.get("", response_model=PaginatedResponse)
def list_appointments(
    search: Optional[str] = Query(None, description="Filter by status"),
    page: Optional[int] = Query(1, ge=1),
    limit: Optional[int] = Query(10, ge=1, le=100),
    db: Session = Depends(get_db),
):
    return AppointmentController.list_appointments(db, search=search, page=page, limit=limit)


@router.get("/{appointment_id}", response_model=SingleResponse)
def get_appointment(appointment_id: int, db: Session = Depends(get_db)):
    return AppointmentController.get_appointment(db, appointment_id)


@router.post("", response_model=SingleResponse, status_code=status.HTTP_201_CREATED)
def create_appointment(payload: AppointmentCreate, db: Session = Depends(get_db)):
    return AppointmentController.create_appointment(db, payload)


@router.put("/{appointment_id}", response_model=SingleResponse)
def update_appointment(
    appointment_id: int, payload: AppointmentUpdate, db: Session = Depends(get_db)
):
    return AppointmentController.update_appointment(db, appointment_id, payload)


@router.delete("/{appointment_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_appointment(appointment_id: int, db: Session = Depends(get_db)):
    AppointmentController.delete_appointment(db, appointment_id)
