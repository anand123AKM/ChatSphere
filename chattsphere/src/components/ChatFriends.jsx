// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/ChatFriends.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const ChatFriends = () => {
  return (
    <div className="chat-friends-container">
      <div className="chat-section">
        <h3 className="section-title">Chat</h3>
        <FontAwesomeIcon icon={faComments} className="section-icon" />
      </div>

      <div className="friends-section">
        <h3 className="section-title">Friends</h3>
        <div className="friend-list">
          <div className="friend">
            <FontAwesomeIcon icon={faUserCircle} className="friend-icon" />
            <span>Mark</span>
          </div>
          <div className="friend">
            <FontAwesomeIcon icon={faUserCircle} className="friend-icon" />
            <span>Bill Gates</span>
          </div>
          <div className="friend">
            <FontAwesomeIcon icon={faUserCircle} className="friend-icon" />
            <span>Elon Musk</span>
          </div>
          <div className="friend">
            <FontAwesomeIcon icon={faUserCircle} className="friend-icon" />
            <span>Kim Jong Un</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatFriends;
