from datetime import date
from decimal import Decimal
from typing import Optional

from pydantic import BaseModel, ConfigDict, Field


class DoctorBase(BaseModel):
    name: str
    specialization: str
    experience: int = Field(ge=0)
    hospital: str
    location: str
    availability: str


class DoctorCreate(DoctorBase):
    pass


class DoctorUpdate(BaseModel):
    name: Optional[str] = None
    specialization: Optional[str] = None
    experience: Optional[int] = Field(default=None, ge=0)
    hospital: Optional[str] = None
    location: Optional[str] = None
    availability: Optional[str] = None


class DoctorResponse(DoctorBase):
    id: int

    model_config = ConfigDict(from_attributes=True, ser_json_by_alias=True)


class PatientBase(BaseModel):
    name: str
    age: int = Field(ge=0, le=150)
    gender: str
    blood_group: str = Field(alias="bloodGroup")
    phone: str
    hospital: str


class PatientCreate(PatientBase):
    model_config = ConfigDict(populate_by_name=True)


class PatientUpdate(BaseModel):
    name: Optional[str] = None
    age: Optional[int] = Field(default=None, ge=0, le=150)
    gender: Optional[str] = None
    blood_group: Optional[str] = Field(default=None, alias="bloodGroup")
    phone: Optional[str] = None
    hospital: Optional[str] = None

    model_config = ConfigDict(populate_by_name=True)


class PatientResponse(PatientBase):
    id: int

    model_config = ConfigDict(from_attributes=True, populate_by_name=True, ser_json_by_alias=True)


class DepartmentBase(BaseModel):
    name: str
    description: str
    floor: int
    head_doctor: str = Field(alias="headDoctor")


class DepartmentCreate(DepartmentBase):
    model_config = ConfigDict(populate_by_name=True)


class DepartmentUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    floor: Optional[int] = None
    head_doctor: Optional[str] = Field(default=None, alias="headDoctor")

    model_config = ConfigDict(populate_by_name=True)


class DepartmentResponse(DepartmentBase):
    id: int

    model_config = ConfigDict(from_attributes=True, populate_by_name=True, ser_json_by_alias=True)


class AppointmentBase(BaseModel):
    patient_id: int = Field(alias="patientId")
    doctor_id: int = Field(alias="doctorId")
    date: date
    time: str
    status: str = "Scheduled"


class AppointmentCreate(AppointmentBase):
    model_config = ConfigDict(populate_by_name=True)


class AppointmentUpdate(BaseModel):
    patient_id: Optional[int] = Field(default=None, alias="patientId")
    doctor_id: Optional[int] = Field(default=None, alias="doctorId")
    date: Optional[date] = None
    time: Optional[str] = None
    status: Optional[str] = None

    model_config = ConfigDict(populate_by_name=True)


class AppointmentResponse(BaseModel):
    id: int
    patient_id: int = Field(alias="patientId")
    doctor_id: int = Field(alias="doctorId")
    date: date
    time: str
    status: str

    model_config = ConfigDict(from_attributes=True, populate_by_name=True, ser_json_by_alias=True)


class MedicineBase(BaseModel):
    name: str
    category: str
    manufacturer: str
    price: Decimal = Field(ge=0)
    stock: int = Field(ge=0)


class MedicineCreate(MedicineBase):
    pass


class MedicineUpdate(BaseModel):
    name: Optional[str] = None
    category: Optional[str] = None
    manufacturer: Optional[str] = None
    price: Optional[Decimal] = Field(default=None, ge=0)
    stock: Optional[int] = Field(default=None, ge=0)


class MedicineResponse(MedicineBase):
    id: int

    model_config = ConfigDict(from_attributes=True, ser_json_by_alias=True)


class MedicalRecordBase(BaseModel):
    patient_id: int = Field(alias="patientId")
    doctor_id: int = Field(alias="doctorId")
    diagnosis: str
    date: date
    prescription: str


class MedicalRecordCreate(MedicalRecordBase):
    model_config = ConfigDict(populate_by_name=True)


class MedicalRecordUpdate(BaseModel):
    patient_id: Optional[int] = Field(default=None, alias="patientId")
    doctor_id: Optional[int] = Field(default=None, alias="doctorId")
    diagnosis: Optional[str] = None
    date: Optional[date] = None
    prescription: Optional[str] = None

    model_config = ConfigDict(populate_by_name=True)


class MedicalRecordResponse(BaseModel):
    id: int
    patient_id: int = Field(alias="patientId")
    doctor_id: int = Field(alias="doctorId")
    diagnosis: str
    date: date
    prescription: str

    model_config = ConfigDict(from_attributes=True, populate_by_name=True, ser_json_by_alias=True)
