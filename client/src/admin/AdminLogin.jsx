import React, { useState } from "react";
import "./AdminLogin.css";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const db = getFirestore(app);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      console.log("Firestore connected:", db);
      console.log("Email:", email);
      console.log("Password:", password);

      // Firestore query
      const q = query(
        collection(db, "admins"),
        where("email", "==", email),
        where("password", "==", password) // ⚠️ insecure (for testing only)
      );

      const querySnapshot = await getDocs(q);
      console.log("Query result count:", querySnapshot.size);

    if (querySnapshot.size == 1) {
  localStorage.setItem("adminLoggedIn", "true"); 
  console.log("Redirecting to dashboard...");
  navigate("/admin-dashboard", { replace: true });
}
 else {
  alert("Invalid email or password.");
}

    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
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
              autoComplete="username"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
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
