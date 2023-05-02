import express from "express";
const webServer = express();
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3001;

// code here.
const company = [];

webServer.get("/", (req, res) => {
  res.send("hello world");
});

webServer.get("/company", (req, res) => {
  // const companyMock = [
  //   { 
  //     companyId: "comp-01", 
  //     name: "Mock Company 01",
  //     taxId: "tax-000",
  //     employees: []
  //  }
  // ];
  // res.json(companyMock);
  // next();
  res.json(company)
});

webServer.post("/company", (req, res) => {
  // const companyId = req.body.companyId;
  const companyId = `comp-00${company.length + 1}`;
  const name = req.body.name;
  const taxId = req.body.taxId || "";
  const employees = req.body.employees || [];

  const newCompany = { companyId, name, taxId, employees };

  // const newCompany = {

  // }
  company.push(newCompany);
  res.json("Create Company Success")
});

webServer.listen(port, ipAddress, () => {
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});
