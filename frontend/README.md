# Mock API Hub

# Build Fake API Hub – Complete UI/UX

Build the complete frontend interface for a project called **Fake API Hub**.

## 1. Project Concept

Fake API Hub is an open-source platform that provides **free mock REST APIs for different real-world business use cases**.

Developers can:

* Discover APIs
* Search APIs
* Browse API categories
* View API resources
* Read API documentation
* View endpoints
* Test API endpoints
* View sample requests/responses
* Copy API URLs
* Copy code examples

Students/developers can later contribute:

* New business API modules
* Mock datasets
* REST endpoints
* Documentation
* Tests
* UI improvements

### Demo Requirement

For the first working version, **Hospital API is the only fully implemented demo API**.

However, the complete UI should be built so that additional modules can easily be added later.

Other modules should be displayed as examples:

* Food Delivery API
* College API
* Transport API
* E-commerce API
* Hotel API
* Banking API
* Travel API
* Job Portal API

These can show a "Coming Soon" state.

---

# 2. Technology Stack

Use:

### Frontend

* React.js
* Vite
* Tailwind CSS v4
* React Router

### Backend

* Python Flask

### Database

* MySQL

Architecture:

```text
React.js
    ↓
Flask REST API
    ↓
MySQL
```

## Current implementation scope

For this version:

* Build the complete React frontend
* Use static/mock data
* Hospital API can use static mock data
* Create the UI required for future Flask integration
* Do NOT implement real MySQL integration yet
* Do NOT implement authentication

---

# 3. Design Theme

Use Tailwind CSS v4 and configure the theme using `@theme` in `src/index.css`.

Use these exact design tokens:

```css
@theme {
  --color-brand: #e50913;
  --color-brand-dark: #b8070f;
  --color-brand-light: #ff2d37;
  --color-brand-muted: #fce8e9;

  --color-navy: #0a0a12;
  --color-navy-elevated: #12121c;
  --color-navy-muted: #1e1e2e;

  --color-surface: #ffffff;
  --color-surface-muted: #f5f5f7;
  --color-surface-subtle: #ebebef;

  --color-ink: #0f0f14;
  --color-ink-muted: #5c5c6f;
  --color-ink-subtle: #8e8e9e;
  --color-ink-inverse: #ffffff;
  --color-ink-inverse-muted: #b4b4c4;

  --color-border: #e4e4ea;
  --color-border-dark: #2a2a3a;

  --font-sans: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;

  --shadow-card: 0 4px 24px -4px rgb(10 10 18 / 0.08);
  --shadow-card-hover: 0 12px 40px -8px rgb(10 10 18 / 0.14);
  --shadow-glow: 0 0 60px -12px rgb(229 9 19 / 0.35);
}

@layer base {
  html {
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    @apply bg-surface text-ink;
  }
}
```

Use these design tokens consistently.

---

# 4. Overall UI Style

The website should look like a modern developer platform.

Design inspiration:

* API documentation websites
* Developer portals
* Modern SaaS dashboards

Do NOT make it look like an e-commerce website.

Design characteristics:

* Clean white background
* Dark navy sections
* Red primary accent
* Rounded cards
* Subtle borders
* Minimal shadows
* Strong typography
* Lots of whitespace
* Clear code blocks
* Professional API documentation layout
* Responsive on desktop/tablet/mobile

---

# 5. Application Navigation

Create a reusable Navbar.

Navigation:

```text
Fake API Hub

Home
APIs
Categories
Documentation
Contribute
```

Right side:

```text
GitHub
```

Do NOT add:

* Login
* Signup
* Logout
* User profile

Navbar should be sticky.

Mobile should have a hamburger menu.

---

# 6. Global Search

The platform should have a reusable global search bar.

Search should be able to find:

* API modules
* Categories
* Resources

Example:

```text
Search APIs, resources...

Hospital
Food
Doctors
Transport
College
```

For the first version, use frontend static search.

---

# 7. HOME PAGE

Route:

```text
/
```

Build the complete landing page.

## Hero

Heading:

```text
Build Faster with
Ready-to-Use Mock APIs
```

Description:

```text
Explore free mock REST APIs for real-world applications.
Build and test your frontend without waiting for a backend.
```

Large search bar:

```text
Search APIs, resources...
```

Popular searches:

```text
Hospital
Food
College
Transport
E-commerce
```

---

# 8. Home – API Categories

Section:

```text
Explore API Categories
```

Cards:

```text
Healthcare
Food & Delivery
Education
Transport
E-commerce
Hospitality
Finance
Travel
```

Each card:

* Icon
* Category name
* Description
* Number of APIs
* Arrow

Only Healthcare/Hospital should be active.

Others can display:

```text
Coming Soon
```

---

# 9. Home – Featured APIs

Section:

```text
Popular APIs
```

Create cards for:

```text
Hospital API
Food Delivery API
College API
Transport API
E-commerce API
Hotel API
```

Hospital:

```text
ACTIVE
```

Others:

```text
COMING SOON
```

Hospital card should navigate to:

```text
/apis/hospital
```

---

# 10. Home – How It Works

Create four steps:

```text
01
Find an API

02
Explore the documentation

03
Test the endpoint

04
Copy and build
```

Use icons and clean visual connectors.

---

# 11. Home – Developer CTA

Create a dark navy section:

```text
Build without waiting for a backend.

Explore realistic mock APIs designed for
frontend development and testing.

[ Explore APIs ]
```

---

# 12. Home – Open Source Section

Create:

```text
Built by the Community

Help expand Fake API Hub by contributing
new APIs, datasets, documentation and tests.

[ Contribute to Fake API Hub ]
```

---

# 13. Footer

Create a complete footer.

Columns:

```text
Fake API Hub

Platform
APIs
Categories
Documentation

Resources
Getting Started
API Guide
Examples

Community
Contribute
GitHub

Technology
React
Flask
MySQL
```

Footer should be dark navy.

---

# 14. API LIBRARY PAGE

Route:

```text
/apis
```

Page title:

```text
API Library

Explore mock APIs for different business domains.
```

Add:

```text
Search APIs...
```

Filters:

```text
All
Healthcare
Food
Education
Transport
E-commerce
Hospitality
Finance
Travel
```

Display API cards.

Hospital API should be active.

Others should show:

```text
Coming Soon
```

---

# 15. CATEGORIES PAGE

Route:

```text
/categories
```

Create a complete category browsing page.

Each category card should include:

```text
Icon
Category name
Description
API count
Explore button
```

Categories:

```text
Healthcare
Food & Delivery
Education
Transport
E-commerce
Hospitality
Finance
Travel
Real Estate
Entertainment
Fitness
Jobs
```

Healthcare should navigate to the Hospital API.

---

# 16. HOSPITAL API – MAIN PAGE

Route:

```text
/apis/hospital
```

This is the main demo module.

Top breadcrumb:

```text
Home / APIs / Hospital API
```

Header:

```text
Hospital API

Healthcare

A realistic mock REST API for building and testing
hospital and healthcare applications.
```

Badges:

```text
REST API
v1.0
JSON
Active
```

Base URL:

```text
https://fake-api-hub.com/api/v1/hospital

[ Copy ]
```

---

# 17. Hospital API – Overview

Show statistics:

```text
6 Resources
24 Endpoints
JSON
REST
```

Use statistic cards.

---

# 18. Hospital API – Resource Navigation

Create a sidebar:

```text
Hospital API

Overview

Resources

Doctors
Patients
Departments
Appointments
Medicines
Medical Records
```

The sidebar should remain visible on desktop.

On mobile, convert it to a dropdown.

---

# 19. Hospital API – Doctors

Default selected resource:

```text
Doctors
```

Description:

```text
Information about doctors working in hospitals.
```

Display endpoints:

```text
GET /doctors
Get all doctors

GET /doctors/{id}
Get doctor by ID

GET /doctors?specialization=cardiology
Filter doctors
```

Each endpoint should have:

```text
Method
Endpoint
Description
View Docs
Try API
```

---

# 20. Hospital API – Other Resources

Create complete UI for:

### Patients

```text
GET /patients
GET /patients/{id}
POST /patients
PUT /patients/{id}
DELETE /patients/{id}
```

### Departments

```text
GET /departments
GET /departments/{id}
```

### Appointments

```text
GET /appointments
GET /appointments/{id}
POST /appointments
PUT /appointments/{id}
DELETE /appointments/{id}
```

### Medicines

```text
GET /medicines
GET /medicines/{id}
```

### Medical Records

```text
GET /medical-records
GET /medical-records/{id}
```

Use static data.

---

# 21. Endpoint Documentation Interface

When a user clicks an endpoint, show detailed documentation.

Example:

```text
GET /api/v1/hospital/doctors
```

Description:

```text
Returns a list of doctors.
```

Show:

### Parameters

| Parameter      | Type    | Required | Description              |
| -------------- | ------- | -------- | ------------------------ |
| search         | string  | No       | Search by doctor name    |
| specialization | string  | No       | Filter by specialization |
| page           | integer | No       | Page number              |
| limit          | integer | No       | Number of records        |

---

# 22. Example Request

Show code block:

```bash
curl https://fake-api-hub.com/api/v1/hospital/doctors
```

Buttons:

```text
Copy
```

---

# 23. Example Response

Show syntax-highlighted JSON:

```json
{
  "data": [
    {
      "id": 1,
      "name": "Dr. Ananya Sharma",
      "specialization": "Cardiology",
      "experience": 8,
      "hospital": "City Care Hospital"
    },
    {
      "id": 2,
      "name": "Dr. Rahul Kumar",
      "specialization": "Neurology",
      "experience": 6,
      "hospital": "Apollo Care Hospital"
    }
  ]
}
```

Add:

```text
Copy JSON
```

---

# 24. API Playground

Create a complete UI for:

```text
Try API
```

This does NOT need to call Flask yet.

Use static mock responses.

Interface:

```text
GET /api/v1/hospital/doctors

Query Parameters

specialization    [ Cardiology ]
search            [           ]
page              [ 1 ]
limit             [ 10 ]

[ Send Request ]
```

Below:

```text
Response

Status 200 OK

{
  "data": [...]
}
```

When the user clicks Send Request, show the static response.

Add response tabs:

```text
Response
Headers
```

---

# 25. Code Examples

In the endpoint documentation, show examples for:

```text
cURL
JavaScript
Python
```

Example tabs:

```text
[ cURL ] [ JavaScript ] [ Python ]
```

JavaScript:

```javascript
fetch("https://fake-api-hub.com/api/v1/hospital/doctors")
  .then(response => response.json())
  .then(data => console.log(data));
```

Python:

```python
import requests

response = requests.get(
    "https://fake-api-hub.com/api/v1/hospital/doctors"
)

print(response.json())
```

Add copy buttons.

---

# 26. Documentation Page

Route:

```text
/documentation
```

Build a proper documentation landing page.

Sections:

```text
Getting Started

What is Fake API Hub?

Quick Start

API Structure

Authentication
```

For Authentication, clearly state:

```text
Authentication is not required for the current public mock APIs.
```

Also include:

```text
HTTP Methods
Status Codes
Pagination
Filtering
Error Responses
Response Format
```

Use a documentation sidebar.

---

# 27. Contribute Page

Route:

```text
/contribute
```

Create a complete open-source contribution guide.

Sections:

```text
Contribute to Fake API Hub

What Can You Contribute?

New API Module
New Resource
New Endpoint
Mock Dataset
Documentation
Tests
Frontend Improvements
Bug Fixes
```

Workflow:

```text
1. Choose a business domain
2. Create data model
3. Create mock data
4. Build REST endpoints
5. Add documentation
6. Add tests
7. Create Pull Request
8. Review and merge
```

Show example contribution:

```text
Hospital API
Food Delivery API
College API
Transport API
Banking API
Library API
```

Add GitHub-style contribution cards.

---

# 28. API Not Found / 404 Page

Create a professional 404 page.

Example:

```text
404

API Not Found

The API or page you're looking for doesn't exist.

[ Back to API Library ]
```

---

# 29. Search Results Interface

When searching from the home page, show a search results dropdown.

Example:

```text
Search: hospital

Search Results

APIs
Hospital API

Resources
Doctors
Patients
Appointments
```

Clicking a result should navigate to the appropriate page.

---

# 30. Loading States

Create reusable loading UI.

Use skeleton loaders for:

* API cards
* Resource cards
* Documentation
* Search results

Even though current data is static, build the components so they can later work with Flask APIs.

---

# 31. Empty States

Create reusable empty states.

Example:

```text
No APIs Found

Try searching for another API or category.

[ Browse All APIs ]
```

---

# 32. Error States

Create a reusable API error state.

Example:

```text
Something went wrong

Unable to load the API response.

[ Try Again ]
```

Use static simulation for now.

---

# 33. Reusable Component Architecture

Create components such as:

```text
src/components/

Navbar.jsx
Footer.jsx
SearchBar.jsx
ApiCard.jsx
CategoryCard.jsx
ResourceCard.jsx
EndpointCard.jsx
CodeBlock.jsx
CopyButton.jsx
StatCard.jsx
Breadcrumb.jsx
Sidebar.jsx
DocumentationLayout.jsx
Playground.jsx
Tabs.jsx
Badge.jsx
EmptyState.jsx
ErrorState.jsx
Skeleton.jsx
SectionHeading.jsx
```

Do not create everything inside one page component.

Keep components reusable because students will later contribute new API modules.

---

# 34. Suggested Folder Structure

```text
frontend/
└── src/
    ├── components/
    ├── pages/
    ├── layouts/
    ├── data/
    │   ├── apiData.js
    │   └── hospitalData.js
    ├── services/
    │   └── apiService.js
    ├── hooks/
    ├── utils/
    ├── assets/
    ├── App.jsx
    ├── main.jsx
    └── index.css
```

---

# 35. Static Hospital Data

Create realistic mock data.

Doctors:

```text
id
name
specialization
experience
hospital
location
availability
```

Patients:

```text
id
name
age
gender
bloodGroup
phone
hospital
```

Departments:

```text
id
name
description
floor
headDoctor
```

Appointments:

```text
id
patientId
doctorId
date
time
status
```

Medicines:

```text
id
name
category
manufacturer
price
stock
```

Medical Records:

```text
id
patientId
doctorId
diagnosis
date
prescription
```

Use at least 8–12 realistic records for each resource so the UI feels like a real API.

---

# 36. API Response Simulation

Create a frontend service layer:

```text
src/services/apiService.js
```

For now, this service should return static data.

Structure it so that later it can easily be changed from:

```text
Static Data
```

to:

```text
Flask REST API
```

For example:

```javascript
getDoctors()
getDoctorById(id)
getPatients()
getPatientById(id)
getDepartments()
getAppointments()
getMedicines()
getMedicalRecords()
```

Do not connect to Flask yet.

---

# 37. Responsive Requirements

The complete application must work on:

### Desktop

* Full navbar
* Sidebar documentation layout
* Multi-column cards
* Wide API playground

### Tablet

* Reduced columns
* Collapsible documentation sidebar

### Mobile

* Hamburger navigation
* Single-column cards
* Collapsible API resource navigation
* Horizontal endpoint scrolling where required
* Full-width code blocks with horizontal scrolling
* Responsive API playground

Do not allow the overall page to horizontally overflow.

---

# 38. UX Requirements

Implement:

* Hover states
* Focus states
* Active navigation states
* Copy-to-clipboard feedback
* Smooth transitions
* Accessible buttons
* Keyboard-friendly controls
* Clear error messages
* Responsive layouts

Do not overuse animations.

Keep the interface professional.

---

# 39. Routes

Implement:

```text
/
 /apis
 /apis/hospital
 /apis/hospital/doctors
 /apis/hospital/doctors/:id
 /categories
 /documentation
 /contribute
```

Also:

```text
/*
```

for 404.

---

# 40. Final UI Flow

The final application should work like this:

```text
                         HOME
                           │
              ┌────────────┼────────────┐
              ↓            ↓            ↓
           Search       Categories     APIs
              │            │            │
              └────────────┼────────────┘
                           ↓
                     Hospital API
                           │
                           ↓
                  Hospital Overview
                           │
          ┌────────────────┼────────────────┐
          ↓                ↓                ↓
       Doctors          Patients       Departments
          │
          ↓
       Endpoints
          │
          ↓
   Endpoint Documentation
          │
     ┌────┴────┐
     ↓         ↓
 Example     Try API
 Request       │
     │         ↓
     │      Response
     │
     ↓
 Copy Code
```

---

# 41. Important Scope Restriction

Do NOT implement at this stage:

* User authentication
* Login/signup
* User accounts
* Payments
* Real MySQL integration
* Real Flask API calls
* Admin dashboard
* User management
* API submission backend
* Production deployment

The goal is to create a **complete, polished frontend product interface** with a fully demonstrated **Hospital API module using static data**.

The architecture should be clean enough that the next development phase can connect:

```text
React Frontend
       ↓
Flask REST APIs
       ↓
MySQL
```

without redesigning the frontend.

---

# 42. Final Quality Check

Before finishing:

1. Run the React application.
2. Verify every route works.
3. Verify all navbar links work.
4. Verify Home → Hospital API navigation works.
5. Verify API search works.
6. Verify category filtering works.
7. Verify Hospital resources work.
8. Verify endpoint documentation works.
9. Verify copy buttons work.
10. Verify API playground works with static responses.
11. Verify responsive mobile layout.
12. Verify there are no console errors.
13. Verify there are no broken links.
14. Verify the Tailwind v4 theme is being used consistently.

Do not leave placeholder screens where a complete UI has been requested.

The final result should feel like a **real developer-facing API platform**, even though the backend is not connected yet.



## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
