// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/Header.css";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa"; // Using React Icons

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="https://via.placeholder.com/40"
          alt="Logo"
          className="logo-icon"
        />
        <h1 className="logo-text">chattsphere</h1>
      </div>
      <div className="header-icons">
        <FaSearch className="header-icon" title="Search" />
        <FaBell className="header-icon" title="Notifications" />
        <FaUserCircle className="header-icon" title="Profile" />
      </div>
    </header>
  );
};

export default Header;
