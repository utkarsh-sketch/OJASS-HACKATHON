export default function SOSPanel() {
  return (
    <section className="card">
      <h2>SOS Broadcast UI (Frontend Only)</h2>
      <div className="grid-3">
        <select defaultValue="Medical Emergency">
          <option>Medical Emergency</option>
          <option>Car Breakdown</option>
          <option>Gas Leak</option>
          <option>Fire</option>
          <option>Other</option>
        </select>
        <select defaultValue="1">
          <option value="0.5">500m</option>
          <option value="1">1km</option>
          <option value="2">2km</option>
        </select>
        <button className="danger">Broadcast SOS</button>
      </div>
      <p className="muted">This is a UI wireframe for now. Live sockets and backend integration come next.</p>
    </section>
  );
}
