
const model = require("../models/employeeModel");
exports.add = async (data) => {
  if (!data.name || !data.email || !data.phone || !data.department || !data.salary) {
    throw { status: 400, message: "All fields are required" };
  }
  return model.create(data);
};
exports.list = () => model.findAll();
exports.get = (id) => model.findById(id);
exports.edit = (id, data) => model.update(id, data);
exports.delete = (id) => model.remove(id);
