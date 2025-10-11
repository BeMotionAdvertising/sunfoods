import React, { useState } from "react";
import "./AdminLogin.css";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const db = getFirestore(app);
  const auth = getAuth(app);
  const navigate = useNavigate();

  // Default fallback credentials (DEV ONLY)
  const FALLBACK_EMAIL = "admin@gmail.com";
  const FALLBACK_PASSWORD = "admin@123";

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailTrim = (email || "").trim();
    const passwordTrim = (password || "").trim();

    if (!emailTrim || !passwordTrim) {
      alert("Please enter both email and password.");
      return;
    }

    setLoading(true);

    // First try Firebase Auth (recommended)
    try {
      if (auth) {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, emailTrim, passwordTrim);
          // Optional: check Firestore or custom claims for 'admin' role here
          // Example: if you store admin UIDs in a Firestore collection, check it.
          navigate("/admin-dashboard");
          setLoading(false);
          return;
        } catch (authErr) {
          // Auth failed — we'll try Firestore admin doc or fallback below
          console.warn("Firebase Auth failed:", authErr.message);
        }
      }
    } catch (err) {
      console.warn("Auth attempt threw error:", err);
    }

    // Optional: try Firestore 'admins' collection (if you stored admins there)
    // This section attempts to find an admin doc matching email/password (not recommended for production)
    try {
      const q = query(
        collection(db, "admins"),
        where("email", "==", emailTrim)
        // DO NOT query by plaintext password in production. This is only a best-effort fallback.
      );
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        // If you stored plaintext password (NOT RECOMMENDED), match it:
        let matched = false;
        snapshot.forEach(doc => {
          const data = doc.data();
          if (data.password && data.password === passwordTrim) {
            matched = true;
          }
          // If you saved hashed passwords, you need to compare hashes on server side.
        });
        if (matched) {
          navigate("/admin-dashboard");
          setLoading(false);
          return;
        }
      }
    } catch (fireErr) {
      console.warn("Firestore admin lookup failed:", fireErr);
      // continue to fallback check
    }

    // Final fallback: check default hardcoded credentials (DEV ONLY)
    if (emailTrim === FALLBACK_EMAIL && passwordTrim === FALLBACK_PASSWORD) {
      // Optionally set a flag in localStorage/session to know user is admin during the session
      // localStorage.setItem('isAdmin', '1');
      navigate("/admin-dashboard");
      setLoading(false);
      return;
    }

    // If we got here, login failed
    setLoading(false);
    alert("Invalid email or password.");
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
        <p style={{ marginTop: 12, fontSize: 13, color: "#666" }}>
          Tip: Prefer using Firebase Auth for secure login. Fallback default credentials are for dev/testing only.
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
