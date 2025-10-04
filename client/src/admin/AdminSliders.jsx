import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function AdminSliders() {
  const pages = [
    "home1",
    "home2",
    "about",
    "products",
    "productDetails",
    "contact",
  ];
  const [sliders, setSliders] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const docRef = doc(db, "sliders", "main");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setSliders(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching sliders:", error);
      }
      setLoading(false);
    };
    fetchSliders();
  }, []);

  const handleImageChange = (e, pageName) => {
    const file = e.target.files[0];
    if (!file) return;

    // Prevent storing huge files
    if (file.size > 900 * 1024) {
      alert("Image too large! Please upload an image smaller than 900 KB.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      try {
        const base64String = reader.result; // "data:image/png;base64,..."

        await setDoc(
          doc(db, "sliders", "main"),
          { [pageName]: base64String },
          { merge: true }
        );

        setSliders((prev) => ({ ...prev, [pageName]: base64String }));
        alert(`${pageName} slider updated! ✅`);
      } catch (error) {
        console.error("Error saving slider:", error);
        alert("Failed to update slider: " + error.message);
      }
    };

    reader.readAsDataURL(file);
  };

  if (loading) return <p style={{ padding: 20 }}>Loading...</p>;

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Update Page Sliders</h2>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Page</th>
            <th style={thStyle}>Current Slider</th>
            <th style={thStyle}>Update Image</th>
          </tr>
        </thead>
        <tbody>
          {pages.map((page) => (
            <tr key={page} style={trStyle}>
              <td style={tdStyle}>
                {page.startsWith("home")
                  ? `HOME ${page.slice(-1)}`
                  : page.toUpperCase()}
              </td>
              <td style={tdStyle}>
                {sliders[page] ? (
                  <img
                    src={sliders[page]}
                    alt={`${page} slider`}
                    style={imageStyle}
                  />
                ) : (
                  <span style={{ color: "#999", fontStyle: "italic" }}>
                    No image
                  </span>
                )}
              </td>
              <td style={tdStyle}>
                <label style={uploadLabelStyle}>
                  Choose File
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, page)}
                    style={fileInputStyle}
                  />
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ---------------- STYLES ----------------
const containerStyle = {
  maxWidth: 900,
  margin: "30px auto",
  padding: 20,
  backgroundColor: "#fff",
  borderRadius: 12,
  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const headingStyle = {
  marginBottom: 24,
  fontSize: 28,
  fontWeight: "700",
  color: "#222",
  textAlign: "center",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "separate",
  borderSpacing: "0 12px",
};

const thStyle = {
  textAlign: "left",
  padding: "12px 16px",
  backgroundColor: "#f0f4ff",
  fontWeight: "600",
  color: "#444",
  borderRadius: "8px",
};

const trStyle = {
  backgroundColor: "#fafafa",
  boxShadow: "0 1px 4px rgb(0 0 0 / 0.08)",
  transition: "background-color 0.25s ease",
};

const tdStyle = {
  padding: "14px 16px",
  verticalAlign: "middle",
  color: "#555",
  fontSize: 15,
  borderRadius: "8px",
};

const imageStyle = {
  width: 180,
  height: "auto",
  borderRadius: 10,
  boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
  objectFit: "cover",
};

const uploadLabelStyle = {
  display: "inline-block",
  backgroundColor: "#0d6efd",
  color: "#fff",
  padding: "10px 18px",
  borderRadius: 8,
  cursor: "pointer",
  fontWeight: "600",
  fontSize: 14,
  userSelect: "none",
  transition: "background-color 0.3s ease",
};

const fileInputStyle = {
  display: "none",
};
