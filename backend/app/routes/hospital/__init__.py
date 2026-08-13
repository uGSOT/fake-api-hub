from fastapi import APIRouter

from . import appointments, departments, doctors, medical_records, medicines, patients

router = APIRouter(prefix="/hospital", tags=["Hospital API"])

router.include_router(doctors.router)
router.include_router(patients.router)
router.include_router(departments.router)
router.include_router(appointments.router)
router.include_router(medicines.router)
router.include_router(medical_records.router)
