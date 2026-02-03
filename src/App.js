import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import AddEmployee from "./pages/AddEmployee";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* ADMIN ROUTES */}
        <Route
          element={
            <ProtectedRoute allow={["admin"]}>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/reports" element={<Reports />} />
        </Route>

        {/* EMPLOYEE + ADMIN ATTENDANCE */}
        <Route
          element={
            <ProtectedRoute allow={["employee", "admin"]}>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/attendance" element={<Attendance />} />
        </Route>

        {/* fallback */}
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
