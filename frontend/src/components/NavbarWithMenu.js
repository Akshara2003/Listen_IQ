// src/components/NavbarWithMenu.js
import React from "react";
import { Link } from "react-router-dom";
import "./NavbarWithMenu.css";

const NavbarWithMenu = () => {
  return (
    <nav className="navbar-menu">
      <div className="logo">Listen IQ</div>

      <div className="menu-links">
        <Link to="/login-user">Dashboard</Link>
        <Link to="/login-user/sales-pipeline">Sales Pipeline</Link>
        <Link to="/login-user/profile">Profile</Link>
        <Link to="/login-user/content-library">Content Library</Link>
        <Link to="/login-user/support">Support</Link>
      </div>

      <div className="user-tier">Tier 3 ⭐</div>
    </nav>
  );
};

export default NavbarWithMenu;
