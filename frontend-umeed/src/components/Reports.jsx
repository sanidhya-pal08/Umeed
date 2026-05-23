import React from "react";
import "./Reports.css";
import heroLogo from "../assets/image.png";

const mockReports = [
  {
    id: 1,
    name: "Aarav Sharma",
    age: 8,
    type: "missing",
    location: "South Delhi, India",
    reported: "Oct 12, 2023",
    photo: "",
    resolved: false,
  },
  {
    id: 2,
    name: "Priya Patel",
    age: 72,
    type: "found",
    location: "Bandra West, Mumbai",
    reported: "Sep 28, 2023",
    photo: "",
    resolved: true,
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    age: 22,
    type: "missing",
    location: "Indiranagar, Bangalore",
    reported: "Nov 05, 2023",
    photo: "",
    resolved: false,
  },
];

const Reports = () => {
  const total = mockReports.length;
  const active = mockReports.filter((r) => r.type === "missing" && !r.resolved).length;
  const resolved = mockReports.filter((r) => r.resolved || r.type === "found").length;

  return (
    <div className="reports-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={heroLogo} alt="Umeed" className="nav-logo-img" />
          <span className="navbar-logo">Umeed</span>
        </div>
        <div className="navbar-right">
          <a href="/" className="nav-link">Home</a>
          <a href="/reports" className="nav-link active">Reports</a>
          <a href="/about" className="nav-link">About</a>
          <div className="nav-profile">
            <span>👤</span>
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="reports-main">

        {/* Page Header */}
        <div className="reports-header">
          <div>
            <h1 className="reports-title">My Reports</h1>
            <p className="reports-subtitle">Manage your submitted reports and track status updates.</p>
          </div>
          <button className="btn-add">＋ Add New Report</button>
        </div>

        {/* Stats Bar */}
        <div className="stats-bar">
          <div className="stat-card">
            <div className="stat-icon stat-icon-blue">📄</div>
            <div>
              <p className="stat-label">TOTAL REPORTS</p>
              <p className="stat-value">{String(total).padStart(2, "0")}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-icon-red">⚠️</div>
            <div>
              <p className="stat-label">ACTIVE (MISSING)</p>
              <p className="stat-value stat-red">{String(active).padStart(2, "0")}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-icon-gold">✅</div>
            <div>
              <p className="stat-label">RESOLVED (FOUND)</p>
              <p className="stat-value stat-gold">{String(resolved).padStart(2, "0")}</p>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="reports-grid">
          {mockReports.map((report) => (
            <div className="report-card" key={report.id}>
              <div className="card-image-wrapper">
                {report.photo ? (
                  <img src={report.photo} alt={report.name} className="card-image" />
                ) : (
                  <div className="card-image-placeholder">
                    <span>🖼</span>
                  </div>
                )}
                <span className={`card-badge ${report.type === "missing" ? "badge-missing" : "badge-found"}`}>
                  {report.type.toUpperCase()}
                </span>
              </div>
              <div className="card-body">
                <h3 className="card-name">{report.name}</h3>
                <p className="card-age">Age: {report.age} Years</p>
                <p className="card-detail">
                  <span className="card-icon">📍</span> {report.location}
                </p>
                <p className="card-detail">
                  <span className="card-icon">📅</span> Reported: {report.reported}
                </p>
                <div className="card-actions">
                  {report.resolved ? (
                    <button className="btn-resolved" disabled>Resolved</button>
                  ) : (
                    <>
                      <button className="btn-edit">Edit</button>
                      <button className="btn-resolve">Mark Resolved</button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (shown when no reports) */}
        {mockReports.length === 0 && (
          <div className="empty-state">
            <span className="empty-icon">📭</span>
            <h3>No reports yet</h3>
            <p>You haven't submitted any reports yet. Start by clicking Add New Report.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="reports-footer">
        <div className="footer-left">
          <div className="footer-brand">
            <img src={heroLogo} alt="Umeed" className="footer-logo-img" />
            <span className="footer-logo-text">Umeed</span>
          </div>
          <p className="footer-copy">© 2024 Umeed Humanitarian Portal. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Support</a>
          <a href="#">About Us</a>
        </div>
      </footer>
    </div>
  );
};

export default Reports;