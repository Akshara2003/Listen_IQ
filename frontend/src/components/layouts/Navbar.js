// src/components/layouts/Navbar.js
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiBell } from "react-icons/fi"; // Bell icon
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <div className="logo">Listen IQ</div>
      </div>

      {/* Center: Menu Links */}
      <div className="navbar-center">
        <NavLink to="/login-user" end className="nav-btn">Dashboard</NavLink>
        <NavLink to="/login-user/sales-pipeline" className="nav-btn">Sales Pipeline</NavLink>
        <NavLink to="/login-user/profile" className="nav-btn">Profile</NavLink>
        <NavLink to="/login-user/content-library" className="nav-btn">Content Library</NavLink>
        <NavLink to="/login-user/support" className="nav-btn">Support</NavLink>
      </div>

      {/* Right: Notification + Logout */}
      <div className="navbar-right">
        <button className="icon-btn" title="Notifications">
          <FiBell size={22} color="#FFD700" />
        </button>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
