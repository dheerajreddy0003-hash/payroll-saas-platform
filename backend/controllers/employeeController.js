
const service = require("../services/employeeService");
exports.createEmployee = async (req, res) => {
  try {
    const result = await service.add(req.body);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
};
exports.getEmployees = async (_, res) => {
  const result = await service.list();
  res.json(result.rows);
};
exports.getEmployee = async (req, res) => {
  const result = await service.get(req.params.id);
  if (result.rows.length === 0)
    return res.status(404).json({ error: "Employee not found" });
  res.json(result.rows[0]);
};
exports.updateEmployee = async (req, res) => {
  const result = await service.edit(req.params.id, req.body);
  res.json(result.rows[0]);
};
exports.deleteEmployee = async (req, res) => {
  await service.delete(req.params.id);
  res.json({ message: "Employee deleted" });
};
