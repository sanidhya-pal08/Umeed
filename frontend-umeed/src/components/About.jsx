import React from "react";
import "./About.css";
import heroLogo from "../assets/image.png";

const About = () => {
  return (
    <div className="about-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={heroLogo} alt="Umeed" className="nav-logo-img" />
          <span className="navbar-logo">Umeed</span>
        </div>
        <div className="navbar-right">
          <a href="/" className="nav-link">Home</a>
          <a href="/reports" className="nav-link">Reports</a>
          <a href="/about" className="nav-link active">About</a>
          <div className="nav-profile">
            <span>👤</span>
          </div>
        </div>
      </nav>

      <main className="about-main">

        {/* Hero Section */}
        <section className="about-hero">
          <h1 className="about-title">About Umeed</h1>
          <p className="about-quote">"We believe every person deserves to be found."</p>
          <div className="about-divider"></div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-text">
            <h2 className="section-heading">Our Mission</h2>
            <p className="mission-para">
              Umeed, meaning 'Hope', was founded on the fundamental principle that
              technology should serve humanity's most urgent needs. Our platform exists
              to bridge the gap between missing individuals and their searching families
              by empowering communities with real-time reporting and collaborative search
              tools.
            </p>
            <p className="mission-para">
              In high-stress situations, every second counts. We provide a centralized,
              verified, and accessible hub where information can be shared instantly,
              turning every smartphone into a beacon of hope and every citizen into a
              vigilant protector of their neighbors.
            </p>
          </div>
          <div className="mission-image-wrapper">
            <img src={heroLogo} alt="Umeed Mission" className="mission-image" />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-section">
          <h2 className="section-heading centered">How It Works</h2>
          <p className="how-subtitle">Three steps to reuniting hearts</p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-icon">📋</div>
              <h3 className="step-title">Report</h3>
              <p className="step-desc">
                Submit a detailed report of a missing or found person including photos,
                last known locations, and physical descriptions.
              </p>
            </div>
            <div className="step-card">
              <div className="step-icon">🔍</div>
              <h3 className="step-title">Search</h3>
              <p className="step-desc">
                The community shares alerts across social media. Volunteers and citizens
                use the live map to check recent sightings.
              </p>
            </div>
            <div className="step-card">
              <div className="step-icon">🤝</div>
              <h3 className="step-title">Reunite</h3>
              <p className="step-desc">
                Verified sightings lead to positive identification and successful
                reunions. Families are brought back together safely.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="about-footer">
        <div className="footer-left">
          <div className="footer-brand">
            <img src={heroLogo} alt="Umeed" className="footer-logo-img" />
            <span className="footer-logo-text">Umeed</span>
          </div>
          <p className="footer-copy">© 2024 Umeed. All rights reserved. Hope For All.</p>
        </div>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
          <a href="#">About Us</a>
        </div>
      </footer>
    </div>
  );
};

export default About;