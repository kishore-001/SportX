/**
 * Footer Component
 * 
 * This component renders the footer section of the SportX application.
 * It includes:
 * - An "About" section with a brief description of SportX.
 * - Links to resources such as Home and Dashboard.
 * - Legal links including Privacy Policy and Terms & Conditions.
 * - Social media icons for Facebook and Twitter.
 * - A copyright notice.
 * 
 * Styling is applied via the `footer.css` file.
 * Icons are provided by the `react-icons` library.
 */

import React from "react";
import "./footer.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-section-1">
          <div className="footer-section about">
            <h2>SportX</h2>
            <p>
              Connecting sports enthusiasts with their favorite activities and
              athletes. View sports information and track participants across
              various disciplines.
            </p>
          </div>
        </div>
        <div className="footer-top-section-2">
            <div className="footer-section links">
              <h3>RESOURCES</h3>
              <a href="/">Home</a>
              <a href="/dashboard">Dashboard</a>
            </div>
            <div className="footer-section legal">
              <h3>LEGAL</h3>
              <a href="">Privacy Policy</a>
              <a href="">Terms & Conditions</a>
            </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© 2025 SportX™. All Rights Reserved.</p>
        <div className="footer-socials">
          <a href=""><FaFacebookF /></a>
          <a href=""><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
}
