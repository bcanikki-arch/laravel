import { useState } from "react";
import api from "../api/axios";

export default function Reports() {
  const [date, setDate] = useState("");
  const [data, setData] = useState([]);

  const fetchReport = () => {
    api.get(`/reports?date=${date}`).then(res => {
      setData(res.data);
    });
  };

  return (
    <div>
      <h2>Attendance Reports</h2>

      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <button onClick={fetchReport}>Get Report</button>

      <ul>
        {data.map((item, i) => (
          <li key={i}>
            Employee {item.employee_id} – {item.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
