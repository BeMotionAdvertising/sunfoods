import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

const styles = {
  containerr: {
    maxWidth: 900,
    margin: "20px auto",
    padding: 20,
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    background: "#fff",
    boxShadow: "0 4px 15px rgb(0 0 0 / 0.1)",
    borderRadius: 10,
  },
  h2: {
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
    fontWeight: 700,
  },
  searchInput: {
    width: "100%",
    padding: "12px 15px",
    marginBottom: 20,
    fontSize: 16,
    border: "1.8px solid #ddd",
    borderRadius: 8,
    transition: "border-color 0.25s ease",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: 15,
  },
  theadTr: {
    background: "linear-gradient(90deg, #4a90e2, #357ABD)",
    color: "white",
    fontWeight: 600,
  },
  thTd: {
    padding: "12px 15px",
    border: "1px solid #ddd",
    textAlign: "left",
    verticalAlign: "top",
  },
  tbodyTrEven: {
    backgroundColor: "#f9f9f9",
  },
  pagination: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 15,
    color: "#555",
  },
  paginationButton: {
    padding: "10px 20px",
    backgroundColor: "#357ABD",
    color: "white",
    border: "none",
    borderRadius: 7,
    cursor: "pointer",
    fontWeight: 600,
    transition: "background-color 0.3s ease",
    userSelect: "none",
  },
  paginationButtonDisabled: {
    backgroundColor: "#a9c3f0",
    cursor: "not-allowed",
  },
  noResults: {
    padding: 25,
    textAlign: "center",
    color: "#777",
    fontStyle: "italic",
  },
};

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    async function fetchContacts() {
      try {
        const q = query(collection(db, "contacts"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        const contactsData = [];
        querySnapshot.forEach((doc) => {
          contactsData.push({ id: doc.id, ...doc.data() });
        });
        setContacts(contactsData);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }
    fetchContacts();
  }, []);

  const filtered = contacts.filter((c) => {
    const search = searchText.toLowerCase();
    return (
      c.name.toLowerCase().includes(search) ||
      c.email.toLowerCase().includes(search) ||
      c.title.toLowerCase().includes(search) ||
      c.message.toLowerCase().includes(search)
    );
  });

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
    <div style={styles.containerr}>
      <h2 style={styles.h2}>Contact Messages</h2>

      <input
        type="text"
        placeholder="Search by name, email, title or message"
        value={searchText}
        onChange={handleSearchChange}
        style={styles.searchInput}
      />

      <table style={styles.table}>
        <thead>
          <tr style={styles.theadTr}>
            <th style={styles.thTd}>Name</th>
            <th style={styles.thTd}>Email</th>
            <th style={styles.thTd}>Title</th>
            <th style={styles.thTd}>Message</th>
            <th style={styles.thTd}>Submitted At</th>
          </tr>
        </thead>
        <tbody>
          {displayed.length > 0 ? (
            displayed.map(({ id, name, email, title, message, timestamp }, idx) => (
              <tr
                key={id}
                style={idx % 2 === 1 ? styles.tbodyTrEven : undefined}
              >
                <td style={styles.thTd}>{name}</td>
                <td style={styles.thTd}>{email}</td>
                <td style={styles.thTd}>{title}</td>
                <td style={styles.thTd}>{message}</td>
                <td style={styles.thTd}>
                  {timestamp?.toDate
                    ? timestamp.toDate().toLocaleString()
                    : "N/A"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td style={{ ...styles.thTd, ...styles.noResults }} colSpan="5">
                No contacts found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div style={styles.pagination}>
        <button
          onClick={handlePrev}
          disabled={page === 1}
          style={{
            ...styles.paginationButton,
            ...(page === 1 ? styles.paginationButtonDisabled : {}),
          }}
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages || 1}
        </span>
        <button
          onClick={handleNext}
          disabled={page === totalPages || totalPages === 0}
          style={{
            ...styles.paginationButton,
            ...(page === totalPages || totalPages === 0
              ? styles.paginationButtonDisabled
              : {}),
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
