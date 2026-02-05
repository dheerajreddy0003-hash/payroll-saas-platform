
const db = require("../config/db");
exports.create = (e) =>
  db.query(
    "INSERT INTO employees(name,email,phone,department,salary) VALUES($1,$2,$3,$4,$5) RETURNING *",
    [e.name, e.email, e.phone, e.department, e.salary]
  );
exports.findAll = () => db.query("SELECT * FROM employees ORDER BY id DESC");
exports.findById = (id) => db.query("SELECT * FROM employees WHERE id=$1", [id]);
exports.update = (id, e) =>
  db.query(
    "UPDATE employees SET name=$1,email=$2,phone=$3,department=$4,salary=$5 WHERE id=$6 RETURNING *",
    [e.name, e.email, e.phone, e.department, e.salary, id]
  );
exports.remove = (id) => db.query("DELETE FROM employees WHERE id=$1", [id]);
