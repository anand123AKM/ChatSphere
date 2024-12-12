// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/PostCard.css";

const PostCard = () => {
  return (
    <div>
      <div className="tabs">
        <button className="tab active">Latest</button>
        <button className="tab">Saved</button>
        <button className="tab create-tab">+</button>
      </div>
      <div className="post-card">
        <div className="post-header">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="profile-pic"
          />
          <div className="post-info">
            <h3>PRO Hacker</h3>
            <p>Hi, I am going to Hack your Account ...</p>
          </div>
          <button className="join-button">Join</button>
        </div>
        <img
          src="https://via.placeholder.com/500"
          alt="Hacking Content"
          className="post-image"
        />
        <div className="post-actions">
          <button>❤️</button>
          <button>💬</button>
          <button>🔗</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
