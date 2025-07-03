// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="topbar ">
      <div className="logo">Listen IQ</div>

      {role === "user" && (
        <nav className="navlinks">
          <button className="nav-btn active">Dashboard</button>
          <button className="nav-btn">Sales Pipeline</button>
          <button className="nav-btn">Profile</button>
          <button className="nav-btn">Content Library</button>
        </nav>
      )}

      <div className="right-side">
        {role === "user" && <button className="bell-btn">🔔</button>}

        {role !== "user" && (
          <div className="avatar-wrapper">
            <button
              className="avatar-btn"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              👤
            </button>

            {menuOpen && (
              <div className="dropdown">
                <button className="dropdown-item" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
