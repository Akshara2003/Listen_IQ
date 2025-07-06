// src/components/layouts/DashboardLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from "../TopNavbar";
import Sidebar from "../Sidebar";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  return (
    <div className="dashboard-wrapper">
      <TopNavbar />
      <div className="dashboard-body">
        <Sidebar />
        <main className="dashboard-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
