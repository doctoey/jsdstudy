import express from "express";
import cors from "cors";

const webServer = express();
webServer.use(cors());
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3001;

webServer.get("/", (request, response) => {
  response.send("Hello World");
});

// code down below.
const company = [
  { 
    companyId: "comp-01", 
    name: "Mock Company 01",
    taxId: "tax-000",
    employees: []
 }
];

webServer.get("/", (req, res) => {
  res.send("hello world");
});

webServer.get("/company", (req, res) => {
  res.json(company)
});

webServer.post("/company", (req, res) => {
  const companyId = `comp-00${company.length + 1}`;
  const name = req.body.name;
  const taxId = req.body.taxId || "";
  const employees = req.body.employees || [];

  const newCompany = { companyId, name, taxId, employees };

  company.push(newCompany);
  res.json("Create Company Success")
});

webServer.listen(port, ipAddress, () => {
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});
