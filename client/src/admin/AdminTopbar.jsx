// src/admin/AdminTopbar.jsx
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function AdminTopbar() {
  const nav = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    nav("/admin");
  };

  return (
    <header style={headerStyle}>
      <div style={welcomeStyle}>👋 Welcome, <span style={{ fontWeight: "700" }}>Admin</span></div>
      <div>
        {/* Profile button can be enabled later */}
        {/* <button style={profileBtnStyle} onClick={() => nav("/admin/profile")}>Profile</button> */}
        <button style={logoutBtnStyle} onClick={handleLogout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: 16, height: 16, marginRight: 6, verticalAlign: "middle" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
            />
          </svg>
          Logout
        </button>
      </div>
    </header>
  );
}

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 24px",
  backgroundColor: "#24292e",
  color: "#fff",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  position: "sticky",
  top: 0,
  zIndex: 1000,
};

const welcomeStyle = {
  fontSize: 18,
};

const logoutBtnStyle = {
  backgroundColor: "#e55353",
  color: "#fff",
  border: "none",
  padding: "8px 16px",
  borderRadius: 6,
  fontWeight: "600",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  transition: "background-color 0.3s ease",
};

logoutBtnStyle[":hover"] = {
  backgroundColor: "#d23e3e",
};

// Optional profile button style if you enable it later
const profileBtnStyle = {
  backgroundColor: "#0366d6",
  color: "#fff",
  border: "none",
  padding: "8px 16px",
  borderRadius: 6,
  fontWeight: "600",
  cursor: "pointer",
  marginRight: 8,
};
