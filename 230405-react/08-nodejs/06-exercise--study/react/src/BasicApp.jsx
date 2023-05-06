import axios from "axios";
import { useState } from "react";

function BasicApp() {
  const [companies, setCompanies] = useState([]);
  const [name, setName] = useState();
  const [taxId, setTaxId] = useState();

  const getCompanies = async () => {
    // 1) create HttpRequest by axios
    // axios.get(hostname+route)
    // 2) use async await in axios
    const response = await axios.get("http://localhost:3001/company")
    // 3) set Response to companies by useState (setCompanies)
    const body = response.data;
    setCompanies(body)
  };

  const createCompany = async () => {
    const createCompany = await axios.post("http://localhost:3001/company", {
      name:name,
      taxId:taxId,
    });
    alert(createCompany.data)
    getCompanies();
    // 0) get name, taxId
    // 1) create HttpRequest by axios
    // axios.post(hostname+route, body)
    // body should be dynamic by state
    // 2) use async await in axios
    // 3) alert `Successful create user`
  };

  return (
    <div>
      <h1>Basic Application</h1>
      <button onClick={getCompanies}>Get Company</button>
      <button onClick={createCompany}>Create Company</button>
      <input
        type="text"
        placeholder="name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Company ID"
        onChange={(event) => setTaxId(event.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Company ID</th>
            <th>Company Name</th>
            <th>Company Tax ID</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => {
            return (
              <tr key={company.companyId}>
                <td>{company.companyId}</td>
                <td>{company.name}</td>
                <td>{company.taxId}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BasicApp;
