import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // correct import
import LoginSignup from "./components/LoginSignup/LoginSignup";
import Admin from "./pages/Admin";
import Partner from "./pages/Partner";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/login-user" element={<Partner />} />
          <Route path="/login-admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
