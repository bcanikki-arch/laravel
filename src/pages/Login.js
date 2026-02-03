import { useState } from "react";
import api from "../api/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await api.post("/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("role", res.data.user.role);

      window.location.href = "/";
    } catch {
      setError("Invalid credentials");
    }
  };


  return (
    <div style={{ width: 300, margin: "100px auto" }}>
      <h2>Admin Login</h2>

      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <br /><br />
      <input type="password" placeholder="Password"
             onChange={e => setPassword(e.target.value)} />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
