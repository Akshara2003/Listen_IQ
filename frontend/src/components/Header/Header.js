import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // redirect to login
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // toggle dropdown on click
  };

  return (
    <header className="topbar">
      <div className="logo">Listen&nbsp;IQ</div>

      <nav className="navlinks">
        <button className="nav-btn active">Dashboard</button>
        <button className="nav-btn">Sales Pipeline</button>
        <button className="nav-btn">Profile</button>
        <button className="nav-btn">Content Library</button>
      </nav>

      <div className="right-side">
        <button className="bell-btn">🔔</button>

        <div className="avatar-wrapper">
          <button className="avatar-btn" onClick={toggleMenu}>👤</button>

          {menuOpen && (
            <div className="dropdown">
              <button className="dropdown-item" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;