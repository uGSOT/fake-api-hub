export const hospitalData = {
  doctors: [
    {
      id: 1,
      name: "Dr. Ananya Sharma",
      specialization: "Cardiology",
      experience: 8,
      hospital: "City Care Hospital",
      location: "New Delhi",
      availability: "Mon-Fri"
    },
    {
      id: 2,
      name: "Dr. Rahul Kumar",
      specialization: "Neurology",
      experience: 12,
      hospital: "Apollo Care Hospital",
      location: "Mumbai",
      availability: "Tue-Sat"
    },
    {
      id: 3,
      name: "Dr. Sarah Jones",
      specialization: "Pediatrics",
      experience: 5,
      hospital: "Global Health",
      location: "London",
      availability: "Mon, Wed, Fri"
    },
    {
      id: 4,
      name: "Dr. Michael Chen",
      specialization: "Orthopedics",
      experience: 15,
      hospital: "City Care Hospital",
      location: "New Delhi",
      availability: "Mon-Sat"
    },
    {
      id: 5,
      name: "Dr. Emily Davis",
      specialization: "Dermatology",
      experience: 6,
      hospital: "Skin Care Clinic",
      location: "New York",
      availability: "Tue-Thu"
    },
    {
      id: 6,
      name: "Dr. James Wilson",
      specialization: "Oncology",
      experience: 20,
      hospital: "Hope Cancer Center",
      location: "Chicago",
      availability: "Mon-Fri"
    },
    {
      id: 7,
      name: "Dr. Priya Patel",
      specialization: "Cardiology",
      experience: 10,
      hospital: "Apollo Care Hospital",
      location: "Mumbai",
      availability: "Wed-Sun"
    },
    {
      id: 8,
      name: "Dr. David Smith",
      specialization: "Neurology",
      experience: 14,
      hospital: "Global Health",
      location: "London",
      availability: "Mon-Thu"
    }
  ],
  patients: [
    {
      id: 1,
      name: "Amit Patel",
      age: 45,
      gender: "Male",
      bloodGroup: "O+",
      phone: "+91-9876543210",
      hospital: "City Care Hospital"
    },
    {
      id: 2,
      name: "Priya Singh",
      age: 32,
      gender: "Female",
      bloodGroup: "A-",
      phone: "+91-9876543211",
      hospital: "Apollo Care Hospital"
    },
    {
      id: 3,
      name: "John Doe",
      age: 50,
      gender: "Male",
      bloodGroup: "B+",
      phone: "+1-555-1234567",
      hospital: "Global Health"
    },
    {
      id: 4,
      name: "Jane Smith",
      age: 28,
      gender: "Female",
      bloodGroup: "AB+",
      phone: "+1-555-9876543",
      hospital: "City Care Hospital"
    },
    {
      id: 5,
      name: "Ravi Kumar",
      age: 60,
      gender: "Male",
      bloodGroup: "O-",
      phone: "+91-9876543212",
      hospital: "Hope Cancer Center"
    },
    {
      id: 6,
      name: "Sarah Lee",
      age: 22,
      gender: "Female",
      bloodGroup: "A+",
      phone: "+44-7700-900123",
      hospital: "Global Health"
    },
    {
      id: 7,
      name: "Mohammed Khan",
      age: 40,
      gender: "Male",
      bloodGroup: "B-",
      phone: "+91-9876543213",
      hospital: "Apollo Care Hospital"
    },
    {
      id: 8,
      name: "Emily Brown",
      age: 35,
      gender: "Female",
      bloodGroup: "O+",
      phone: "+1-555-2468135",
      hospital: "Skin Care Clinic"
    }
  ],
  departments: [
    {
      id: 1,
      name: "Cardiology",
      description: "Heart and cardiovascular diseases",
      floor: 2,
      headDoctor: "Dr. Ananya Sharma"
    },
    {
      id: 2,
      name: "Neurology",
      description: "Nervous system disorders",
      floor: 3,
      headDoctor: "Dr. Rahul Kumar"
    },
    {
      id: 3,
      name: "Pediatrics",
      description: "Infants, children, and adolescents",
      floor: 1,
      headDoctor: "Dr. Sarah Jones"
    },
    {
      id: 4,
      name: "Orthopedics",
      description: "Musculoskeletal system",
      floor: 4,
      headDoctor: "Dr. Michael Chen"
    },
    {
      id: 5,
      name: "Dermatology",
      description: "Skin, hair, and nails",
      floor: 1,
      headDoctor: "Dr. Emily Davis"
    },
    {
      id: 6,
      name: "Oncology",
      description: "Cancer treatment",
      floor: 5,
      headDoctor: "Dr. James Wilson"
    },
    {
      id: 7,
      name: "Emergency",
      description: "Immediate medical attention",
      floor: 0,
      headDoctor: "Dr. Priya Patel"
    },
    {
      id: 8,
      name: "Radiology",
      description: "Medical imaging",
      floor: -1,
      headDoctor: "Dr. David Smith"
    }
  ],
  appointments: [
    {
      id: 1,
      patientId: 1,
      doctorId: 1,
      date: "2023-11-15",
      time: "10:00 AM",
      status: "Scheduled"
    },
    {
      id: 2,
      patientId: 2,
      doctorId: 2,
      date: "2023-11-16",
      time: "02:30 PM",
      status: "Completed"
    },
    {
      id: 3,
      patientId: 3,
      doctorId: 3,
      date: "2023-11-17",
      time: "09:15 AM",
      status: "Cancelled"
    },
    {
      id: 4,
      patientId: 4,
      doctorId: 4,
      date: "2023-11-18",
      time: "11:45 AM",
      status: "Scheduled"
    },
    {
      id: 5,
      patientId: 5,
      doctorId: 6,
      date: "2023-11-19",
      time: "03:00 PM",
      status: "Scheduled"
    },
    {
      id: 6,
      patientId: 6,
      doctorId: 8,
      date: "2023-11-20",
      time: "10:30 AM",
      status: "Completed"
    },
    {
      id: 7,
      patientId: 7,
      doctorId: 7,
      date: "2023-11-21",
      time: "01:00 PM",
      status: "Scheduled"
    },
    {
      id: 8,
      patientId: 8,
      doctorId: 5,
      date: "2023-11-22",
      time: "04:15 PM",
      status: "Scheduled"
    }
  ],
  medicines: [
    {
      id: 1,
      name: "Paracetamol",
      category: "Analgesic",
      manufacturer: "HealthCare Pharma",
      price: 2.50,
      stock: 500
    },
    {
      id: 2,
      name: "Amoxicillin",
      category: "Antibiotic",
      manufacturer: "BioMeds Inc",
      price: 15.00,
      stock: 200
    },
    {
      id: 3,
      name: "Ibuprofen",
      category: "Anti-inflammatory",
      manufacturer: "ReliefMeds",
      price: 5.00,
      stock: 350
    },
    {
      id: 4,
      name: "Omeprazole",
      category: "Antacid",
      manufacturer: "GastroHealth",
      price: 12.50,
      stock: 150
    },
    {
      id: 5,
      name: "Lisinopril",
      category: "Antihypertensive",
      manufacturer: "CardioCare",
      price: 20.00,
      stock: 100
    },
    {
      id: 6,
      name: "Metformin",
      category: "Antidiabetic",
      manufacturer: "DiaMeds",
      price: 8.00,
      stock: 400
    },
    {
      id: 7,
      name: "Aspirin",
      category: "Analgesic",
      manufacturer: "HealthCare Pharma",
      price: 3.00,
      stock: 600
    },
    {
      id: 8,
      name: "Cetirizine",
      category: "Antihistamine",
      manufacturer: "AllergyRelief",
      price: 6.50,
      stock: 250
    }
  ],
  "medical-records": [
    {
      id: 1,
      patientId: 1,
      doctorId: 1,
      diagnosis: "Hypertension",
      date: "2023-10-05",
      prescription: "Lisinopril 10mg daily"
    },
    {
      id: 2,
      patientId: 2,
      doctorId: 2,
      diagnosis: "Migraine",
      date: "2023-10-12",
      prescription: "Sumatriptan 50mg as needed"
    },
    {
      id: 3,
      patientId: 3,
      doctorId: 3,
      diagnosis: "Asthma",
      date: "2023-10-20",
      prescription: "Albuterol inhaler"
    },
    {
      id: 4,
      patientId: 4,
      doctorId: 4,
      diagnosis: "Fractured radius",
      date: "2023-11-01",
      prescription: "Ibuprofen 400mg, Cast for 4 weeks"
    },
    {
      id: 5,
      patientId: 5,
      doctorId: 6,
      diagnosis: "Type 2 Diabetes",
      date: "2023-11-05",
      prescription: "Metformin 500mg twice daily"
    },
    {
      id: 6,
      patientId: 6,
      doctorId: 8,
      diagnosis: "Epilepsy",
      date: "2023-11-10",
      prescription: "Levetiracetam 500mg twice daily"
    },
    {
      id: 7,
      patientId: 7,
      doctorId: 7,
      diagnosis: "Coronary artery disease",
      date: "2023-11-15",
      prescription: "Aspirin 81mg daily, Atorvastatin 40mg"
    },
    {
      id: 8,
      patientId: 8,
      doctorId: 5,
      diagnosis: "Eczema",
      date: "2023-11-18",
      prescription: "Hydrocortisone cream 1% twice daily"
    }
  ]
};
