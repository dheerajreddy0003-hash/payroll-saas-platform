
import React, { useState } from "react";
import { createEmployee } from "../services/employeeService";

const EmployeeForm = ({ onSuccess }) => {
  const [form, setForm] = useState({ name: "", email: "", salary: "" });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await createEmployee(form);
    onSuccess();
    setForm({ name: "", email: "", salary: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Employee</h3>
      <input name="name" value={form.name} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <input name="salary" value={form.salary} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};

export default EmployeeForm;
