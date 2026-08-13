from datetime import date, time
from decimal import Decimal
from enum import Enum
from typing import Optional

from sqlalchemy import Date, ForeignKey, Integer, Numeric, String, Text, Time
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database import Base


class AppointmentStatus(str, Enum):
    SCHEDULED = "Scheduled"
    COMPLETED = "Completed"
    CANCELLED = "Cancelled"


class Doctor(Base):
    __tablename__ = "doctors"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(255), nullable=False, index=True)
    specialization: Mapped[str] = mapped_column(String(128), nullable=False, index=True)
    experience: Mapped[int] = mapped_column(Integer, nullable=False)
    hospital: Mapped[str] = mapped_column(String(255), nullable=False)
    location: Mapped[str] = mapped_column(String(128), nullable=False)
    availability: Mapped[str] = mapped_column(String(64), nullable=False)

    appointments: Mapped[list["Appointment"]] = relationship(back_populates="doctor")
    medical_records: Mapped[list["MedicalRecord"]] = relationship(back_populates="doctor")


class Patient(Base):
    __tablename__ = "patients"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(255), nullable=False, index=True)
    age: Mapped[int] = mapped_column(Integer, nullable=False)
    gender: Mapped[str] = mapped_column(String(32), nullable=False)
    blood_group: Mapped[str] = mapped_column("blood_group", String(8), nullable=False)
    phone: Mapped[str] = mapped_column(String(32), nullable=False)
    hospital: Mapped[str] = mapped_column(String(255), nullable=False)

    appointments: Mapped[list["Appointment"]] = relationship(back_populates="patient")
    medical_records: Mapped[list["MedicalRecord"]] = relationship(back_populates="patient")


class Department(Base):
    __tablename__ = "departments"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(128), nullable=False, unique=True, index=True)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    floor: Mapped[int] = mapped_column(Integer, nullable=False)
    head_doctor: Mapped[str] = mapped_column("head_doctor", String(255), nullable=False)


class Appointment(Base):
    __tablename__ = "appointments"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    patient_id: Mapped[int] = mapped_column(ForeignKey("patients.id"), nullable=False, index=True)
    doctor_id: Mapped[int] = mapped_column(ForeignKey("doctors.id"), nullable=False, index=True)
    appointment_date: Mapped[date] = mapped_column("appointment_date", Date, nullable=False)
    appointment_time: Mapped[str] = mapped_column("appointment_time", String(16), nullable=False)
    status: Mapped[str] = mapped_column(String(32), nullable=False, default=AppointmentStatus.SCHEDULED.value)

    patient: Mapped["Patient"] = relationship(back_populates="appointments")
    doctor: Mapped["Doctor"] = relationship(back_populates="appointments")


class Medicine(Base):
    __tablename__ = "medicines"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(128), nullable=False, index=True)
    category: Mapped[str] = mapped_column(String(128), nullable=False, index=True)
    manufacturer: Mapped[str] = mapped_column(String(255), nullable=False)
    price: Mapped[Decimal] = mapped_column(Numeric(10, 2), nullable=False)
    stock: Mapped[int] = mapped_column(Integer, nullable=False)


class MedicalRecord(Base):
    __tablename__ = "medical_records"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    patient_id: Mapped[int] = mapped_column(ForeignKey("patients.id"), nullable=False, index=True)
    doctor_id: Mapped[int] = mapped_column(ForeignKey("doctors.id"), nullable=False, index=True)
    diagnosis: Mapped[str] = mapped_column(String(255), nullable=False)
    record_date: Mapped[date] = mapped_column("record_date", Date, nullable=False)
    prescription: Mapped[str] = mapped_column(Text, nullable=False)

    patient: Mapped["Patient"] = relationship(back_populates="medical_records")
    doctor: Mapped["Doctor"] = relationship(back_populates="medical_records")
