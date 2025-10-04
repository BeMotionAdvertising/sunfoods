// // src/admin/AdminSidebar.jsx
// import React from "react";
// import { NavLink } from "react-router-dom";

// export default function AdminSidebar() {
//   const activeStyle = {
//     color: "#0d6efd",
//     backgroundColor: "#e7f1ff",
//     boxShadow: "0 2px 8px rgba(13, 110, 253, 0.3)",
//     borderRadius: "8px",
//     fontWeight: "600",
//   };

//   return (
//     <aside style={sidebarStyle}>
//       <h2 style={titleStyle}>Admin Panel</h2>
//       <nav>
//         <ul style={navListStyle}>
//           {[
//             { name: "Products", path: "/admin/products" },
//             { name: "Sliders", path: "/admin/sliders" },
//             { name: "Contacts", path: "/admin/contacts" },
//             { name: "Availability", path: "/admin/availability" },
//           ].map(({ name, path }) => (
//             <li key={name}>
//               <NavLink
//                 to={path}
//                 style={({ isActive }) => ({
//                   ...linkStyle,
//                   ...(isActive ? activeStyle : {}),
//                 })}
//               >
//                 {name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </aside>
//   );
// }

// const sidebarStyle = {
//   width: 240,
//   minHeight: "100vh",
//   backgroundColor: "#fff",
//   borderRight: "1px solid #ddd",
//   padding: "30px 20px",
//   boxSizing: "border-box",
//   fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//   position: "fixed",
//   top: 0,
//   left: 0,
//   boxShadow: "2px 0 12px rgb(0 0 0 / 0.05)",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "flex-start",
// };

// const titleStyle = {
//   marginBottom: 40,
//   marginTop: 40,
//   color: "#222",
//   fontSize: 26,
//   fontWeight: "700",
//   letterSpacing: "2px",
//   userSelect: "none",
// };

// const navListStyle = {
//   listStyleType: "none",
//   padding: 0,
//   margin: 0,
//   display: "flex",
//   flexDirection: "column",
//   gap: 18,
// };

// const linkStyle = {
//   display: "block",
//   padding: "12px 18px",
//   fontSize: 16,
//   color: "#555",
//   textDecoration: "none",
//   borderRadius: 8,
//   transition: "all 0.3s ease",
//   boxShadow: "inset 0 0 0 0 transparent",
//   userSelect: "none",
//   cursor: "pointer",
//   fontWeight: "500",
//   letterSpacing: "0.4px",
// };

// src/admin/AdminSidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  const activeStyle = {
    color: "#0d6efd",
    backgroundColor: "#e7f1ff",
    boxShadow: "0 2px 8px rgba(13, 110, 253, 0.3)",
    borderRadius: "8px",
    fontWeight: "600",
  };

  return (
    <aside style={sidebarStyle}>
      <h2 style={titleStyle}>Admin Panel</h2>
      <nav>
        <ul style={navListStyle}>
          {[
            { name: "Products", path: "/admin-products" },
            { name: "Sliders", path: "/admin-sliders" },
            { name: "Contacts", path: "/admin-contacts" },
            { name: "Availability", path: "/admin-availability" },
          ].map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                style={({ isActive }) => ({
                  ...linkStyle,
                  ...(isActive ? activeStyle : {}),
                })}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

const sidebarStyle = {
  width: 240,
  minHeight: "100vh",
  backgroundColor: "#fff",
  borderRight: "1px solid #ddd",
  padding: "30px 20px",
  boxSizing: "border-box",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  position: "fixed",
  top: 0,
  left: 0,
  boxShadow: "2px 0 12px rgb(0 0 0 / 0.05)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
};

const titleStyle = {
  marginBottom: 40,
  marginTop: 40,
  color: "#222",
  fontSize: 26,
  fontWeight: "700",
  letterSpacing: "2px",
  userSelect: "none",
};

const navListStyle = {
  listStyleType: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: 18,
};

const linkStyle = {
  display: "block",
  padding: "12px 18px",
  fontSize: 16,
  color: "#555",
  textDecoration: "none",
  borderRadius: 8,
  transition: "all 0.3s ease",
  boxShadow: "inset 0 0 0 0 transparent",
  userSelect: "none",
  cursor: "pointer",
  fontWeight: "500",
  letterSpacing: "0.4px",
};
