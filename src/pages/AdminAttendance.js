import { useEffect, useState } from "react";
import api from "../api/axios";

export default function AdminAttendance() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get("/attendance").then(res => {
      setList(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Attendance Sheet</h2>

      <table border="1">
        <thead>
          <tr>
            {/* <th>Employee</th> */}
            <th>Date</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {list.map(row => (
            <tr key={row.id}>
              {/* <td>{row.employee.name}</td> */}
              <td>{row.date}</td>
              <td>{row.check_in}</td>
              <td>{row.check_out ?? "-"}</td>
              <td>{row.check_out ? "Present" : "Absent"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
