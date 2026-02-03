import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Admin Panel</h2>

      <nav>
        <NavLink to="/" end>Dashboard</NavLink>
        <NavLink to="/employees">Employees</NavLink>
        <NavLink to="/attendance">Attendance</NavLink>
        <NavLink to="/reports">Reports</NavLink>
      </nav>
    </div>
  );
}
