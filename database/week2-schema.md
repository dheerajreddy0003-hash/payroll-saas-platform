
# Database Schema Design – Week 2

## Tables

### Departments
- id (PK, INT)
- name (VARCHAR)
- created_at (TIMESTAMP)

### Clients
- id (PK, INT)
- name (VARCHAR)
- email (VARCHAR)
- created_at (TIMESTAMP)

### Employees
- id (PK, INT)
- name (VARCHAR)
- email (VARCHAR)
- department_id (FK → Departments.id)
- client_id (FK → Clients.id)
- role (HR, EMPLOYEE)
- salary (DECIMAL)
- created_at (TIMESTAMP)

### Attendance
- id (PK, INT)
- employee_id (FK → Employees.id)
- date (DATE)
- status (PRESENT, ABSENT, LEAVE)

### Payroll
- id (PK, INT)
- employee_id (FK → Employees.id)
- month (VARCHAR)
- base_salary (DECIMAL)
- deductions (DECIMAL)
- net_salary (DECIMAL)
- generated_at (TIMESTAMP)

## Relationships
- One Department → Many Employees
- One Client → Many Employees
- One Employee → Many Attendance records
- One Employee → Many Payroll records
