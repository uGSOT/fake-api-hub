from datetime import date
from typing import Optional

from sqlalchemy.orm import Session

from app.models.healthcare import (
    Appointment,
    Department,
    Doctor,
    MedicalRecord,
    Medicine,
    Patient,
)
from app.schemas.common import PaginatedResponse, PaginationMeta, SingleResponse
from app.schemas.healthcare import (
    AppointmentCreate,
    AppointmentResponse,
    AppointmentUpdate,
    DepartmentCreate,
    DepartmentResponse,
    DepartmentUpdate,
    DoctorCreate,
    DoctorResponse,
    DoctorUpdate,
    MedicalRecordCreate,
    MedicalRecordResponse,
    MedicalRecordUpdate,
    MedicineCreate,
    MedicineResponse,
    MedicineUpdate,
    PatientCreate,
    PatientResponse,
    PatientUpdate,
)
from app.utils.response import (
    NotFoundError,
    apply_search_filter,
    build_paginated_response,
    build_single_response,
    get_list_params,
    paginate_query,
)


class DoctorController:
    @staticmethod
    def list_doctors(
        db: Session,
        *,
        search: Optional[str] = None,
        specialization: Optional[str] = None,
        page: Optional[int] = None,
        limit: Optional[int] = None,
    ) -> PaginatedResponse:
        search, page, limit = get_list_params(search, page, limit)
        query = db.query(Doctor)
        query = apply_search_filter(
            query,
            Doctor,
            search,
            [Doctor.name, Doctor.specialization, Doctor.hospital, Doctor.location],
        )
        if specialization:
            query = query.filter(Doctor.specialization.ilike(specialization))
        items, total = paginate_query(query, page=page, limit=limit)
        return build_paginated_response(
            items,
            total=total,
            page=page,
            limit=limit,
            response_schema=DoctorResponse,
        )

    @staticmethod
    def get_doctor(db: Session, doctor_id: int) -> SingleResponse:
        doctor = db.query(Doctor).filter(Doctor.id == doctor_id).first()
        if not doctor:
            raise NotFoundError("Doctor", doctor_id)
        return build_single_response(doctor, response_schema=DoctorResponse)

    @staticmethod
    def create_doctor(db: Session, payload: DoctorCreate) -> SingleResponse:
        doctor = Doctor(**payload.model_dump())
        db.add(doctor)
        db.commit()
        db.refresh(doctor)
        return build_single_response(doctor, response_schema=DoctorResponse)

    @staticmethod
    def update_doctor(db: Session, doctor_id: int, payload: DoctorUpdate) -> SingleResponse:
        doctor = db.query(Doctor).filter(Doctor.id == doctor_id).first()
        if not doctor:
            raise NotFoundError("Doctor", doctor_id)
        for field, value in payload.model_dump(exclude_unset=True).items():
            setattr(doctor, field, value)
        db.commit()
        db.refresh(doctor)
        return build_single_response(doctor, response_schema=DoctorResponse)

    @staticmethod
    def delete_doctor(db: Session, doctor_id: int) -> None:
        doctor = db.query(Doctor).filter(Doctor.id == doctor_id).first()
        if not doctor:
            raise NotFoundError("Doctor", doctor_id)
        db.delete(doctor)
        db.commit()


class PatientController:
    @staticmethod
    def list_patients(
        db: Session,
        *,
        search: Optional[str] = None,
        page: Optional[int] = None,
        limit: Optional[int] = None,
    ) -> PaginatedResponse:
        search, page, limit = get_list_params(search, page, limit)
        query = db.query(Patient)
        query = apply_search_filter(
            query,
            Patient,
            search,
            [Patient.name, Patient.phone, Patient.hospital, Patient.gender],
        )
        items, total = paginate_query(query, page=page, limit=limit)
        return build_paginated_response(
            items,
            total=total,
            page=page,
            limit=limit,
            response_schema=PatientResponse,
        )

    @staticmethod
    def get_patient(db: Session, patient_id: int) -> SingleResponse:
        patient = db.query(Patient).filter(Patient.id == patient_id).first()
        if not patient:
            raise NotFoundError("Patient", patient_id)
        return build_single_response(patient, response_schema=PatientResponse)

    @staticmethod
    def create_patient(db: Session, payload: PatientCreate) -> SingleResponse:
        patient = Patient(**payload.model_dump(by_alias=False))
        db.add(patient)
        db.commit()
        db.refresh(patient)
        return build_single_response(patient, response_schema=PatientResponse)

    @staticmethod
    def update_patient(db: Session, patient_id: int, payload: PatientUpdate) -> SingleResponse:
        patient = db.query(Patient).filter(Patient.id == patient_id).first()
        if not patient:
            raise NotFoundError("Patient", patient_id)
        for field, value in payload.model_dump(exclude_unset=True, by_alias=False).items():
            setattr(patient, field, value)
        db.commit()
        db.refresh(patient)
        return build_single_response(patient, response_schema=PatientResponse)

    @staticmethod
    def delete_patient(db: Session, patient_id: int) -> None:
        patient = db.query(Patient).filter(Patient.id == patient_id).first()
        if not patient:
            raise NotFoundError("Patient", patient_id)
        db.delete(patient)
        db.commit()


class DepartmentController:
    @staticmethod
    def list_departments(
        db: Session,
        *,
        search: Optional[str] = None,
        page: Optional[int] = None,
        limit: Optional[int] = None,
    ) -> PaginatedResponse:
        search, page, limit = get_list_params(search, page, limit)
        query = db.query(Department)
        query = apply_search_filter(
            query,
            Department,
            search,
            [Department.name, Department.description, Department.head_doctor],
        )
        items, total = paginate_query(query, page=page, limit=limit)
        return build_paginated_response(
            items,
            total=total,
            page=page,
            limit=limit,
            response_schema=DepartmentResponse,
        )

    @staticmethod
    def get_department(db: Session, department_id: int) -> SingleResponse:
        department = db.query(Department).filter(Department.id == department_id).first()
        if not department:
            raise NotFoundError("Department", department_id)
        return build_single_response(department, response_schema=DepartmentResponse)

    @staticmethod
    def create_department(db: Session, payload: DepartmentCreate) -> SingleResponse:
        department = Department(**payload.model_dump(by_alias=False))
        db.add(department)
        db.commit()
        db.refresh(department)
        return build_single_response(department, response_schema=DepartmentResponse)

    @staticmethod
    def update_department(
        db: Session, department_id: int, payload: DepartmentUpdate
    ) -> SingleResponse:
        department = db.query(Department).filter(Department.id == department_id).first()
        if not department:
            raise NotFoundError("Department", department_id)
        for field, value in payload.model_dump(exclude_unset=True, by_alias=False).items():
            setattr(department, field, value)
        db.commit()
        db.refresh(department)
        return build_single_response(department, response_schema=DepartmentResponse)

    @staticmethod
    def delete_department(db: Session, department_id: int) -> None:
        department = db.query(Department).filter(Department.id == department_id).first()
        if not department:
            raise NotFoundError("Department", department_id)
        db.delete(department)
        db.commit()


class AppointmentController:
    @staticmethod
    def _to_model_fields(payload: dict) -> dict:
        mapped = dict(payload)
        if "date" in mapped:
            mapped["appointment_date"] = mapped.pop("date")
        if "time" in mapped:
            mapped["appointment_time"] = mapped.pop("time")
        if "patientId" in mapped:
            mapped["patient_id"] = mapped.pop("patientId")
        if "doctorId" in mapped:
            mapped["doctor_id"] = mapped.pop("doctorId")
        return mapped

    @staticmethod
    def _serialize(appointment: Appointment) -> dict:
        return {
            "id": appointment.id,
            "patientId": appointment.patient_id,
            "doctorId": appointment.doctor_id,
            "date": appointment.appointment_date,
            "time": appointment.appointment_time,
            "status": appointment.status,
        }

    @staticmethod
    def list_appointments(
        db: Session,
        *,
        search: Optional[str] = None,
        page: Optional[int] = None,
        limit: Optional[int] = None,
    ) -> PaginatedResponse:
        search, page, limit = get_list_params(search, page, limit)
        query = db.query(Appointment)
        if search:
            query = query.filter(Appointment.status.ilike(f"%{search}%"))
        items, total = paginate_query(query, page=page, limit=limit)
        return PaginatedResponse(
            status=200,
            data=[AppointmentResponse.model_validate(AppointmentController._serialize(item)) for item in items],
            meta=PaginationMeta(
                total=total,
                page=page,
                limit=limit,
                totalPages=max(1, (total + limit - 1) // limit) if total else 0,
            ),
        )

    @staticmethod
    def get_appointment(db: Session, appointment_id: int) -> SingleResponse:
        appointment = db.query(Appointment).filter(Appointment.id == appointment_id).first()
        if not appointment:
            raise NotFoundError("Appointment", appointment_id)
        return SingleResponse(
            status=200,
            data=AppointmentResponse.model_validate(AppointmentController._serialize(appointment)),
        )

    @staticmethod
    def create_appointment(db: Session, payload: AppointmentCreate) -> SingleResponse:
        data = AppointmentController._to_model_fields(payload.model_dump(by_alias=True))
        appointment = Appointment(**data)
        db.add(appointment)
        db.commit()
        db.refresh(appointment)
        return SingleResponse(
            status=200,
            data=AppointmentResponse.model_validate(AppointmentController._serialize(appointment)),
        )

    @staticmethod
    def update_appointment(
        db: Session, appointment_id: int, payload: AppointmentUpdate
    ) -> SingleResponse:
        appointment = db.query(Appointment).filter(Appointment.id == appointment_id).first()
        if not appointment:
            raise NotFoundError("Appointment", appointment_id)
        data = AppointmentController._to_model_fields(
            payload.model_dump(exclude_unset=True, by_alias=True)
        )
        for field, value in data.items():
            setattr(appointment, field, value)
        db.commit()
        db.refresh(appointment)
        return SingleResponse(
            status=200,
            data=AppointmentResponse.model_validate(AppointmentController._serialize(appointment)),
        )

    @staticmethod
    def delete_appointment(db: Session, appointment_id: int) -> None:
        appointment = db.query(Appointment).filter(Appointment.id == appointment_id).first()
        if not appointment:
            raise NotFoundError("Appointment", appointment_id)
        db.delete(appointment)
        db.commit()


class MedicineController:
    @staticmethod
    def list_medicines(
        db: Session,
        *,
        search: Optional[str] = None,
        page: Optional[int] = None,
        limit: Optional[int] = None,
    ) -> PaginatedResponse:
        search, page, limit = get_list_params(search, page, limit)
        query = db.query(Medicine)
        query = apply_search_filter(
            query,
            Medicine,
            search,
            [Medicine.name, Medicine.category, Medicine.manufacturer],
        )
        items, total = paginate_query(query, page=page, limit=limit)
        return build_paginated_response(
            items,
            total=total,
            page=page,
            limit=limit,
            response_schema=MedicineResponse,
        )

    @staticmethod
    def get_medicine(db: Session, medicine_id: int) -> SingleResponse:
        medicine = db.query(Medicine).filter(Medicine.id == medicine_id).first()
        if not medicine:
            raise NotFoundError("Medicine", medicine_id)
        return build_single_response(medicine, response_schema=MedicineResponse)

    @staticmethod
    def create_medicine(db: Session, payload: MedicineCreate) -> SingleResponse:
        medicine = Medicine(**payload.model_dump())
        db.add(medicine)
        db.commit()
        db.refresh(medicine)
        return build_single_response(medicine, response_schema=MedicineResponse)

    @staticmethod
    def update_medicine(db: Session, medicine_id: int, payload: MedicineUpdate) -> SingleResponse:
        medicine = db.query(Medicine).filter(Medicine.id == medicine_id).first()
        if not medicine:
            raise NotFoundError("Medicine", medicine_id)
        for field, value in payload.model_dump(exclude_unset=True).items():
            setattr(medicine, field, value)
        db.commit()
        db.refresh(medicine)
        return build_single_response(medicine, response_schema=MedicineResponse)

    @staticmethod
    def delete_medicine(db: Session, medicine_id: int) -> None:
        medicine = db.query(Medicine).filter(Medicine.id == medicine_id).first()
        if not medicine:
            raise NotFoundError("Medicine", medicine_id)
        db.delete(medicine)
        db.commit()


class MedicalRecordController:
    @staticmethod
    def _to_model_fields(payload: dict) -> dict:
        mapped = dict(payload)
        if "date" in mapped:
            mapped["record_date"] = mapped.pop("date")
        if "patientId" in mapped:
            mapped["patient_id"] = mapped.pop("patientId")
        if "doctorId" in mapped:
            mapped["doctor_id"] = mapped.pop("doctorId")
        return mapped

    @staticmethod
    def _serialize(record: MedicalRecord) -> dict:
        return {
            "id": record.id,
            "patientId": record.patient_id,
            "doctorId": record.doctor_id,
            "diagnosis": record.diagnosis,
            "date": record.record_date,
            "prescription": record.prescription,
        }

    @staticmethod
    def list_medical_records(
        db: Session,
        *,
        search: Optional[str] = None,
        page: Optional[int] = None,
        limit: Optional[int] = None,
    ) -> PaginatedResponse:
        search, page, limit = get_list_params(search, page, limit)
        query = db.query(MedicalRecord)
        query = apply_search_filter(
            query,
            MedicalRecord,
            search,
            [MedicalRecord.diagnosis, MedicalRecord.prescription],
        )
        items, total = paginate_query(query, page=page, limit=limit)
        return PaginatedResponse(
            status=200,
            data=[
                MedicalRecordResponse.model_validate(MedicalRecordController._serialize(item))
                for item in items
            ],
            meta=PaginationMeta(
                total=total,
                page=page,
                limit=limit,
                totalPages=max(1, (total + limit - 1) // limit) if total else 0,
            ),
        )

    @staticmethod
    def get_medical_record(db: Session, record_id: int) -> SingleResponse:
        record = db.query(MedicalRecord).filter(MedicalRecord.id == record_id).first()
        if not record:
            raise NotFoundError("Medical record", record_id)
        return SingleResponse(
            status=200,
            data=MedicalRecordResponse.model_validate(MedicalRecordController._serialize(record)),
        )

    @staticmethod
    def create_medical_record(db: Session, payload: MedicalRecordCreate) -> SingleResponse:
        data = MedicalRecordController._to_model_fields(payload.model_dump(by_alias=True))
        record = MedicalRecord(**data)
        db.add(record)
        db.commit()
        db.refresh(record)
        return SingleResponse(
            status=200,
            data=MedicalRecordResponse.model_validate(MedicalRecordController._serialize(record)),
        )

    @staticmethod
    def update_medical_record(
        db: Session, record_id: int, payload: MedicalRecordUpdate
    ) -> SingleResponse:
        record = db.query(MedicalRecord).filter(MedicalRecord.id == record_id).first()
        if not record:
            raise NotFoundError("Medical record", record_id)
        data = MedicalRecordController._to_model_fields(
            payload.model_dump(exclude_unset=True, by_alias=True)
        )
        for field, value in data.items():
            setattr(record, field, value)
        db.commit()
        db.refresh(record)
        return SingleResponse(
            status=200,
            data=MedicalRecordResponse.model_validate(MedicalRecordController._serialize(record)),
        )

    @staticmethod
    def delete_medical_record(db: Session, record_id: int) -> None:
        record = db.query(MedicalRecord).filter(MedicalRecord.id == record_id).first()
        if not record:
            raise NotFoundError("Medical record", record_id)
        db.delete(record)
        db.commit()
