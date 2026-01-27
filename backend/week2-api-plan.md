
# REST API Planning – Week 2

## Authentication
POST /api/auth/login
GET /api/auth/profile

## Employees
POST /api/employees
GET /api/employees
PUT /api/employees/{id}
DELETE /api/employees/{id}

## Departments
POST /api/departments
GET /api/departments

## Attendance
POST /api/attendance
GET /api/attendance/{employeeId}

## Payroll
POST /api/payroll/generate
GET /api/payroll/month/{month}
