import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ role }) => {
  const navigate = useNavigate();
  const location = useLocation(); // 🆕 get current URL path
  const [username, setUsername] = useState("");
  const [activeMenu, setActiveMenu] = useState("Dashboard"); // default to Dashboard

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);

    // 🆕 Set active menu based on current path when page loads
    if (location.pathname.includes("partner_management")) {
      setActiveMenu("Partner Management");
    } else if (location.pathname.includes("sales-pipeline")) {
      setActiveMenu("Sales Pipeline");
    } else if (location.pathname.includes("content-manager")) {
      setActiveMenu("Content Manager");
    } else if (location.pathname.includes("announcements")) {
      setActiveMenu("Announcements");
    } else if (location.pathname.includes("report-analytics")) {
      setActiveMenu("Report Analytics");
    } else {
      setActiveMenu("Dashboard");
    }
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    navigate("/");
    window.location.reload();
  };

  const handleMenuClick = (menu, path) => {
    setActiveMenu(menu);
    if (path) navigate(path);
  };

  if (role === 'admin') {
    return (
      <div className="w-60 bg-gray-100 h-screen p-4 flex flex-col gap-4 shadow">
        <button
          onClick={() => handleMenuClick("Dashboard", "/login-admin")}
          className={`${activeMenu === "Dashboard" ? "bg-blue-500 text-white" : "bg-blue-200"} px-4 py-2 rounded hover:bg-blue-300`}
        >
          Dashboard
        </button>

        <button
          onClick={() => handleMenuClick("Sales Pipeline", "/admin-sales-pipeline")}
          className={`${activeMenu === "Sales Pipeline" ? "bg-blue-500 text-white" : "bg-blue-200"} px-4 py-2 rounded hover:bg-blue-300`}
        >
          Sales Pipeline
        </button>

        <button
          onClick={() => handleMenuClick("Partner Management", "/admin-partner_management")}
          className={`${activeMenu === "Partner Management" ? "bg-blue-500 text-white" : "bg-blue-200"} px-4 py-2 rounded hover:bg-blue-300`}
        >
          Partner Management
        </button>

        <button
          onClick={() => handleMenuClick("Content Manager", "/admin-content-manager")}
          className={`${activeMenu === "Content Manager" ? "bg-blue-500 text-white" : "bg-blue-200"} px-4 py-2 rounded hover:bg-blue-300`}
        >
          Content Manager
        </button>

        <button
          onClick={() => handleMenuClick("Announcements", "/admin-announcements")}
          className={`${activeMenu === "Announcements" ? "bg-blue-500 text-white" : "bg-blue-200"} px-4 py-2 rounded hover:bg-blue-300`}
        >
          Announcements
        </button>

        <button
          onClick={() => handleMenuClick("Report Analytics", "/admin-report-analytics")}
          className={`${activeMenu === "Report Analytics" ? "bg-blue-500 text-white" : "bg-blue-200"} px-4 py-2 rounded hover:bg-blue-300`}
        >
          Report Analytics
        </button>

        <div className="mt-auto flex flex-col gap-4 mb-4">
          <button
            onClick={() => handleMenuClick("Settings")}
            className={`${activeMenu === "Settings" ? "bg-blue-500 text-white" : "bg-blue-200"} px-4 py-2 rounded hover:bg-blue-300`}
          >
            Settings
          </button>

          <button
            onClick={() => handleMenuClick("Support")}
            className={`${activeMenu === "Support" ? "bg-blue-500 text-white" : "bg-blue-200"} px-4 py-2 rounded hover:bg-blue-300`}
          >
            Support
          </button>
        </div>
      </div>
    );
  }

  // Partner sidebar
  return (
    <div className="w-48 bg-gray-100 h-screen p-4 flex flex-col gap-4 shadow">
      <div className="flex flex-col items-center gap-2">
        <div className="bg-[#3d3aa4] text-white rounded-full w-16 h-16 flex items-center justify-center mt-4 text-xl font-bold">
          {username ? username.charAt(0).toUpperCase() : "U"}
        </div>
        <div className="text-sm">Tier 3 ⭐</div>
      </div>

      <button
        onClick={() => handleMenuClick("Support")}
        className={`${activeMenu === "Support" ? "bg-blue-500 text-white" : "bg-blue-200"} px-4 py-2 rounded mt-auto hover:bg-blue-300`}
      >
        Support
      </button>

      <button
        onClick={handleLogout}
        className="bg-blue-200 px-4 py-2 rounded mb-4 hover:bg-blue-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
