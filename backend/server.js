const express = require("express");
const cors = require("cors");

const employeeRoutes = require("./routes/employeeRoutes");
const payrollRoutes = require("./routes/payrollRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Employee APIs
app.use("/api/employees", employeeRoutes);

// Payroll APIs
app.use("/api/payroll", payrollRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
