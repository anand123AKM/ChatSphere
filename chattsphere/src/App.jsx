// eslint-disable-next-line no-unused-vars
import React from "react";
import Sidebar from "./components/Sidebar";
import PostCard from "./components/PostCard";
import ChatFriends from "./components/ChatFriends";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container">
        <Header />
        <main className="main-content">
          <PostCard />
        </main>
      </div>
      <ChatFriends />
    </div>
  );
}

export default App;
