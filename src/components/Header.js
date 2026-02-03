import api from "../api/axios";
export default function Header() {
  const logout = async () => {
  await api.post("/logout");
  localStorage.clear();
  window.location.href = "/login";
};

  return (
    <div className="header">
      <h3>Attendance Management System</h3>

      <div className="user">
        <span>Admin</span>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
