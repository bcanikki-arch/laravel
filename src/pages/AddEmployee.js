import { useState } from "react";
import api from "../api/axios";

export default function AddEmployee() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role_id: 2 // employee
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    try {
      await api.post("/users", form);
      alert("Employee added");
    } catch (err) {
      alert("Error adding employee");
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>

      <input name="name" placeholder="Name" onChange={handleChange} /><br />
      <input name="email" placeholder="Email" onChange={handleChange} /><br />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br />

      <button onClick={submit}>Save</button>
    </div>
  );
}
