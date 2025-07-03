// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/LoginSignup/LoginSignup";
import AdminPage from "./components/Admin/AdminPage";
import UserPage from "./components/UserPage";

import "./index.css"; // include your styles

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login-user" element={<UserPage />} />
          <Route path="/login-admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
