
const payrollService = require("../services/payrollService");

exports.calculatePayroll = async (req, res) => {
    try {
        const result = await payrollService.calculate(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getPayrollByEmployee = async (req, res) => {
    try {
        const result = await payrollService.getByEmployee(req.params.employeeId);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};
