// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/logo.jpeg" alt="Logo" className="logo-icon" />
        <h1 className="logo-text">chattsphere</h1>
      </div>
      <div className="header-icons">
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <FontAwesomeIcon icon={faBell} className="icon" />
        <FontAwesomeIcon icon={faUserCircle} className="icon" />
      </div>
    </header>
  );
};

export default Header;
