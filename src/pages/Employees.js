import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    console.log("API CALLING...");
    api.get("/users").then(res => {
        console.log("DATA FROM API:", res.data);
        setEmployees(res.data);
    });
    }, []);


  return (
    <div>
      <h2>Employees</h2>
       <a href="/add-employee">➕ Add Employee</a>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
