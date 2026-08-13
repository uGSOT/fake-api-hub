from typing import Optional

from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.orm import Session

from app.controllers.healthcare_controller import DepartmentController
from app.database import get_db
from app.schemas.common import PaginatedResponse, SingleResponse
from app.schemas.healthcare import DepartmentCreate, DepartmentUpdate

router = APIRouter(prefix="/departments", tags=["Hospital - Departments"])


@router.get("", response_model=PaginatedResponse)
def list_departments(
    search: Optional[str] = Query(None),
    page: Optional[int] = Query(1, ge=1),
    limit: Optional[int] = Query(10, ge=1, le=100),
    db: Session = Depends(get_db),
):
    return DepartmentController.list_departments(db, search=search, page=page, limit=limit)


@router.get("/{department_id}", response_model=SingleResponse)
def get_department(department_id: int, db: Session = Depends(get_db)):
    return DepartmentController.get_department(db, department_id)


@router.post("", response_model=SingleResponse, status_code=status.HTTP_201_CREATED)
def create_department(payload: DepartmentCreate, db: Session = Depends(get_db)):
    return DepartmentController.create_department(db, payload)


@router.put("/{department_id}", response_model=SingleResponse)
def update_department(
    department_id: int, payload: DepartmentUpdate, db: Session = Depends(get_db)
):
    return DepartmentController.update_department(db, department_id, payload)


@router.delete("/{department_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_department(department_id: int, db: Session = Depends(get_db)):
    DepartmentController.delete_department(db, department_id)
