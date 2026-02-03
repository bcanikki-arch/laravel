import api from "../api/axios";
import AdminAttendance from "./AdminAttendance";
export default function Attendance() {
  const role = localStorage.getItem("role");
  const user = JSON.parse(localStorage.getItem("user"));

  // 👩‍💻 EMPLOYEE VIEW
  if (role === "employee") {
    const checkIn = async () => {
      await api.post("/check-in", { employee_id: user.id });
      alert("Check-in done");
    };

    const checkOut = async () => {
      await api.post("/check-out", { employee_id: user.id });
      alert("Check-out done");
    };

    return (
      <div>
        <h2>My Attendance</h2>
        <button onClick={checkIn}>Check In</button>
        <button onClick={checkOut}>Check Out</button>
      </div>
    );
  }

  // 👨‍💼 ADMIN VIEW
  return <AdminAttendance />;
}
