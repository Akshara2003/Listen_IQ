// components/SideMenu.js
import React from "react";
import "./SideMenu.css";

const SideMenu = () => {
  return (
    <div className="side-menu">
      <div className="side-menu-top">
        <button>Dashboard</button>
        <button>Sales Pipeline</button>
        <button>Profile</button>
        <button>Content Library</button>
        <div style={{ marginTop: "2rem", padding: "1rem", background: "#004aad", borderRadius: "6px" }}>
          <p>Tier 3</p>
          <span role="img" aria-label="star">⭐</span>
        </div>
      </div>

      <div className="side-menu-bottom">
        <button>Support</button>
      </div>
    </div>
  );
};

export default SideMenu;
