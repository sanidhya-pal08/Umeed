import React, { useState } from "react";
import "./Home.css";
import heroLogo from "../assets/image.png";

const mockReports = [
  {
    id: 1,
    name: "Aarav",
    age: 8,
    type: "missing",
    location: "Central Park, NY",
    reported: "2 days ago",
    photo: "",
  },
  {
    id: 2,
    name: "Mrs. Gupta",
    age: 72,
    type: "found",
    location: "Downtown Delhi",
    reported: "5 hours ago",
    extra: "Reunited",
    photo: "",
  },
  {
    id: 3,
    name: "Sam",
    age: 15,
    type: "missing",
    location: "Brooklyn Mall",
    reported: "24h ago",
    photo: "",
  },
  {
    id: 4,
    name: "David L.",
    age: 45,
    type: "missing",
    location: "Westside Train Station",
    reported: "3 days ago",
    photo: "",
  },
  {
    id: 5,
    name: "Mira",
    age: 4,
    type: "found",
    location: "Neighborhood Park",
    reported: "1 day ago",
    extra: "Safe at Home",
    photo: "",
  },
  {
    id: 6,
    name: "Rahul K.",
    age: 22,
    type: "missing",
    location: "University Campus",
    reported: "1 day ago",
    photo: "",
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = mockReports.filter((r) => {
    if (activeTab === "all") return true;
    return r.type === activeTab;
  });

  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={heroLogo} alt="Umeed" className="nav-logo-img" />
          <span className="navbar-logo">Umeed</span>
        </div>
        <div className="navbar-right">
          <a href="/" className="nav-link active">Home</a>
          <a href="/reports" className="nav-link">Reports</a>
          <a href="/about" className="nav-link">About</a>
          <div className="nav-profile">
            <span>👤</span>
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="home-main">
        {/* Hero Heading */}
        <h1 className="home-heading">Find hope, together.</h1>

        {/* Search Bar */}
        <div className="search-wrapper">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by name or description..."
              className="search-input"
            />
          </div>
          <button className="btn-filter">⚙ Filters</button>
          <button className="btn-search">Search</button>
        </div>

        {/* Tabs */}
        <div className="tab-bar">
          {["all", "missing", "found"].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "tab-active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="cards-grid">
          {filtered.map((report) => (
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
                <h3 className="card-name">{report.name}, {report.age}</h3>
                <p className="card-detail">
                  <span className="card-icon">📍</span>
                  {report.type === "found" ? `Located: ${report.location}` : `Last seen: ${report.location}`}
                </p>
                <p className="card-detail">
                  <span className="card-icon">📅</span>
                  {report.extra ? report.extra : `Reported: ${report.reported}`}
                </p>
                <button className="btn-view">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Floating + Button */}
      <button className="fab-btn">+</button>
    </div>
  );
};

export default Home;