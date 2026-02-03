import Sidebar from "./Sidebar";
import Header from "./Header";
import "./layout.css";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const role = localStorage.getItem("role"); // "admin" | "employee"

  // 👉 EMPLOYEE VIEW (clean UI)
  if (role === "employee") {
    return (
      <div className="employee-layout">
        <Outlet />
      </div>
    );
  }

  // 👉 ADMIN VIEW (full panel)
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Header />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
