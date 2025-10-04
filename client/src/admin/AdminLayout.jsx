// // src/admin/AdminLayout.jsx
// import React from "react";
// import { Outlet } from "react-router-dom";
// import AdminSidebar from "./AdminSidebar";
// import AdminTopbar from "./AdminTopbar";
// import "./Admin.css"; // create basic styles

// export default function AdminLayout() {
//   return (
//     <div className="admin-container">
//       <AdminSidebar />
//       <div className="admin-main">
//         <AdminTopbar />
//         <div className="admin-content">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

// src/admin/AdminLayout.jsx
import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";
import "./Admin.css"; // your styles

export default function AdminLayout({ children }) {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-main">
        <AdminTopbar />
        <div className="admin-content">
          {children} {/* Render the passed component */}
        </div>
      </div>
    </div>
  );
}
