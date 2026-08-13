"""Seed the Hospital API database with initial mock data."""

import sys
from datetime import date
from decimal import Decimal
from pathlib import Path

# Allow running as: python scripts/seed.py
BACKEND_ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(BACKEND_ROOT))

from sqlalchemy.orm import Session

from app.database import Base, SessionLocal, engine
from app.models.healthcare import (
    Appointment,
    Department,
    Doctor,
    MedicalRecord,
    Medicine,
    Patient,
)


def seed_data(db: Session) -> None:
    if db.query(Doctor).count() > 0:
        print("Database already seeded. Skipping.")
        return

    doctors = [
        Doctor(name="Dr. Ananya Sharma", specialization="Cardiology", experience=8, hospital="City Care Hospital", location="New Delhi", availability="Mon-Fri"),
        Doctor(name="Dr. Rahul Kumar", specialization="Neurology", experience=12, hospital="Apollo Care Hospital", location="Mumbai", availability="Tue-Sat"),
        Doctor(name="Dr. Sarah Jones", specialization="Pediatrics", experience=5, hospital="Global Health", location="London", availability="Mon, Wed, Fri"),
        Doctor(name="Dr. Michael Chen", specialization="Orthopedics", experience=15, hospital="City Care Hospital", location="New Delhi", availability="Mon-Sat"),
        Doctor(name="Dr. Emily Davis", specialization="Dermatology", experience=6, hospital="Skin Care Clinic", location="New York", availability="Tue-Thu"),
        Doctor(name="Dr. James Wilson", specialization="Oncology", experience=20, hospital="Hope Cancer Center", location="Chicago", availability="Mon-Fri"),
        Doctor(name="Dr. Priya Patel", specialization="Cardiology", experience=10, hospital="Apollo Care Hospital", location="Mumbai", availability="Wed-Sun"),
        Doctor(name="Dr. David Smith", specialization="Neurology", experience=14, hospital="Global Health", location="London", availability="Mon-Thu"),
    ]
    db.add_all(doctors)
    db.flush()

    patients = [
        Patient(name="Amit Patel", age=45, gender="Male", blood_group="O+", phone="+91-9876543210", hospital="City Care Hospital"),
        Patient(name="Priya Singh", age=32, gender="Female", blood_group="A-", phone="+91-9876543211", hospital="Apollo Care Hospital"),
        Patient(name="John Doe", age=50, gender="Male", blood_group="B+", phone="+1-555-1234567", hospital="Global Health"),
        Patient(name="Jane Smith", age=28, gender="Female", blood_group="AB+", phone="+1-555-9876543", hospital="City Care Hospital"),
        Patient(name="Ravi Kumar", age=60, gender="Male", blood_group="O-", phone="+91-9876543212", hospital="Hope Cancer Center"),
        Patient(name="Sarah Lee", age=22, gender="Female", blood_group="A+", phone="+44-7700-900123", hospital="Global Health"),
        Patient(name="Mohammed Khan", age=40, gender="Male", blood_group="B-", phone="+91-9876543213", hospital="Apollo Care Hospital"),
        Patient(name="Emily Brown", age=35, gender="Female", blood_group="O+", phone="+1-555-2468135", hospital="Skin Care Clinic"),
    ]
    db.add_all(patients)
    db.flush()

    departments = [
        Department(name="Cardiology", description="Heart and cardiovascular diseases", floor=2, head_doctor="Dr. Ananya Sharma"),
        Department(name="Neurology", description="Nervous system disorders", floor=3, head_doctor="Dr. Rahul Kumar"),
        Department(name="Pediatrics", description="Infants, children, and adolescents", floor=1, head_doctor="Dr. Sarah Jones"),
        Department(name="Orthopedics", description="Musculoskeletal system", floor=4, head_doctor="Dr. Michael Chen"),
        Department(name="Dermatology", description="Skin, hair, and nails", floor=1, head_doctor="Dr. Emily Davis"),
        Department(name="Oncology", description="Cancer treatment", floor=5, head_doctor="Dr. James Wilson"),
        Department(name="Emergency", description="Immediate medical attention", floor=0, head_doctor="Dr. Priya Patel"),
        Department(name="Radiology", description="Medical imaging", floor=-1, head_doctor="Dr. David Smith"),
    ]
    db.add_all(departments)
    db.flush()

    appointments = [
        Appointment(patient_id=1, doctor_id=1, appointment_date=date(2023, 11, 15), appointment_time="10:00 AM", status="Scheduled"),
        Appointment(patient_id=2, doctor_id=2, appointment_date=date(2023, 11, 16), appointment_time="02:30 PM", status="Completed"),
        Appointment(patient_id=3, doctor_id=3, appointment_date=date(2023, 11, 17), appointment_time="09:15 AM", status="Cancelled"),
        Appointment(patient_id=4, doctor_id=4, appointment_date=date(2023, 11, 18), appointment_time="11:45 AM", status="Scheduled"),
        Appointment(patient_id=5, doctor_id=6, appointment_date=date(2023, 11, 19), appointment_time="03:00 PM", status="Scheduled"),
        Appointment(patient_id=6, doctor_id=8, appointment_date=date(2023, 11, 20), appointment_time="10:30 AM", status="Completed"),
        Appointment(patient_id=7, doctor_id=7, appointment_date=date(2023, 11, 21), appointment_time="01:00 PM", status="Scheduled"),
        Appointment(patient_id=8, doctor_id=5, appointment_date=date(2023, 11, 22), appointment_time="04:15 PM", status="Scheduled"),
    ]
    db.add_all(appointments)

    medicines = [
        Medicine(name="Paracetamol", category="Analgesic", manufacturer="HealthCare Pharma", price=Decimal("2.50"), stock=500),
        Medicine(name="Amoxicillin", category="Antibiotic", manufacturer="BioMeds Inc", price=Decimal("15.00"), stock=200),
        Medicine(name="Ibuprofen", category="Anti-inflammatory", manufacturer="ReliefMeds", price=Decimal("5.00"), stock=350),
        Medicine(name="Omeprazole", category="Antacid", manufacturer="GastroHealth", price=Decimal("12.50"), stock=150),
        Medicine(name="Lisinopril", category="Antihypertensive", manufacturer="CardioCare", price=Decimal("20.00"), stock=100),
        Medicine(name="Metformin", category="Antidiabetic", manufacturer="DiaMeds", price=Decimal("8.00"), stock=400),
        Medicine(name="Aspirin", category="Analgesic", manufacturer="HealthCare Pharma", price=Decimal("3.00"), stock=600),
        Medicine(name="Cetirizine", category="Antihistamine", manufacturer="AllergyRelief", price=Decimal("6.50"), stock=250),
    ]
    db.add_all(medicines)

    medical_records = [
        MedicalRecord(patient_id=1, doctor_id=1, diagnosis="Hypertension", record_date=date(2023, 10, 5), prescription="Lisinopril 10mg daily"),
        MedicalRecord(patient_id=2, doctor_id=2, diagnosis="Migraine", record_date=date(2023, 10, 12), prescription="Sumatriptan 50mg as needed"),
        MedicalRecord(patient_id=3, doctor_id=3, diagnosis="Asthma", record_date=date(2023, 10, 20), prescription="Albuterol inhaler"),
        MedicalRecord(patient_id=4, doctor_id=4, diagnosis="Fractured radius", record_date=date(2023, 11, 1), prescription="Ibuprofen 400mg, Cast for 4 weeks"),
        MedicalRecord(patient_id=5, doctor_id=6, diagnosis="Type 2 Diabetes", record_date=date(2023, 11, 5), prescription="Metformin 500mg twice daily"),
        MedicalRecord(patient_id=6, doctor_id=8, diagnosis="Epilepsy", record_date=date(2023, 11, 10), prescription="Levetiracetam 500mg twice daily"),
        MedicalRecord(patient_id=7, doctor_id=7, diagnosis="Coronary artery disease", record_date=date(2023, 11, 15), prescription="Aspirin 81mg daily, Atorvastatin 40mg"),
        MedicalRecord(patient_id=8, doctor_id=5, diagnosis="Eczema", record_date=date(2023, 11, 18), prescription="Hydrocortisone cream 1% twice daily"),
    ]
    db.add_all(medical_records)

    db.commit()
    print("Seed complete: 8 records per healthcare resource.")


def main() -> None:
    print("Creating tables if they do not exist...")
    Base.metadata.create_all(bind=engine)

    db = SessionLocal()
    try:
        seed_data(db)
    finally:
        db.close()


if __name__ == "__main__":
    main()
