import { useEffect, useState } from "react";
import api from "../api/axios";
import "./dashboard.css";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalEmployees: 0,
    presentToday: 0,
    absentToday: 0
  });

  useEffect(() => {
    api.get("/dashboard-stats").then(res => {
      setStats(res.data);
    });
  }, []);

  return (
    <div className="dashboard">
      <h1 className="title">Admin Dashboard</h1>
      <p className="subtitle">Attendance Management System</p>

      <div className="card-container">
        <div className="card blue">
          <h3>Total Employees</h3>
          <p>{stats.totalEmployees}</p>
        </div>

        <div className="card green">
          <h3>Present Today</h3>
          <p>{stats.presentToday}</p>
        </div>

        <div className="card red">
          <h3>Absent Today</h3>
          <p>{stats.absentToday}</p>
        </div>
      </div>
    </div>
  );
}
