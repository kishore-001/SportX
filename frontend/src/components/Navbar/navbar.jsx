import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
        <div className="navbar-container-1">
          <h1 className="navbar-title-text">SportX</h1>
        </div>

        <div className="navbar-container-2 navbar-desktop-links">
          <Link to="/" className="navbar-box-text">Home</Link>
          <Link to="/dashboard" className="navbar-box-text">Dashboard</Link>
        </div>
        </div>

        <div className="navbar-mobile-menu-icon" onClick={toggleSidebar}>
          ☰
        </div>
      </nav>

      <div className={`navbar-sidebar ${isOpen ? "open" : ""}`}>
        <button className="navbar-close-btn" onClick={closeSidebar}>×</button>
        <Link to="/" className="navbar-sidebar-link" onClick={closeSidebar}>Home</Link>
        <Link to="/dashboard" className="navbar-sidebar-link" onClick={closeSidebar}>Dashboard</Link>
      </div>

      {isOpen && <div className="navbar-overlay" onClick={closeSidebar}></div>}
    </>
  );
}
