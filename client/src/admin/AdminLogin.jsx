import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Default credentials
  const DEFAULT_EMAIL = "admin@gmail.com";
  const DEFAULT_PASSWORD = "admin@123";

  const handleLogin = (e) => {
      navigate("/admin-dashboard");
    e.preventDefault();
    const emailTrim = email.trim();
    const passwordTrim = password.trim();

    if (!emailTrim || !passwordTrim) {
      alert("Please enter both email and password.");
      return;
    }

    setLoading(true);

    // Simple login check
    if (emailTrim === DEFAULT_EMAIL && passwordTrim === DEFAULT_PASSWORD) {
      // Optionally save login state
      localStorage.setItem("isAdmin", "true");
      navigate("/admin-dashboard");
    } else {
      alert("Invalid email or password.");
    }

    setLoading(false);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
