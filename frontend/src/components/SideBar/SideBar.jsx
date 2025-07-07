import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SideBar.css';
const Sidebar = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
    window.location.reload();
  };

  if (role === 'admin') {
    return (
    
      <aside className="w-60 bg-gray-100 h-screen p-4 flex flex-col gap-10 shadow overflow-y-scroll custom-scroll">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Dashboard</button>
        <button className="bg-blue-200 px-4 py-2 rounded hover:bg-blue-300">Sales Pipeline</button>
        <button className="bg-blue-200 px-4 py-2 rounded hover:bg-blue-300">Partner Management</button>
        <button className="bg-blue-200 px-4 py-2 rounded hover:bg-blue-300">Content Manager</button>
        <button className="bg-blue-200 px-4 py-2 rounded hover:bg-blue-300">Announcements</button>
        <button className="bg-blue-200 px-4 py-2 rounded hover:bg-blue-300">Report Analytics</button>
        
        <div className="mt-auto flex flex-col gap-10 mb-4">
          <button className="bg-blue-200 px-4 py-2 rounded hover:bg-blue-300">Settings</button>
          <button className="bg-blue-200 px-4 py-2 rounded hover:bg-blue-300">Support</button>
        </div>
      </aside>
    
    );
  }

  // Partner sidebar
  return (
    <div className="w-48 bg-gray-100 h-screen p-4 flex flex-col gap-4 shadow">
      <div className="flex flex-col items-center gap-2">
        <div className="bg-gray-300 rounded-full w-16 h-16 flex items-center justify-center mt-4">👤</div>
        <div className="text-sm">Tier 3 ⭐</div>
      </div>

      <button className="bg-blue-200 px-4 py-2 rounded mt-auto hover:bg-blue-300">Support</button>
      <button
        className="bg-blue-200 px-4 py-2 rounded mb-4 hover:bg-blue-300"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
