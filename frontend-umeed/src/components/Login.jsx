import React from "react";
import "./Login.css";
import hero from '../assets/image.png'


const Login = () => {
  return (
    <div className="login-page">
      {/* Navbar */}
      <nav className="navbar">
        <span className="navbar-logo">Umeed</span>
      </nav>

      {/* Main Content */}
      <main className="login-main">
        {/* Left Side */}
        <div className="login-left">
          <span className="badge">Community First</span>
          <h1 className="hero-heading">Bringing hope home.</h1>
          <p className="hero-subtext">
            Report missing persons, search found individuals, and help reunite
            families across India.
          </p>

          {/* Feature Cards */}
          <div className="feature-cards">
            <div className="feature-card">
              <span className="feature-icon">👥</span>
              <h3>Community Driven</h3>
              <p>Thousands of reports submitted by people across India.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🛡️</span>
              <h3>Private & Secure</h3>
              <p>Your data and identity are always protected.</p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image-wrapper">
            <img src={hero} alt="Umeed Hero" className="hero-image" />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="login-right">
          <div className="login-card">
            <h2 className="login-title">Welcome back</h2>
            <p className="login-subtitle">Enter your details to continue your journey.</p>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <div className="password-label-row">
                <label htmlFor="password">Password</label>
                <a href="#" className="forgot-link"></a>
              </div>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="form-input"
              />
            </div>

            <button className="btn-primary">Log In</button>
            <button className="btn-secondary">Create Account</button>

            <div className="divider"></div>



            <div className="trust-badges">
              
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="login-footer">
        <span>© 2024 Umeed. All rights reserved.</span>
        
      </footer>
    </div>
  );
};

export default Login;