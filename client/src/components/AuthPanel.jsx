export default function AuthPanel() {
  return (
    <section className="card">
      <h2>Step 1: Frontend Auth UI</h2>
      <div className="grid-2">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <select defaultValue="resident">
          <option value="resident">Resident</option>
          <option value="doctor">Doctor</option>
          <option value="nurse">Nurse</option>
          <option value="volunteer">Volunteer</option>
        </select>
      </div>
      <div className="button-row">
        <button>Register</button>
        <button className="secondary">Login</button>
      </div>
      <small>Backend API connection will be added in next step.</small>
    </section>
  );
}
