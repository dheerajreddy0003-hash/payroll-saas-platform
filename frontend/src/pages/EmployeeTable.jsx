
import React, { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/employeeService";
import EmployeeForm from "../components/EmployeeForm";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);

  const load = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  useEffect(() => { load(); }, []);

  return (
    <div>
      <EmployeeForm onSuccess={load} />
      <table>
        <thead>
          <tr><th>Name</th><th>Email</th><th>Salary</th><th>Action</th></tr>
        </thead>
        <tbody>
          {employees.map(e => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.salary}</td>
              <td>
                <button onClick={() => deleteEmployee(e.id).then(load)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
