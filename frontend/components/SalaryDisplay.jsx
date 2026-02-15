
import React, { useState } from "react";
import axios from "axios";

const SalaryDisplay = () => {
    const [employeeId, setEmployeeId] = useState("");
    const [salary, setSalary] = useState(null);
    const [error, setError] = useState("");

    const fetchSalary = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/payroll/${employeeId}`);
            setSalary(res.data);
            setError("");
        } catch (err) {
            setSalary(null);
            setError("Payroll record not found");
        }
    };

    return (
        <div>
            <h2>Payroll Details</h2>

            <input
                type="text"
                placeholder="Enter Employee ID"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
            />

            <button onClick={fetchSalary}>Fetch Payroll</button>

            {salary && (
                <div>
                    <p>Base Salary: {salary.baseSalary}</p>
                    <p>Bonus: {salary.bonus}</p>
                    <p>Deductions: {salary.deductions}</p>
                    <p><strong>Net Salary: {salary.netSalary}</strong></p>
                </div>
            )}

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default SalaryDisplay;
