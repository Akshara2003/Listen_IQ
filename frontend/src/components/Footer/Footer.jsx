import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-column company-info">
          <img src="/logo192.png" alt="Logo" className="footer-logo" />
          <p>©2025 Listen IQ Pvt Ltd, All rights reserved.</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/brands">Brands</a>
          {/* <a href="/blog">Blog</a> */}
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <a href="#">Case Studies</a>
          <a href="#">Blogs</a>
          {/* <a href="#">Valarchi Media</a>
          <a href="#">Growth Manager</a> */}
        </div>

        <div className="footer-column">
          <h4>Get in Touch</h4>
          <a href="tel:+1234567890">Phone</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms and Conditions</a>
        </div>
      </div>

      <div className="scroll-top" onClick={scrollToTop} title="Back to top">
        <FaArrowUp />
      </div>
    </footer>
  );
};

export default Footer;
