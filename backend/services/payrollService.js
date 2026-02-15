
// Simple payroll logic (can be connected to DB later)
let payrollData = [];

exports.calculate = async (data) => {
    const { employeeId, baseSalary, bonus = 0, deductions = 0 } = data;

    if (!employeeId || !baseSalary) {
        throw new Error("Employee ID and Base Salary are required");
    }

    const netSalary = Number(baseSalary) + Number(bonus) - Number(deductions);

    const record = {
        employeeId,
        baseSalary,
        bonus,
        deductions,
        netSalary
    };

    payrollData.push(record);
    return record;
};

exports.getByEmployee = async (employeeId) => {
    const record = payrollData.find(p => p.employeeId == employeeId);
    if (!record) throw new Error("Payroll record not found");
    return record;
};
