import React, { useState } from "react";
import "./AdminLogin.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; 
import { app } from "../firebase"; 
import { useNavigate } from "react-router-dom"; // ✅ Import navigate hook

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = getAuth(app);
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // console.log("User logged in:", userCredential.user);
      // alert("Login successful ✅");

      navigate("/admin-dashboard"); // ✅ Redirect to AdminDashboard route

    } catch (error) {
      console.error("Login error:", error);
      alert(error.message);
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