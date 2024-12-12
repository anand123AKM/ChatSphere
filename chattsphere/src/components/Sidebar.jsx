// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="logo">chattsphere</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Friends</li>
          <li>Create</li>
          <li>Community</li>
          <li>Suggestions</li>
          <li>More</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
