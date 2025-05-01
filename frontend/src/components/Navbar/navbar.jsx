

/**
 * Navbar component that provides navigation links for the application.
 * Includes both desktop and mobile-friendly navigation menus.
 *
 * @component
 * @returns {JSX.Element} The rendered Navbar component.
 *
 * @example
 * <Navbar />
 *
 * Features:
 * - Displays the application title "SportX".
 * - Provides navigation links to "Home" and "Dashboard".
 * - Includes a responsive mobile menu with a toggleable sidebar.
 * - Closes the sidebar when a link is clicked or when the overlay is clicked.
 *
 * State:
 * - `isOpen` (boolean): Tracks whether the mobile sidebar is open or closed.
 *
 * Functions:
 * - `toggleSidebar`: Toggles the `isOpen` state to open or close the sidebar.
 * - `closeSidebar`: Sets the `isOpen` state to `false` to close the sidebar.
 */


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
