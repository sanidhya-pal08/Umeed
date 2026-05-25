import React, { useState } from "react";
import "./Register.css";
import hero from '../assets/image.png'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confimPassword, setConfirmPassword] = useState("");
  const[firstName, setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const navigate=useNavigate();

    async function handleRegister() {
    if (!email || !password) return alert('Enter all fields');
    if(password !== confimPassword ) return alert('Passwords in the two fields does not match');
    const res = await fetch('http://127.0.0.1:8000/users/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email_address: email, password: password , first_name: firstName, last_name: lastName})
    });
    if (res.ok) {
      navigate('/');
    } else {
      const data = await res.json();
      alert(data.detail);
    }
  }
  return (
    <div className="register-page">
      {/* Navbar */}
      <nav className="navbar">
        <span className="navbar-logo">Umeed</span>
      </nav>

      {/* Main Content */}
      <main className="register-main">
        {/* Left Side */}
        <div className="register-left">
          <span className="badge">Join the Community</span>
          <h1 className="hero-heading">Every report matters.</h1>
          <p className="hero-subtext">
            Create an account to report missing persons, help identify found
            individuals, and reunite families across India.
          </p>

          {/* Feature Cards */}
          <div className="feature-cards">
            <div className="feature-card">
              <span className="feature-icon"></span>
              <h3>File Reports</h3>
              <p>Submit and manage missing or found person reports easily.</p>
            </div>
           
          </div>

          {/* Hero Image */}
          <div className="hero-image-wrapper">
            <img src={hero} alt="Umeed Hero" className="hero-image" />
          </div>
        </div>

        {/* Right Side - Register Form */}
        <div className="register-right">
          <div className="register-card">
            <h2 className="register-title">Create account</h2>
            <p className="register-subtitle">Join thousands helping reunite families.</p>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Rahul"
                  className="form-input"
                  value={firstName}
                  onChange={(e)=> setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Sharma"
                  className="form-input"
                  value={lastName}
                  onChange={(e)=> setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="••••••••"
                className="form-input"
                value={confimPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button className="btn-primary">Create Account</button>

            <div className="divider"></div>

            <p className="login-redirect">
              Already have an account? <a href="/login" className="login-link">Log in</a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="register-footer">
        <span>© 2024 Umeed. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default Register;