import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase"; // adjust path as needed

export default function AdminAvailability() {
  const [requests, setRequests] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    async function fetchRequests() {
      try {
        const q = query(
          collection(db, "availabilityRequests"),
          orderBy("timestamp", "desc")
        );
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setRequests(data);
      } catch (error) {
        console.error("Error fetching availability requests:", error);
      }
    }
    fetchRequests();
  }, []);

  // Filter based on search
  const filtered = requests.filter((req) => {
    const search = searchText.toLowerCase();
    return (
      req.name.toLowerCase().includes(search) ||
      req.email.toLowerCase().includes(search) ||
      (req.phone && req.phone.includes(search)) ||
      (req.productName && req.productName.toLowerCase().includes(search)) ||
      (req.message && req.message.toLowerCase().includes(search))
    );
  });

  // Pagination
  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const displayed = filtered.slice(startIndex, startIndex + rowsPerPage);

  const handlePrev = () => setPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setPage((p) => Math.min(p + 1, totalPages));
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setPage(1);
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Availability Requests</h2>

      <input
        type="text"
        placeholder="Search by name, email, phone, product or message"
        value={searchText}
        onChange={handleSearchChange}
        style={searchInputStyle}
      />

      <div style={tableWrapperStyle}>
        <table style={tableStyle}>
          <thead>
            <tr style={tableHeaderRowStyle}>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Phone</th>
              <th style={thStyle}>Product</th>
              <th style={thStyle}>Message</th>
              <th style={thStyle}>Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {displayed.length > 0 ? (
              displayed.map(
                ({ id, name, email, phone, productName, message, timestamp }) => (
                  <tr key={id} style={tableRowStyle}>
                    <td style={tdStyle}>{name}</td>
                    <td style={tdStyle}>{email}</td>
                    <td style={tdStyle}>{phone || "N/A"}</td>
                    <td style={tdStyle}>{productName || "N/A"}</td>
                    <td style={tdStyle}>{message}</td>
                    <td style={tdStyle}>
                      {timestamp?.toDate
                        ? timestamp.toDate().toLocaleString()
                        : "N/A"}
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td colSpan="6" style={noDataStyle}>
                  No availability requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div style={paginationContainerStyle}>
        <button onClick={handlePrev} disabled={page === 1} style={btnStyle}>
          Previous
        </button>
        <span style={pageInfoStyle}>
          Page {page} of {totalPages || 1}
        </span>
        <button
          onClick={handleNext}
          disabled={page === totalPages || totalPages === 0}
          style={btnStyle}
        >
          Next
        </button>
      </div>
    </div>
  );
}

// Styles

const containerStyle = {
  maxWidth: 950,
  margin: "30px auto",
  padding: 20,
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  backgroundColor: "#fff",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  borderRadius: 10,
};

const titleStyle = {
  marginBottom: 20,
  fontWeight: "700",
  color: "#333",
  textAlign: "center",
};

const searchInputStyle = {
  width: "100%",
  padding: "12px 15px",
  marginBottom: 25,
  fontSize: 16,
  borderRadius: 6,
  border: "1.5px solid #ccc",
  outline: "none",
  transition: "border-color 0.3s ease",
};

const tableWrapperStyle = {
  overflowX: "auto",
  borderRadius: 8,
  border: "1px solid #ddd",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  minWidth: 800,
};

const tableHeaderRowStyle = {
  backgroundColor: "#f7f7f7",
  boxShadow: "inset 0 -2px 0 #ccc",
};

const thStyle = {
  textAlign: "left",
  padding: "12px 15px",
  borderBottom: "2px solid #ddd",
  color: "#555",
  fontWeight: 600,
};

const tableRowStyle = {
  transition: "background-color 0.2s ease",
  cursor: "default",
};

const tdStyle = {
  padding: "12px 15px",
  verticalAlign: "top",
  borderBottom: "1px solid #eee",
  color: "#444",
  fontSize: 14,
  wordBreak: "break-word",
};

const noDataStyle = {
  padding: 30,
  textAlign: "center",
  color: "#777",
  fontStyle: "italic",
  fontSize: 16,
};

const paginationContainerStyle = {
  marginTop: 20,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const btnStyle = {
  padding: "10px 20px",
  fontSize: 14,
  cursor: "pointer",
  borderRadius: 6,
  border: "1.5px solid #007bff",
  backgroundColor: "#007bff",
  color: "#fff",
  userSelect: "none",
  transition: "background-color 0.3s ease, border-color 0.3s ease",
};

const pageInfoStyle = {
  fontSize: 15,
  color: "#555",
};

// Add hover effect with inline style workaround (can't do :hover easily inline, so we'll add it via onMouse events)

function onRowHover(e) {
  e.currentTarget.style.backgroundColor = "#f1f9ff";
}
function onRowLeave(e) {
  e.currentTarget.style.backgroundColor = "";
}
