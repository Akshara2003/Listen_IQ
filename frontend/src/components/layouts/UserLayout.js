// src/components/layouts/UserLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const UserLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ padding: "2rem", backgroundColor: "#f9f9f9", flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
