// src/components/layouts/SideMenu.js
import React from "react";
import { useLocation } from "react-router-dom";
import "./SideMenu.css";

const SideMenu = () => {
  const location = useLocation();
  const firstName = localStorage.getItem("firstName") || "Partner";
  const tier = "Tier 3 ⭐";

  const routeLabels = {
    "/login-user": "Dashboard",
    "/login-user/sales-pipeline": "Sales Pipeline",
    "/login-user/profile": "Profile",
    "/login-user/content-library": "Content Library",
    "/login-user/support": "Support",
  };

  const currentLabel = routeLabels[location.pathname] || "Partner Portal";

  return (
    <div className="side-menu">
      <div className="side-menu-top">
        {/* Page Label */}
        <div className="side-header">
          <span className="page-title">{currentLabel}</span>
        </div>

        {/* Avatar and Tier */}
        <div className="avatar-section">
          <img
            src={`https://ui-avatars.com/api/?name=${firstName}&background=004aad&color=fff`}
            alt="Avatar"
            className="side-avatar"
          />
          <div className="user-name">{firstName}</div>
          <div className="tier-badge">{tier}</div>
        </div>
      </div>

      {/* Contact Button at Bottom */}
      <div className="side-footer">
        <button className="contact-btn" onClick={() => window.location.href = "mailto:support@listeniq.com"}>
          Contact
        </button>
      </div>
    </div>
  );
};

export default SideMenu;
