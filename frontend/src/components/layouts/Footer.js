// src/components/layouts/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Listen IQ. All rights reserved.
    </footer>
  );
};

export default Footer;
