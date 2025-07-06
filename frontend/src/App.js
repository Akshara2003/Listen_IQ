// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/LoginSignup/LoginSignup";
import AdminPage from "./components/Admin/AdminPage";
import UserLayout from "./components/layouts/UserLayout";

import DashboardPage from "./components/pages/DashboardPage";
import SalesPipelinePage from "./components/pages/SalesPipelinePage";
import ProfilePage from "./components/pages/ProfilePage";
import ContentLibraryPage from "./components/pages/ContentLibraryPage";
import SupportPage from "./components/pages/SupportPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login-admin" element={<AdminPage />} />

        <Route path="/login-user" element={<UserLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="sales-pipeline" element={<SalesPipelinePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="content-library" element={<ContentLibraryPage />} />
          <Route path="support" element={<SupportPage />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
