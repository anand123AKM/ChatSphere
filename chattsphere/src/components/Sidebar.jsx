// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/Sidebar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserFriends,
  faPlus,
  faUsers,
  faComments,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <FontAwesomeIcon icon={faHome} className="icon" />
          <span>Home</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faUserFriends} className="icon" />
          <span>Friends</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faPlus} className="icon" />
          <span>Create</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faUsers} className="icon" />
          <span>Community</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faComments} className="icon" />
          <span>Suggestions</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faEllipsisH} className="icon" />
          <span>More</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
