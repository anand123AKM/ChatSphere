// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/PostCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faCommentDots,
  faShare,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

const CenterComponent = () => {
  return (
    <div className="center-container">
      <div className="center-header">
        <button className="latest-btn">Latest</button>
        <button className="saved-btn">Saved</button>
        <button className="add-btn">+</button>
      </div>

      <div className="profile-section">
        <img src="/images/h4.png" alt="Hacker" className="profile-icon" />
        <div>
          <h3 className="profile-name">PRO Hacker</h3>
          <p className="profile-description">
            Hi, I am going to Hack your Account...
          </p>
        </div>
        <button className="join-btn">Join</button>
      </div>

      <div className="content-image">
        <img src="/images/t.png" alt="Hacker Setup" />
      </div>

      <div className="footer-icons">
        <div className="footer-icons-left">
          <FontAwesomeIcon icon={faThumbsUp} className="footer-icon" />
          <FontAwesomeIcon icon={faCommentDots} className="footer-icon" />
          <FontAwesomeIcon icon={faShare} className="footer-icon" />
        </div>

        <div className="footer-icons-right">
          <FontAwesomeIcon icon={faBookmark} className="footer-icon" />
        </div>
      </div>
    </div>
  );
};

export default CenterComponent;
