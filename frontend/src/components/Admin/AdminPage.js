import React from "react";
import "./AdminPage.css";

const AdminPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="admin-wrapper">
      <header className="admin-header">
        <div className="logo">Listen IQ</div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="admin-body">
        <aside className="admin-sidebar">
          <button>Dashboard</button>
          <button>Sales Pipeline</button>
          <button>Partner Management</button>
          <button>Content Manager</button>
          <button>Announcements</button>
          <button>Report & Analytics</button>
          <button>Settings</button>
          <button>Support</button>
        </aside>

        <main className="admin-main">
          {/* You can add dashboard content here later */}
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
