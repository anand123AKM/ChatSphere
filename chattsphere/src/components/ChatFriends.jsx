// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/ChatFriends.css";

const ChatFriends = () => {
  const friends = [
    { name: "Mark", avatar: "https://via.placeholder.com/50" },
    { name: "Bill Gates", avatar: "https://via.placeholder.com/50" },
    { name: "Elon Musk", avatar: "https://via.placeholder.com/50" },
    { name: "Kim Jong Un", avatar: "https://via.placeholder.com/50" },
  ];

  return (
    <div className="chat-friends">
      <h2>Chat</h2>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>
            <img src={friend.avatar} alt={friend.name} />
            {friend.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatFriends;
